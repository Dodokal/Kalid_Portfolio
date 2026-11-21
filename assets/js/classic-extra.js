/* Map gallery filters + zoomable map viewer for the classic view */
(function () {
  var filters = document.querySelectorAll('.mg-filter');
  filters.forEach(function (b) {
    b.addEventListener('click', function () {
      filters.forEach(function (x) { x.classList.toggle('active', x === b); });
      var k = b.getAttribute('data-kind');
      document.querySelectorAll('.mg-card').forEach(function (c) { c.classList.toggle('is-hidden', k !== 'all' && c.getAttribute('data-kind') !== k); });
    });
  });
  var lb = document.getElementById('mgLightbox'), img = document.getElementById('mgLbImg'), st = document.getElementById('mgStage');
  if (!lb) return;
  var S = { s: 1, x: 0, y: 0 }, pts = new Map();
  function apply() { img.style.transform = 'translate(' + S.x + 'px,' + S.y + 'px) scale(' + S.s + ')'; }
  function zoomAt(f, cx, cy) {
    var ns = Math.min(10, Math.max(1, S.s * f)), r = st.getBoundingClientRect();
    var px = cx - r.left - r.width / 2, py = cy - r.top - r.height / 2;
    S.x = px - (px - S.x) * (ns / S.s); S.y = py - (py - S.y) * (ns / S.s); S.s = ns;
    if (S.s === 1) { S.x = 0; S.y = 0; }
    apply();
  }
  function open(src) { img.src = src; S = { s: 1, x: 0, y: 0 }; apply(); document.getElementById('mgLbOpen').href = src; lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
  function close() { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
  document.addEventListener('click', function (e) { var z = e.target.closest('.mg-zoom'); if (z && z.getAttribute('data-src')) open(z.getAttribute('data-src')); });
  lb.querySelector('[data-z="close"]').addEventListener('click', close);
  lb.querySelector('[data-z="in"]').addEventListener('click', function () { var r = st.getBoundingClientRect(); zoomAt(1.5, r.left + r.width / 2, r.top + r.height / 2); });
  lb.querySelector('[data-z="out"]').addEventListener('click', function () { var r = st.getBoundingClientRect(); zoomAt(1 / 1.5, r.left + r.width / 2, r.top + r.height / 2); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && lb.classList.contains('open')) close(); });
  st.addEventListener('wheel', function (e) { e.preventDefault(); zoomAt(Math.exp(-e.deltaY * 0.0015), e.clientX, e.clientY); }, { passive: false });
  st.addEventListener('dblclick', function (e) { zoomAt(S.s > 2 ? 1 / S.s : 2.5, e.clientX, e.clientY); });
  st.addEventListener('pointerdown', function (e) { st.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY }); });
  st.addEventListener('pointermove', function (e) {
    if (!pts.has(e.pointerId)) return;
    var prev = pts.get(e.pointerId);
    if (pts.size === 2) {
      var v = Array.from(pts.values()), d0 = Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y);
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      v = Array.from(pts.values()); var d1 = Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y);
      if (d0 > 0) zoomAt(d1 / d0, (v[0].x + v[1].x) / 2, (v[0].y + v[1].y) / 2);
      return;
    }
    S.x += e.clientX - prev.x; S.y += e.clientY - prev.y; apply();
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
  });
  function up(e) { pts.delete(e.pointerId); }
  st.addEventListener('pointerup', up); st.addEventListener('pointercancel', up);
})();
