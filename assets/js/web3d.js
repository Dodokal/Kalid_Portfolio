/* ============================================================
   WEB3D — self-contained 3D UI engine (no libraries, no CDN)
   1) Animated 3D point-cloud Earth + starfield + orbits (bg)
   2) Interactive mouse-tilt depth on cards
   3) Subtle hero parallax
   Content is never modified — visual layer only.
   ============================================================ */
(function () {
    "use strict";

    var reduceMotion = window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var finePointer = window.matchMedia &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    var isMobile = window.innerWidth < 768;

    /* ----------------------------------------------------------
       PART 1 — 3D BACKGROUND
    ---------------------------------------------------------- */
    var canvas = document.getElementById("globe3d");
    if (canvas) {
        var ctx = canvas.getContext("2d");
        var W = 0, H = 0, cx = 0, cy = 0, DPR = 1;

        // tuning
        var EARTH_POINTS = isMobile ? 620 : 1450;
        var STAR_COUNT = isMobile ? 90 : 190;
        var R = 0;                       // globe radius (set on resize)
        var FOCAL = 0;                   // perspective focal length
        var CAM_Z = 0;                   // camera distance

        var earth = [];
        var stars = [];
        var rings = [];
        var sats = [];

        var spin = 0;                    // base rotation around Y
        var tiltX = 0.41;                // ~23.5deg axial tilt
        var mouseX = 0, mouseY = 0;      // normalized -1..1
        var curMX = 0, curMY = 0;        // eased
        var scrollNorm = 0;              // 0 at top -> grows
        var running = true;

        // palette
        var C_OCEAN = [56, 130, 170];
        var C_LAND = [0, 212, 170];
        var C_GLOW = [99, 160, 246];

        function fibSphere(n) {
            var pts = [];
            var golden = Math.PI * (3 - Math.sqrt(5));
            for (var i = 0; i < n; i++) {
                var y = 1 - (i / (n - 1)) * 2;     // 1..-1
                var r = Math.sqrt(1 - y * y);
                var th = golden * i;
                var x = Math.cos(th) * r;
                var z = Math.sin(th) * r;
                // pseudo "land vs ocean" clusters via layered noise
                var land = (Math.sin(x * 3.1 + 1.2) * Math.cos(z * 2.7) +
                            Math.sin(y * 4.3)) > 0.45;
                pts.push({ x: x, y: y, z: z, land: land,
                           tw: Math.random() * Math.PI * 2 });
            }
            return pts;
        }

        function buildRing(count, radius, tiltA, tiltB, speed, col) {
            var pts = [];
            for (var i = 0; i < count; i++) {
                var a = (i / count) * Math.PI * 2;
                pts.push({ a: a });
            }
            return { pts: pts, radius: radius, ta: tiltA, tb: tiltB,
                     speed: speed, col: col, phase: 0 };
        }

        function buildScene() {
            earth = fibSphere(EARTH_POINTS);
            stars = [];
            for (var i = 0; i < STAR_COUNT; i++) {
                stars.push({
                    x: (Math.random() * 2 - 1),
                    y: (Math.random() * 2 - 1),
                    depth: 0.3 + Math.random() * 0.7,
                    r: Math.random() * 1.3 + 0.3,
                    tw: Math.random() * Math.PI * 2
                });
            }
            rings = [
                buildRing(isMobile ? 90 : 150, 1.55, 1.15, 0.25, 0.0016, C_GLOW),
                buildRing(isMobile ? 70 : 120, 1.95, -0.6, 0.9, -0.0011, C_LAND)
            ];
            sats = [
                { ring: 0, a: 0.0, speed: 0.010, trail: [] },
                { ring: 1, a: 2.1, speed: -0.008, trail: [] },
                { ring: 0, a: 4.0, speed: 0.013, trail: [] }
            ];
        }

        function resize() {
            DPR = Math.min(window.devicePixelRatio || 1, 1.6);
            W = document.documentElement.clientWidth || window.innerWidth;
            H = window.innerHeight;
            isMobile = W < 768;
            canvas.width = Math.floor(W * DPR);
            canvas.height = Math.floor(H * DPR);
            canvas.style.width = W + "px";
            canvas.style.height = H + "px";
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
            cx = W / 2;
            cy = H * (isMobile ? 0.42 : 0.46);
            R = Math.min(W, H) * (isMobile ? 0.30 : 0.27);
            FOCAL = R * 3.0;
            CAM_Z = R * 3.4;
        }

        // rotate point (x,y,z) by spin(Y) then tiltX(X) + mouse offsets
        function rotate(p, sy, sx) {
            // Y rotation
            var cosY = Math.cos(sy), sinY = Math.sin(sy);
            var x1 = p.x * cosY + p.z * sinY;
            var z1 = -p.x * sinY + p.z * cosY;
            var y1 = p.y;
            // X rotation (tilt)
            var cosX = Math.cos(sx), sinX = Math.sin(sx);
            var y2 = y1 * cosX - z1 * sinX;
            var z2 = y1 * sinX + z1 * cosX;
            return { x: x1, y: y2, z: z2 };
        }

        function project(x, y, z, scale) {
            var zc = z * scale + CAM_Z;
            var f = FOCAL / zc;
            return { sx: cx + x * scale * f, sy: cy - y * scale * f, f: f, zc: zc };
        }

        function lerp(a, b, t) { return a + (b - a) * t; }

        function draw() {
            if (!running) return;

            // ease mouse + scroll
            curMX += (mouseX - curMX) * 0.05;
            curMY += (mouseY - curMY) * 0.05;
            if (!reduceMotion) spin += 0.0016;

            var sy = spin + curMX * 0.5;
            var sx = tiltX + curMY * 0.35;

            // scroll: globe drifts up & recedes slightly, rotates a touch more
            var sc = scrollNorm;
            var driftY = -sc * H * 0.18;
            var zoom = 1 - sc * 0.12;
            var globeR = R * zoom;

            ctx.clearRect(0, 0, W, H);

            // atmosphere glow
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            var gx = cx + curMX * 22;
            var gy = cy + driftY + curMY * 16;
            var halo = ctx.createRadialGradient(gx, gy, globeR * 0.2, gx, gy, globeR * 1.7);
            halo.addColorStop(0, "rgba(0,212,170,0.16)");
            halo.addColorStop(0.45, "rgba(59,130,246,0.10)");
            halo.addColorStop(1, "rgba(59,130,246,0)");
            ctx.fillStyle = halo;
            ctx.beginPath();
            ctx.arc(gx, gy, globeR * 1.7, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // starfield (parallax, behind)
            ctx.save();
            for (var s = 0; s < stars.length; s++) {
                var st = stars[s];
                var px = cx + st.x * W * 0.62 - curMX * 30 * st.depth;
                var py = cy + driftY * 0.4 + st.y * H * 0.62 - curMY * 22 * st.depth;
                st.tw += 0.02;
                var a = 0.25 + Math.abs(Math.sin(st.tw)) * 0.5 * st.depth;
                ctx.fillStyle = "rgba(200,220,255," + a.toFixed(3) + ")";
                ctx.fillRect(px, py, st.r, st.r);
            }
            ctx.restore();

            // orbit rings + collect satellite world positions
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            for (var ri = 0; ri < rings.length; ri++) {
                var ring = rings[ri];
                if (!reduceMotion) ring.phase += ring.speed;
                for (var k = 0; k < ring.pts.length; k++) {
                    var ang = ring.pts[k].a + ring.phase;
                    var rx = Math.cos(ang) * ring.radius;
                    var rz = Math.sin(ang) * ring.radius;
                    var ry = 0;
                    // tilt the ring plane
                    var p1 = rotate({ x: rx, y: ry, z: rz }, ring.tb, ring.ta);
                    var pr = rotate(p1, sy * 0.4, sx);
                    var pj = project(pr.x, pr.y + (driftY / globeR), pr.z, globeR);
                    var depth = (pr.z + 2) / 4;
                    var a2 = 0.10 + depth * 0.32;
                    var size = (0.5 + depth * 1.3);
                    ctx.fillStyle = "rgba(" + ring.col[0] + "," + ring.col[1] + "," +
                                    ring.col[2] + "," + a2.toFixed(3) + ")";
                    ctx.beginPath();
                    ctx.arc(pj.sx, pj.sy, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            ctx.restore();

            // EARTH point cloud (additive glow)
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            for (var i = 0; i < earth.length; i++) {
                var p = earth[i];
                var rp = rotate(p, sy, sx);
                var pj = project(rp.x, rp.y, rp.z, globeR);
                pj.sy += driftY;
                // depth 0 (far) .. 1 (near)
                var d = (rp.z + 1) / 2;
                var front = d;                 // facing camera brightness
                if (!reduceMotion) p.tw += 0.012;
                var twk = 0.85 + Math.sin(p.tw) * 0.15;

                var col = p.land ? C_LAND : C_OCEAN;
                var baseA = (p.land ? 0.55 : 0.32) * (0.25 + front * 0.95) * twk;
                if (baseA <= 0.02) continue;
                var size = (p.land ? 1.5 : 1.15) * (0.55 + front * 0.9) * pj.f * 0.7;
                if (size < 0.4) size = 0.4;

                ctx.fillStyle = "rgba(" + col[0] + "," + col[1] + "," + col[2] +
                                "," + baseA.toFixed(3) + ")";
                ctx.beginPath();
                ctx.arc(pj.sx, pj.sy, size, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();

            // satellites with fading trails
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            for (var si = 0; si < sats.length; si++) {
                var sat = sats[si];
                var rg = rings[sat.ring];
                if (!reduceMotion) sat.a += sat.speed;
                var sang = sat.a;
                var sxw = Math.cos(sang) * rg.radius;
                var szw = Math.sin(sang) * rg.radius;
                var sp1 = rotate({ x: sxw, y: 0, z: szw }, rg.tb, rg.ta);
                var sp = rotate(sp1, sy * 0.4, sx);
                var spj = project(sp.x, sp.y + (driftY / globeR), sp.z, globeR);
                sat.trail.push({ x: spj.sx, y: spj.sy });
                if (sat.trail.length > 14) sat.trail.shift();
                for (var t = 0; t < sat.trail.length; t++) {
                    var ta = (t / sat.trail.length) * 0.5;
                    ctx.fillStyle = "rgba(255,255,255," + ta.toFixed(3) + ")";
                    ctx.beginPath();
                    ctx.arc(sat.trail[t].x, sat.trail[t].y, 0.9, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.fillStyle = "rgba(255,255,255,0.95)";
                ctx.beginPath();
                ctx.arc(spj.sx, spj.sy, 2.1, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();

            requestAnimationFrame(draw);
        }

        // input
        if (finePointer && !reduceMotion) {
            window.addEventListener("mousemove", function (e) {
                mouseX = (e.clientX / window.innerWidth) * 2 - 1;
                mouseY = (e.clientY / window.innerHeight) * 2 - 1;
            }, { passive: true });
        }
        window.addEventListener("scroll", function () {
            var max = (document.body.scrollHeight - window.innerHeight) || 1;
            scrollNorm = Math.min(window.scrollY / max, 1);
        }, { passive: true });

        document.addEventListener("visibilitychange", function () {
            running = !document.hidden;
            if (running) requestAnimationFrame(draw);
        });

        var rt;
        window.addEventListener("resize", function () {
            clearTimeout(rt);
            rt = setTimeout(function () { resize(); }, 150);
        });

        resize();
        buildScene();
        // reveal + start
        requestAnimationFrame(function () {
            canvas.classList.add("ready");
            running = true;
            draw();
        });
    }

    /* ----------------------------------------------------------
       PART 2 — INTERACTIVE CARD TILT
    ---------------------------------------------------------- */
    if (finePointer && !reduceMotion) {
        var sel = ".course-card, .ss-card, .pub-card, .exp-card, .cert-card, " +
                  ".cde-highlight, .stat-item, .skill-category, .contact-card, " +
                  ".conf-item, .floating-card, .timeline-content";
        var cards = document.querySelectorAll(sel);
        var MAX = 9; // deg

        cards.forEach(function (card) {
            card.classList.add("tilt-3d");
            var raf = null, tx = 0, ty = 0;

            function apply() {
                card.style.transform =
                    "perspective(900px) rotateX(" + ty.toFixed(2) + "deg) rotateY(" +
                    tx.toFixed(2) + "deg) translateZ(14px)";
                raf = null;
            }
            card.addEventListener("mousemove", function (e) {
                var r = card.getBoundingClientRect();
                var px = (e.clientX - r.left) / r.width;   // 0..1
                var py = (e.clientY - r.top) / r.height;
                tx = (px - 0.5) * 2 * MAX;
                ty = -(py - 0.5) * 2 * MAX;
                card.style.setProperty("--mx", (px * 100) + "%");
                card.style.setProperty("--my", (py * 100) + "%");
                if (!raf) raf = requestAnimationFrame(apply);
            });
            card.addEventListener("mouseenter", function () {
                card.classList.add("tilting");
                card.style.transition = "transform 0.08s ease-out, box-shadow 0.3s ease";
                card.style.boxShadow = "0 24px 55px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,212,170,0.18)";
            });
            card.addEventListener("mouseleave", function () {
                card.classList.remove("tilting");
                card.style.transition = "transform 0.55s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease";
                card.style.transform = "";
                card.style.boxShadow = "";
            });
        });
    }

    /* ----------------------------------------------------------
       PART 3 — HERO PARALLAX
    ---------------------------------------------------------- */
    if (finePointer && !reduceMotion) {
        var heroImg = document.querySelector(".hero-image");
        var heroContent = document.querySelector(".hero-content");
        var floats = document.querySelectorAll(".floating-card");
        var hero = document.getElementById("home");
        if (hero && (heroImg || heroContent)) {
            hero.addEventListener("mousemove", function (e) {
                var nx = (e.clientX / window.innerWidth) - 0.5;
                var ny = (e.clientY / window.innerHeight) - 0.5;
                if (heroImg) {
                    heroImg.style.transform =
                        "translate3d(" + (nx * 26) + "px," + (ny * 20) + "px,0) " +
                        "rotateY(" + (nx * 6) + "deg) rotateX(" + (-ny * 6) + "deg)";
                }
                if (heroContent) {
                    heroContent.style.transform =
                        "translate3d(" + (nx * -12) + "px," + (ny * -8) + "px,0)";
                }
                floats.forEach(function (f, i) {
                    var depth = (i + 1) * 10;
                    f.style.transform =
                        "translate3d(" + (nx * depth) + "px," + (ny * depth) + "px,0)";
                });
            });
            hero.addEventListener("mouseleave", function () {
                if (heroImg) heroImg.style.transform = "";
                if (heroContent) heroContent.style.transform = "";
                floats.forEach(function (f) { f.style.transform = ""; });
            });
        }
    }
})();
