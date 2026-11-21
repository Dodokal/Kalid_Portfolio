(()=>{var kc=Object.defineProperty;var Oc=(n,e)=>{for(var t in e)kc(n,t,{get:e[t],enumerable:!0})};var rs=0,ta=1,cs=2;var N0=1,os=2,A3=3,z4=0,R1=1,Q1=2,H4=0,E3=1,Oe=2,ia=3,na=4,ls=5;var G4=100,fs=101,hs=102,us=103,ds=104,ps=200,ms=201,gs=202,Ms=203,aa=204,sa=205,vs=206,xs=207,Ss=208,_s=209,ys=210,zs=211,Ls=212,Cs=213,bs=214,Pt=0,It=1,Dt=2,d3=3,Ft=4,Ut=5,Bt=6,kt=7,ra=0,ws=1,Ts=2,He=0,ca=1,oa=2,la=3,R0=4,fa=5,ha=6,ua=7;var da=300,V4=301,N3=302,Mi=303,vi=304,p3=1e3,Pe=1001,Ot=1002,v1=1003,As=1004;var P0=1005;var $1=1006,xi=1007;var n4=1008;var F1=1009,pa=1010,ma=1011,R3=1012,Si=1013,Ce=1014,be=1015,we=1016,_i=1017,yi=1018,W4=1020,ga=35902,Ma=35899,va=1021,xa=1022,Te=1023,je=1026,a4=1027,Sa=1028,zi=1029,L4=1030,Li=1031;var Ci=1033,I0=33776,D0=33777,F0=33778,U0=33779,bi=35840,wi=35841,Ti=35842,Ai=35843,Ei=36196,Ni=37492,Ri=37496,Pi=37488,Ii=37489,B0=37490,Di=37491,Fi=37808,Ui=37809,Bi=37810,ki=37811,Oi=37812,Hi=37813,Gi=37814,Vi=37815,Wi=37816,qi=37817,Xi=37818,Yi=37819,$i=37820,Zi=37821,Ji=36492,Ki=36494,Qi=36495,ji=36283,en=36284,k0=36285,tn=36286;var i0=2300,Ht=2301,Et=2302,qn=2303,Xn=2400,Yn=2401,$n=2402;var Es=3200;var nn=0,Ns=1,s4="",d1="srgb",n0="srgb-linear",a0="linear",K2="srgb";var Nt=7680;var Rs=519,Ps=512,Is=513,Ds=514,_a=515,Fs=516,Us=517,ya=518,za=519,La=35044;var Ca="300 es",pe=2e3,m3=2001;function Hc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gc(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function g3(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bs(){let n=g3("canvas");return n.style.display="block",n}var S6={},M3=null;function s0(...n){let e="THREE."+n.shift();M3?M3("log",e,...n):console.log(e,...n)}function ks(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function w2(...n){n=ks(n);let e="THREE."+n.shift();if(M3)M3("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function N2(...n){n=ks(n);let e="THREE."+n.shift();if(M3)M3("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function K3(...n){let e=n.join(" ");e in S6||(S6[e]=!0,w2(...n))}function Os(n,e,t){return new Promise(function(i,a){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Hs={[Pt]:Pt,[Dt]:Bt,[Ft]:Ft,[d3]:Ut,[It]:It,[Bt]:Dt,[kt]:kt,[Ut]:d3},Ie=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let a=i[e];if(a!==void 0){let s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}},k1=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_6=1234567,Q3=Math.PI/180,v3=180/Math.PI;function C4(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(k1[n&255]+k1[n>>8&255]+k1[n>>16&255]+k1[n>>24&255]+"-"+k1[e&255]+k1[e>>8&255]+"-"+k1[e>>16&15|64]+k1[e>>24&255]+"-"+k1[t&63|128]+k1[t>>8&255]+"-"+k1[t>>16&255]+k1[t>>24&255]+k1[i&255]+k1[i>>8&255]+k1[i>>16&255]+k1[i>>24&255]).toLowerCase()}function G2(n,e,t){return Math.max(e,Math.min(t,n))}function ba(n,e){return(n%e+e)%e}function Vc(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function Wc(n,e,t){return n!==e?(t-n)/(e-n):0}function j3(n,e,t){return(1-t)*n+t*e}function qc(n,e,t,i){return j3(n,e,1-Math.exp(-t*i))}function Xc(n,e=1){return e-Math.abs(ba(n,e*2)-e)}function Yc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $c(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Zc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Jc(n,e){return n+Math.random()*(e-n)}function Kc(n){return n*(.5-Math.random())}function Qc(n){n!==void 0&&(_6=n);let e=_6+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jc(n){return n*Q3}function e8(n){return n*v3}function t8(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function i8(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function n8(n,e,t,i,a){let s=Math.cos,r=Math.sin,c=s(t/2),o=r(t/2),l=s((e+i)/2),f=r((e+i)/2),d=s((e-i)/2),h=r((e-i)/2),u=s((i-e)/2),g=r((i-e)/2);switch(a){case"XYX":n.set(c*f,o*d,o*h,c*l);break;case"YZY":n.set(o*h,c*f,o*d,c*l);break;case"ZXZ":n.set(o*d,o*h,c*f,c*l);break;case"XZX":n.set(c*f,o*g,o*u,c*l);break;case"YXY":n.set(o*u,c*f,o*g,c*l);break;case"ZYZ":n.set(o*g,o*u,c*f,c*l);break;default:w2("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function an(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ta(n,e){if(e.constructor===Float32Array)return n;let t=an(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Aa(n,e){if(e.constructor===Float32Array)return n;let t=an(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var ce={DEG2RAD:Q3,RAD2DEG:v3,generateUUID:C4,clamp:G2,euclideanModulo:ba,mapLinear:Vc,inverseLerp:Wc,lerp:j3,damp:qc,pingpong:Xc,smoothstep:Yc,smootherstep:$c,randInt:Zc,randFloat:Jc,randFloatSpread:Kc,seededRandom:Qc,degToRad:jc,radToDeg:e8,isPowerOfTwo:t8,ceilPowerOfTwo:i8,floorPowerOfTwo:wa,setQuaternionFromProperEuler:n8,normalize:Aa,denormalize:Ta},Da=class Da{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=G2(this.x,e.x,t.x),this.y=G2(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=G2(this.x,e,t),this.y=G2(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(G2(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(G2(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Da.prototype.isVector2=!0;var M2=Da,De=class{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,r,c){let o=i[a+0],l=i[a+1],f=i[a+2],d=i[a+3],h=s[r+0],u=s[r+1],g=s[r+2],S=s[r+3];if(d!==S||o!==h||l!==u||f!==g){let m=o*h+l*u+f*g+d*S;m<0&&(h=-h,u=-u,g=-g,S=-S,m=-m);let p=1-c;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);p=Math.sin(p*_)/b,c=Math.sin(c*_)/b,o=o*p+h*c,l=l*p+u*c,f=f*p+g*c,d=d*p+S*c}else{o=o*p+h*c,l=l*p+u*c,f=f*p+g*c,d=d*p+S*c;let _=1/Math.sqrt(o*o+l*l+f*f+d*d);o*=_,l*=_,f*=_,d*=_}}e[t]=o,e[t+1]=l,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,a,s,r){let c=i[a],o=i[a+1],l=i[a+2],f=i[a+3],d=s[r],h=s[r+1],u=s[r+2],g=s[r+3];return e[t]=c*g+f*d+o*u-l*h,e[t+1]=o*g+f*h+l*d-c*u,e[t+2]=l*g+f*u+c*h-o*d,e[t+3]=f*g-c*d-o*h-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,a=e._y,s=e._z,r=e._order,c=Math.cos,o=Math.sin,l=c(i/2),f=c(a/2),d=c(s/2),h=o(i/2),u=o(a/2),g=o(s/2);switch(r){case"XYZ":this._x=h*f*d+l*u*g,this._y=l*u*d-h*f*g,this._z=l*f*g+h*u*d,this._w=l*f*d-h*u*g;break;case"YXZ":this._x=h*f*d+l*u*g,this._y=l*u*d-h*f*g,this._z=l*f*g-h*u*d,this._w=l*f*d+h*u*g;break;case"ZXY":this._x=h*f*d-l*u*g,this._y=l*u*d+h*f*g,this._z=l*f*g+h*u*d,this._w=l*f*d-h*u*g;break;case"ZYX":this._x=h*f*d-l*u*g,this._y=l*u*d+h*f*g,this._z=l*f*g-h*u*d,this._w=l*f*d+h*u*g;break;case"YZX":this._x=h*f*d+l*u*g,this._y=l*u*d+h*f*g,this._z=l*f*g-h*u*d,this._w=l*f*d-h*u*g;break;case"XZY":this._x=h*f*d-l*u*g,this._y=l*u*d-h*f*g,this._z=l*f*g+h*u*d,this._w=l*f*d+h*u*g;break;default:w2("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],a=t[4],s=t[8],r=t[1],c=t[5],o=t[9],l=t[2],f=t[6],d=t[10],h=i+c+d;if(h>0){let u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(f-o)*u,this._y=(s-l)*u,this._z=(r-a)*u}else if(i>c&&i>d){let u=2*Math.sqrt(1+i-c-d);this._w=(f-o)/u,this._x=.25*u,this._y=(a+r)/u,this._z=(s+l)/u}else if(c>d){let u=2*Math.sqrt(1+c-i-d);this._w=(s-l)/u,this._x=(a+r)/u,this._y=.25*u,this._z=(o+f)/u}else{let u=2*Math.sqrt(1+d-i-c);this._w=(r-a)/u,this._x=(s+l)/u,this._y=(o+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(G2(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,a=e._y,s=e._z,r=e._w,c=t._x,o=t._y,l=t._z,f=t._w;return this._x=i*f+r*c+a*l-s*o,this._y=a*f+r*o+s*c-i*l,this._z=s*f+r*l+i*o-a*c,this._w=r*f-i*c-a*o-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,s=e._z,r=e._w,c=this.dot(e);c<0&&(i=-i,a=-a,s=-s,r=-r,c=-c);let o=1-t;if(c<.9995){let l=Math.acos(c),f=Math.sin(l);o=Math.sin(o*l)/f,t=Math.sin(t*l)/f,this._x=this._x*o+i*t,this._y=this._y*o+a*t,this._z=this._z*o+s*t,this._w=this._w*o+r*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+a*t,this._z=this._z*o+s*t,this._w=this._w*o+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fa=class Fa{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(y6.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(y6.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,a=this.z,s=e.x,r=e.y,c=e.z,o=e.w,l=2*(r*a-c*i),f=2*(c*t-s*a),d=2*(s*i-r*t);return this.x=t+o*l+r*d-c*f,this.y=i+o*f+c*l-s*d,this.z=a+o*d+s*f-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=G2(this.x,e.x,t.x),this.y=G2(this.y,e.y,t.y),this.z=G2(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=G2(this.x,e,t),this.y=G2(this.y,e,t),this.z=G2(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(G2(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,a=e.y,s=e.z,r=t.x,c=t.y,o=t.z;return this.x=a*o-s*c,this.y=s*r-i*o,this.z=i*c-a*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sn.copy(this).projectOnVector(e),this.sub(Sn)}reflect(e){return this.sub(Sn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(G2(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fa.prototype.isVector3=!0;var A=Fa,Sn=new A,y6=new De,Ua=class Ua{constructor(e,t,i,a,s,r,c,o,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,c,o,l)}set(e,t,i,a,s,r,c,o,l){let f=this.elements;return f[0]=e,f[1]=a,f[2]=c,f[3]=t,f[4]=s,f[5]=o,f[6]=i,f[7]=r,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,s=this.elements,r=i[0],c=i[3],o=i[6],l=i[1],f=i[4],d=i[7],h=i[2],u=i[5],g=i[8],S=a[0],m=a[3],p=a[6],_=a[1],b=a[4],z=a[7],w=a[2],C=a[5],M=a[8];return s[0]=r*S+c*_+o*w,s[3]=r*m+c*b+o*C,s[6]=r*p+c*z+o*M,s[1]=l*S+f*_+d*w,s[4]=l*m+f*b+d*C,s[7]=l*p+f*z+d*M,s[2]=h*S+u*_+g*w,s[5]=h*m+u*b+g*C,s[8]=h*p+u*z+g*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],c=e[5],o=e[6],l=e[7],f=e[8];return t*r*f-t*c*l-i*s*f+i*c*o+a*s*l-a*r*o}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],c=e[5],o=e[6],l=e[7],f=e[8],d=f*r-c*l,h=c*o-f*s,u=l*s-r*o,g=t*d+i*h+a*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return e[0]=d*S,e[1]=(a*l-f*i)*S,e[2]=(c*i-a*r)*S,e[3]=h*S,e[4]=(f*t-a*o)*S,e[5]=(a*s-c*t)*S,e[6]=u*S,e[7]=(i*o-l*t)*S,e[8]=(r*t-i*s)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,r,c){let o=Math.cos(s),l=Math.sin(s);return this.set(i*o,i*l,-i*(o*r+l*c)+r+e,-a*l,a*o,-a*(-l*r+o*c)+c+t,0,0,1),this}scale(e,t){return K3("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_n.makeScale(e,t)),this}rotate(e){return K3("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_n.makeRotation(-e)),this}translate(e,t){return K3("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_n.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ua.prototype.isMatrix3=!0;var R2=Ua,_n=new R2,z6=new R2().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L6=new R2().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a8(){let n={enabled:!0,workingColorSpace:n0,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===K2&&(a.r=Qe(a.r),a.g=Qe(a.g),a.b=Qe(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===K2&&(a.r=u3(a.r),a.g=u3(a.g),a.b=u3(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===s4?a0:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[n0]:{primaries:e,whitePoint:i,transfer:a0,toXYZ:z6,fromXYZ:L6,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:d1},outputColorSpaceConfig:{drawingBufferColorSpace:d1}},[d1]:{primaries:e,whitePoint:i,transfer:K2,toXYZ:z6,fromXYZ:L6,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:d1}}}),n}var X2=a8();function Qe(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function u3(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var $4,Gt=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$4===void 0&&($4=g3("canvas")),$4.width=e.width,$4.height=e.height;let a=$4.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=$4}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=g3("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Qe(s[r]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qe(t[i]/255)*255):t[i]=Qe(t[i]);return{data:t,width:e.width,height:e.height}}else return w2("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},s8=0,D4=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:s8++}),this.uuid=C4(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,c=a.length;r<c;r++)a[r].isDataTexture?s.push(yn(a[r].image)):s.push(yn(a[r]))}else s=yn(a);i.url=s}return t||(e.images[this.uuid]=i),i}};function yn(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Gt.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(w2("Texture: Unable to serialize Texture."),{})}var r8=0,zn=new A,y1=class n extends Ie{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Pe,a=Pe,s=$1,r=n4,c=Te,o=F1,l=n.DEFAULT_ANISOTROPY,f=s4){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r8++}),this.uuid=C4(),this.name="",this.source=new D4(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=c,this.internalFormat=null,this.type=o,this.offset=new M2(0,0),this.repeat=new M2(1,1),this.center=new M2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new R2,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zn).x}get height(){return this.source.getSize(zn).y}get depth(){return this.source.getSize(zn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){w2(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){w2(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==da)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case p3:e.x=e.x-Math.floor(e.x);break;case Pe:e.x=e.x<0?0:1;break;case Ot:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case p3:e.y=e.y-Math.floor(e.y);break;case Pe:e.y=e.y<0?0:1;break;case Ot:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};y1.DEFAULT_IMAGE=null;y1.DEFAULT_MAPPING=da;y1.DEFAULT_ANISOTROPY=1;var Ba=class Ba{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s,o=e.elements,l=o[0],f=o[4],d=o[8],h=o[1],u=o[5],g=o[9],S=o[2],m=o[6],p=o[10];if(Math.abs(f-h)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,z=(u+1)/2,w=(p+1)/2,C=(f+h)/4,M=(d+S)/4,y=(g+m)/4;return b>z&&b>w?b<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(b),a=C/i,s=M/i):z>w?z<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(z),i=C/a,s=y/a):w<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(w),i=M/s,a=y/s),this.set(i,a,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-S)/_,this.z=(h-f)/_,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=G2(this.x,e.x,t.x),this.y=G2(this.y,e.y,t.y),this.z=G2(this.z,e.z,t.z),this.w=G2(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=G2(this.x,e,t),this.y=G2(this.y,e,t),this.z=G2(this.z,e,t),this.w=G2(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(G2(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ba.prototype.isVector4=!0;var r1=Ba,Vt=class extends Ie{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$1,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new r1(0,0,e,t),this.scissorTest=!1,this.viewport=new r1(0,0,e,t),this.textures=[];let a=i.count;for(let s=0;s<a;s++)this.textures[s]=new y1({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$1,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let a=Object.assign({},e.textures[t].image);this.textures[t].source=new D4(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},se=class extends Vt{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},r0=class extends y1{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=v1,this.minFilter=v1,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wt=class extends y1{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=v1,this.minFilter=v1,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var gi=class gi{constructor(e,t,i,a,s,r,c,o,l,f,d,h,u,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,r,c,o,l,f,d,h,u,g,S,m)}set(e,t,i,a,s,r,c,o,l,f,d,h,u,g,S,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=a,p[1]=s,p[5]=r,p[9]=c,p[13]=o,p[2]=l,p[6]=f,p[10]=d,p[14]=h,p[3]=u,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gi().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,a=1/Z4.setFromMatrixColumn(e,0).length(),s=1/Z4.setFromMatrixColumn(e,1).length(),r=1/Z4.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),c=Math.sin(i),o=Math.cos(a),l=Math.sin(a),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=r*f,u=r*d,g=c*f,S=c*d;t[0]=o*f,t[4]=-o*d,t[8]=l,t[1]=u+g*l,t[5]=h-S*l,t[9]=-c*o,t[2]=S-h*l,t[6]=g+u*l,t[10]=r*o}else if(e.order==="YXZ"){let h=o*f,u=o*d,g=l*f,S=l*d;t[0]=h+S*c,t[4]=g*c-u,t[8]=r*l,t[1]=r*d,t[5]=r*f,t[9]=-c,t[2]=u*c-g,t[6]=S+h*c,t[10]=r*o}else if(e.order==="ZXY"){let h=o*f,u=o*d,g=l*f,S=l*d;t[0]=h-S*c,t[4]=-r*d,t[8]=g+u*c,t[1]=u+g*c,t[5]=r*f,t[9]=S-h*c,t[2]=-r*l,t[6]=c,t[10]=r*o}else if(e.order==="ZYX"){let h=r*f,u=r*d,g=c*f,S=c*d;t[0]=o*f,t[4]=g*l-u,t[8]=h*l+S,t[1]=o*d,t[5]=S*l+h,t[9]=u*l-g,t[2]=-l,t[6]=c*o,t[10]=r*o}else if(e.order==="YZX"){let h=r*o,u=r*l,g=c*o,S=c*l;t[0]=o*f,t[4]=S-h*d,t[8]=g*d+u,t[1]=d,t[5]=r*f,t[9]=-c*f,t[2]=-l*f,t[6]=u*d+g,t[10]=h-S*d}else if(e.order==="XZY"){let h=r*o,u=r*l,g=c*o,S=c*l;t[0]=o*f,t[4]=-d,t[8]=l*f,t[1]=h*d+S,t[5]=r*f,t[9]=u*d-g,t[2]=g*d-u,t[6]=c*f,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c8,e,o8)}lookAt(e,t,i){let a=this.elements;return ne.subVectors(e,t),ne.lengthSq()===0&&(ne.z=1),ne.normalize(),h4.crossVectors(i,ne),h4.lengthSq()===0&&(Math.abs(i.z)===1?ne.x+=1e-4:ne.z+=1e-4,ne.normalize(),h4.crossVectors(i,ne)),h4.normalize(),nt.crossVectors(ne,h4),a[0]=h4.x,a[4]=nt.x,a[8]=ne.x,a[1]=h4.y,a[5]=nt.y,a[9]=ne.y,a[2]=h4.z,a[6]=nt.z,a[10]=ne.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,s=this.elements,r=i[0],c=i[4],o=i[8],l=i[12],f=i[1],d=i[5],h=i[9],u=i[13],g=i[2],S=i[6],m=i[10],p=i[14],_=i[3],b=i[7],z=i[11],w=i[15],C=a[0],M=a[4],y=a[8],P=a[12],N=a[1],I=a[5],U=a[9],V=a[13],E=a[2],G=a[6],W=a[10],O=a[14],e2=a[3],X=a[7],Q=a[11],j=a[15];return s[0]=r*C+c*N+o*E+l*e2,s[4]=r*M+c*I+o*G+l*X,s[8]=r*y+c*U+o*W+l*Q,s[12]=r*P+c*V+o*O+l*j,s[1]=f*C+d*N+h*E+u*e2,s[5]=f*M+d*I+h*G+u*X,s[9]=f*y+d*U+h*W+u*Q,s[13]=f*P+d*V+h*O+u*j,s[2]=g*C+S*N+m*E+p*e2,s[6]=g*M+S*I+m*G+p*X,s[10]=g*y+S*U+m*W+p*Q,s[14]=g*P+S*V+m*O+p*j,s[3]=_*C+b*N+z*E+w*e2,s[7]=_*M+b*I+z*G+w*X,s[11]=_*y+b*U+z*W+w*Q,s[15]=_*P+b*V+z*O+w*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],r=e[1],c=e[5],o=e[9],l=e[13],f=e[2],d=e[6],h=e[10],u=e[14],g=e[3],S=e[7],m=e[11],p=e[15],_=o*u-l*h,b=c*u-l*d,z=c*h-o*d,w=r*u-l*f,C=r*h-o*f,M=r*d-c*f;return t*(S*_-m*b+p*z)-i*(g*_-m*w+p*C)+a*(g*b-S*w+p*M)-s*(g*z-S*C+m*M)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],a=e[8],s=e[1],r=e[5],c=e[9],o=e[2],l=e[6],f=e[10];return t*(r*f-c*l)-i*(s*f-c*o)+a*(s*l-r*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],r=e[4],c=e[5],o=e[6],l=e[7],f=e[8],d=e[9],h=e[10],u=e[11],g=e[12],S=e[13],m=e[14],p=e[15],_=t*c-i*r,b=t*o-a*r,z=t*l-s*r,w=i*o-a*c,C=i*l-s*c,M=a*l-s*o,y=f*S-d*g,P=f*m-h*g,N=f*p-u*g,I=d*m-h*S,U=d*p-u*S,V=h*p-u*m,E=_*V-b*U+z*I+w*N-C*P+M*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/E;return e[0]=(c*V-o*U+l*I)*G,e[1]=(a*U-i*V-s*I)*G,e[2]=(S*M-m*C+p*w)*G,e[3]=(h*C-d*M-u*w)*G,e[4]=(o*N-r*V-l*P)*G,e[5]=(t*V-a*N+s*P)*G,e[6]=(m*z-g*M-p*b)*G,e[7]=(f*M-h*z+u*b)*G,e[8]=(r*U-c*N+l*y)*G,e[9]=(i*N-t*U-s*y)*G,e[10]=(g*C-S*z+p*_)*G,e[11]=(d*z-f*C-u*_)*G,e[12]=(c*P-r*I-o*y)*G,e[13]=(t*I-i*P+a*y)*G,e[14]=(S*b-g*w-m*_)*G,e[15]=(f*w-d*b+h*_)*G,this}scale(e){let t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),a=Math.sin(t),s=1-i,r=e.x,c=e.y,o=e.z,l=s*r,f=s*c;return this.set(l*r+i,l*c-a*o,l*o+a*c,0,l*c+a*o,f*c+i,f*o-a*r,0,l*o-a*c,f*o+a*r,s*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){let a=this.elements,s=t._x,r=t._y,c=t._z,o=t._w,l=s+s,f=r+r,d=c+c,h=s*l,u=s*f,g=s*d,S=r*f,m=r*d,p=c*d,_=o*l,b=o*f,z=o*d,w=i.x,C=i.y,M=i.z;return a[0]=(1-(S+p))*w,a[1]=(u+z)*w,a[2]=(g-b)*w,a[3]=0,a[4]=(u-z)*C,a[5]=(1-(h+p))*C,a[6]=(m+_)*C,a[7]=0,a[8]=(g+b)*M,a[9]=(m-_)*M,a[10]=(1-(h+S))*M,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){let a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let r=Z4.set(a[0],a[1],a[2]).length(),c=Z4.set(a[4],a[5],a[6]).length(),o=Z4.set(a[8],a[9],a[10]).length();s<0&&(r=-r),xe.copy(this);let l=1/r,f=1/c,d=1/o;return xe.elements[0]*=l,xe.elements[1]*=l,xe.elements[2]*=l,xe.elements[4]*=f,xe.elements[5]*=f,xe.elements[6]*=f,xe.elements[8]*=d,xe.elements[9]*=d,xe.elements[10]*=d,t.setFromRotationMatrix(xe),i.x=r,i.y=c,i.z=o,this}makePerspective(e,t,i,a,s,r,c=pe,o=!1){let l=this.elements,f=2*s/(t-e),d=2*s/(i-a),h=(t+e)/(t-e),u=(i+a)/(i-a),g,S;if(o)g=s/(r-s),S=r*s/(r-s);else if(c===pe)g=-(r+s)/(r-s),S=-2*r*s/(r-s);else if(c===m3)g=-r/(r-s),S=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,s,r,c=pe,o=!1){let l=this.elements,f=2/(t-e),d=2/(i-a),h=-(t+e)/(t-e),u=-(i+a)/(i-a),g,S;if(o)g=1/(r-s),S=r/(r-s);else if(c===pe)g=-2/(r-s),S=-(r+s)/(r-s);else if(c===m3)g=-1/(r-s),S=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};gi.prototype.isMatrix4=!0;var e1=gi,Z4=new A,xe=new e1,c8=new A(0,0,0),o8=new A(1,1,1),h4=new A,nt=new A,ne=new A,C6=new e1,b6=new De,e4=class n{constructor(e=0,t=0,i=0,a=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let a=e.elements,s=a[0],r=a[4],c=a[8],o=a[1],l=a[5],f=a[9],d=a[2],h=a[6],u=a[10];switch(t){case"XYZ":this._y=Math.asin(G2(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-G2(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,u),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(G2(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-G2(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(G2(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(c,u));break;case"XZY":this._z=Math.asin(-G2(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,u),this._y=0);break;default:w2("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return C6.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C6,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return b6.setFromEuler(this),this.setFromQuaternion(b6,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};e4.DEFAULT_ORDER="XYZ";var x3=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},l8=0,w6=new A,J4=new De,Xe=new e1,at=new A,V3=new A,f8=new A,h8=new De,T6=new A(1,0,0),A6=new A(0,1,0),E6=new A(0,0,1),N6={type:"added"},u8={type:"removed"},K4={type:"childadded",child:null},Ln={type:"childremoved",child:null},N1=class n extends Ie{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l8++}),this.uuid=C4(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new e4,i=new De,a=new A(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new e1},normalMatrix:{value:new R2}}),this.matrix=new e1,this.matrixWorld=new e1,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x3,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return J4.setFromAxisAngle(e,t),this.quaternion.multiply(J4),this}rotateOnWorldAxis(e,t){return J4.setFromAxisAngle(e,t),this.quaternion.premultiply(J4),this}rotateX(e){return this.rotateOnAxis(T6,e)}rotateY(e){return this.rotateOnAxis(A6,e)}rotateZ(e){return this.rotateOnAxis(E6,e)}translateOnAxis(e,t){return w6.copy(e).applyQuaternion(this.quaternion),this.position.add(w6.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(T6,e)}translateY(e){return this.translateOnAxis(A6,e)}translateZ(e){return this.translateOnAxis(E6,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xe.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?at.copy(e):at.set(e,t,i);let a=this.parent;this.updateWorldMatrix(!0,!1),V3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xe.lookAt(V3,at,this.up):Xe.lookAt(at,V3,this.up),this.quaternion.setFromRotationMatrix(Xe),a&&(Xe.extractRotation(a.matrixWorld),J4.setFromRotationMatrix(Xe),this.quaternion.premultiply(J4.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(N2("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(N6),K4.child=e,this.dispatchEvent(K4),K4.child=null):N2("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u8),Ln.child=e,this.dispatchEvent(Ln),Ln.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xe.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xe.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xe),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(N6),K4.child=e,this.dispatchEvent(K4),K4.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(V3,e,f8),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(V3,h8,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,a=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*a,s[13]+=i-s[1]*t-s[5]*i-s[9]*a,s[14]+=a-s[2]*t-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let r=0,c=s.length;r<c;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(c=>({...c})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(c,o){return c[o.uuid]===void 0&&(c[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let o=c.shapes;if(Array.isArray(o))for(let l=0,f=o.length;l<f;l++){let d=o[l];s(e.shapes,d)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let o=0,l=this.material.length;o<l;o++)c.push(s(e.materials,this.material[o]));a.material=c}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){let o=this.animations[c];a.animations.push(s(e.animations,o))}}if(t){let c=r(e.geometries),o=r(e.materials),l=r(e.textures),f=r(e.images),d=r(e.shapes),h=r(e.skeletons),u=r(e.animations),g=r(e.nodes);c.length>0&&(i.geometries=c),o.length>0&&(i.materials=o),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=a,i;function r(c){let o=[];for(let l in c){let f=c[l];delete f.metadata,o.push(f)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};N1.DEFAULT_UP=new A(0,1,0);N1.DEFAULT_MATRIX_AUTO_UPDATE=!0;N1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var X1=class extends N1{constructor(){super(),this.isGroup=!0,this.type="Group"}},d8={type:"move"},S3=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new X1,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new X1,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new X1,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,r=null,c=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,i),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=f.position.distanceTo(d.position),u=.02,g=.005;l.inputState.pinching&&h>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(d8)))}return c!==null&&(c.visible=a!==null),o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new X1;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Gs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},u4={h:0,s:0,l:0},st={h:0,s:0,l:0};function Cn(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var I2=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=d1){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,X2.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=X2.workingColorSpace){return this.r=e,this.g=t,this.b=i,X2.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=X2.workingColorSpace){if(e=ba(e,1),t=G2(t,0,1),i=G2(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=Cn(r,s,e+1/3),this.g=Cn(r,s,e),this.b=Cn(r,s,e-1/3)}return X2.colorSpaceToWorking(this,a),this}setStyle(e,t=d1){function i(s){s!==void 0&&parseFloat(s)<1&&w2("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=a[1],c=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:w2("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);w2("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=d1){let i=Gs[e.toLowerCase()];return i!==void 0?this.setHex(i,t):w2("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qe(e.r),this.g=Qe(e.g),this.b=Qe(e.b),this}copyLinearToSRGB(e){return this.r=u3(e.r),this.g=u3(e.g),this.b=u3(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=d1){return X2.workingToColorSpace(O1.copy(this),e),Math.round(G2(O1.r*255,0,255))*65536+Math.round(G2(O1.g*255,0,255))*256+Math.round(G2(O1.b*255,0,255))}getHexString(e=d1){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=X2.workingColorSpace){X2.workingToColorSpace(O1.copy(this),t);let i=O1.r,a=O1.g,s=O1.b,r=Math.max(i,a,s),c=Math.min(i,a,s),o,l,f=(c+r)/2;if(c===r)o=0,l=0;else{let d=r-c;switch(l=f<=.5?d/(r+c):d/(2-r-c),r){case i:o=(a-s)/d+(a<s?6:0);break;case a:o=(s-i)/d+2;break;case s:o=(i-a)/d+4;break}o/=6}return e.h=o,e.s=l,e.l=f,e}getRGB(e,t=X2.workingColorSpace){return X2.workingToColorSpace(O1.copy(this),t),e.r=O1.r,e.g=O1.g,e.b=O1.b,e}getStyle(e=d1){X2.workingToColorSpace(O1.copy(this),e);let t=O1.r,i=O1.g,a=O1.b;return e!==d1?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(u4),this.setHSL(u4.h+e,u4.s+t,u4.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(u4),e.getHSL(st);let i=j3(u4.h,st.h,t),a=j3(u4.s,st.s,t),s=j3(u4.l,st.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},O1=new I2;I2.NAMES=Gs;var c0=class extends N1{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new e4,this.environmentIntensity=1,this.environmentRotation=new e4,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Se=new A,Ye=new A,bn=new A,$e=new A,Q4=new A,j4=new A,R6=new A,wn=new A,Tn=new A,An=new A,En=new r1,Nn=new r1,Rn=new r1,Ke=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Se.subVectors(e,t),a.cross(Se);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){Se.subVectors(a,t),Ye.subVectors(i,t),bn.subVectors(e,t);let r=Se.dot(Se),c=Se.dot(Ye),o=Se.dot(bn),l=Ye.dot(Ye),f=Ye.dot(bn),d=r*l-c*c;if(d===0)return s.set(0,0,0),null;let h=1/d,u=(l*o-c*f)*h,g=(r*f-c*o)*h;return s.set(1-u-g,g,u)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,$e)===null?!1:$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getInterpolation(e,t,i,a,s,r,c,o){return this.getBarycoord(e,t,i,a,$e)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,$e.x),o.addScaledVector(r,$e.y),o.addScaledVector(c,$e.z),o)}static getInterpolatedAttribute(e,t,i,a,s,r){return En.setScalar(0),Nn.setScalar(0),Rn.setScalar(0),En.fromBufferAttribute(e,t),Nn.fromBufferAttribute(e,i),Rn.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(En,s.x),r.addScaledVector(Nn,s.y),r.addScaledVector(Rn,s.z),r}static isFrontFacing(e,t,i,a){return Se.subVectors(i,t),Ye.subVectors(e,t),Se.cross(Ye).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Se.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),Se.cross(Ye).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,a=this.b,s=this.c,r,c;Q4.subVectors(a,i),j4.subVectors(s,i),wn.subVectors(e,i);let o=Q4.dot(wn),l=j4.dot(wn);if(o<=0&&l<=0)return t.copy(i);Tn.subVectors(e,a);let f=Q4.dot(Tn),d=j4.dot(Tn);if(f>=0&&d<=f)return t.copy(a);let h=o*d-f*l;if(h<=0&&o>=0&&f<=0&&o-f>0)return r=o/(o-f),t.copy(i).addScaledVector(Q4,r);An.subVectors(e,s);let u=Q4.dot(An),g=j4.dot(An);if(g>=0&&u<=g)return t.copy(s);let S=u*l-o*g;if(S<=0&&l>=0&&g<=0)return c=l/(l-g),t.copy(i).addScaledVector(j4,c);let m=f*g-u*d;if(m<=0&&d-f>=0&&u-g>=0)return R6.subVectors(s,a),c=(d-f)/(d-f+(u-g)),t.copy(a).addScaledVector(R6,c);let p=1/(m+S+h);return r=S*p,c=h*p,t.copy(i).addScaledVector(Q4,r).addScaledVector(j4,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},g4=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_e.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_e.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_e.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,c=s.count;r<c;r++)e.isMesh===!0?e.getVertexPosition(r,_e):_e.fromBufferAttribute(s,r),_e.applyMatrix4(e.matrixWorld),this.expandByPoint(_e);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rt.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rt.copy(i.boundingBox)),rt.applyMatrix4(e.matrixWorld),this.union(rt)}let a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_e),_e.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(W3),ct.subVectors(this.max,W3),e3.subVectors(e.a,W3),t3.subVectors(e.b,W3),i3.subVectors(e.c,W3),d4.subVectors(t3,e3),p4.subVectors(i3,t3),N4.subVectors(e3,i3);let t=[0,-d4.z,d4.y,0,-p4.z,p4.y,0,-N4.z,N4.y,d4.z,0,-d4.x,p4.z,0,-p4.x,N4.z,0,-N4.x,-d4.y,d4.x,0,-p4.y,p4.x,0,-N4.y,N4.x,0];return!Pn(t,e3,t3,i3,ct)||(t=[1,0,0,0,1,0,0,0,1],!Pn(t,e3,t3,i3,ct))?!1:(ot.crossVectors(d4,p4),t=[ot.x,ot.y,ot.z],Pn(t,e3,t3,i3,ct))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_e).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_e).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ze),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ze=[new A,new A,new A,new A,new A,new A,new A,new A],_e=new A,rt=new g4,e3=new A,t3=new A,i3=new A,d4=new A,p4=new A,N4=new A,W3=new A,ct=new A,ot=new A,R4=new A;function Pn(n,e,t,i,a){for(let s=0,r=n.length-3;s<=r;s+=3){R4.fromArray(n,s);let c=a.x*Math.abs(R4.x)+a.y*Math.abs(R4.y)+a.z*Math.abs(R4.z),o=e.dot(R4),l=t.dot(R4),f=i.dot(R4);if(Math.max(-Math.max(o,l,f),Math.min(o,l,f))>c)return!1}return!0}var M1=new A,lt=new M2,p8=0,Y1=class extends Ie{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p8++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=La,this.updateRanges=[],this.gpuType=be,this.version=0,this._normalizationScale=e!==void 0?an(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXY(t,lt.x,lt.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)M1.fromBufferAttribute(this,t),M1.applyMatrix3(e),this.setXYZ(t,M1.x,M1.y,M1.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)M1.fromBufferAttribute(this,t),M1.applyMatrix4(e),this.setXYZ(t,M1.x,M1.y,M1.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)M1.fromBufferAttribute(this,t),M1.applyNormalMatrix(e),this.setXYZ(t,M1.x,M1.y,M1.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)M1.fromBufferAttribute(this,t),M1.transformDirection(e),this.setXYZ(t,M1.x,M1.y,M1.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ta(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Aa(e,this.array)}};var o0=class extends Y1{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var l0=class extends Y1{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var s1=class extends Y1{constructor(e,t,i){super(new Float32Array(e),t,i)}},m8=new g4,q3=new A,In=new A,Fe=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):m8.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;q3.subVectors(e,this.center);let t=q3.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(q3,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(In.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(q3.copy(e.center).add(In)),this.expandByPoint(q3.copy(e.center).sub(In))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},g8=0,de=new e1,Dn=new N1,n3=new A,ae=new g4,X3=new g4,E1=new A,f1=class n extends Ie{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g8++}),this.uuid=C4(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hc(e)?l0:o0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new R2().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return de.makeRotationFromQuaternion(e),this.applyMatrix4(de),this}rotateX(e){return de.makeRotationX(e),this.applyMatrix4(de),this}rotateY(e){return de.makeRotationY(e),this.applyMatrix4(de),this}rotateZ(e){return de.makeRotationZ(e),this.applyMatrix4(de),this}translate(e,t,i){return de.makeTranslation(e,t,i),this.applyMatrix4(de),this}scale(e,t,i){return de.makeScale(e,t,i),this.applyMatrix4(de),this}lookAt(e){return Dn.lookAt(e),Dn.updateMatrix(),this.applyMatrix4(Dn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(n3).negate(),this.translate(n3.x,n3.y,n3.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let a=0,s=e.length;a<s;a++){let r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new s1(i,3))}else{let i=Math.min(e.length,t.count);for(let a=0;a<i;a++){let s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&w2("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new g4);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){N2("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){let s=t[i];ae.setFromBufferAttribute(s),this.morphTargetsRelative?(E1.addVectors(this.boundingBox.min,ae.min),this.boundingBox.expandByPoint(E1),E1.addVectors(this.boundingBox.max,ae.max),this.boundingBox.expandByPoint(E1)):(this.boundingBox.expandByPoint(ae.min),this.boundingBox.expandByPoint(ae.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&N2('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fe);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){N2("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(ae.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let c=t[s];X3.setFromBufferAttribute(c),this.morphTargetsRelative?(E1.addVectors(ae.min,X3.min),ae.expandByPoint(E1),E1.addVectors(ae.max,X3.max),ae.expandByPoint(E1)):(ae.expandByPoint(X3.min),ae.expandByPoint(X3.max))}ae.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)E1.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(E1));if(t)for(let s=0,r=t.length;s<r;s++){let c=t[s],o=this.morphTargetsRelative;for(let l=0,f=c.count;l<f;l++)E1.fromBufferAttribute(c,l),o&&(n3.fromBufferAttribute(e,l),E1.add(n3)),a=Math.max(a,i.distanceToSquared(E1))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&N2('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){N2("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,a=t.normal,s=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Y1(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let c=[],o=[],l=new Uint8Array(i.count);for(let P=0;P<i.count;P++)c[P]=new A,o[P]=new A;let f=new A,d=new A,h=new A,u=new M2,g=new M2,S=new M2,m=new A,p=new A;function _(P,N,I){l[P]=l[N]=l[I]=1,f.fromBufferAttribute(i,P),d.fromBufferAttribute(i,N),h.fromBufferAttribute(i,I),u.fromBufferAttribute(s,P),g.fromBufferAttribute(s,N),S.fromBufferAttribute(s,I),d.sub(f),h.sub(f),g.sub(u),S.sub(u);let U=1/(g.x*S.y-S.x*g.y);isFinite(U)&&(m.copy(d).multiplyScalar(S.y).addScaledVector(h,-g.y).multiplyScalar(U),p.copy(h).multiplyScalar(g.x).addScaledVector(d,-S.x).multiplyScalar(U),c[P].add(m),c[N].add(m),c[I].add(m),o[P].add(p),o[N].add(p),o[I].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,N=b.length;P<N;++P){let I=b[P],U=I.start,V=I.count;for(let E=U,G=U+V;E<G;E+=3)_(e.getX(E+0),e.getX(E+1),e.getX(E+2))}let z=new A,w=new A,C=new A,M=new A;function y(P){C.fromBufferAttribute(a,P),M.copy(C);let N=c[P];z.copy(N),z.sub(C.multiplyScalar(C.dot(N))).normalize(),w.crossVectors(M,N);let U=w.dot(o[P])<0?-1:1;r.setXYZW(P,z.x,z.y,z.z,U)}for(let P=0,N=i.count;P<N;++P)l[P]&&y(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Y1(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,u=i.count;h<u;h++)i.setXYZ(h,0,0,0);let a=new A,s=new A,r=new A,c=new A,o=new A,l=new A,f=new A,d=new A;if(e)for(let h=0,u=e.count;h<u;h+=3){let g=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,S),r.fromBufferAttribute(t,m),f.subVectors(r,s),d.subVectors(a,s),f.cross(d),c.fromBufferAttribute(i,g),o.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),c.add(f),o.add(f),l.add(f),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,u=t.count;h<u;h+=3)a.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),f.subVectors(r,s),d.subVectors(a,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)E1.fromBufferAttribute(e,t),E1.normalize(),e.setXYZ(t,E1.x,E1.y,E1.z)}toNonIndexed(){function e(c,o){let l=c.array,f=c.itemSize,d=c.normalized,h=new l.constructor(o.length*f),u=0,g=0;for(let S=0,m=o.length;S<m;S++){c.isInterleavedBufferAttribute?u=o[S]*c.data.stride+c.offset:u=o[S]*f;for(let p=0;p<f;p++)h[g++]=l[u++]}return new Y1(h,f,d)}if(this.index===null)return w2("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,a=this.attributes;for(let c in a){let o=a[c],l=e(o,i);t.setAttribute(c,l)}let s=this.morphAttributes;for(let c in s){let o=[],l=s[c];for(let f=0,d=l.length;f<d;f++){let h=l[f],u=e(h,i);o.push(u)}t.morphAttributes[c]=o}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let c=0,o=r.length;c<o;c++){let l=r[c];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let o in i){let l=i[o];e.data.attributes[o]=l.toJSON(e.data)}let a={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],f=[];for(let d=0,h=l.length;d<h;d++){let u=l[d];f.push(u.toJSON(e.data))}f.length>0&&(a[o]=f,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let a=e.attributes;for(let l in a){let f=a[l];this.setAttribute(l,f.clone(t))}let s=e.morphAttributes;for(let l in s){let f=[],d=s[l];for(let h=0,u=d.length;h<u;h++)f.push(d[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,f=r.length;l<f;l++){let d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_3=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=La,this.updateRanges=[],this.version=0,this.uuid=C4()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=P6(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),a=new this.constructor(i,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=P6(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function P6(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=C4()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var q1=new A,M4=class n{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a,this._normalizationScale=e!==void 0?an(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)q1.fromBufferAttribute(this,t),q1.applyMatrix4(e),this.setXYZ(t,q1.x,q1.y,q1.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)q1.fromBufferAttribute(this,t),q1.applyNormalMatrix(e),this.setXYZ(t,q1.x,q1.y,q1.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)q1.fromBufferAttribute(this,t),q1.transformDirection(e),this.setXYZ(t,q1.x,q1.y,q1.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){s0("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new Y1(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){s0("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ta(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Aa(e,this.data.array)}},Fn=new A,M8=new A,v8=new R2,ye=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let a=Fn.subVectors(i,t).cross(M8.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let a=e.delta(Fn),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(a,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||v8.getNormalMatrix(e),a=this.coplanarPoint(Fn).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},x8=0,ze=class extends Ie{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x8++}),this.uuid=C4(),this.name="",this.type="Material",this.blending=E3,this.side=z4,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=sa,this.blendEquation=G4,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new I2(0,0,0),this.blendAlpha=0,this.depthFunc=d3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nt,this.stencilZFail=Nt,this.stencilZPass=Nt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){w2(`Material: parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){w2(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){let r=[];for(let c in s){let o=s[c];delete o.metadata,r.push(o)}return r}if(t){let s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new I2().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ye().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new M2().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new M2().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},y3=class extends ze{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new I2(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},a3,Y3=new A,s3=new A,r3=new A,c3=new M2,$3=new M2,Vs=new e1,ft=new A,Z3=new A,ht=new A,I6=new M2,Un=new M2,D6=new M2,f0=class extends N1{constructor(e=new y3){if(super(),this.isSprite=!0,this.type="Sprite",a3===void 0){a3=new f1;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _3(t,5);a3.setIndex([0,1,2,0,2,3]),a3.setAttribute("position",new M4(i,3,0,!1)),a3.setAttribute("uv",new M4(i,2,3,!1))}this.geometry=a3,this.material=e,this.center=new M2(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&N2('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),s3.setFromMatrixScale(this.matrixWorld),Vs.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),r3.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&s3.multiplyScalar(-r3.z);let i=this.material.rotation,a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));let r=this.center;ut(ft.set(-.5,-.5,0),r3,r,s3,a,s),ut(Z3.set(.5,-.5,0),r3,r,s3,a,s),ut(ht.set(.5,.5,0),r3,r,s3,a,s),I6.set(0,0),Un.set(1,0),D6.set(1,1);let c=e.ray.intersectTriangle(ft,Z3,ht,!1,Y3);if(c===null&&(ut(Z3.set(-.5,.5,0),r3,r,s3,a,s),Un.set(0,1),c=e.ray.intersectTriangle(ft,ht,Z3,!1,Y3),c===null))return;let o=e.ray.origin.distanceTo(Y3);o<e.near||o>e.far||t.push({distance:o,point:Y3.clone(),uv:Ke.getInterpolation(Y3,ft,Z3,ht,I6,Un,D6,new M2),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ut(n,e,t,i,a,s){c3.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?($3.x=s*c3.x-a*c3.y,$3.y=a*c3.x+s*c3.y):$3.copy(c3),n.copy(e),n.x+=$3.x,n.y+=$3.y,n.applyMatrix4(Vs)}var Je=new A,Bn=new A,dt=new A,pt=new A,F4=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Je)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Je.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Je.copy(this.origin).addScaledVector(this.direction,t),Je.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Bn.copy(e).add(t).multiplyScalar(.5),dt.copy(t).sub(e).normalize(),pt.copy(this.origin).sub(Bn);let s=e.distanceTo(t)*.5,r=-this.direction.dot(dt),c=pt.dot(this.direction),o=-pt.dot(dt),l=pt.lengthSq(),f=Math.abs(1-r*r),d,h,u,g;if(f>0)if(d=r*o-c,h=r*c-o,g=s*f,d>=0)if(h>=-g)if(h<=g){let S=1/f;d*=S,h*=S,u=d*(d+r*h+2*c)+h*(r*d+h+2*o)+l}else h=s,d=Math.max(0,-(r*h+c)),u=-d*d+h*(h+2*o)+l;else h=-s,d=Math.max(0,-(r*h+c)),u=-d*d+h*(h+2*o)+l;else h<=-g?(d=Math.max(0,-(-r*s+c)),h=d>0?-s:Math.min(Math.max(-s,-o),s),u=-d*d+h*(h+2*o)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-o),s),u=h*(h+2*o)+l):(d=Math.max(0,-(r*s+c)),h=d>0?s:Math.min(Math.max(-s,-o),s),u=-d*d+h*(h+2*o)+l);else h=r>0?-s:s,d=Math.max(0,-(r*h+c)),u=-d*d+h*(h+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Bn).addScaledVector(dt,h),u}intersectSphere(e,t){if(e.radius<0)return null;Je.subVectors(e.center,this.origin);let i=Je.dot(this.direction),a=Je.dot(Je)-i*i,s=e.radius*e.radius;if(a>s)return null;let r=Math.sqrt(s-a),c=i-r,o=i+r;return o<0?null:c<0?this.at(o,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,r,c,o,l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,a=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,a=(e.min.x-h.x)*l),f>=0?(s=(e.min.y-h.y)*f,r=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,r=(e.min.y-h.y)*f),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(c=(e.min.z-h.z)*d,o=(e.max.z-h.z)*d):(c=(e.max.z-h.z)*d,o=(e.min.z-h.z)*d),i>o||c>a)||((c>i||i!==i)&&(i=c),(o<a||a!==a)&&(a=o),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Je)!==null}intersectTriangle(e,t,i,a,s){let r=this.origin,c=this.direction,o=c.x,l=c.y,f=c.z,d=e.x-r.x,h=e.y-r.y,u=e.z-r.z,g=t.x-r.x,S=t.y-r.y,m=t.z-r.z,p=i.x-r.x,_=i.y-r.y,b=i.z-r.z,z=Math.abs(o),w=Math.abs(l),C=Math.abs(f),M,y,P,N,I,U,V,E,G,W,O,e2;if(z>=w&&z>=C?(P=o,U=d,G=g,e2=p,o>=0?(M=l,y=f,N=h,I=u,V=S,E=m,W=_,O=b):(M=f,y=l,N=u,I=h,V=m,E=S,W=b,O=_)):w>=C?(P=l,U=h,G=S,e2=_,l>=0?(M=f,y=o,N=u,I=d,V=m,E=g,W=b,O=p):(M=o,y=f,N=d,I=u,V=g,E=m,W=p,O=b)):(P=f,U=u,G=m,e2=b,f>=0?(M=o,y=l,N=d,I=h,V=g,E=S,W=p,O=_):(M=l,y=o,N=h,I=d,V=S,E=g,W=_,O=p)),P===0)return null;let X=M/P,Q=y/P,j=1/P,z2=N-X*U,D2=I-Q*U,Z=V-X*G,p2=E-Q*G,S2=W-X*e2,T2=O-Q*e2,m2=S2*p2-T2*Z,U2=z2*T2-D2*S2,m1=Z*D2-p2*z2;if(a){if(m2<0||U2<0||m1<0)return null}else if((m2<0||U2<0||m1<0)&&(m2>0||U2>0||m1>0))return null;let E2=m2+U2+m1;if(E2===0)return null;let Q2=j*(m2*U+U2*G+m1*e2);return(E2>0?Q2<0:Q2>0)?null:this.at(Q2/E2,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},G1=class extends ze{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new I2(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new e4,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},F6=new e1,P4=new F4,mt=new Fe,U6=new A,gt=new A,Mt=new A,vt=new A,kn=new A,xt=new A,B6=new A,St=new A,Y2=class extends N1{constructor(e=new f1,t=new G1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let c=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){let i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(a,e);let c=this.morphTargetInfluences;if(s&&c){xt.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let f=c[o],d=s[o];f!==0&&(kn.fromBufferAttribute(d,e),r?xt.addScaledVector(kn,f):xt.addScaledVector(kn.sub(t),f))}t.add(xt)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mt.copy(i.boundingSphere),mt.applyMatrix4(s),P4.copy(e.ray).recast(e.near),!(mt.containsPoint(P4.origin)===!1&&(P4.intersectSphere(mt,U6)===null||P4.origin.distanceToSquared(U6)>(e.far-e.near)**2))&&(F6.copy(s).invert(),P4.copy(e.ray).applyMatrix4(F6),!(i.boundingBox!==null&&P4.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,P4)))}_computeIntersections(e,t,i){let a,s=this.geometry,r=this.material,c=s.index,o=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,u=s.drawRange;if(c!==null)if(Array.isArray(r))for(let g=0,S=h.length;g<S;g++){let m=h[g],p=r[m.materialIndex],_=Math.max(m.start,u.start),b=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let z=_,w=b;z<w;z+=3){let C=c.getX(z),M=c.getX(z+1),y=c.getX(z+2);a=_t(this,p,e,i,l,f,d,C,M,y),a&&(a.faceIndex=Math.floor(z/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let g=Math.max(0,u.start),S=Math.min(c.count,u.start+u.count);for(let m=g,p=S;m<p;m+=3){let _=c.getX(m),b=c.getX(m+1),z=c.getX(m+2);a=_t(this,r,e,i,l,f,d,_,b,z),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(o!==void 0)if(Array.isArray(r))for(let g=0,S=h.length;g<S;g++){let m=h[g],p=r[m.materialIndex],_=Math.max(m.start,u.start),b=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let z=_,w=b;z<w;z+=3){let C=z,M=z+1,y=z+2;a=_t(this,p,e,i,l,f,d,C,M,y),a&&(a.faceIndex=Math.floor(z/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let g=Math.max(0,u.start),S=Math.min(o.count,u.start+u.count);for(let m=g,p=S;m<p;m+=3){let _=m,b=m+1,z=m+2;a=_t(this,r,e,i,l,f,d,_,b,z),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}};function S8(n,e,t,i,a,s,r,c){let o;if(e.side===R1?o=i.intersectTriangle(r,s,a,!0,c):o=i.intersectTriangle(a,s,r,e.side===z4,c),o===null)return null;St.copy(c),St.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(St);return l<t.near||l>t.far?null:{distance:l,point:St.clone(),object:n}}function _t(n,e,t,i,a,s,r,c,o,l){n.getVertexPosition(c,gt),n.getVertexPosition(o,Mt),n.getVertexPosition(l,vt);let f=S8(n,e,t,i,gt,Mt,vt,B6);if(f){let d=new A;Ke.getBarycoord(B6,gt,Mt,vt,d),a&&(f.uv=Ke.getInterpolatedAttribute(a,c,o,l,d,new M2)),s&&(f.uv1=Ke.getInterpolatedAttribute(s,c,o,l,d,new M2)),r&&(f.normal=Ke.getInterpolatedAttribute(r,c,o,l,d,new A),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a:c,b:o,c:l,normal:new A,materialIndex:0};Ke.getNormal(gt,Mt,vt,h.normal),f.face=h,f.barycoord=d}return f}var qt=class extends y1{constructor(e=null,t=1,i=1,a,s,r,c,o,l=v1,f=v1,d,h){super(null,r,c,o,l,f,a,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var I4=new Fe,_8=new M2(.5,.5),yt=new A,v4=class{constructor(e=new ye,t=new ye,i=new ye,a=new ye,s=new ye,r=new ye){this.planes=[e,t,i,a,s,r]}set(e,t,i,a,s,r){let c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(a),c[4].copy(s),c[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pe,i=!1){let a=this.planes,s=e.elements,r=s[0],c=s[1],o=s[2],l=s[3],f=s[4],d=s[5],h=s[6],u=s[7],g=s[8],S=s[9],m=s[10],p=s[11],_=s[12],b=s[13],z=s[14],w=s[15];if(a[0].setComponents(l-r,u-f,p-g,w-_).normalize(),a[1].setComponents(l+r,u+f,p+g,w+_).normalize(),a[2].setComponents(l+c,u+d,p+S,w+b).normalize(),a[3].setComponents(l-c,u-d,p-S,w-b).normalize(),i)a[4].setComponents(o,h,m,z).normalize(),a[5].setComponents(l-o,u-h,p-m,w-z).normalize();else if(a[4].setComponents(l-o,u-h,p-m,w-z).normalize(),t===pe)a[5].setComponents(l+o,u+h,p+m,w+z).normalize();else if(t===m3)a[5].setComponents(o,h,m,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),I4.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),I4.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(I4)}intersectsSprite(e){I4.center.set(0,0,0);let t=_8.distanceTo(e.center);return I4.radius=.7071067811865476+t,I4.applyMatrix4(e.matrixWorld),this.intersectsSphere(I4)}intersectsSphere(e){let t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let a=t[i];if(yt.x=a.normal.x>0?e.max.x:e.min.x,yt.y=a.normal.y>0?e.max.y:e.min.y,yt.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(yt)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},k6=new e1,Xt=class n{constructor(){this.coordinateSystem=pe,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let a=0;a<t.length;a++){let s=t[a];k6.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[a]===void 0&&(i[a]=new v4),i[a].setFromProjectionMatrix(k6,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let a=0;a<e._count;a++)t[a]===void 0&&(t[a]=new v4),t[a].copy(i[a]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ue=class extends ze{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new I2(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yt=new A,$t=new A,O6=new e1,J3=new F4,zt=new Fe,On=new A,H6=new A,U4=class extends N1{constructor(e=new f1,t=new Ue){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)Yt.fromBufferAttribute(t,a-1),$t.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Yt.distanceTo($t);e.setAttribute("lineDistance",new s1(i,1))}else w2("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zt.copy(i.boundingSphere),zt.applyMatrix4(a),zt.radius+=s,e.ray.intersectsSphere(zt)===!1)return;O6.copy(a).invert(),J3.copy(e.ray).applyMatrix4(O6);let c=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=c*c,l=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){let u=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let S=u,m=g-1;S<m;S+=l){let p=f.getX(S),_=f.getX(S+1),b=Lt(this,e,J3,o,p,_,S);b&&t.push(b)}if(this.isLineLoop){let S=f.getX(g-1),m=f.getX(u),p=Lt(this,e,J3,o,S,m,g-1);p&&t.push(p)}}else{let u=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let S=u,m=g-1;S<m;S+=l){let p=Lt(this,e,J3,o,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){let S=Lt(this,e,J3,o,g-1,u,g-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let c=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function Lt(n,e,t,i,a,s,r){let c=n.geometry.attributes.position;if(Yt.fromBufferAttribute(c,a),$t.fromBufferAttribute(c,s),t.distanceSqToSegment(Yt,$t,On,H6)>i)return;On.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(On);if(!(l<e.near||l>e.far))return{distance:l,point:H6.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}var G6=new A,V6=new A,B4=class extends U4{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let a=0,s=t.count;a<s;a+=2)G6.fromBufferAttribute(t,a),V6.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+G6.distanceTo(V6);e.setAttribute("lineDistance",new s1(i,1))}else w2("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zt=class extends ze{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new I2(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},W6=new e1,Zn=new F4,Ct=new Fe,bt=new A,h0=class extends N1{constructor(e=new f1,t=new Zt){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ct.copy(i.boundingSphere),Ct.applyMatrix4(a),Ct.radius+=s,e.ray.intersectsSphere(Ct)===!1)return;W6.copy(a).invert(),Zn.copy(e.ray).applyMatrix4(W6);let c=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=c*c,l=i.index,d=i.attributes.position;if(l!==null){let h=Math.max(0,r.start),u=Math.min(l.count,r.start+r.count);for(let g=h,S=u;g<S;g++){let m=l.getX(g);bt.fromBufferAttribute(d,m),q6(bt,m,o,a,e,t,this)}}else{let h=Math.max(0,r.start),u=Math.min(d.count,r.start+r.count);for(let g=h,S=u;g<S;g++)bt.fromBufferAttribute(d,g),q6(bt,g,o,a,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let c=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function q6(n,e,t,i,a,s,r){let c=Zn.distanceSqToPoint(n);if(c<t){let o=new A;Zn.closestPointToPoint(n,o),o.applyMatrix4(i);let l=a.ray.origin.distanceTo(o);if(l<a.near||l>a.far)return;s.push({distance:l,distanceToRay:Math.sqrt(c),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var z3=class extends y1{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=v1,this.minFilter=v1,this.generateMipmaps=!1,this.needsUpdate=!0}copy(e){return super.copy(e),this.source=new D4(Object.assign({},e.image)),this}};var u0=class extends y1{constructor(e=[],t=V4,i,a,s,r,c,o,l,f){super(e,t,i,a,s,r,c,o,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},k4=class extends y1{constructor(e,t,i,a,s,r,c,o,l){super(e,t,i,a,s,r,c,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var t4=class extends y1{constructor(e,t,i=Ce,a,s,r,c=v1,o=v1,l,f=je,d=1){if(f!==je&&f!==a4)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,a,s,r,c,o,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new D4(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},d0=class extends t4{constructor(e,t=Ce,i=V4,a,s,r=v1,c=v1,o,l=je){let f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,i,a,s,r,c,o,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},p0=class extends y1{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Be=class n extends f1{constructor(e=1,t=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};let c=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],f=[],d=[],h=0,u=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,a,r,2),g("x","z","y",1,-1,e,i,-t,a,r,3),g("x","y","z",1,-1,e,t,i,a,s,4),g("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(o),this.setAttribute("position",new s1(l,3)),this.setAttribute("normal",new s1(f,3)),this.setAttribute("uv",new s1(d,2));function g(S,m,p,_,b,z,w,C,M,y,P){let N=z/M,I=w/y,U=z/2,V=w/2,E=C/2,G=M+1,W=y+1,O=0,e2=0,X=new A;for(let Q=0;Q<W;Q++){let j=Q*I-V;for(let z2=0;z2<G;z2++){let D2=z2*N-U;X[S]=D2*_,X[m]=j*b,X[p]=E,l.push(X.x,X.y,X.z),X[S]=0,X[m]=0,X[p]=C>0?1:-1,f.push(X.x,X.y,X.z),d.push(z2/M),d.push(1-Q/y),O+=1}}for(let Q=0;Q<y;Q++)for(let j=0;j<M;j++){let z2=h+j+G*Q,D2=h+j+G*(Q+1),Z=h+(j+1)+G*(Q+1),p2=h+(j+1)+G*Q;o.push(z2,D2,p2),o.push(D2,Z,p2),e2+=6}c.addGroup(u,e2,P),u+=e2,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var O4=class n extends f1{constructor(e=1,t=1,i=1,a=32,s=1,r=!1,c=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:c,thetaLength:o};let l=this;a=Math.floor(a),s=Math.floor(s);let f=[],d=[],h=[],u=[],g=0,S=[],m=i/2,p=0;_(),r===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(f),this.setAttribute("position",new s1(d,3)),this.setAttribute("normal",new s1(h,3)),this.setAttribute("uv",new s1(u,2));function _(){let z=new A,w=new A,C=0,M=(t-e)/i;for(let y=0;y<=s;y++){let P=[],N=y/s,I=N*(t-e)+e;for(let U=0;U<=a;U++){let V=U/a,E=V*o+c,G=Math.sin(E),W=Math.cos(E);w.x=I*G,w.y=-N*i+m,w.z=I*W,d.push(w.x,w.y,w.z),z.set(G,M,W).normalize(),h.push(z.x,z.y,z.z),u.push(V,1-N),P.push(g++)}S.push(P)}for(let y=0;y<a;y++)for(let P=0;P<s;P++){let N=S[P][y],I=S[P+1][y],U=S[P+1][y+1],V=S[P][y+1];(e>0||P!==0)&&(f.push(N,I,V),C+=3),(t>0||P!==s-1)&&(f.push(I,U,V),C+=3)}l.addGroup(p,C,0),p+=C}function b(z){let w=g,C=new M2,M=new A,y=0,P=z===!0?e:t,N=z===!0?1:-1;for(let U=1;U<=a;U++)d.push(0,m*N,0),h.push(0,N,0),u.push(.5,.5),g++;let I=g;for(let U=0;U<=a;U++){let E=U/a*o+c,G=Math.cos(E),W=Math.sin(E);M.x=P*W,M.y=m*N,M.z=P*G,d.push(M.x,M.y,M.z),h.push(0,N,0),C.x=G*.5+.5,C.y=W*.5*N+.5,u.push(C.x,C.y),g++}for(let U=0;U<a;U++){let V=w+U,E=I+U;z===!0?f.push(E,E+1,V):f.push(E+1,E,V),y+=3}l.addGroup(p,y,z===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},L3=class n extends O4{constructor(e=1,t=1,i=32,a=1,s=!1,r=0,c=Math.PI*2){super(0,e,t,i,a,s,r,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:c}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var me=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){w2("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,a=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),a=0,s=i.length,r;t?r=t:r=e*i[s-1];let c=0,o=s-1,l;for(;c<=o;)if(a=Math.floor(c+(o-c)/2),l=i[a]-r,l<0)c=a+1;else if(l>0)o=a-1;else{o=a;break}if(a=o,i[a]===r)return a/(s-1);let f=i[a],h=i[a+1]-f,u=(r-f)/h;return(a+u)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);let r=this.getPoint(a),c=this.getPoint(s),o=t||(r.isVector2?new M2:new A);return o.copy(c).sub(r).normalize(),o}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,a=[],s=[],r=[],c=new A,o=new e1;for(let u=0;u<=e;u++){let g=u/e;a[u]=this.getTangentAt(g,new A)}s[0]=new A,r[0]=new A;let l=Number.MAX_VALUE,f=Math.abs(a[0].x),d=Math.abs(a[0].y),h=Math.abs(a[0].z);f<=l&&(l=f,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),c.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],c),r[0].crossVectors(a[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),r[u]=r[u-1].clone(),c.crossVectors(a[u-1],a[u]),c.length()>Number.EPSILON){c.normalize();let g=Math.acos(G2(a[u-1].dot(a[u]),-1,1));s[u].applyMatrix4(o.makeRotationAxis(c,g))}r[u].crossVectors(a[u],s[u])}if(t===!0){let u=Math.acos(G2(s[0].dot(s[e]),-1,1));u/=e,a[0].dot(c.crossVectors(s[0],s[e]))>0&&(u=-u);for(let g=1;g<=e;g++)s[g].applyMatrix4(o.makeRotationAxis(a[g],u*g)),r[g].crossVectors(a[g],s[g])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},m0=class extends me{constructor(e=0,t=0,i=1,a=1,s=0,r=Math.PI*2,c=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=c,this.aRotation=o}getPoint(e,t=new M2){let i=t,a=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);let c=this.aStartAngle+e*s,o=this.aX+this.xRadius*Math.cos(c),l=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){let f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=o-this.aX,u=l-this.aY;o=h*f-u*d+this.aX,l=h*d+u*f+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Jt=class extends m0{constructor(e,t,i,a,s,r){super(e,t,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Ea(){let n=0,e=0,t=0,i=0;function a(s,r,c,o){n=s,e=c,t=-3*s+3*r-2*c-o,i=2*s-2*r+c+o}return{initCatmullRom:function(s,r,c,o,l){a(r,c,l*(c-s),l*(o-r))},initNonuniformCatmullRom:function(s,r,c,o,l,f,d){let h=(r-s)/l-(c-s)/(l+f)+(c-r)/f,u=(c-r)/f-(o-r)/(f+d)+(o-c)/d;h*=f,u*=f,a(r,c,h,u)},calc:function(s){let r=s*s,c=r*s;return n+e*s+t*r+i*c}}}var X6=new A,Y6=new A,Hn=new Ea,Gn=new Ea,Vn=new Ea,C3=class extends me{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new A){let i=t,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e,c=Math.floor(r),o=r-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:o===0&&c===s-1&&(c=s-2,o=1);let l,f;this.closed||c>0?l=a[(c-1)%s]:(Y6.subVectors(a[0],a[1]).add(a[0]),l=Y6);let d=a[c%s],h=a[(c+1)%s];if(this.closed||c+2<s?f=a[(c+2)%s]:(X6.subVectors(a[s-1],a[s-2]).add(a[s-1]),f=X6),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),u),S=Math.pow(d.distanceToSquared(h),u),m=Math.pow(h.distanceToSquared(f),u);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Hn.initNonuniformCatmullRom(l.x,d.x,h.x,f.x,g,S,m),Gn.initNonuniformCatmullRom(l.y,d.y,h.y,f.y,g,S,m),Vn.initNonuniformCatmullRom(l.z,d.z,h.z,f.z,g,S,m)}else this.curveType==="catmullrom"&&(Hn.initCatmullRom(l.x,d.x,h.x,f.x,this.tension),Gn.initCatmullRom(l.y,d.y,h.y,f.y,this.tension),Vn.initCatmullRom(l.z,d.z,h.z,f.z,this.tension));return i.set(Hn.calc(o),Gn.calc(o),Vn.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let a=e.points[t];this.points.push(new A().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $6(n,e,t,i,a){let s=(i-e)*.5,r=(a-t)*.5,c=n*n,o=n*c;return(2*t-2*i+s+r)*o+(-3*t+3*i-2*s-r)*c+s*n+t}function y8(n,e){let t=1-n;return t*t*e}function z8(n,e){return 2*(1-n)*n*e}function L8(n,e){return n*n*e}function e0(n,e,t,i){return y8(n,e)+z8(n,t)+L8(n,i)}function C8(n,e){let t=1-n;return t*t*t*e}function b8(n,e){let t=1-n;return 3*t*t*n*e}function w8(n,e){return 3*(1-n)*n*n*e}function T8(n,e){return n*n*n*e}function t0(n,e,t,i,a){return C8(n,e)+b8(n,t)+w8(n,i)+T8(n,a)}var Kt=class extends me{constructor(e=new M2,t=new M2,i=new M2,a=new M2){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new M2){let i=t,a=this.v0,s=this.v1,r=this.v2,c=this.v3;return i.set(t0(e,a.x,s.x,r.x,c.x),t0(e,a.y,s.y,r.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qt=class extends me{constructor(e=new A,t=new A,i=new A,a=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new A){let i=t,a=this.v0,s=this.v1,r=this.v2,c=this.v3;return i.set(t0(e,a.x,s.x,r.x,c.x),t0(e,a.y,s.y,r.y,c.y),t0(e,a.z,s.z,r.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jt=class extends me{constructor(e=new M2,t=new M2){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new M2){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M2){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ei=class extends me{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ti=class extends me{constructor(e=new M2,t=new M2,i=new M2){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M2){let i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(e0(e,a.x,s.x,r.x),e0(e,a.y,s.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},g0=class extends me{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,a=this.v0,s=this.v1,r=this.v2;return i.set(e0(e,a.x,s.x,r.x),e0(e,a.y,s.y,r.y),e0(e,a.z,s.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ii=class extends me{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new M2){let i=t,a=this.points,s=(a.length-1)*e,r=Math.floor(s),c=s-r,o=a[r===0?r:r-1],l=a[r],f=a[r>a.length-2?a.length-1:r+1],d=a[r>a.length-3?a.length-1:r+2];return i.set($6(c,o.x,l.x,f.x,d.x),$6(c,o.y,l.y,f.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let a=e.points[t];this.points.push(a.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let a=e.points[t];this.points.push(new M2().fromArray(a))}return this}},A8=Object.freeze({__proto__:null,ArcCurve:Jt,CatmullRomCurve3:C3,CubicBezierCurve:Kt,CubicBezierCurve3:Qt,EllipseCurve:m0,LineCurve:jt,LineCurve3:ei,QuadraticBezierCurve:ti,QuadraticBezierCurve3:g0,SplineCurve:ii});var i4=class n extends f1{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};let s=e/2,r=t/2,c=Math.floor(i),o=Math.floor(a),l=c+1,f=o+1,d=e/c,h=t/o,u=[],g=[],S=[],m=[];for(let p=0;p<f;p++){let _=p*h-r;for(let b=0;b<l;b++){let z=b*d-s;g.push(z,-_,0),S.push(0,0,1),m.push(b/c),m.push(1-p/o)}}for(let p=0;p<o;p++)for(let _=0;_<c;_++){let b=_+l*p,z=_+l*(p+1),w=_+1+l*(p+1),C=_+1+l*p;u.push(b,z,C),u.push(z,w,C)}this.setIndex(u),this.setAttribute("position",new s1(g,3)),this.setAttribute("normal",new s1(S,3)),this.setAttribute("uv",new s1(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},M0=class n extends f1{constructor(e=.5,t=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);let c=[],o=[],l=[],f=[],d=e,h=(t-e)/a,u=new A,g=new M2;for(let S=0;S<=a;S++){for(let m=0;m<=i;m++){let p=s+m/i*r;u.x=d*Math.cos(p),u.y=d*Math.sin(p),o.push(u.x,u.y,u.z),l.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,f.push(g.x,g.y)}d+=h}for(let S=0;S<a;S++){let m=S*(i+1);for(let p=0;p<i;p++){let _=p+m,b=_,z=_+i+1,w=_+i+2,C=_+1;c.push(b,z,C),c.push(z,w,C)}}this.setIndex(c),this.setAttribute("position",new s1(o,3)),this.setAttribute("normal",new s1(l,3)),this.setAttribute("uv",new s1(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Le=class n extends f1{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,r=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let o=Math.min(r+c,Math.PI),l=0,f=[],d=new A,h=new A,u=[],g=[],S=[],m=[];for(let p=0;p<=i;p++){let _=[],b=p/i,z=r+b*c,w=e*Math.cos(z),C=Math.sqrt(e*e-w*w),M=0;p===0&&r===0?M=.5/t:p===i&&o===Math.PI&&(M=-.5/t);for(let y=0;y<=t;y++){let P=y/t,N=a+P*s;d.x=-C*Math.cos(N),d.y=w,d.z=C*Math.sin(N),g.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(P+M,1-b),_.push(l++)}f.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let b=f[p][_+1],z=f[p][_],w=f[p+1][_],C=f[p+1][_+1];(p!==0||r>0)&&u.push(b,z,C),(p!==i-1||o<Math.PI)&&u.push(z,w,C)}this.setIndex(u),this.setAttribute("position",new s1(g,3)),this.setAttribute("normal",new s1(S,3)),this.setAttribute("uv",new s1(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var v0=class n extends f1{constructor(e=new g0(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,a=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:a,closed:s};let r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let c=new A,o=new A,l=new M2,f=new A,d=[],h=[],u=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new s1(d,3)),this.setAttribute("normal",new s1(h,3)),this.setAttribute("uv",new s1(u,2));function S(){for(let b=0;b<t;b++)m(b);m(s===!1?t:0),_(),p()}function m(b){f=e.getPointAt(b/t,f);let z=r.normals[b],w=r.binormals[b];for(let C=0;C<=a;C++){let M=C/a*Math.PI*2,y=Math.sin(M),P=-Math.cos(M);o.x=P*z.x+y*w.x,o.y=P*z.y+y*w.y,o.z=P*z.z+y*w.z,o.normalize(),h.push(o.x,o.y,o.z),c.x=f.x+i*o.x,c.y=f.y+i*o.y,c.z=f.z+i*o.z,d.push(c.x,c.y,c.z)}}function p(){for(let b=1;b<=t;b++)for(let z=1;z<=a;z++){let w=(a+1)*(b-1)+(z-1),C=(a+1)*b+(z-1),M=(a+1)*b+z,y=(a+1)*(b-1)+z;g.push(w,C,y),g.push(C,M,y)}}function _(){for(let b=0;b<=t;b++)for(let z=0;z<=a;z++)l.x=b/t,l.y=z/a,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new A8[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function q4(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let a=n[t][i];if(Z6(a))a.isRenderTargetTexture?(w2("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(Z6(a[0])){let s=[];for(let r=0,c=a.length;r<c;r++)s[r]=a[r].clone();e[t][i]=s}else e[t][i]=a.slice();else e[t][i]=a}}return e}function V1(n){let e={};for(let t=0;t<n.length;t++){let i=q4(n[t]);for(let a in i)e[a]=i[a]}return e}function Z6(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function E8(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Na(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:X2.workingColorSpace}var Ws={clone:q4,merge:V1},N8=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R8=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Z1=class extends ze{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N8,this.fragmentShader=R8,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=q4(e.uniforms),this.uniformsGroups=E8(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new I2().setHex(a.value);break;case"v2":this.uniforms[i].value=new M2().fromArray(a.value);break;case"v3":this.uniforms[i].value=new A().fromArray(a.value);break;case"v4":this.uniforms[i].value=new r1().fromArray(a.value);break;case"m3":this.uniforms[i].value=new R2().fromArray(a.value);break;case"m4":this.uniforms[i].value=new e1().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},x4=class extends Z1{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ke=class extends ze{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new I2(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new I2(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nn,this.normalScale=new M2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new e4,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ni=class extends ze{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Es,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ai=class extends ze{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var x0=class extends Ue{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function o3(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function wt(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var S4=class{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,a=t[i],s=t[i-1];i:{e:{let r;t:{n:if(!(e<a)){for(let c=i+2;;){if(a===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(s=a,a=t[++i],e<a)break e}r=t.length;break t}if(!(e>=s)){let c=t[1];e<c&&(i=2,s=c);for(let o=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(a=s,s=t[--i-1],e>=s)break e}r=i,i=0;break t}break i}for(;i<r;){let c=i+r>>>1;e<t[c]?r=c:i=c+1}if(a=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=e*a;for(let r=0;r!==a;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},si=class extends S4{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xn,endingEnd:Xn}}intervalChanged_(e,t,i){let a=this.parameterPositions,s=e-2,r=e+1,c=a[s],o=a[r];if(c===void 0)switch(this.getSettings_().endingStart){case Yn:s=e,c=2*t-i;break;case $n:s=a.length-2,c=t+a[s]-a[s+1];break;default:s=e,c=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Yn:r=e,o=2*i-t;break;case $n:r=1,o=i+a[1]-a[0];break;default:r=e-1,o=t}let l=(i-t)*.5,f=this.valueSize;this._weightPrev=l/(t-c),this._weightNext=l/(o-i),this._offsetPrev=s*f,this._offsetNext=r*f}interpolate_(e,t,i,a){let s=this.resultBuffer,r=this.sampleValues,c=this.valueSize,o=e*c,l=o-c,f=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,u=this._weightNext,g=(i-t)/(a-t),S=g*g,m=S*g,p=-h*m+2*h*S-h*g,_=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*g+1,b=(-1-u)*m+(1.5+u)*S+.5*g,z=u*m-u*S;for(let w=0;w!==c;++w)s[w]=p*r[f+w]+_*r[l+w]+b*r[o+w]+z*r[d+w];return s}},ri=class extends S4{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){let s=this.resultBuffer,r=this.sampleValues,c=this.valueSize,o=e*c,l=o-c,f=(i-t)/(a-t),d=1-f;for(let h=0;h!==c;++h)s[h]=r[l+h]*d+r[o+h]*f;return s}},ci=class extends S4{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}},oi=class extends S4{interpolate_(e,t,i,a){let s=this.resultBuffer,r=this.sampleValues,c=this.valueSize,o=e*c,l=o-c,f=this.inTangents,d=this.outTangents;if(!f||!d){let g=(i-t)/(a-t),S=1-g;for(let m=0;m!==c;++m)s[m]=r[l+m]*S+r[o+m]*g;return s}let h=c*2,u=e-1;for(let g=0;g!==c;++g){let S=r[l+g],m=r[o+g],p=u*h+g*2,_=d[p],b=d[p+1],z=e*h+g*2,w=f[z],C=f[z+1],M=I8(i,t,_,w,a);s[g]=qs(M,S,b,C,m)}return s}};function qs(n,e,t,i,a){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*a}function P8(n,e,t,i,a){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(a-i)}function I8(n,e,t,i,a){let s=(n-e)/(a-e);for(let r=0;r<8;r++){let c=qs(s,e,t,i,a)-n;if(Math.abs(c)<1e-10)break;let o=P8(s,e,t,i,a);if(Math.abs(o)<1e-10)break;s=Math.max(0,Math.min(1,s-c/o))}return s}var re=class{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=o3(t,this.TimeBufferType),this.values=o3(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:o3(e.times,Array),values:o3(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a),wt(e.settings)&&(i.settings={inTangents:o3(e.settings.inTangents,Array),outTangents:o3(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ci(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ri(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new si(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new oi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case i0:t=this.InterpolantFactoryMethodDiscrete;break;case Ht:t=this.InterpolantFactoryMethodLinear;break;case Et:t=this.InterpolantFactoryMethodSmooth;break;case qn:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return w2("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return i0;case this.InterpolantFactoryMethodLinear:return Ht;case this.InterpolantFactoryMethodSmooth:return Et;case this.InterpolantFactoryMethodBezier:return qn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e;wt(this.settings)&&(J6(this.settings.inTangents,e),J6(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e;wt(this.settings)&&(K6(this.settings.inTangents,e),K6(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,a=i.length,s=0,r=a-1;for(;s!==a&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let c=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*c,r*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(N2("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,a=this.values,s=i.length;s===0&&(N2("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let c=0;c!==s;c++){let o=i[c];if(typeof o=="number"&&isNaN(o)){N2("KeyframeTrack: Time is not a valid number.",this,c,o),e=!1;break}if(r!==null&&r>o){N2("KeyframeTrack: Out of order keys.",this,c,o,r),e=!1;break}r=o}if(a!==void 0&&Gc(a))for(let c=0,o=a.length;c!==o;++c){let l=a[c];if(isNaN(l)){N2("KeyframeTrack: Value is not a valid number.",this,c,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Et,s=e.length-1,r=1;for(let c=1;c<s;++c){let o=!1,l=e[c],f=e[c+1];if(l!==f&&(c!==1||l!==e[0]))if(a)o=!0;else{let d=c*i,h=d-i,u=d+i;for(let g=0;g!==i;++g){let S=t[d+g];if(S!==t[h+g]||S!==t[u+g]){o=!0;break}}}if(o){if(c!==r){e[r]=e[c];let d=c*i,h=r*i;for(let u=0;u!==i;++u)t[h+u]=t[d+u]}++r}}if(s>0){e[r]=e[s];for(let c=s*i,o=r*i,l=0;l!==i;++l)t[o+l]=t[c+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,wt(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function J6(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function K6(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}re.prototype.ValueTypeName="";re.prototype.TimeBufferType=Float32Array;re.prototype.ValueBufferType=Float32Array;re.prototype.DefaultInterpolation=Ht;var _4=class extends re{constructor(e,t,i){super(e,t,i)}};_4.prototype.ValueTypeName="bool";_4.prototype.ValueBufferType=Array;_4.prototype.DefaultInterpolation=i0;_4.prototype.InterpolantFactoryMethodLinear=void 0;_4.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends re{constructor(e,t,i,a){super(e,t,i,a)}};li.prototype.ValueTypeName="color";var fi=class extends re{constructor(e,t,i,a){super(e,t,i,a)}};fi.prototype.ValueTypeName="number";var hi=class extends S4{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){let s=this.resultBuffer,r=this.sampleValues,c=this.valueSize,o=(i-t)/(a-t),l=e*c;for(let f=l+c;l!==f;l+=4)De.slerpFlat(s,0,r,l-c,r,l,o);return s}},S0=class extends re{constructor(e,t,i,a){super(e,t,i,a)}InterpolantFactoryMethodLinear(e){return new hi(this.times,this.values,this.getValueSize(),e)}};S0.prototype.ValueTypeName="quaternion";S0.prototype.InterpolantFactoryMethodSmooth=void 0;var y4=class extends re{constructor(e,t,i){super(e,t,i)}};y4.prototype.ValueTypeName="string";y4.prototype.ValueBufferType=Array;y4.prototype.DefaultInterpolation=i0;y4.prototype.InterpolantFactoryMethodLinear=void 0;y4.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends re{constructor(e,t,i,a){super(e,t,i,a)}};ui.prototype.ValueTypeName="vector";var Rt={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Q6(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Q6(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Q6(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var di=class{constructor(e,t,i){let a=this,s=!1,r=0,c=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){c++,s===!1&&a.onStart!==void 0&&a.onStart(f,r,c),s=!0},this.itemEnd=function(f){r++,a.onProgress!==void 0&&a.onProgress(f,r,c),r===c&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(f){a.onError!==void 0&&a.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),o?o(f):f},this.setURLModifier=function(f){return o=f,this},this.addHandler=function(f,d){return l.push(f,d),this},this.removeHandler=function(f){let d=l.indexOf(f);return d!==-1&&l.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=l.length;d<h;d+=2){let u=l[d],g=l[d+1];if(u.global&&(u.lastIndex=0),u.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xs=new di,b3=class{constructor(e){this.manager=e!==void 0?e:Xs,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(a,s){i.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};b3.DEFAULT_MATERIAL_NAME="__DEFAULT";var l3=new WeakMap,pi=class extends b3{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=Rt.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let d=l3.get(r);d===void 0&&(d=[],l3.set(r,d)),d.push({onLoad:t,onError:a})}return r}let c=g3("img");function o(){f(),t&&t(this);let d=l3.get(this)||[];for(let h=0;h<d.length;h++){let u=d[h];u.onLoad&&u.onLoad(this)}l3.delete(this),s.manager.itemEnd(e)}function l(d){f(),a&&a(d),Rt.remove(`image:${e}`);let h=l3.get(this)||[];for(let u=0;u<h.length;u++){let g=h[u];g.onError&&g.onError(d)}l3.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",o,!1),c.removeEventListener("error",l,!1)}return c.addEventListener("load",o,!1),c.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),Rt.add(`image:${e}`,c),s.manager.itemStart(e),c.fetchPriority=this.priority,c.src=e,c}};var _0=class extends b3{constructor(e){super(e)}load(e,t,i,a){let s=new y1,r=new pi(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},i,a),s}},w3=class extends N1{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new I2(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Wn=new e1,j6=new A,es=new A,y0=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new M2(512,512),this.mapType=F1,this.map=null,this.mapPass=null,this.matrix=new e1,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new v4,this._frameExtents=new M2(1,1),this._viewportCount=1,this._viewports=[new r1(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;j6.setFromMatrixPosition(e.matrixWorld),t.position.copy(j6),es.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(es),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){Wn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Wn,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=a?a.z/s.x:1,c=a?a.w/s.y:1,o=a?a.x/s.x:0,l=a?a.y/s.y:0;e.coordinateSystem===m3||e.reversedDepth?t.set(.5*r,0,0,.5*r+o,0,.5*c,0,.5*c+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+o,0,.5*c,0,.5*c+l,0,0,.5,.5,0,0,0,1),t.multiply(Wn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Tt=new A,At=new De,Re=new A,z0=class extends N1{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new e1,this.projectionMatrix=new e1,this.projectionMatrixInverse=new e1,this.coordinateSystem=pe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tt,At,Re),Re.x===1&&Re.y===1&&Re.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tt,At,Re.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Tt,At,Re),Re.x===1&&Re.y===1&&Re.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tt,At,Re.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},m4=new A,ts=new M2,is=new M2,H1=class extends z0{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=v3*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Q3*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return v3*2*Math.atan(Math.tan(Q3*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){m4.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(m4.x,m4.y).multiplyScalar(-e/m4.z),m4.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(m4.x,m4.y).multiplyScalar(-e/m4.z)}getViewSize(e,t){return this.getViewBounds(e,ts,is),t.subVectors(is,ts)}setViewOffset(e,t,i,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Q3*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let o=r.fullWidth,l=r.fullHeight;s+=r.offsetX*a/o,t-=r.offsetY*i/l,a*=r.width/o,i*=r.height/l}let c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Jn=class extends y0{constructor(){super(new H1(90,1,.5,500)),this.isPointLightShadow=!0}},L0=class extends w3{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Jn}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},C0=class extends z0{constructor(e=-1,t=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-e,r=i+e,c=a+t,o=a-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,c-=f*this.view.offsetY,o=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,c,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kn=class extends y0{constructor(){super(new C0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},b0=class extends w3{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(N1.DEFAULT_UP),this.updateMatrix(),this.target=new N1,this.shadow=new Kn}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},w0=class extends w3{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var f3=-90,h3=1,T3=class extends N1{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new H1(f3,h3,e,t);a.layers=this.layers,this.add(a);let s=new H1(f3,h3,e,t);s.layers=this.layers,this.add(s);let r=new H1(f3,h3,e,t);r.layers=this.layers,this.add(r);let c=new H1(f3,h3,e,t);c.layers=this.layers,this.add(c);let o=new H1(f3,h3,e,t);o.layers=this.layers,this.add(o);let l=new H1(f3,h3,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,a,s,r,c,o]=t;for(let l of t)this.remove(l);if(e===pe)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===m3)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,c,o,l,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=S,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,h,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},mi=class extends H1{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ra="\\[\\]\\.:\\/",D8=new RegExp("["+Ra+"]","g"),Pa="[^"+Ra+"]",F8="[^"+Ra.replace("\\.","")+"]",U8=/((?:WC+[\/:])*)/.source.replace("WC",Pa),B8=/(WCOD+)?/.source.replace("WCOD",F8),k8=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pa),O8=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pa),H8=new RegExp("^"+U8+B8+k8+O8+"$"),G8=["material","materials","bones","map"],Qn=class{constructor(e,t,i){let a=i||c1.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},c1=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(D8,"")}static parseTrackName(e){let t=H8.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=i.nodeName.substring(a+1);G8.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let r=0;r<s.length;r++){let c=s[r];if(c.name===t||c.uuid===t)return c;let o=i(c.children);if(o)return o}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,a=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){w2("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){N2("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){N2("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){N2("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){N2("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){N2("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){N2("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){N2("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[a];if(r===void 0){let l=t.nodeName;N2("PropertyBinding: Trying to update property for track: "+l+"."+a+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){N2("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){N2("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(o=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};c1.Composite=Qn;c1.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};c1.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};c1.prototype.GetterByBindingType=[c1.prototype._getValue_direct,c1.prototype._getValue_array,c1.prototype._getValue_arrayElement,c1.prototype._getValue_toArray];c1.prototype.SetterByBindingTypeAndVersioning=[[c1.prototype._setValue_direct,c1.prototype._setValue_direct_setNeedsUpdate,c1.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[c1.prototype._setValue_array,c1.prototype._setValue_array_setNeedsUpdate,c1.prototype._setValue_array_setMatrixWorldNeedsUpdate],[c1.prototype._setValue_arrayElement,c1.prototype._setValue_arrayElement_setNeedsUpdate,c1.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[c1.prototype._setValue_fromArray,c1.prototype._setValue_fromArray_setNeedsUpdate,c1.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var df=new Float32Array(1);var ns=new e1,T0=class{constructor(e,t,i=0,a=1/0){this.ray=new F4(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new x3,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):N2("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ns.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ns),this}intersectObject(e,t=!0,i=[]){return jn(e,this,i,t),i.sort(as),i}intersectObjects(e,t=!0,i=[]){for(let a=0,s=e.length;a<s;a++)jn(e[a],this,i,t);return i.sort(as),i}};function as(n,e){return n.distance-e.distance}function jn(n,e,t,i){let a=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){let s=n.children;for(let r=0,c=s.length;r<c;r++)jn(s[r],e,t,!0)}}var A0=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,w2("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var ka=class ka{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=a,this}};ka.prototype.isMatrix2=!0;var ea=ka,ss=new M2,E0=class{constructor(e=new M2(1/0,1/0),t=new M2(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ss.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ss).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function Ia(n,e,t,i){let a=V8(i);switch(t){case va:return n*e;case Sa:return n*e/a.components*a.byteLength;case zi:return n*e/a.components*a.byteLength;case L4:return n*e*2/a.components*a.byteLength;case Li:return n*e*2/a.components*a.byteLength;case xa:return n*e*3/a.components*a.byteLength;case Te:return n*e*4/a.components*a.byteLength;case Ci:return n*e*4/a.components*a.byteLength;case I0:case D0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case F0:case U0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wi:case Ai:return Math.max(n,16)*Math.max(e,8)/4;case bi:case Ti:return Math.max(n,8)*Math.max(e,8)/2;case Ei:case Ni:case Pi:case Ii:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ri:case B0:case Di:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fi:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ui:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bi:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ki:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Oi:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hi:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gi:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vi:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wi:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qi:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xi:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yi:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $i:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zi:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ji:case Ki:case Qi:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ji:case en:return Math.ceil(n/4)*Math.ceil(e/4)*8;case k0:case tn:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function V8(n){switch(n){case F1:case pa:return{byteLength:1,components:1};case R3:case ma:case we:return{byteLength:2,components:1};case _i:case yi:return{byteLength:2,components:4};case Ce:case Si:case be:return{byteLength:4,components:1};case ga:case Ma:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?w2("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function pr(){let n=null,e=!1,t=null,i=null;function a(s,r){i=n.requestAnimationFrame(a),t(s,r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function q8(n){let e=new WeakMap;function t(c,o){let l=c.array,f=c.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(o,h),n.bufferData(o,l,f),c.onUploadCallback();let u;if(l instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)u=n.HALF_FLOAT;else if(l instanceof Uint16Array)c.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=n.SHORT;else if(l instanceof Uint32Array)u=n.UNSIGNED_INT;else if(l instanceof Int32Array)u=n.INT;else if(l instanceof Int8Array)u=n.BYTE;else if(l instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:d}}function i(c,o,l){let f=o.array,d=o.updateRanges;if(n.bindBuffer(l,c),d.length===0)n.bufferSubData(l,0,f);else{d.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<d.length;u++){let g=d[h],S=d[u];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,d[h]=S)}d.length=h+1;for(let u=0,g=d.length;u<g;u++){let S=d[u];n.bufferSubData(l,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}o.clearUpdateRanges()}o.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);let o=e.get(c);o&&(n.deleteBuffer(o.buffer),e.delete(c))}function r(c,o){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let l=e.get(c);if(l===void 0)e.set(c,t(c,o));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,c,o),l.version=c.version}}return{get:a,remove:s,update:r}}var X8=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y8=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$8=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z8=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J8=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K8=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q8=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j8=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eo=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,to=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,io=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,no=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ao=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,so=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ro=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,co=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ho=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,po=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,go=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mo=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,So=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_o=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yo="gl_FragColor = linearToOutputTexel( gl_FragColor );",zo=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Co=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bo=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,To=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ao=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eo=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,No=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ro=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Po=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Io=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Do=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fo=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uo=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Bo=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ko=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oo=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ho=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Go=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vo=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wo=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qo=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xo=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yo=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$o=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Zo=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jo=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ko=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qo=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jo=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,el=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,il=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,al=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rl=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ol=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ll=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hl=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ul=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ml=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ml=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_l=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ll=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Al=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,El=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Il=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dl=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ul=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kl=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ol=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hl=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ql=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yl=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$l=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zl=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ql=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jl=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e5=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t5=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,i5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a5=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s5=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,c5=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o5=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l5=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f5=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h5=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u5=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d5=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p5=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m5=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v5=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x5=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S5=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y5=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z5=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L5=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,O2={alphahash_fragment:X8,alphahash_pars_fragment:Y8,alphamap_fragment:$8,alphamap_pars_fragment:Z8,alphatest_fragment:J8,alphatest_pars_fragment:K8,aomap_fragment:Q8,aomap_pars_fragment:j8,batching_pars_vertex:eo,batching_vertex:to,begin_vertex:io,beginnormal_vertex:no,bsdfs:ao,iridescence_fragment:so,bumpmap_pars_fragment:ro,clipping_planes_fragment:co,clipping_planes_pars_fragment:oo,clipping_planes_pars_vertex:lo,clipping_planes_vertex:fo,color_fragment:ho,color_pars_fragment:uo,color_pars_vertex:po,color_vertex:mo,common:go,defaultnormal_vertex:Mo,displacementmap_pars_vertex:vo,displacementmap_vertex:xo,emissivemap_fragment:So,emissivemap_pars_fragment:_o,colorspace_fragment:yo,colorspace_pars_fragment:zo,envmap_fragment:Lo,envmap_common_pars_fragment:Co,envmap_pars_fragment:bo,envmap_pars_vertex:wo,envmap_physical_pars_fragment:Bo,envmap_vertex:To,fog_vertex:Ao,fog_pars_vertex:Eo,fog_fragment:No,fog_pars_fragment:Ro,gradientmap_pars_fragment:Po,lightmap_pars_fragment:Io,lights_lambert_fragment:Do,lights_lambert_pars_fragment:Fo,lights_pars_begin:Uo,lights_toon_fragment:ko,lights_toon_pars_fragment:Oo,lights_phong_fragment:Ho,lights_phong_pars_fragment:Go,lights_physical_fragment:Vo,lights_physical_pars_fragment:Wo,lights_fragment_begin:qo,lights_fragment_maps:Xo,lights_fragment_end:Yo,lightprobes_pars_fragment:$o,logdepthbuf_fragment:Zo,logdepthbuf_pars_fragment:Jo,logdepthbuf_pars_vertex:Ko,logdepthbuf_vertex:Qo,map_fragment:jo,map_pars_fragment:el,map_particle_fragment:tl,map_particle_pars_fragment:il,metalnessmap_fragment:nl,metalnessmap_pars_fragment:al,morphinstance_vertex:sl,morphcolor_vertex:rl,morphnormal_vertex:cl,morphtarget_pars_vertex:ol,morphtarget_vertex:ll,normal_fragment_begin:fl,normal_fragment_maps:hl,normal_pars_fragment:ul,normal_pars_vertex:dl,normal_vertex:pl,normalmap_pars_fragment:ml,clearcoat_normal_fragment_begin:gl,clearcoat_normal_fragment_maps:Ml,clearcoat_pars_fragment:vl,iridescence_pars_fragment:xl,opaque_fragment:Sl,packing:_l,premultiplied_alpha_fragment:yl,project_vertex:zl,dithering_fragment:Ll,dithering_pars_fragment:Cl,roughnessmap_fragment:bl,roughnessmap_pars_fragment:wl,shadowmap_pars_fragment:Tl,shadowmap_pars_vertex:Al,shadowmap_vertex:El,shadowmask_pars_fragment:Nl,skinbase_vertex:Rl,skinning_pars_vertex:Pl,skinning_vertex:Il,skinnormal_vertex:Dl,specularmap_fragment:Fl,specularmap_pars_fragment:Ul,tonemapping_fragment:Bl,tonemapping_pars_fragment:kl,transmission_fragment:Ol,transmission_pars_fragment:Hl,uv_pars_fragment:Gl,uv_pars_vertex:Vl,uv_vertex:Wl,worldpos_vertex:ql,background_vert:Xl,background_frag:Yl,backgroundCube_vert:$l,backgroundCube_frag:Zl,cube_vert:Jl,cube_frag:Kl,depth_vert:Ql,depth_frag:jl,distance_vert:e5,distance_frag:t5,equirect_vert:i5,equirect_frag:n5,linedashed_vert:a5,linedashed_frag:s5,meshbasic_vert:r5,meshbasic_frag:c5,meshlambert_vert:o5,meshlambert_frag:l5,meshmatcap_vert:f5,meshmatcap_frag:h5,meshnormal_vert:u5,meshnormal_frag:d5,meshphong_vert:p5,meshphong_frag:m5,meshphysical_vert:g5,meshphysical_frag:M5,meshtoon_vert:v5,meshtoon_frag:x5,points_vert:S5,points_frag:_5,shadow_vert:y5,shadow_frag:z5,sprite_vert:L5,sprite_frag:C5},d2={common:{diffuse:{value:new I2(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R2},alphaMap:{value:null},alphaMapTransform:{value:new R2},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R2}},envmap:{envMap:{value:null},envMapRotation:{value:new R2},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R2}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R2}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R2},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R2},normalScale:{value:new M2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R2},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R2}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R2}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R2}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new I2(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new I2(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R2},alphaTest:{value:0},uvTransform:{value:new R2}},sprite:{diffuse:{value:new I2(16777215)},opacity:{value:1},center:{value:new M2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R2},alphaMap:{value:null},alphaMapTransform:{value:new R2},alphaTest:{value:0}}},Ve={basic:{uniforms:V1([d2.common,d2.specularmap,d2.envmap,d2.aomap,d2.lightmap,d2.fog]),vertexShader:O2.meshbasic_vert,fragmentShader:O2.meshbasic_frag},lambert:{uniforms:V1([d2.common,d2.specularmap,d2.envmap,d2.aomap,d2.lightmap,d2.emissivemap,d2.bumpmap,d2.normalmap,d2.displacementmap,d2.fog,d2.lights,{emissive:{value:new I2(0)},envMapIntensity:{value:1}}]),vertexShader:O2.meshlambert_vert,fragmentShader:O2.meshlambert_frag},phong:{uniforms:V1([d2.common,d2.specularmap,d2.envmap,d2.aomap,d2.lightmap,d2.emissivemap,d2.bumpmap,d2.normalmap,d2.displacementmap,d2.fog,d2.lights,{emissive:{value:new I2(0)},specular:{value:new I2(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:O2.meshphong_vert,fragmentShader:O2.meshphong_frag},standard:{uniforms:V1([d2.common,d2.envmap,d2.aomap,d2.lightmap,d2.emissivemap,d2.bumpmap,d2.normalmap,d2.displacementmap,d2.roughnessmap,d2.metalnessmap,d2.fog,d2.lights,{emissive:{value:new I2(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:O2.meshphysical_vert,fragmentShader:O2.meshphysical_frag},toon:{uniforms:V1([d2.common,d2.aomap,d2.lightmap,d2.emissivemap,d2.bumpmap,d2.normalmap,d2.displacementmap,d2.gradientmap,d2.fog,d2.lights,{emissive:{value:new I2(0)}}]),vertexShader:O2.meshtoon_vert,fragmentShader:O2.meshtoon_frag},matcap:{uniforms:V1([d2.common,d2.bumpmap,d2.normalmap,d2.displacementmap,d2.fog,{matcap:{value:null}}]),vertexShader:O2.meshmatcap_vert,fragmentShader:O2.meshmatcap_frag},points:{uniforms:V1([d2.points,d2.fog]),vertexShader:O2.points_vert,fragmentShader:O2.points_frag},dashed:{uniforms:V1([d2.common,d2.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:O2.linedashed_vert,fragmentShader:O2.linedashed_frag},depth:{uniforms:V1([d2.common,d2.displacementmap]),vertexShader:O2.depth_vert,fragmentShader:O2.depth_frag},normal:{uniforms:V1([d2.common,d2.bumpmap,d2.normalmap,d2.displacementmap,{opacity:{value:1}}]),vertexShader:O2.meshnormal_vert,fragmentShader:O2.meshnormal_frag},sprite:{uniforms:V1([d2.sprite,d2.fog]),vertexShader:O2.sprite_vert,fragmentShader:O2.sprite_frag},background:{uniforms:{uvTransform:{value:new R2},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:O2.background_vert,fragmentShader:O2.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new R2}},vertexShader:O2.backgroundCube_vert,fragmentShader:O2.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:O2.cube_vert,fragmentShader:O2.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:O2.equirect_vert,fragmentShader:O2.equirect_frag},distance:{uniforms:V1([d2.common,d2.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:O2.distance_vert,fragmentShader:O2.distance_frag},shadow:{uniforms:V1([d2.lights,d2.fog,{color:{value:new I2(0)},opacity:{value:1}}]),vertexShader:O2.shadow_vert,fragmentShader:O2.shadow_frag}};Ve.physical={uniforms:V1([Ve.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R2},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R2},clearcoatNormalScale:{value:new M2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R2},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new R2},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R2},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R2},sheen:{value:0},sheenColor:{value:new I2(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R2},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R2},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R2},transmissionSamplerSize:{value:new M2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R2},attenuationDistance:{value:0},attenuationColor:{value:new I2(0)},specularColor:{value:new I2(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R2},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R2},anisotropyVector:{value:new M2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R2}}]),vertexShader:O2.meshphysical_vert,fragmentShader:O2.meshphysical_frag};var sn={r:0,b:0,g:0},b5=new e1,mr=new R2;mr.set(-1,0,0,0,1,0,0,0,1);function w5(n,e,t,i,a,s){let r=new I2(0),c=a===!0?0:1,o,l,f=null,d=0,h=null;function u(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let z=_.backgroundBlurriness>0;b=e.get(b,z)}return b}function g(_){let b=!1,z=u(_);z===null?m(r,c):z&&z.isColor&&(m(z,1),b=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(_,b){let z=u(b);z&&z.isCubeTexture?(l===void 0&&(l=new Y2(new Be(1,1,1),new Z1({name:"BackgroundCubeMaterial",uniforms:q4(Ve.backgroundCube.uniforms),vertexShader:Ve.backgroundCube.vertexShader,fragmentShader:Ve.backgroundCube.fragmentShader,side:R1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=z,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(b5.makeRotationFromEuler(b.backgroundRotation)).transpose(),z.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(mr),l.material.toneMapped=X2.getTransfer(z.colorSpace)!==K2,(f!==z||d!==z.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=z,d=z.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):z&&z.isTexture&&(o===void 0&&(o=new Y2(new i4(2,2),new Z1({name:"BackgroundMaterial",uniforms:q4(Ve.background.uniforms),vertexShader:Ve.background.vertexShader,fragmentShader:Ve.background.fragmentShader,side:z4,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=z,o.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,o.material.toneMapped=X2.getTransfer(z.colorSpace)!==K2,z.matrixAutoUpdate===!0&&z.updateMatrix(),o.material.uniforms.uvTransform.value.copy(z.matrix),(f!==z||d!==z.version||h!==n.toneMapping)&&(o.material.needsUpdate=!0,f=z,d=z.version,h=n.toneMapping),o.layers.enableAll(),_.unshift(o,o.geometry,o.material,0,0,null))}function m(_,b){_.getRGB(sn,Na(n)),t.buffers.color.setClear(sn.r,sn.g,sn.b,b,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,b=1){r.set(_),c=b,m(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(r,c)},render:g,addToRenderList:S,dispose:p}}function T5(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=h(null),s=a,r=!1;function c(I,U,V,E,G){let W=!1,O=d(I,E,V,U);s!==O&&(s=O,l(s.object)),W=u(I,E,V,G),W&&g(I,E,V,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,z(I,U,V,E),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function o(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function f(I){return n.deleteVertexArray(I)}function d(I,U,V,E){let G=E.wireframe===!0,W=i[U.id];W===void 0&&(W={},i[U.id]=W);let O=I.isInstancedMesh===!0?I.id:0,e2=W[O];e2===void 0&&(e2={},W[O]=e2);let X=e2[V.id];X===void 0&&(X={},e2[V.id]=X);let Q=X[G];return Q===void 0&&(Q=h(o()),X[G]=Q),Q}function h(I){let U=[],V=[],E=[];for(let G=0;G<t;G++)U[G]=0,V[G]=0,E[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:E,object:I,attributes:{},index:null}}function u(I,U,V,E){let G=s.attributes,W=U.attributes,O=0,e2=V.getAttributes();for(let X in e2)if(e2[X].location>=0){let j=G[X],z2=W[X];if(z2===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(z2=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(z2=I.instanceColor)),j===void 0||j.attribute!==z2||z2&&j.data!==z2.data)return!0;O++}return s.attributesNum!==O||s.index!==E}function g(I,U,V,E){let G={},W=U.attributes,O=0,e2=V.getAttributes();for(let X in e2)if(e2[X].location>=0){let j=W[X];j===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let z2={};z2.attribute=j,j&&j.data&&(z2.data=j.data),G[X]=z2,O++}s.attributes=G,s.attributesNum=O,s.index=E}function S(){let I=s.newAttributes;for(let U=0,V=I.length;U<V;U++)I[U]=0}function m(I){p(I,0)}function p(I,U){let V=s.newAttributes,E=s.enabledAttributes,G=s.attributeDivisors;V[I]=1,E[I]===0&&(n.enableVertexAttribArray(I),E[I]=1),G[I]!==U&&(n.vertexAttribDivisor(I,U),G[I]=U)}function _(){let I=s.newAttributes,U=s.enabledAttributes;for(let V=0,E=U.length;V<E;V++)U[V]!==I[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function b(I,U,V,E,G,W,O){O===!0?n.vertexAttribIPointer(I,U,V,G,W):n.vertexAttribPointer(I,U,V,E,G,W)}function z(I,U,V,E){S();let G=E.attributes,W=V.getAttributes(),O=U.defaultAttributeValues;for(let e2 in W){let X=W[e2];if(X.location>=0){let Q=G[e2];if(Q===void 0&&(e2==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),e2==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){let j=Q.normalized,z2=Q.itemSize,D2=e.get(Q);if(D2===void 0)continue;let Z=D2.buffer,p2=D2.type,S2=D2.bytesPerElement,T2=p2===n.INT||p2===n.UNSIGNED_INT||Q.gpuType===Si;if(Q.isInterleavedBufferAttribute){let m2=Q.data,U2=m2.isInterleavedBuffer===!0?m2.stride:m2.itemSize,m1=Q.offset;if(m2.isInstancedInterleavedBuffer||m2.isInstancedBufferAttribute){for(let E2=0;E2<X.locationSize;E2++)p(X.location+E2,m2.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=m2.meshPerAttribute*m2.count)}else for(let E2=0;E2<X.locationSize;E2++)m(X.location+E2);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let E2=0;E2<X.locationSize;E2++)b(X.location+E2,z2/X.locationSize,p2,j,U2*S2,(m1+z2/X.locationSize*E2)*S2,T2)}else{if(Q.isInstancedBufferAttribute){for(let m2=0;m2<X.locationSize;m2++)p(X.location+m2,Q.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let m2=0;m2<X.locationSize;m2++)m(X.location+m2);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let m2=0;m2<X.locationSize;m2++)b(X.location+m2,z2/X.locationSize,p2,j,z2*S2,z2/X.locationSize*m2*S2,T2)}}else if(O!==void 0){let j=O[e2];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(X.location,j);break;case 3:n.vertexAttrib3fv(X.location,j);break;case 4:n.vertexAttrib4fv(X.location,j);break;default:n.vertexAttrib1fv(X.location,j)}}}}_()}function w(){P();for(let I in i){let U=i[I];for(let V in U){let E=U[V];for(let G in E){let W=E[G];for(let O in W)f(W[O].object),delete W[O];delete E[G]}}delete i[I]}}function C(I){if(i[I.id]===void 0)return;let U=i[I.id];for(let V in U){let E=U[V];for(let G in E){let W=E[G];for(let O in W)f(W[O].object),delete W[O];delete E[G]}}delete i[I.id]}function M(I){for(let U in i){let V=i[U];for(let E in V){let G=V[E];if(G[I.id]===void 0)continue;let W=G[I.id];for(let O in W)f(W[O].object),delete W[O];delete G[I.id]}}}function y(I){for(let U in i){let V=i[U],E=I.isInstancedMesh===!0?I.id:0,G=V[E];if(G!==void 0){for(let W in G){let O=G[W];for(let e2 in O)f(O[e2].object),delete O[e2];delete G[W]}delete V[E],Object.keys(V).length===0&&delete i[U]}}}function P(){N(),r=!0,s!==a&&(s=a,l(s.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:P,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfObject:y,releaseStatesOfProgram:M,initAttributes:S,enableAttribute:m,disableUnusedAttributes:_}}function A5(n,e,t){let i;function a(o){i=o}function s(o,l){n.drawArrays(i,o,l),t.update(l,i,1)}function r(o,l,f){f!==0&&(n.drawArraysInstanced(i,o,l,f),t.update(l,i,f))}function c(o,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,l,0,f);let h=0;for(let u=0;u<f;u++)h+=l[u];t.update(h,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=c}function E5(n,e,t,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(M){return!(M!==Te&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(M){let y=M===we&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==F1&&M!==be&&!y&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function o(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",f=o(l);f!==l&&(w2("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&w2("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&w2("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),z=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:r,textureTypeReadable:c,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:z,maxSamples:w,samples:C}}function N5(n){let e=this,t=null,i=0,a=!1,s=!1,r=new ye,c=new R2,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let u=d.length!==0||h||i!==0||a;return a=h,i=d.length,u},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=f(d,h,0)},this.setState=function(d,h,u){let g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!a||g===null||g.length===0||s&&!m)s?f(null):l();else{let _=s?0:i,b=_*4,z=p.clippingState||null;o.value=z,z=f(g,h,b,u);for(let w=0;w!==b;++w)z[w]=t[w];p.clippingState=z,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,u,g){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=o.value,g!==!0||m===null){let p=u+S*4,_=h.matrixWorldInverse;c.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,z=u;b!==S;++b,z+=4)r.copy(d[b]).applyMatrix4(_,c),r.normal.toArray(m,z),m[z+3]=r.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var G0=class extends se{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new u0(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Be(5,5,5),s=new Z1({name:"CubemapFromEquirect",uniforms:q4(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:R1,blending:H4});s.uniforms.tEquirect.value=t;let r=new Y2(a,s),c=t.minFilter;return t.minFilter===n4&&(t.minFilter=$1),new T3(1,10,this).update(e,r),t.minFilter=c,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,a);e.setRenderTarget(s)}},Ys=256,R5=3,P5=20,gr=256,Mr=16,I5=3,D5=new A,F5=new I2,cn=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new T3(1,10,null),this._boxMesh=new Y2(new Be(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,a=100,s={}){let{size:r=256,position:c=D5}=s,o=this._renderer;this._setSize(r);let l=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);let d=o.autoClear,h=o.autoClearColor,u=o.autoClearDepth,g=o.autoClearStencil,S=e.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,S===null&&(e.background=o.getClearColor(F5));let m=new T3(i,a,f);return m.position.copy(c),m.update(o,e),o.autoClear=d,o.autoClearColor=h,o.autoClearDepth=u,o.autoClearStencil=g,e.background=S,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Js(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ys,wa(e))}_fromTexture(e,t){e.mapping===V4||e.mapping===N3?this._setSize(e.image.length===0?Ys:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=$s(e,!1,!1),i=Math.log2(e)-R5;for(let a=0;a<=i;a++)t.texture.mipmaps.push({width:e>>a,height:e>>a});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=$s(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let a=this._boxMesh,s=this._cubeCamera;a.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let r=e.width>>t;e.viewport.set(0,0,r,r),s.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===V4||e.mapping===N3?(this._cubemapMaterial===null&&(this._cubemapMaterial=Js()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zs()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=U5(),this._integrationMaterial=B5());let t=this._cubeSize,i=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Mr);for(let r=0;r<=i;r++){let c=n.lodToRoughness(r,i);if(r>i-I5)s.roughness.value=c,this._renderCube(e,r,this._integrationMaterial);else{let o=c>0?Math.log2(t)+.5*Math.log2(6/(gr*Math.pow(c,4)))+.5:0;a.roughness.value=c,a.lodBias.value=o,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=k5());let i=this._blurMaterial,a=i.uniforms,s=this._sourceTarget;a.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,a.envMap.value=s.texture,this._renderCube(e,0,i),a.envMap.value=e.texture,this._renderCube(s,0,i)}};function $s(n,e,t){return new G0(n,{minFilter:n4,generateMipmaps:e,type:we,colorSpace:n0,depthBuffer:t})}function V0(n,e,t){return new Z1({name:n,uniforms:e,vertexShader:O2.cube_vert,fragmentShader:t,side:R1,blending:H4,depthTest:!1,depthWrite:!1})}function U5(){return V0("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${gr}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function B5(){return V0("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Mr}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function k5(){return V0("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${P5}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Zs(){return V0("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Js(){return V0("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function O5(n){let e=new WeakMap,t=new WeakMap,i=null;function a(h,u=!1){return h==null?null:u?r(h):s(h)}function s(h){if(h&&h.isTexture){let u=h.mapping;if(u===Mi||u===vi)if(e.has(h)){let g=e.get(h).texture;return c(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let S=new G0(g.height);return S.fromEquirectangularTexture(n,h),e.set(h,S),h.addEventListener("dispose",l),c(S.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let u=h.mapping,g=u===Mi||u===vi,S=u===V4||u===N3;if(g||S){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new cn(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return g&&_&&_.height>0||S&&_&&o(_)?(i===null&&(i=new cn(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function c(h,u){return u===Mi?h.mapping=V4:u===vi&&(h.mapping=N3),h}function o(h){let u=0,g=6;for(let S=0;S<g;S++)h[S]!==void 0&&u++;return u===g}function l(h){let u=h.target;u.removeEventListener("dispose",l);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function f(h){let u=h.target;u.removeEventListener("dispose",f);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:d}}function H5(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let a=t(i);return a===null&&K3("WebGLRenderer: "+i+" extension not supported."),a}}}function G5(n,e,t,i){let a={},s=new WeakMap,r=new FinalizationRegistry(g=>delete a[g]);function c(g){o(g.target)}function o(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",c),delete a[g.id],r.unregister(g);let S=s.get(g);S&&(e.remove(S),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,S){return a[S.id]!==void 0||(S.addEventListener("dispose",c),a[S.id]=new WeakRef(S),r.register(S,S.id,S),t.memory.geometries++),S}function f(g){let S=g.attributes;for(let m in S)e.update(S[m],n.ARRAY_BUFFER)}function d(g){let S=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let _=S!==null?S.array.length:m.array.length/3-1,b=m.count>=65535?l0:o0,z=new b(Math.ceil(_/3)*6,1),w=z.array;if(S!==null){let M=S.array;p=S.version;for(let y=0,P=0;y<_;y+=3){let N=M[y+0],I=M[y+1],U=M[y+2];w[P++]=N,w[P++]=I,w[P++]=I,w[P++]=U,w[P++]=U,w[P++]=N}}else{p=m.version;for(let M=0,y=0;M<_;M+=3){let P=M+0,N=M+1,I=M+2;w[y++]=P,w[y++]=N,w[y++]=N,w[y++]=I,w[y++]=I,w[y++]=P}}z.version=p;let C=s.get(g);C&&e.remove(C),s.set(g,z)}function h(g){let S=s.get(g);if(S){let m=g.index;m!==null&&S.version<m.version&&d(g)}else d(g);return s.get(g)}function u(){for(let g in a){let S=a[g].deref();S!==void 0&&o(S)}}return{get:l,update:f,getWireframeAttribute:h,dispose:u}}function V5(n,e,t){let i;function a(d){i=d}let s,r;function c(d){s=d.type,r=d.bytesPerElement}function o(d,h){n.drawElements(i,h,s,d*r),t.update(h,i,1)}function l(d,h,u){u!==0&&(n.drawElementsInstanced(i,h,s,d*r,u),t.update(h,i,u))}function f(d,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,u);let S=0;for(let m=0;m<u;m++)S+=h[m];t.update(S,i,1)}this.setMode=a,this.setIndex=c,this.render=o,this.renderInstances=l,this.renderMultiDraw=f}function W5(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,c){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=c*(s/3);break;case n.LINES:t.lines+=c*(s/2);break;case n.LINE_STRIP:t.lines+=c*(s-1);break;case n.LINE_LOOP:t.lines+=c*s;break;case n.POINTS:t.points+=c*s;break;default:N2("WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function q5(n,e,t){let i=new WeakMap,a=new r1;function s(r,c,o){let l=r.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=f!==void 0?f.length:0,h=i.get(c);if(h===void 0||h.count!==d){let P=function(){M.dispose(),i.delete(c),c.removeEventListener("dispose",P)};h!==void 0&&h.texture.dispose();let u=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],_=c.morphAttributes.color||[],b=0;u===!0&&(b=1),g===!0&&(b=2),S===!0&&(b=3);let z=c.attributes.position.count*b,w=1;z>e.maxTextureSize&&(w=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);let C=new Float32Array(z*w*4*d),M=new r0(C,z,w,d);M.type=be,M.needsUpdate=!0;let y=b*4;for(let N=0;N<d;N++){let I=m[N],U=p[N],V=_[N],E=z*w*4*N;for(let G=0;G<I.count;G++){let W=G*y;u===!0&&(a.fromBufferAttribute(I,G),C[E+W+0]=a.x,C[E+W+1]=a.y,C[E+W+2]=a.z,C[E+W+3]=0),g===!0&&(a.fromBufferAttribute(U,G),C[E+W+4]=a.x,C[E+W+5]=a.y,C[E+W+6]=a.z,C[E+W+7]=0),S===!0&&(a.fromBufferAttribute(V,G),C[E+W+8]=a.x,C[E+W+9]=a.y,C[E+W+10]=a.z,C[E+W+11]=V.itemSize===4?a.w:1)}}h={count:d,texture:M,size:new M2(z,w)},i.set(c,h),c.addEventListener("dispose",P)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let u=0;for(let S=0;S<l.length;S++)u+=l[S];let g=c.morphTargetsRelative?1:1-u;o.getUniforms().setValue(n,"morphTargetBaseInfluence",g),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function X5(n,e,t,i,a){let s=new WeakMap;function r(l){let f=a.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==f&&(u.update(),s.set(u,f))}return h}function c(){s=new WeakMap}function o(l){let f=l.target;f.removeEventListener("dispose",o),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:r,dispose:c}}var Y5={[ca]:"LINEAR_TONE_MAPPING",[oa]:"REINHARD_TONE_MAPPING",[la]:"CINEON_TONE_MAPPING",[R0]:"ACES_FILMIC_TONE_MAPPING",[ha]:"AGX_TONE_MAPPING",[ua]:"NEUTRAL_TONE_MAPPING",[fa]:"CUSTOM_TONE_MAPPING"};function $5(n,e,t,i,a,s){let r=new se(e,t,{type:n,depthBuffer:a,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,o=null,l=null,f=new f1;f.setAttribute("position",new s1([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new s1([0,2,0,0,2,0],2));let d=new x4({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Y2(f,d),u=new C0(-1,1,1,-1,0,1),g=null,S=null,m=!1,p,_=null,b=[],z=!1;this.setSize=function(w,C){r.setSize(w,C),c!==null&&c.setSize(w,C),o!==null&&o.setSize(w,C);for(let M=0;M<b.length;M++){let y=b[M];y.setSize&&y.setSize(w,C)}},this.setEffects=function(w){b=w,z=b.length>0&&b[0].isRenderPass===!0;let C=r.width,M=r.height;b.length>0&&c===null&&(c=new se(C,M,{type:we,depthBuffer:!1,stencilBuffer:!1}),o=new se(C,M,{type:we,depthBuffer:!1,stencilBuffer:!1}));let y=a===!0&&b.some(P=>P.needsDepthTexture===!0);y!==(r.depthTexture!==null)&&(y===!0&&l===null&&(l=new t4(C,M),s===!0&&(l.format=a4,l.type=W4)),r.dispose(),r.depthTexture=y?l:null,r.resolveDepthBuffer=y,r.storeMultisampledDepthBuffer=y);for(let P=0;P<b.length;P++){let N=b[P];N.setSize&&N.setSize(C,M),y&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(l)}},this.begin=function(w,C){if(m||w.toneMapping===He&&b.length===0)return!1;if(_=C,C!==null){let M=C.width,y=C.height;(r.width!==M||r.height!==y)&&this.setSize(M,y)}return z===!1&&w.setRenderTarget(r),p=w.toneMapping,w.toneMapping=He,!0},this.hasRenderPass=function(){return z},this.end=function(w,C){w.toneMapping=p,m=!0;let M=r,y=c;for(let P=0;P<b.length;P++){let N=b[P];N.enabled!==!1&&(N.render(w,y,M,C),N.needsSwap!==!1&&(M=y,y=y===c?o:c))}if(g!==w.outputColorSpace||S!==w.toneMapping){g=w.outputColorSpace,S=w.toneMapping,d.defines={},X2.getTransfer(g)===K2&&(d.defines.SRGB_TRANSFER="");let P=Y5[S];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,w.setRenderTarget(_),w.render(h,u),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),c!==null&&c.dispose(),o!==null&&o.dispose(),f.dispose(),d.dispose()}}var vr=new y1,xr=new t4(1,1),Sr=new d0(1),_r=new r0,yr=new Wt,zr=new u0,Ks=[],Qs=[],js=new Float32Array(16),er=new Float32Array(9),tr=new Float32Array(4);function I3(n,e,t){let i=n[0];if(i<=0||i>0)return n;let a=e*t,s=Ks[a];if(s===void 0&&(s=new Float32Array(a),Ks[a]=s),e!==0){i.toArray(s,0);for(let r=1,c=0;r!==e;++r)c+=t,n[r].toArray(s,c)}return s}function z1(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function L1(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ln(n,e){let t=Qs[e];t===void 0&&(t=new Int32Array(e),Qs[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Z5(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function J5(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(z1(t,e))return;n.uniform2fv(this.addr,e),L1(t,e)}}function K5(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(z1(t,e))return;n.uniform3fv(this.addr,e),L1(t,e)}}function Q5(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(z1(t,e))return;n.uniform4fv(this.addr,e),L1(t,e)}}function j5(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(z1(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),L1(t,e)}else{if(z1(t,i))return;tr.set(i),n.uniformMatrix2fv(this.addr,!1,tr),L1(t,i)}}function e7(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(z1(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),L1(t,e)}else{if(z1(t,i))return;er.set(i),n.uniformMatrix3fv(this.addr,!1,er),L1(t,i)}}function t7(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(z1(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),L1(t,e)}else{if(z1(t,i))return;js.set(i),n.uniformMatrix4fv(this.addr,!1,js),L1(t,i)}}function i7(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function n7(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(z1(t,e))return;n.uniform2iv(this.addr,e),L1(t,e)}}function a7(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(z1(t,e))return;n.uniform3iv(this.addr,e),L1(t,e)}}function s7(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(z1(t,e))return;n.uniform4iv(this.addr,e),L1(t,e)}}function r7(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function c7(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(z1(t,e))return;n.uniform2uiv(this.addr,e),L1(t,e)}}function o7(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(z1(t,e))return;n.uniform3uiv(this.addr,e),L1(t,e)}}function l7(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(z1(t,e))return;n.uniform4uiv(this.addr,e),L1(t,e)}}function fn(n){return n.version===0&&(n.compareFunction=za,n.needsUpdate=!0),n}function f7(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_2D_SHADOW?s=fn(xr):s=vr,t.setTexture2D(e||s,a)}function h7(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||yr,a)}function u7(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=fn(Sr):s=zr,t.setTextureCube(e||s,a)}function d7(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||_r,a)}function p7(n){switch(n){case 5126:return Z5;case 35664:return J5;case 35665:return K5;case 35666:return Q5;case 35674:return j5;case 35675:return e7;case 35676:return t7;case 5124:case 35670:return i7;case 35667:case 35671:return n7;case 35668:case 35672:return a7;case 35669:case 35673:return s7;case 5125:return r7;case 36294:return c7;case 36295:return o7;case 36296:return l7;case 35678:case 36198:case 36298:case 36306:case 35682:return f7;case 35679:case 36299:case 36307:return h7;case 35680:case 36300:case 36308:case 36293:return u7;case 36289:case 36303:case 36311:case 36292:return d7}}function m7(n,e){n.uniform1fv(this.addr,e)}function g7(n,e){let t=I3(e,this.size,2);n.uniform2fv(this.addr,t)}function M7(n,e){let t=I3(e,this.size,3);n.uniform3fv(this.addr,t)}function v7(n,e){let t=I3(e,this.size,4);n.uniform4fv(this.addr,t)}function x7(n,e){let t=I3(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function S7(n,e){let t=I3(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _7(n,e){let t=I3(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function y7(n,e){n.uniform1iv(this.addr,e)}function z7(n,e){n.uniform2iv(this.addr,e)}function L7(n,e){n.uniform3iv(this.addr,e)}function C7(n,e){n.uniform4iv(this.addr,e)}function b7(n,e){n.uniform1uiv(this.addr,e)}function w7(n,e){n.uniform2uiv(this.addr,e)}function T7(n,e){n.uniform3uiv(this.addr,e)}function A7(n,e){n.uniform4uiv(this.addr,e)}function E7(n,e,t){let i=this.cache,a=e.length,s=ln(t,a);z1(i,s)||(n.uniform1iv(this.addr,s),L1(i,s));let r;this.type===n.SAMPLER_2D_SHADOW?r=fn(xr):r=vr;for(let c=0;c!==a;++c)t.setTexture2D(e[c]||r,s[c])}function N7(n,e,t){let i=this.cache,a=e.length,s=ln(t,a);z1(i,s)||(n.uniform1iv(this.addr,s),L1(i,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||yr,s[r])}function R7(n,e,t){let i=this.cache,a=e.length,s=ln(t,a);z1(i,s)||(n.uniform1iv(this.addr,s),L1(i,s));let r;this.type===n.SAMPLER_CUBE_SHADOW?r=fn(Sr):r=zr;for(let c=0;c!==a;++c)t.setTextureCube(e[c]||r,s[c])}function P7(n,e,t){let i=this.cache,a=e.length,s=ln(t,a);z1(i,s)||(n.uniform1iv(this.addr,s),L1(i,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||_r,s[r])}function I7(n){switch(n){case 5126:return m7;case 35664:return g7;case 35665:return M7;case 35666:return v7;case 35674:return x7;case 35675:return S7;case 35676:return _7;case 5124:case 35670:return y7;case 35667:case 35671:return z7;case 35668:case 35672:return L7;case 35669:case 35673:return C7;case 5125:return b7;case 36294:return w7;case 36295:return T7;case 36296:return A7;case 35678:case 36198:case 36298:case 36306:case 35682:return E7;case 35679:case 36299:case 36307:return N7;case 35680:case 36300:case 36308:case 36293:return R7;case 36289:case 36303:case 36311:case 36292:return P7}}var Ga=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=p7(t.type)}},Va=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I7(t.type)}},Wa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let c=a[s];c.setValue(e,t[c.id],i)}}},Oa=/(\w+)(\])?(\[|\.)?/g;function ir(n,e){n.seq.push(e),n.map[e.id]=e}function D7(n,e,t){let i=n.name,a=i.length;for(Oa.lastIndex=0;;){let s=Oa.exec(i),r=Oa.lastIndex,c=s[1],o=s[2]==="]",l=s[3];if(o&&(c=c|0),l===void 0||l==="["&&r+2===a){ir(t,l===void 0?new Ga(c,n,e):new Va(c,n,e));break}else{let d=t.map[c];d===void 0&&(d=new Wa(c),ir(t,d)),t=d}}}var P3=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let c=e.getActiveUniform(t,r),o=e.getUniformLocation(t,c.name);D7(c,o,this)}let a=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,t,i,a){let s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){let a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,r=t.length;s!==r;++s){let c=t[s],o=i[c.id];o.needsUpdate!==!1&&c.setValue(e,o.value,a)}}static seqWithValue(e,t){let i=[];for(let a=0,s=e.length;a!==s;++a){let r=e[a];r.id in t&&i.push(r)}return i}};function nr(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var F7=37297,U7=0;function B7(n,e){let t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){let c=r+1;i.push(`${c===e?">":" "} ${c}: ${t[r]}`)}return i.join(`
`)}var ar=new R2;function k7(n){X2._getMatrix(ar,X2.workingColorSpace,n);let e=`mat3( ${ar.elements.map(t=>t.toFixed(4))} )`;switch(X2.getTransfer(n)){case a0:return[e,"LinearTransferOETF"];case K2:return[e,"sRGBTransferOETF"];default:return w2("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function sr(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let c=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+B7(n.getShaderSource(e),c)}else return s}function O7(n,e){let t=k7(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var H7={[ca]:"Linear",[oa]:"Reinhard",[la]:"Cineon",[R0]:"ACESFilmic",[ha]:"AgX",[ua]:"Neutral",[fa]:"Custom"};function G7(n,e){let t=H7[e];return t===void 0?(w2("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rn=new A;function V7(){X2.getLuminanceCoefficients(rn);let n=rn.x.toFixed(4),e=rn.y.toFixed(4),t=rn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W7(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(H0).join(`
`)}function q7(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function X7(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let s=n.getActiveAttrib(e,a),r=s.name,c=1;s.type===n.FLOAT_MAT2&&(c=2),s.type===n.FLOAT_MAT3&&(c=3),s.type===n.FLOAT_MAT4&&(c=4),t[r]={type:s.type,location:n.getAttribLocation(e,r),locationSize:c}}return t}function H0(n){return n!==""}function rr(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function cr(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Y7=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(n){return n.replace(Y7,$7)}function $7(n,e){let t=O2[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return qa(t)}var Z7=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function or(n){return n.replace(Z7,J7)}function J7(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function lr(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var K7={[N0]:"SHADOWMAP_TYPE_PCF",[A3]:"SHADOWMAP_TYPE_VSM"};function Q7(n){return K7[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var j7={[N3]:"ENVMAP_MODE_REFRACTION"};function e9(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":j7[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var t9={[ra]:"ENVMAP_BLENDING_MULTIPLY",[ws]:"ENVMAP_BLENDING_MIX",[Ts]:"ENVMAP_BLENDING_ADD"};function i9(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":t9[n.combine]||"ENVMAP_BLENDING_NONE"}function n9(n,e,t,i){let a=n.getContext(),s=t.defines,r=t.vertexShader,c=t.fragmentShader,o=Q7(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=e9(t),d=i9(t),h=W7(t),u=q7(s),g=a.createProgram(),S,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(H0).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(H0).join(`
`),m.length>0&&(m+=`
`)):(S=[lr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(H0).join(`
`),m=[lr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==He?"#define TONE_MAPPING":"",t.toneMapping!==He?O2.tonemapping_pars_fragment:"",t.toneMapping!==He?G7("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",O2.colorspace_pars_fragment,O7("linearToOutputTexel",t.outputColorSpace),V7(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(H0).join(`
`)),r=qa(r),r=rr(r,t),r=cr(r,t),c=qa(c),c=rr(c,t),c=cr(c,t),r=or(r),c=or(c),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,S=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===Ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=p+S+r,b=p+m+c,z=nr(a,a.VERTEX_SHADER,_),w=nr(a,a.FRAGMENT_SHADER,b);a.attachShader(g,z),a.attachShader(g,w),t.index0AttributeName!==void 0?a.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function C(N){if(n.debug.checkShaderErrors){let I=a.getProgramInfoLog(g)||"",U=a.getShaderInfoLog(z)||"",V=a.getShaderInfoLog(w)||"",E=I.trim(),G=U.trim(),W=V.trim(),O=!0,e2=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,g,z,w);else{let X=sr(a,z,"vertex"),Q=sr(a,w,"fragment");N2("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+E+`
`+X+`
`+Q)}else E!==""?w2("WebGLProgram: Program Info Log:",E):(G===""||W==="")&&(e2=!1);e2&&(N.diagnostics={runnable:O,programLog:E,vertexShader:{log:G,prefix:S},fragmentShader:{log:W,prefix:m}})}a.deleteShader(z),a.deleteShader(w),M=new P3(a,g),y=X7(a,g)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=a.getProgramParameter(g,F7)),P},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U7++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=z,this.fragmentShader=w,this}var a9=0,Xa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ya(e),t.set(e,i)),i}},Ya=class{constructor(e){this.id=a9++,this.code=e,this.usedTimes=0}};function s9(n){return n===L4||n===B0||n===k0}function r9(n,e,t,i,a,s){let r=new x3,c=new Xa,o=new Set,l=[],f=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(M){return o.add(M),M===0?"uv":`uv${M}`}function g(M,y,P,N,I,U){let V=N.fog,E=I.geometry,G=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,W=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,O=e.get(M.envMap||G,W),e2=h[M.type],X=i.precision;M.precision!==null&&(X=i.getMaxPrecision(M.precision),X!==M.precision&&w2("WebGLProgram.getParameters:",M.precision,"not supported, using",X,"instead."));let Q=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,j=Q!==void 0?Q.length:0,z2=0;E.morphAttributes.position!==void 0&&(z2=1),E.morphAttributes.normal!==void 0&&(z2=2),E.morphAttributes.color!==void 0&&(z2=3);let D2,Z,p2,S2;if(e2){let u2=Ve[e2];D2=u2.vertexShader,Z=u2.fragmentShader}else{D2=M.vertexShader,Z=M.fragmentShader;let u2=c.getVertexShaderStage(M),j2=c.getFragmentShaderStage(M);c.update(M,u2,j2),p2=u2.id,S2=j2.id}let T2=n.getRenderTarget(),m2=n.state.buffers.depth.getReversed(),U2=I.isInstancedMesh===!0,m1=I.isBatchedMesh===!0,E2=!!M.map,Q2=!!M.matcap,t1=!!O,V2=t1&&O.isPMREMTexture===!0,I1=!!M.aoMap,S1=!!M.lightMap,K1=!!M.bumpMap&&M.wireframe===!1,h1=!!M.normalMap,Ne=!!M.displacementMap,w1=!!M.emissiveMap,le=!!M.metalnessMap,fe=!!M.roughnessMap,he=M.anisotropy>0,D=M.clearcoat>0,ue=M.diffuseRoughness>0,o1=M.dispersion>0,l1=M.retroreflectivity>0,h2=M.iridescence>0,_1=M.sheen>0,A2=M.transmission>0,P2=he&&!!M.anisotropyMap,L=D&&!!M.clearcoatMap,v=D&&!!M.clearcoatNormalMap,B=D&&!!M.clearcoatRoughnessMap,t2=ue&&!!M.diffuseRoughnessMap,K=h2&&!!M.iridescenceMap,a2=h2&&!!M.iridescenceThicknessMap,l2=_1&&!!M.sheenColorMap,Y=_1&&!!M.sheenRoughnessMap,$=!!M.specularMap,r2=!!M.specularColorMap,T=!!M.specularIntensityMap,J=A2&&!!M.transmissionMap,q=A2&&!!M.thicknessMap,c2=!!M.gradientMap,n2=!!M.alphaMap,s2=M.alphaTest>0,C2=!!M.alphaHash,k2=!!M.extensions,i2=He;M.toneMapped&&(T2===null||T2.isXRRenderTarget===!0)&&(i2=n.toneMapping);let b2=V2?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,B2={shaderID:e2,shaderType:M.type,shaderName:M.name,vertexShader:D2,fragmentShader:Z,defines:M.defines,customVertexShaderID:p2,customFragmentShaderID:S2,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:X,batching:m1,batchingColor:m1&&I._colorsTexture!==null,instancing:U2,instancingColor:U2&&I.instanceColor!==null,instancingMorph:U2&&I.morphTexture!==null,outputColorSpace:T2===null?n.outputColorSpace:T2.isXRRenderTarget===!0?T2.texture.colorSpace:X2.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:E2,matcap:Q2,envMap:t1,envMapMode:t1&&O.mapping,envMapPMREM:V2,envMapMaxLod:V2?b2.length-1:null,envMapSize:V2?b2[0].width:null,aoMap:I1,lightMap:S1,bumpMap:K1,normalMap:h1,displacementMap:Ne,emissiveMap:w1,normalMapObjectSpace:h1&&M.normalMapType===Ns,normalMapTangentSpace:h1&&M.normalMapType===nn,packedNormalMap:h1&&M.normalMapType===nn&&s9(M.normalMap.format),metalnessMap:le,roughnessMap:fe,anisotropy:he,anisotropyMap:P2,clearcoat:D,clearcoatMap:L,clearcoatNormalMap:v,clearcoatRoughnessMap:B,diffuseRoughness:ue,diffuseRoughnessMap:t2,dispersion:o1,retroreflection:l1,iridescence:h2,iridescenceMap:K,iridescenceThicknessMap:a2,sheen:_1,sheenColorMap:l2,sheenRoughnessMap:Y,specularMap:$,specularColorMap:r2,specularIntensityMap:T,transmission:A2,transmissionMap:J,thicknessMap:q,gradientMap:c2,opaque:M.transparent===!1&&M.blending===E3&&M.alphaToCoverage===!1,alphaMap:n2,alphaTest:s2,alphaHash:C2,combine:M.combine,mapUv:E2&&u(M.map.channel),aoMapUv:I1&&u(M.aoMap.channel),lightMapUv:S1&&u(M.lightMap.channel),bumpMapUv:K1&&u(M.bumpMap.channel),normalMapUv:h1&&u(M.normalMap.channel),displacementMapUv:Ne&&u(M.displacementMap.channel),emissiveMapUv:w1&&u(M.emissiveMap.channel),metalnessMapUv:le&&u(M.metalnessMap.channel),roughnessMapUv:fe&&u(M.roughnessMap.channel),anisotropyMapUv:P2&&u(M.anisotropyMap.channel),clearcoatMapUv:L&&u(M.clearcoatMap.channel),clearcoatNormalMapUv:v&&u(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&u(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:t2&&u(M.diffuseRoughnessMap.channel),iridescenceMapUv:K&&u(M.iridescenceMap.channel),iridescenceThicknessMapUv:a2&&u(M.iridescenceThicknessMap.channel),sheenColorMapUv:l2&&u(M.sheenColorMap.channel),sheenRoughnessMapUv:Y&&u(M.sheenRoughnessMap.channel),specularMapUv:$&&u(M.specularMap.channel),specularColorMapUv:r2&&u(M.specularColorMap.channel),specularIntensityMapUv:T&&u(M.specularIntensityMap.channel),transmissionMapUv:J&&u(M.transmissionMap.channel),thicknessMapUv:q&&u(M.thicknessMap.channel),alphaMapUv:n2&&u(M.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(h1||he),vertexNormals:!!E.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!E.attributes.uv&&(E2||n2),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||E.attributes.normal===void 0&&h1===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:m2,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:z2,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:U.filter(u2=>u2.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:i2,decodeVideoTexture:E2&&M.map.isVideoTexture===!0&&X2.getTransfer(M.map.colorSpace)===K2,decodeVideoTextureEmissive:w1&&M.emissiveMap.isVideoTexture===!0&&X2.getTransfer(M.emissiveMap.colorSpace)===K2,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Q1,flipSided:M.side===R1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:k2&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(k2&&M.extensions.multiDraw===!0||m1)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return B2.vertexUv1s=o.has(1),B2.vertexUv2s=o.has(2),B2.vertexUv3s=o.has(3),o.clear(),B2}function S(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(m(y,M),p(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function m(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapPMREM),M.push(y.envMapMaxLod),M.push(y.envMapSize),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.diffuseRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.numSunLights),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numSunLightShadows),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.numLightProbeGrids),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function p(M,y){r.disableAll(),y.instancing&&r.enable(0),y.instancingColor&&r.enable(1),y.instancingMorph&&r.enable(2),y.matcap&&r.enable(3),y.envMap&&r.enable(4),y.normalMapObjectSpace&&r.enable(5),y.normalMapTangentSpace&&r.enable(6),y.clearcoat&&r.enable(7),y.iridescence&&r.enable(8),y.alphaTest&&r.enable(9),y.vertexColors&&r.enable(10),y.vertexAlphas&&r.enable(11),y.vertexUv1s&&r.enable(12),y.vertexUv2s&&r.enable(13),y.vertexUv3s&&r.enable(14),y.vertexTangents&&r.enable(15),y.anisotropy&&r.enable(16),y.alphaHash&&r.enable(17),y.batching&&r.enable(18),y.dispersion&&r.enable(19),y.retroreflection&&r.enable(24),y.diffuseRoughness&&r.enable(25),y.batchingColor&&r.enable(20),y.gradientMap&&r.enable(21),y.packedNormalMap&&r.enable(22),y.vertexNormals&&r.enable(23),M.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reversedDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),y.numLightProbeGrids>0&&r.enable(22),y.hasPositionAttribute&&r.enable(23),M.push(r.mask)}function _(M){let y=h[M.type],P;if(y){let N=Ve[y];P=Ws.clone(N.uniforms)}else P=M.uniforms;return P}function b(M,y){let P=f.get(y);return P!==void 0?++P.usedTimes:(P=new n9(n,y,M,a),l.push(P),f.set(y,P)),P}function z(M){if(--M.usedTimes===0){let y=l.indexOf(M);l[y]=l[l.length-1],l.pop(),f.delete(M.cacheKey),M.destroy()}}function w(M){c.remove(M)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:S,getUniforms:_,acquireProgram:b,releaseProgram:z,releaseShaderCache:w,programs:l,dispose:C}}function c9(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let c=n.get(r);return c===void 0&&(c={},n.set(r,c)),c}function i(r){n.delete(r)}function a(r,c,o){n.get(r)[c]=o}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:s}}function o9(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function fr(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hr(){let n=[],e=0,t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function r(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function c(h,u,g,S,m,p){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:u,material:g,materialVariant:r(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},n[e]=_):(_.id=h.id,_.object=h,_.geometry=u,_.material=g,_.materialVariant=r(h),_.groupOrder=S,_.renderOrder=h.renderOrder,_.z=m,_.group=p),e++,_}function o(h,u,g,S,m,p,_){_.reversedDepth===!0&&(m=-m);let b=c(h,u,g,S,m,p);g.transmission>0?i.push(b):g.transparent===!0?a.push(b):t.push(b)}function l(h,u,g,S,m,p){let _=c(h,u,g,S,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?a.unshift(_):t.unshift(_)}function f(h,u){t.length>1&&t.sort(h||o9),i.length>1&&i.sort(u||fr),a.length>1&&a.sort(u||fr)}function d(){for(let h=e,u=n.length;h<u;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:d,sort:f}}function l9(){let n=new WeakMap;function e(i,a){let s=n.get(i),r;return s===void 0?(r=new hr,n.set(i,[r])):a>=s.length?(r=new hr,s.push(r)):r=s[a],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function f9(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new I2};break;case"SpotLight":t={position:new A,direction:new A,color:new I2,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new I2,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new I2,groundColor:new I2};break;case"RectAreaLight":t={color:new I2,position:new A,halfWidth:new A,halfHeight:new A};break}return n[e.id]=t,t}}}function h9(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new M2};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new M2};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new M2,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var u9=0;function d9(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function p9(n){let e=new f9,t=h9(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);let a=new A,s=new e1,r=new e1;function c(l){let f=0,d=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let u=0,g=0,S=0,m=0,p=0,_=0,b=0,z=0,w=0,C=0,M=0,y=0,P=0,N=0;l.sort(d9);for(let U=0,V=l.length;U<V;U++){let E=l[U],G=E.color,W=E.intensity,O=E.distance,e2=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===L4?e2=E.shadow.map.texture:e2=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)f+=G.r*W,d+=G.g*W,h+=G.b*W;else if(E.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(E.sh.coefficients[X],W);N++}else if(E.isSunLight){let X=e.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Q=E.shadow,j=t.get(E);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=e2;let z2=Q.getViewportCount();for(let D2=0;D2<z2;D2++)i.sunShadowMatrix[S+D2]=Q.getMatrix(D2),i.sunShadowCascade[S+D2]=Q._cascadeData[D2];S+=z2,g++}i.sun[u]=X,u++}else if(E.isDirectionalLight){let X=e.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Q=E.shadow,j=t.get(E);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=e2,i.directionalShadowMatrix[m]=E.shadow.matrix,w++}i.directional[m]=X,m++}else if(E.isSpotLight){let X=e.get(E);X.position.setFromMatrixPosition(E.matrixWorld),X.color.copy(G).multiplyScalar(W),X.distance=O,X.coneCos=Math.cos(E.angle),X.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),X.decay=E.decay,i.spot[_]=X;let Q=E.shadow;if(E.map&&(i.spotLightMap[y]=E.map,y++,Q.updateMatrices(E),E.castShadow&&P++),i.spotLightMatrix[_]=Q.matrix,E.castShadow){let j=t.get(E);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=e2,M++}_++}else if(E.isRectAreaLight){let X=e.get(E);X.color.copy(G).multiplyScalar(W),X.halfWidth.set(E.width*.5,0,0),X.halfHeight.set(0,E.height*.5,0),i.rectArea[b]=X,b++}else if(E.isPointLight){let X=e.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),X.distance=E.distance,X.decay=E.decay,E.castShadow){let Q=E.shadow,j=t.get(E);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=e2,i.pointShadowMatrix[p]=E.shadow.matrix,C++}i.point[p]=X,p++}else if(E.isHemisphereLight){let X=e.get(E);X.skyColor.copy(E.color).multiplyScalar(W),X.groundColor.copy(E.groundColor).multiplyScalar(W),i.hemi[z]=X,z++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=d2.LTC_FLOAT_1,i.rectAreaLTC2=d2.LTC_FLOAT_2):(i.rectAreaLTC1=d2.LTC_HALF_1,i.rectAreaLTC2=d2.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;let I=i.hash;(I.sunLength!==u||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==b||I.hemiLength!==z||I.numSunShadows!==g||I.numDirectionalShadows!==w||I.numPointShadows!==C||I.numSpotShadows!==M||I.numSpotMaps!==y||I.numLightProbes!==N)&&(i.sun.length=u,i.directional.length=m,i.spot.length=_,i.rectArea.length=b,i.point.length=p,i.hemi.length=z,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=M,i.spotShadowMap.length=M,i.spotLightMatrix.length=M+y-P,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,I.sunLength=u,I.directionalLength=m,I.pointLength=p,I.spotLength=_,I.rectAreaLength=b,I.hemiLength=z,I.numSunShadows=g,I.numDirectionalShadows=w,I.numPointShadows=C,I.numSpotShadows=M,I.numSpotMaps=y,I.numLightProbes=N,i.version=u9++)}function o(l,f){let d=0,h=0,u=0,g=0,S=0,m=0,p=f.matrixWorldInverse;for(let _=0,b=l.length;_<b;_++){let z=l[_];if(z.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(z.matrixWorld),w.direction.transformDirection(p),d++}else if(z.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(z.matrixWorld),a.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(p),h++}else if(z.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(z.matrixWorld),a.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(p),g++}else if(z.isRectAreaLight){let w=i.rectArea[S];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(p),r.identity(),s.copy(z.matrixWorld),s.premultiply(p),r.extractRotation(s),w.halfWidth.set(z.width*.5,0,0),w.halfHeight.set(0,z.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),S++}else if(z.isPointLight){let w=i.point[u];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(p),u++}else if(z.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(z.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:c,setupView:o,state:i}}function ur(n){let e=new p9(n),t=[],i=[],a=[];function s(d){f.camera=d,t.length=0,i.length=0,a.length=0}function r(d){d.isLightProbeGrid?a.push(d):t.push(d)}function c(d){i.push(d)}function o(){e.setup(t),a.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function l(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:c}}function m9(n){let e=new WeakMap;function t(a,s=0){let r=e.get(a),c;return r===void 0?(c=new ur(n),e.set(a,[c])):s>=r.length?(c=new ur(n),r.push(c)):c=r[s],c}function i(){e=new WeakMap}return{get:t,dispose:i}}var g9=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M9=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v9=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],x9=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],dr=new e1,O0=new A,Ha=new A;function S9(n,e,t){let i=new v4,a=new M2,s=new M2,r=new r1,c=new ni,o=new ai,l={},f=t.maxTextureSize,d={[z4]:R1,[R1]:z4,[Q1]:Q1},h=new Z1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new M2},radius:{value:4}},vertexShader:g9,fragmentShader:M9}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let g=new f1;g.setAttribute("position",new Y1(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Y2(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N0;let p=this.type;this.render=function(C,M,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===os&&(w2("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=N0);let P=n.getRenderTarget(),N=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),U=n.state;U.setBlending(H4),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=p!==this.type;V&&M.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(G=>G.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,G=C.length;E<G;E++){let W=C[E],O=W.shadow;if(O===void 0){w2("WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);let e2=O.getFrameExtents();a.multiply(e2),s.copy(O.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/e2.x),a.x=s.x*e2.x,O.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/e2.y),a.y=s.y*e2.y,O.mapSize.y=s.y));let X=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=X,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===A3){if(W.isPointLight){w2("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new se(a.x,a.y,{format:L4,type:we,minFilter:$1,magFilter:$1,generateMipmaps:!1}),O.map.texture.name=W.name+".shadowMap",O.map.depthTexture=new t4(a.x,a.y,be),O.map.depthTexture.name=W.name+".shadowMapDepth",O.map.depthTexture.format=je,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=v1,O.map.depthTexture.magFilter=v1}else W.isPointLight?(O.map=new G0(a.x),O.map.depthTexture=new d0(a.x,Ce)):(O.map=new se(a.x,a.y),O.map.depthTexture=new t4(a.x,a.y,Ce)),O.map.depthTexture.name=W.name+".shadowMap",O.map.depthTexture.format=je,this.type===N0?(O.map.depthTexture.compareFunction=X?ya:_a,O.map.depthTexture.minFilter=$1,O.map.depthTexture.magFilter=$1):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=v1,O.map.depthTexture.magFilter=v1);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==a.x||O.map.height!==a.y)&&O.map.setSize(a.x,a.y);let Q=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();W.isPointLight!==!0&&O.updateMatrices(W,y);let j=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:y.layers;for(let z2=0;z2<Q;z2++){let D2=O.getCamera(z2);if(W.isPointLight){let Z=O.camera,p2=O.matrix,S2=W.distance||Z.far;S2!==Z.far&&(Z.far=S2,Z.updateProjectionMatrix()),O0.setFromMatrixPosition(W.matrixWorld),Z.position.copy(O0),Ha.copy(Z.position),Ha.add(v9[z2]),Z.up.copy(x9[z2]),Z.lookAt(Ha),Z.updateMatrixWorld(),p2.makeTranslation(-O0.x,-O0.y,-O0.z),dr.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),O._frustum.setFromProjectionMatrix(dr,Z.coordinateSystem,Z.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,z2),n.clear();else{z2===0&&(n.setRenderTarget(O.map),n.clear());let Z=O.getViewport(z2);r.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),U.viewport(r)}i=O.getFrustum(z2),z(M,y,D2,W,j,this.type)}O.isPointLightShadow!==!0&&this.type===A3&&_(O,y),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(P,N,I)};function _(C,M){let y=e.update(S);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null?C.mapPass=new se(a.x,a.y,{format:L4,type:we}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value.set(C.map.width,C.map.height),h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(M,null,y,h,S,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value.set(C.map.width,C.map.height),u.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(M,null,y,u,S,null)}function b(C,M,y,P){let N=null,I=y.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)N=I;else if(N=y.isPointLight===!0?o:c,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let U=N.uuid,V=M.uuid,E=l[U];E===void 0&&(E={},l[U]=E);let G=E[V];G===void 0&&(G=N.clone(),E[V]=G,M.addEventListener("dispose",w)),N=G}if(N.visible=M.visible,N.wireframe=M.wireframe,P===A3?N.side=M.shadowSide!==null?M.shadowSide:M.side:N.side=M.shadowSide!==null?M.shadowSide:d[M.side],N.alphaMap=M.alphaMap,N.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,N.map=M.map,N.clipShadows=M.clipShadows,N.clippingPlanes=M.clippingPlanes,N.clipIntersection=M.clipIntersection,N.displacementMap=M.displacementMap,N.displacementScale=M.displacementScale,N.displacementBias=M.displacementBias,N.wireframeLinewidth=M.wireframeLinewidth,N.linewidth=M.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let U=n.properties.get(N);U.light=y}return N}function z(C,M,y,P,N,I){if(C.visible===!1)return;if(C.layers.test(N)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&I===A3)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,C.matrixWorld);let E=e.update(C),G=C.material;if(Array.isArray(G)){let W=E.groups;for(let O=0,e2=W.length;O<e2;O++){let X=W[O],Q=G[X.materialIndex];if(Q&&Q.visible){let j=b(C,Q,P,I);C.onBeforeShadow(n,C,M,y,E,j,X),n.renderBufferDirect(y,null,E,j,C,X),C.onAfterShadow(n,C,M,y,E,j,X)}}}else if(G.visible){let W=b(C,G,P,I);C.onBeforeShadow(n,C,M,y,E,W,null),n.renderBufferDirect(y,null,E,W,C,null),C.onAfterShadow(n,C,M,y,E,W,null)}}let V=C.children;for(let E=0,G=V.length;E<G;E++)z(V[E],M,y,P,N,I)}function w(C){C.target.removeEventListener("dispose",w);for(let y in l){let P=l[y],N=C.target.uuid;N in P&&(P[N].dispose(),delete P[N])}}}function _9(n,e){function t(){let T=!1,J=new r1,q=null,c2=new r1(0,0,0,0);return{setMask:function(n2){q!==n2&&!T&&(n.colorMask(n2,n2,n2,n2),q=n2)},setLocked:function(n2){T=n2},setClear:function(n2,s2,C2,k2,i2){i2===!0&&(n2*=k2,s2*=k2,C2*=k2),J.set(n2,s2,C2,k2),c2.equals(J)===!1&&(n.clearColor(n2,s2,C2,k2),c2.copy(J))},reset:function(){T=!1,q=null,c2.set(-1,0,0,0)}}}function i(){let T=!1,J=!1,q=null,c2=null,n2=null;return{setReversed:function(s2){if(J!==s2){let C2=e.get("EXT_clip_control");s2?C2.clipControlEXT(C2.LOWER_LEFT_EXT,C2.ZERO_TO_ONE_EXT):C2.clipControlEXT(C2.LOWER_LEFT_EXT,C2.NEGATIVE_ONE_TO_ONE_EXT),J=s2;let k2=n2;n2=null,this.setClear(k2)}},getReversed:function(){return J},setTest:function(s2){s2?m2(n.DEPTH_TEST):U2(n.DEPTH_TEST)},setMask:function(s2){q!==s2&&!T&&(n.depthMask(s2),q=s2)},setFunc:function(s2){if(J&&(s2=Hs[s2]),c2!==s2){switch(s2){case Pt:n.depthFunc(n.NEVER);break;case It:n.depthFunc(n.ALWAYS);break;case Dt:n.depthFunc(n.LESS);break;case d3:n.depthFunc(n.LEQUAL);break;case Ft:n.depthFunc(n.EQUAL);break;case Ut:n.depthFunc(n.GEQUAL);break;case Bt:n.depthFunc(n.GREATER);break;case kt:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}c2=s2}},setLocked:function(s2){T=s2},setClear:function(s2){n2!==s2&&(n2=s2,J&&(s2=1-s2),n.clearDepth(s2))},reset:function(){T=!1,q=null,c2=null,n2=null,J=!1}}}function a(){let T=!1,J=null,q=null,c2=null,n2=null,s2=null,C2=null,k2=null,i2=null;return{setTest:function(b2){T||(b2?m2(n.STENCIL_TEST):U2(n.STENCIL_TEST))},setMask:function(b2){J!==b2&&!T&&(n.stencilMask(b2),J=b2)},setFunc:function(b2,B2,u2){(q!==b2||c2!==B2||n2!==u2)&&(n.stencilFunc(b2,B2,u2),q=b2,c2=B2,n2=u2)},setOp:function(b2,B2,u2){(s2!==b2||C2!==B2||k2!==u2)&&(n.stencilOp(b2,B2,u2),s2=b2,C2=B2,k2=u2)},setLocked:function(b2){T=b2},setClear:function(b2){i2!==b2&&(n.clearStencil(b2),i2=b2)},reset:function(){T=!1,J=null,q=null,c2=null,n2=null,s2=null,C2=null,k2=null,i2=null}}}let s=new t,r=new i,c=new a,o={},l=new WeakMap,f={},d={},h={},u=new WeakMap,g=[],S=null,m=!1,p=null,_=null,b=null,z=null,w=null,C=null,M=null,y=new I2(0,0,0),P=0,N=!1,I=null,U=null,V=null,E=null,G=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,e2=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(e2=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=e2>=1):X.indexOf("OpenGL ES")!==-1&&(e2=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=e2>=2);let Q=null,j={},z2=n.getParameter(n.SCISSOR_BOX),D2=n.getParameter(n.VIEWPORT),Z=new r1().fromArray(z2),p2=new r1().fromArray(D2);function S2(T,J,q,c2){let n2=new Uint8Array(4),s2=n.createTexture();n.bindTexture(T,s2),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let C2=0;C2<q;C2++)T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,c2,0,n.RGBA,n.UNSIGNED_BYTE,n2):n.texImage2D(J+C2,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,n2);return s2}let T2={};T2[n.TEXTURE_2D]=S2(n.TEXTURE_2D,n.TEXTURE_2D,1),T2[n.TEXTURE_CUBE_MAP]=S2(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),T2[n.TEXTURE_2D_ARRAY]=S2(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),T2[n.TEXTURE_3D]=S2(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),c.setClear(0),m2(n.DEPTH_TEST),r.setFunc(d3),K1(!1),h1(ta),m2(n.CULL_FACE),I1(H4);function m2(T){f[T]!==!0&&(n.enable(T),f[T]=!0)}function U2(T){f[T]!==!1&&(n.disable(T),f[T]=!1)}function m1(T,J){return h[T]!==J?(n.bindFramebuffer(T,J),h[T]=J,T===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=J),T===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=J),!0):!1}function E2(T,J){let q=g,c2=!1;if(T){q=u.get(J),q===void 0&&(q=[],u.set(J,q));let n2=T.textures;if(q.length!==n2.length||q[0]!==n.COLOR_ATTACHMENT0){for(let s2=0,C2=n2.length;s2<C2;s2++)q[s2]=n.COLOR_ATTACHMENT0+s2;q.length=n2.length,c2=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,c2=!0);c2&&n.drawBuffers(q)}function Q2(T){return S!==T?(n.useProgram(T),S=T,!0):!1}let t1={[G4]:n.FUNC_ADD,[fs]:n.FUNC_SUBTRACT,[hs]:n.FUNC_REVERSE_SUBTRACT};t1[us]=n.MIN,t1[ds]=n.MAX;let V2={[ps]:n.ZERO,[ms]:n.ONE,[gs]:n.SRC_COLOR,[aa]:n.SRC_ALPHA,[ys]:n.SRC_ALPHA_SATURATE,[Ss]:n.DST_COLOR,[vs]:n.DST_ALPHA,[Ms]:n.ONE_MINUS_SRC_COLOR,[sa]:n.ONE_MINUS_SRC_ALPHA,[_s]:n.ONE_MINUS_DST_COLOR,[xs]:n.ONE_MINUS_DST_ALPHA,[zs]:n.CONSTANT_COLOR,[Ls]:n.ONE_MINUS_CONSTANT_COLOR,[Cs]:n.CONSTANT_ALPHA,[bs]:n.ONE_MINUS_CONSTANT_ALPHA};function I1(T,J,q,c2,n2,s2,C2,k2,i2,b2){if(T===H4){m===!0&&(U2(n.BLEND),m=!1);return}if(m===!1&&(m2(n.BLEND),m=!0),T!==ls){if(T!==p||b2!==N){if((_!==G4||w!==G4)&&(n.blendEquation(n.FUNC_ADD),_=G4,w=G4),b2)switch(T){case E3:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oe:n.blendFunc(n.ONE,n.ONE);break;case ia:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case na:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:N2("WebGLState: Invalid blending: ",T);break}else switch(T){case E3:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oe:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ia:N2("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case na:N2("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:N2("WebGLState: Invalid blending: ",T);break}b=null,z=null,C=null,M=null,y.set(0,0,0),P=0,p=T,N=b2}return}n2=n2||J,s2=s2||q,C2=C2||c2,(J!==_||n2!==w)&&(n.blendEquationSeparate(t1[J],t1[n2]),_=J,w=n2),(q!==b||c2!==z||s2!==C||C2!==M)&&(n.blendFuncSeparate(V2[q],V2[c2],V2[s2],V2[C2]),b=q,z=c2,C=s2,M=C2),(k2.equals(y)===!1||i2!==P)&&(n.blendColor(k2.r,k2.g,k2.b,i2),y.copy(k2),P=i2),p=T,N=!1}function S1(T,J){T.side===Q1?U2(n.CULL_FACE):m2(n.CULL_FACE);let q=T.side===R1;J&&(q=!q),K1(q),T.blending===E3&&T.transparent===!1?I1(H4):I1(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),r.setFunc(T.depthFunc),r.setTest(T.depthTest),r.setMask(T.depthWrite),s.setMask(T.colorWrite);let c2=T.stencilWrite;c.setTest(c2),c2&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),w1(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?m2(n.SAMPLE_ALPHA_TO_COVERAGE):U2(n.SAMPLE_ALPHA_TO_COVERAGE)}function K1(T){I!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),I=T)}function h1(T){T!==rs?(m2(n.CULL_FACE),T!==U&&(T===ta?n.cullFace(n.BACK):T===cs?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):U2(n.CULL_FACE),U=T}function Ne(T){T!==V&&(O&&n.lineWidth(T),V=T)}function w1(T,J,q){T?(m2(n.POLYGON_OFFSET_FILL),(E!==J||G!==q)&&(E=J,G=q,r.getReversed()&&(J=-J,q=-q),n.polygonOffset(J,q))):U2(n.POLYGON_OFFSET_FILL)}function le(T){T?m2(n.SCISSOR_TEST):U2(n.SCISSOR_TEST)}function fe(T){T===void 0&&(T=n.TEXTURE0+W-1),Q!==T&&(n.activeTexture(T),Q=T)}function he(T,J,q){q===void 0&&(Q===null?q=n.TEXTURE0+W-1:q=Q);let c2=j[q];c2===void 0&&(c2={type:void 0,texture:void 0},j[q]=c2),(c2.type!==T||c2.texture!==J)&&(Q!==q&&(n.activeTexture(q),Q=q),n.bindTexture(T,J||T2[T]),c2.type=T,c2.texture=J)}function D(){let T=j[Q];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function ue(){try{n.compressedTexImage2D(...arguments)}catch(T){N2("WebGLState:",T)}}function o1(){try{n.compressedTexImage3D(...arguments)}catch(T){N2("WebGLState:",T)}}function l1(){try{n.texSubImage2D(...arguments)}catch(T){N2("WebGLState:",T)}}function h2(){try{n.texSubImage3D(...arguments)}catch(T){N2("WebGLState:",T)}}function _1(){try{n.compressedTexSubImage2D(...arguments)}catch(T){N2("WebGLState:",T)}}function A2(){try{n.compressedTexSubImage3D(...arguments)}catch(T){N2("WebGLState:",T)}}function P2(){try{n.texStorage2D(...arguments)}catch(T){N2("WebGLState:",T)}}function L(){try{n.texStorage3D(...arguments)}catch(T){N2("WebGLState:",T)}}function v(){try{n.texImage2D(...arguments)}catch(T){N2("WebGLState:",T)}}function B(){try{n.texImage3D(...arguments)}catch(T){N2("WebGLState:",T)}}function t2(T){return d[T]!==void 0?d[T]:n.getParameter(T)}function K(T,J){d[T]!==J&&(n.pixelStorei(T,J),d[T]=J)}function a2(T){Z.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),Z.copy(T))}function l2(T){p2.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),p2.copy(T))}function Y(T,J){let q=l.get(J);q===void 0&&(q=new WeakMap,l.set(J,q));let c2=q.get(T);c2===void 0&&(c2=n.getUniformBlockIndex(J,T.name),n.uniformBlockBinding(J,c2,c2),q.set(T,c2))}function $(T,J,q){let n2=l.get(J).get(T);o[n2]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,n2,q),o[n2]=q)}function r2(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},d={},Q=null,j={},h={},o={},u=new WeakMap,g=[],S=null,m=!1,p=null,_=null,b=null,z=null,w=null,C=null,M=null,y=new I2(0,0,0),P=0,N=!1,I=null,U=null,V=null,E=null,G=null,Z.set(0,0,n.canvas.width,n.canvas.height),p2.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),c.reset()}return{buffers:{color:s,depth:r,stencil:c},enable:m2,disable:U2,bindFramebuffer:m1,drawBuffers:E2,useProgram:Q2,setBlending:I1,setMaterial:S1,setFlipSided:K1,setCullFace:h1,setLineWidth:Ne,setPolygonOffset:w1,setScissorTest:le,activeTexture:fe,bindTexture:he,unbindTexture:D,compressedTexImage2D:ue,compressedTexImage3D:o1,texImage2D:v,texImage3D:B,pixelStorei:K,getParameter:t2,updateUBOMapping:Y,uniformBlockBinding:$,texStorage2D:P2,texStorage3D:L,texSubImage2D:l1,texSubImage3D:h2,compressedTexSubImage2D:_1,compressedTexSubImage3D:A2,scissor:a2,viewport:l2,reset:r2}}function y9(n,e,t,i,a,s,r){let c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new M2,f=new WeakMap,d=new Set,h,u=new WeakMap,g=new Set,S=new FinalizationRegistry(L=>g.delete(L)),m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,v){return m?new OffscreenCanvas(L,v):g3("canvas")}function _(L,v,B){let t2=1,K=P2(L);if((K.width>B||K.height>B)&&(t2=B/Math.max(K.width,K.height)),t2<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let a2=Math.floor(t2*K.width),l2=Math.floor(t2*K.height);h===void 0&&(h=p(a2,l2));let Y=v?p(a2,l2):h;return Y.width=a2,Y.height=l2,Y.getContext("2d").drawImage(L,0,0,a2,l2),w2("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+a2+"x"+l2+")."),Y}else return"data"in L&&w2("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),L;return L}function b(L){return L.generateMipmaps}function z(L){n.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(L,v,B,t2,K,a2=!1){if(L!==null){if(n[L]!==void 0)return n[L];w2("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let l2;t2&&(l2=e.get("EXT_texture_norm16"),l2||w2("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===n.RED&&(B===n.FLOAT&&(Y=n.R32F),B===n.HALF_FLOAT&&(Y=n.R16F),B===n.UNSIGNED_BYTE&&(Y=n.R8),B===n.UNSIGNED_SHORT&&l2&&(Y=l2.R16_EXT),B===n.SHORT&&l2&&(Y=l2.R16_SNORM_EXT)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.R8UI),B===n.UNSIGNED_SHORT&&(Y=n.R16UI),B===n.UNSIGNED_INT&&(Y=n.R32UI),B===n.BYTE&&(Y=n.R8I),B===n.SHORT&&(Y=n.R16I),B===n.INT&&(Y=n.R32I)),v===n.RG&&(B===n.FLOAT&&(Y=n.RG32F),B===n.HALF_FLOAT&&(Y=n.RG16F),B===n.UNSIGNED_BYTE&&(Y=n.RG8),B===n.UNSIGNED_SHORT&&l2&&(Y=l2.RG16_EXT),B===n.SHORT&&l2&&(Y=l2.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RG8UI),B===n.UNSIGNED_SHORT&&(Y=n.RG16UI),B===n.UNSIGNED_INT&&(Y=n.RG32UI),B===n.BYTE&&(Y=n.RG8I),B===n.SHORT&&(Y=n.RG16I),B===n.INT&&(Y=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),B===n.UNSIGNED_INT&&(Y=n.RGB32UI),B===n.BYTE&&(Y=n.RGB8I),B===n.SHORT&&(Y=n.RGB16I),B===n.INT&&(Y=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),B===n.UNSIGNED_INT&&(Y=n.RGBA32UI),B===n.BYTE&&(Y=n.RGBA8I),B===n.SHORT&&(Y=n.RGBA16I),B===n.INT&&(Y=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_SHORT&&l2&&(Y=l2.RGB16_EXT),B===n.SHORT&&l2&&(Y=l2.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),v===n.RGBA){let $=a2?a0:X2.getTransfer(K);B===n.FLOAT&&(Y=n.RGBA32F),B===n.HALF_FLOAT&&(Y=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Y=$===K2?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&l2&&(Y=l2.RGBA16_EXT),B===n.SHORT&&l2&&(Y=l2.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(L,v){let B;return L?v===null||v===Ce||v===W4?B=n.DEPTH24_STENCIL8:v===be?B=n.DEPTH32F_STENCIL8:v===R3&&(B=n.DEPTH24_STENCIL8,w2("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ce||v===W4?B=n.DEPTH_COMPONENT24:v===be?B=n.DEPTH_COMPONENT32F:v===R3&&(B=n.DEPTH_COMPONENT16),B}function y(L,v){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==v1&&L.minFilter!==$1?Math.log2(Math.max(v.width,v.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?v.mipmaps.length:1}function P(L){let v=new WeakRef(L);i.get(L).__ref=v,g.add(v),S.register(L,v,v)}function N(L){let v=i.get(L).__ref;v!==void 0&&(g.delete(v),S.unregister(v))}function I(L){V(L.target)}function U(L){E(L.target)}function V(L){L.removeEventListener("dispose",I),N(L),W(L),L.isVideoTexture&&f.delete(L),L.isHTMLTexture&&d.delete(L)}function E(L){L.removeEventListener("dispose",U),N(L),e2(L)}function G(){for(let L of g){let v=L.deref();v!==void 0&&(v.isRenderTarget===!0?E(v):V(v))}g.clear(),d.clear()}function W(L){let v=i.get(L);if(v.__webglInit===void 0)return;let B=L.source,t2=u.get(B);if(t2){let K=t2[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&O(L),Object.keys(t2).length===0&&u.delete(B)}i.remove(L)}function O(L){let v=i.get(L);n.deleteTexture(v.__webglTexture);let B=L.source,t2=u.get(B);delete t2[v.__cacheKey],r.memory.textures--}function e2(L){let v=i.get(L);v.__depthDisposeCallback&&v.__depthDisposeCallback();let B=L.depthTexture;if(B&&B.renderTarget===L&&V(B),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let a2=0;a2<v.__webglFramebuffer[K].length;a2++)n.deleteFramebuffer(v.__webglFramebuffer[K][a2]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let t2=L.textures;for(let K=0,a2=t2.length;K<a2;K++){let l2=i.get(t2[K]);l2.__webglTexture&&(n.deleteTexture(l2.__webglTexture),r.memory.textures--),i.remove(t2[K])}i.remove(L)}let X=0;function Q(){X=0}function j(){return X}function z2(L){X=L}function D2(){let L=X;return L>=a.maxTextures&&w2("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+a.maxTextures),X+=1,L}function Z(L){let v=[];return v.push(L.wrapS),v.push(L.wrapT),v.push(L.wrapR||0),v.push(L.magFilter),v.push(L.minFilter),v.push(L.anisotropy),v.push(L.internalFormat),v.push(L.format),v.push(L.type),v.push(L.generateMipmaps),v.push(L.mipmapsAutoUpdate),v.push(L.premultiplyAlpha),v.push(L.flipY),v.push(L.unpackAlignment),v.push(L.colorSpace),v.join()}function p2(L,v){let B=i.get(L);if(L.isVideoTexture&&_1(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&B.__version!==L.version){let t2=L.image;if(t2===null)w2("WebGLRenderer: Texture marked for update but no image data found.");else if(t2.complete===!1)w2("WebGLRenderer: Texture marked for update but image is incomplete");else{S1(B,L,v);return}}else L.isExternalTexture&&(B.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function S2(L,v){let B=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){S1(B,L,v);return}else L.isExternalTexture&&(B.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function T2(L,v){let B=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){S1(B,L,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function m2(L,v){let B=i.get(L);if(L.version>0&&B.__version!==L.version){K1(B,L,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}let U2={[p3]:n.REPEAT,[Pe]:n.CLAMP_TO_EDGE,[Ot]:n.MIRRORED_REPEAT},m1={[v1]:n.NEAREST,[As]:n.NEAREST_MIPMAP_NEAREST,[P0]:n.NEAREST_MIPMAP_LINEAR,[$1]:n.LINEAR,[xi]:n.LINEAR_MIPMAP_NEAREST,[n4]:n.LINEAR_MIPMAP_LINEAR},E2={[Ps]:n.NEVER,[za]:n.ALWAYS,[Is]:n.LESS,[_a]:n.LEQUAL,[Ds]:n.EQUAL,[ya]:n.GEQUAL,[Fs]:n.GREATER,[Us]:n.NOTEQUAL};function Q2(L,v){if(v.type===be&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===$1||v.magFilter===xi||v.magFilter===P0||v.magFilter===n4||v.minFilter===$1||v.minFilter===xi||v.minFilter===P0||v.minFilter===n4)&&w2("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,U2[v.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,U2[v.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,U2[v.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,m1[v.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,m1[v.minFilter]),v.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,E2[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===v1||v.minFilter!==P0&&v.minFilter!==n4||v.type===be&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function t1(L,v){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,v.addEventListener("dispose",I),P(v));let t2=v.source,K=u.get(t2);K===void 0&&(K={},u.set(t2,K));let a2=Z(v);if(a2!==L.__cacheKey){K[a2]===void 0&&(K[a2]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,B=!0),K[a2].usedTimes++;let l2=K[L.__cacheKey];l2!==void 0&&(K[L.__cacheKey].usedTimes--,l2.usedTimes===0&&O(v)),L.__cacheKey=a2,L.__webglTexture=K[a2].texture}return B}function V2(L,v,B){return Math.floor(Math.floor(L/B)/v)}function I1(L,v,B,t2){let a2=L.updateRanges;if(a2.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,t2,v.data);else{a2.sort((T,J)=>T.start-J.start);let l2=0;for(let T=1;T<a2.length;T++){let J=a2[l2],q=a2[T],c2=J.start+J.count,n2=V2(q.start,v.width,4),s2=V2(J.start,v.width,4);q.start<=c2+1&&n2===s2&&V2(q.start+q.count-1,v.width,4)===n2?J.count=Math.max(J.count,q.start+q.count-J.start):(++l2,a2[l2]=q)}a2.length=l2+1;let Y=t.getParameter(n.UNPACK_ROW_LENGTH),$=t.getParameter(n.UNPACK_SKIP_PIXELS),r2=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let T=0,J=a2.length;T<J;T++){let q=a2[T],c2=Math.floor(q.start/4),n2=Math.ceil(q.count/4),s2=c2%v.width,C2=Math.floor(c2/v.width),k2=n2,i2=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,s2),t.pixelStorei(n.UNPACK_SKIP_ROWS,C2),t.texSubImage2D(n.TEXTURE_2D,0,s2,C2,k2,i2,B,t2,v.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,$),t.pixelStorei(n.UNPACK_SKIP_ROWS,r2)}}function S1(L,v,B){let t2=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(t2=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(t2=n.TEXTURE_3D);let K=t1(L,v),a2=v.source;t.bindTexture(t2,L.__webglTexture,n.TEXTURE0+B);let l2=i.get(a2);if(a2.version!==l2.__version||K===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let i2=X2.getPrimaries(X2.workingColorSpace),b2=v.colorSpace===s4?null:X2.getPrimaries(v.colorSpace),B2=v.colorSpace===s4||i2===b2?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,B2)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let $=_(v.image,!1,a.maxTextureSize);$=A2(v,$);let r2=s.convert(v.format,v.colorSpace),T=s.convert(v.type),J=C(v.internalFormat,r2,T,v.normalized,v.colorSpace,v.isVideoTexture);Q2(t2,v);let q,c2=v.mipmaps,n2=v.isVideoTexture!==!0,s2=l2.__version===void 0||K===!0,C2=a2.dataReady,k2=y(v,$);if(v.isDepthTexture)J=M(v.format===a4,v.type),s2&&(n2?t.texStorage2D(n.TEXTURE_2D,1,J,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,J,$.width,$.height,0,r2,T,null));else if(v.isDataTexture)if(c2.length>0){n2&&s2&&t.texStorage2D(n.TEXTURE_2D,k2,J,c2[0].width,c2[0].height);for(let i2=0,b2=c2.length;i2<b2;i2++)q=c2[i2],n2?C2&&t.texSubImage2D(n.TEXTURE_2D,i2,0,0,q.width,q.height,r2,T,q.data):t.texImage2D(n.TEXTURE_2D,i2,J,q.width,q.height,0,r2,T,q.data);v.generateMipmaps=!1}else n2?(s2&&t.texStorage2D(n.TEXTURE_2D,k2,J,$.width,$.height),C2&&I1(v,$,r2,T)):t.texImage2D(n.TEXTURE_2D,0,J,$.width,$.height,0,r2,T,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){n2&&s2&&t.texStorage3D(n.TEXTURE_2D_ARRAY,k2,J,c2[0].width,c2[0].height,$.depth);for(let i2=0,b2=c2.length;i2<b2;i2++)if(q=c2[i2],v.format!==Te)if(r2!==null)if(n2){if(C2)if(v.layerUpdates.size>0){let B2=Ia(q.width,q.height,v.format,v.type);for(let u2 of v.layerUpdates){let j2=q.data.subarray(u2*B2/q.data.BYTES_PER_ELEMENT,(u2+1)*B2/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,i2,0,0,u2,q.width,q.height,1,r2,j2)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,i2,0,0,0,q.width,q.height,$.depth,r2,q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,i2,J,q.width,q.height,$.depth,0,q.data,0,0);else w2("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else n2?C2&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,i2,0,0,0,q.width,q.height,$.depth,r2,T,q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,i2,J,q.width,q.height,$.depth,0,r2,T,q.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{n2&&s2&&t.texStorage2D(n.TEXTURE_2D,k2,J,c2[0].width,c2[0].height);for(let i2=0,b2=c2.length;i2<b2;i2++)q=c2[i2],v.format!==Te?r2!==null?n2?C2&&t.compressedTexSubImage2D(n.TEXTURE_2D,i2,0,0,q.width,q.height,r2,q.data):t.compressedTexImage2D(n.TEXTURE_2D,i2,J,q.width,q.height,0,q.data):w2("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n2?C2&&t.texSubImage2D(n.TEXTURE_2D,i2,0,0,q.width,q.height,r2,T,q.data):t.texImage2D(n.TEXTURE_2D,i2,J,q.width,q.height,0,r2,T,q.data)}else if(v.isDataArrayTexture)if(n2){if(s2&&t.texStorage3D(n.TEXTURE_2D_ARRAY,k2,J,$.width,$.height,$.depth),C2)if(v.layerUpdates.size>0){let i2=Ia($.width,$.height,v.format,v.type);for(let b2 of v.layerUpdates){let B2=$.data.subarray(b2*i2/$.data.BYTES_PER_ELEMENT,(b2+1)*i2/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,b2,$.width,$.height,1,r2,T,B2)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,r2,T,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,J,$.width,$.height,$.depth,0,r2,T,$.data);else if(v.isData3DTexture)n2?(s2&&t.texStorage3D(n.TEXTURE_3D,k2,J,$.width,$.height,$.depth),C2&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,r2,T,$.data)):t.texImage3D(n.TEXTURE_3D,0,J,$.width,$.height,$.depth,0,r2,T,$.data);else if(v.isFramebufferTexture){if(s2)if(n2)t.texStorage2D(n.TEXTURE_2D,k2,J,$.width,$.height);else{let i2=$.width,b2=$.height;for(let B2=0;B2<k2;B2++)t.texImage2D(n.TEXTURE_2D,B2,J,i2,b2,0,r2,T,null),i2>>=1,b2>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let i2=n.canvas;if(i2.hasAttribute("layoutsubtree")||i2.setAttribute("layoutsubtree","true"),$.parentNode!==i2){i2.appendChild($),d.add(v),i2.onpaint=b2=>{let B2=b2.changedElements;for(let u2 of d)B2.includes(u2.image)&&(u2.needsUpdate=!0)},i2.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{let B2=n.RGBA,u2=n.RGBA,j2=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,B2,u2,j2,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(c2.length>0){if(n2&&s2){let i2=P2(c2[0]);t.texStorage2D(n.TEXTURE_2D,k2,J,i2.width,i2.height)}for(let i2=0,b2=c2.length;i2<b2;i2++)q=c2[i2],n2?C2&&t.texSubImage2D(n.TEXTURE_2D,i2,0,0,r2,T,q):t.texImage2D(n.TEXTURE_2D,i2,J,r2,T,q);v.generateMipmaps=!1}else if(n2){if(s2){let i2=P2($);t.texStorage2D(n.TEXTURE_2D,k2,J,i2.width,i2.height)}C2&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,r2,T,$)}else t.texImage2D(n.TEXTURE_2D,0,J,r2,T,$);b(v)&&v.mipmapsAutoUpdate===!0&&z(t2),l2.__version=a2.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function K1(L,v,B){if(v.image.length!==6)return;let t2=t1(L,v),K=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+B);let a2=i.get(K);if(K.version!==a2.__version||t2===!0){t.activeTexture(n.TEXTURE0+B);let l2=X2.getPrimaries(X2.workingColorSpace),Y=v.colorSpace===s4?null:X2.getPrimaries(v.colorSpace),$=v.colorSpace===s4||l2===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let r2=v.isCompressedTexture||v.image[0].isCompressedTexture,T=v.image[0]&&v.image[0].isDataTexture,J=[];for(let u2=0;u2<6;u2++)!r2&&!T?J[u2]=_(v.image[u2],!0,a.maxCubemapSize):J[u2]=T?v.image[u2].image:v.image[u2],J[u2]=A2(v,J[u2]);let q=J[0],c2=s.convert(v.format,v.colorSpace),n2=s.convert(v.type),s2=C(v.internalFormat,c2,n2,v.normalized,v.colorSpace),C2=v.isVideoTexture!==!0,k2=a2.__version===void 0||t2===!0,i2=K.dataReady,b2=y(v,q);Q2(n.TEXTURE_CUBE_MAP,v);let B2;if(v.isDepthTexture){if(s2=M(v.format===a4,v.type),k2)if(C2)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,s2,q.width,q.height);else for(let u2=0;u2<6;u2++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,0,s2,q.width,q.height,0,c2,n2,null)}else if(r2){C2&&k2&&t.texStorage2D(n.TEXTURE_CUBE_MAP,b2,s2,q.width,q.height);for(let u2=0;u2<6;u2++){B2=J[u2].mipmaps;for(let j2=0;j2<B2.length;j2++){let T1=B2[j2];v.format!==Te?c2!==null?C2?i2&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,j2,0,0,T1.width,T1.height,c2,T1.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,j2,s2,T1.width,T1.height,0,T1.data):w2("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C2?i2&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,j2,0,0,T1.width,T1.height,c2,n2,T1.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,j2,s2,T1.width,T1.height,0,c2,n2,T1.data)}}}else{if(B2=v.mipmaps,C2&&k2){B2.length>0&&b2++;let u2=P2(J[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,b2,s2,u2.width,u2.height)}for(let u2=0;u2<6;u2++)if(T){C2?i2&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,0,0,0,J[u2].width,J[u2].height,c2,n2,J[u2].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,0,s2,J[u2].width,J[u2].height,0,c2,n2,J[u2].data);for(let j2=0;j2<B2.length;j2++){let l4=B2[j2].image[u2].image;C2?i2&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,j2+1,0,0,l4.width,l4.height,c2,n2,l4.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,j2+1,s2,l4.width,l4.height,0,c2,n2,l4.data)}}else{C2?i2&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,0,0,0,c2,n2,J[u2]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,0,s2,c2,n2,J[u2]);for(let j2=0;j2<B2.length;j2++){let T1=B2[j2];C2?i2&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,j2+1,0,0,c2,n2,T1.image[u2]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+u2,j2+1,s2,c2,n2,T1.image[u2])}}}b(v)&&v.mipmapsAutoUpdate===!0&&z(n.TEXTURE_CUBE_MAP),a2.__version=K.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function h1(L,v,B,t2,K,a2){let l2=s.convert(B.format,B.colorSpace),Y=s.convert(B.type),$=C(B.internalFormat,l2,Y,B.normalized,B.colorSpace),r2=i.get(v),T=i.get(B);if(T.__renderTarget=v,!r2.__hasExternalTextures){let J=Math.max(1,v.width>>a2),q=Math.max(1,v.height>>a2);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,a2,$,J,q,v.depth,0,l2,Y,null):t.texImage2D(K,a2,$,J,q,0,l2,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),h2(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,t2,K,T.__webglTexture,0,l1(v)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,t2,K,T.__webglTexture,a2),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(L,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,L),v.depthBuffer){let t2=v.depthTexture,K=t2&&t2.isDepthTexture?t2.type:null,a2=M(v.stencilBuffer,K),l2=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;h2(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,l1(v),a2,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,l1(v),a2,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,a2,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,l2,n.RENDERBUFFER,L)}else{let t2=v.textures;for(let K=0;K<t2.length;K++){let a2=t2[K],l2=s.convert(a2.format,a2.colorSpace),Y=s.convert(a2.type),$=C(a2.internalFormat,l2,Y,a2.normalized,a2.colorSpace);h2(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,l1(v),$,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,l1(v),$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function w1(L,v,B){let t2=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(v.depthTexture);K.__renderTarget=v;let a2=t2?v.depthTexture.image[0]:v.depthTexture.image;(!K.__webglTexture||a2.width!==v.width||a2.height!==v.height)&&(a2.width=v.width,a2.height=v.height,v.depthTexture.needsUpdate=!0),t2?m2(v.depthTexture,0):p2(v.depthTexture,0);let l2=K.__webglTexture,Y=l1(v),$=t2?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,r2=v.depthTexture.format===a4?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===je)h2(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,r2,$,l2,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,r2,$,l2,0);else if(v.depthTexture.format===a4)h2(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,r2,$,l2,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,r2,$,l2,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(L){let v=i.get(L),B=L.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==L.depthTexture){let t2=L.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),t2){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,t2.removeEventListener("dispose",K)};t2.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=t2}if(L.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let t2=0;t2<6;t2++)w1(v.__webglFramebuffer[t2],L,t2);else L.texture.mipmaps.length>0?w1(v.__webglFramebuffer[0],L,0):w1(v.__webglFramebuffer,L,0);else if(B){v.__webglDepthbuffer=[];for(let t2=0;t2<6;t2++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[t2]),v.__webglDepthbuffer[t2]===void 0)v.__webglDepthbuffer[t2]=n.createRenderbuffer(),Ne(v.__webglDepthbuffer[t2],L,!1);else{let K=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,a2=v.__webglDepthbuffer[t2];n.bindRenderbuffer(n.RENDERBUFFER,a2),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,a2)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ne(v.__webglDepthbuffer,L,!1);else{let K=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,a2=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,a2),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,a2)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(L,v,B){let t2=i.get(L);v!==void 0&&h1(t2.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&le(L)}function he(L){let v=L.texture,B=i.get(L),t2=i.get(v);L.addEventListener("dispose",U),P(L);let K=L.textures,a2=L.isWebGLCubeRenderTarget===!0,l2=K.length>1;if(l2||(t2.__webglTexture===void 0&&(t2.__webglTexture=n.createTexture()),t2.__version=v.version,r.memory.textures++),a2){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let $=0;$<v.mipmaps.length;$++)B.__webglFramebuffer[Y][$]=n.createFramebuffer()}else B.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)B.__webglFramebuffer[Y]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(l2)for(let Y=0,$=K.length;Y<$;Y++){let r2=i.get(K[Y]);r2.__webglTexture===void 0&&(r2.__webglTexture=n.createTexture(),r.memory.textures++)}if(L.samples>0&&h2(L)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<K.length;Y++){let $=K[Y];B.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let r2=s.convert($.format,$.colorSpace),T=s.convert($.type),J=C($.internalFormat,r2,T,$.normalized,$.colorSpace,L.isXRRenderTarget===!0),q=l1(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,J,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(B.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(a2){t.bindTexture(n.TEXTURE_CUBE_MAP,t2.__webglTexture),Q2(n.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)h1(B.__webglFramebuffer[Y][$],L,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else h1(B.__webglFramebuffer[Y],L,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);b(v)?z(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(l2){for(let Y=0,$=K.length;Y<$;Y++){let r2=K[Y],T=i.get(r2),J=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(J=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,T.__webglTexture),Q2(J,r2),h1(B.__webglFramebuffer,L,r2,n.COLOR_ATTACHMENT0+Y,J,0),b(r2)&&z(J)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Y=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,t2.__webglTexture),Q2(Y,v),v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)h1(B.__webglFramebuffer[$],L,v,n.COLOR_ATTACHMENT0,Y,$);else h1(B.__webglFramebuffer,L,v,n.COLOR_ATTACHMENT0,Y,0);b(v)?z(Y):v.mipmaps.length>0&&n.texParameteri(Y,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&le(L)}function D(L){let v=L.textures;for(let B=0,t2=v.length;B<t2;B++){let K=v[B];if(b(K)&&K.mipmapsAutoUpdate===!0){let a2=w(L),l2=i.get(K).__webglTexture;t.bindTexture(a2,l2),z(a2),t.unbindTexture()}}}let ue=[];function o1(L){if(L.samples>0){if(h2(L)===!1){let v=L.textures,B=L.width,t2=L.height,K=n.COLOR_BUFFER_BIT,a2=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,l2=i.get(L),Y=v.length>1;if(Y)for(let r2=0;r2<v.length;r2++)t.bindFramebuffer(n.FRAMEBUFFER,l2.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+r2,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,l2.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+r2,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,l2.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,l2.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,l2.__webglFramebuffer);for(let r2=0;r2<v.length;r2++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,l2.__webglColorRenderbuffer[r2]);let T=i.get(v[r2]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,T,0)}n.blitFramebuffer(0,0,B,t2,0,0,B,t2,K,n.NEAREST),o===!0&&(ue.length=0,ue.push(n.COLOR_ATTACHMENT0+r2),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&ue.push(a2),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let r2=0;r2<v.length;r2++){t.bindFramebuffer(n.FRAMEBUFFER,l2.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+r2,n.RENDERBUFFER,l2.__webglColorRenderbuffer[r2]);let T=i.get(v[r2]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,l2.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+r2,n.TEXTURE_2D,T,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,l2.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&o){let v=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function l1(L){return Math.min(a.maxSamples,L.samples)}function h2(L){let v=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function _1(L){let v=r.render.frame;f.get(L)!==v&&(f.set(L,v),L.update())}function A2(L,v){let B=L.colorSpace,t2=L.format,K=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||B!==n0&&B!==s4&&(X2.getTransfer(B)===K2?(t2!==Te||K!==F1)&&w2("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):N2("WebGLTextures: Unsupported texture color space:",B)),v}function P2(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=D2,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=z2,this.setTexture2D=p2,this.setTexture2DArray=S2,this.setTexture3D=T2,this.setTextureCube=m2,this.rebindTextures=fe,this.setupRenderTarget=he,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=o1,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=h1,this.useMultisampledRTT=h2,this.dispose=G}function z9(n,e){function t(i,a=s4){let s,r=X2.getTransfer(a);if(i===F1)return n.UNSIGNED_BYTE;if(i===_i)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yi)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ga)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ma)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===pa)return n.BYTE;if(i===ma)return n.SHORT;if(i===R3)return n.UNSIGNED_SHORT;if(i===Si)return n.INT;if(i===Ce)return n.UNSIGNED_INT;if(i===be)return n.FLOAT;if(i===we)return n.HALF_FLOAT;if(i===va)return n.ALPHA;if(i===xa)return n.RGB;if(i===Te)return n.RGBA;if(i===je)return n.DEPTH_COMPONENT;if(i===a4)return n.DEPTH_STENCIL;if(i===Sa)return n.RED;if(i===zi)return n.RED_INTEGER;if(i===L4)return n.RG;if(i===Li)return n.RG_INTEGER;if(i===Ci)return n.RGBA_INTEGER;if(i===I0||i===D0||i===F0||i===U0)if(r===K2)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===I0)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===D0)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===F0)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===U0)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===I0)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===D0)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===F0)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===U0)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bi||i===wi||i===Ti||i===Ai)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bi)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wi)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ti)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ai)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ei||i===Ni||i===Ri||i===Pi||i===Ii||i===B0||i===Di)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ei||i===Ni)return r===K2?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ri)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pi)return s.COMPRESSED_R11_EAC;if(i===Ii)return s.COMPRESSED_SIGNED_R11_EAC;if(i===B0)return s.COMPRESSED_RG11_EAC;if(i===Di)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fi||i===Ui||i===Bi||i===ki||i===Oi||i===Hi||i===Gi||i===Vi||i===Wi||i===qi||i===Xi||i===Yi||i===$i||i===Zi)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fi)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ui)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bi)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ki)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oi)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hi)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gi)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vi)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wi)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qi)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xi)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yi)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$i)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zi)return r===K2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ji||i===Ki||i===Qi)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ji)return r===K2?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ki)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qi)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ji||i===en||i===k0||i===tn)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ji)return s.COMPRESSED_RED_RGTC1_EXT;if(i===en)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===k0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tn)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===W4?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var L9=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C9=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$a=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new p0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Z1({vertexShader:L9,fragmentShader:C9,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y2(new i4(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Za=class extends Ie{constructor(e,t){super();let i=this,a=null,s=1,r=null,c="local-floor",o=1,l=null,f=null,d=null,h=null,u=null,g=null,S=typeof XRWebGLBinding!="undefined",m=new $a,p={},_=t.getContextAttributes(),b=null,z=null,w=[],C=[],M=new M2,y=null,P=null,N=new H1;N.viewport=new r1;let I=new H1;I.viewport=new r1;let U=[N,I],V=new mi,E=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let p2=w[Z];return p2===void 0&&(p2=new S3,w[Z]=p2),p2.getTargetRaySpace()},this.getControllerGrip=function(Z){let p2=w[Z];return p2===void 0&&(p2=new S3,w[Z]=p2),p2.getGripSpace()},this.getHand=function(Z){let p2=w[Z];return p2===void 0&&(p2=new S3,w[Z]=p2),p2.getHandSpace()};function W(Z){let p2=C.indexOf(Z.inputSource);if(p2===-1)return;let S2=w[p2];S2!==void 0&&(S2.update(Z.inputSource,Z.frame,l||r),S2.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",O),a.removeEventListener("inputsourceschange",e2);for(let Z=0;Z<w.length;Z++){let p2=C[Z];p2!==null&&(C[Z]=null,w[Z].disconnect(p2))}E=null,G=null,m.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(b),u=null,h=null,d=null,a=null,z=null,D2.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(M.width,M.height,!1),P!==null){let Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&w2("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,i.isPresenting===!0&&w2("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(a,t)),d},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(b=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",O),a.addEventListener("inputsourceschange",e2),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(M),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let S2=null,T2=null,m2=null;_.depth&&(m2=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,S2=_.stencil?a4:je,T2=_.stencil?W4:Ce);let U2={colorFormat:t.RGBA8,depthFormat:m2,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(U2),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),z=new se(h.textureWidth,h.textureHeight,{format:Te,type:F1,depthTexture:new t4(h.textureWidth,h.textureHeight,T2,void 0,void 0,void 0,void 0,void 0,void 0,S2),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let S2={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(a,t,S2),a.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),z=new se(u.framebufferWidth,u.framebufferHeight,{format:Te,type:F1,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await a.requestReferenceSpace(c),D2.setContext(a),D2.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function e2(Z){for(let p2=0;p2<Z.removed.length;p2++){let S2=Z.removed[p2],T2=C.indexOf(S2);T2>=0&&(C[T2]=null,w[T2].disconnect(S2))}for(let p2=0;p2<Z.added.length;p2++){let S2=Z.added[p2],T2=C.indexOf(S2);if(T2===-1){for(let U2=0;U2<w.length;U2++)if(U2>=C.length){C.push(S2),T2=U2;break}else if(C[U2]===null){C[U2]=S2,T2=U2;break}if(T2===-1)break}let m2=w[T2];m2&&m2.connect(S2)}}function X(Z,p2){p2===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(p2.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let p2=Z.near,S2=Z.far;m.texture!==null&&(m.depthNear>0&&(p2=m.depthNear),m.depthFar>0&&(S2=m.depthFar)),V.near=I.near=N.near=p2,V.far=I.far=N.far=S2,(E!==V.near||G!==V.far)&&(a.updateRenderState({depthNear:V.near,depthFar:V.far}),E=V.near,G=V.far),V.layers.mask=Z.layers.mask|6,N.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;let T2=Z.parent,m2=V.cameras;X(V,T2);for(let U2=0;U2<m2.length;U2++)X(m2[U2],T2);V.projectionMatrix.copy(N.projectionMatrix),V.projectionMatrixInverse.copy(N.projectionMatrixInverse),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),Q(Z,V,T2)};function Q(Z,p2,S2){S2===null?Z.matrix.copy(p2.matrixWorld):(Z.matrix.copy(S2.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(p2.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(p2.projectionMatrix),Z.projectionMatrixInverse.copy(p2.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=v3*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&u===null))return o},this.setFoveation=function(Z){o=Z,h!==null&&(h.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Z){return p[Z]};let j=null;function z2(Z,p2){if(f=p2.getViewerPose(l||r),g=p2,f!==null){let S2=f.views;u!==null&&(e.setRenderTargetFramebuffer(z,u.framebuffer),e.setRenderTarget(z));let T2=!1;S2.length!==V.cameras.length&&(V.cameras.length=0,T2=!0);for(let E2=0;E2<S2.length;E2++){let Q2=S2[E2],t1=null;if(u!==null)t1=u.getViewport(Q2);else{let I1=d.getViewSubImage(h,Q2);t1=I1.viewport,E2===0&&(e.setRenderTargetTextures(z,I1.colorTexture,I1.depthStencilTexture),e.setRenderTarget(z))}let V2=U[E2];V2===void 0&&(V2=new H1,V2.layers.enable(E2),V2.viewport=new r1,U[E2]=V2),V2.matrix.fromArray(Q2.transform.matrix),V2.matrix.decompose(V2.position,V2.quaternion,V2.scale),V2.projectionMatrix.fromArray(Q2.projectionMatrix),V2.projectionMatrixInverse.copy(V2.projectionMatrix).invert(),V2.viewport.set(t1.x,t1.y,t1.width,t1.height),E2===0&&(V.matrix.copy(V2.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),T2===!0&&V.cameras.push(V2)}let m2=a.enabledFeatures;if(m2&&m2.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let E2=d.getDepthInformation(S2[0]);E2&&E2.isValid&&E2.texture&&m.init(E2,a.renderState)}if(m2&&m2.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let E2=0;E2<S2.length;E2++){let Q2=S2[E2].camera;if(Q2){let t1=p[Q2];t1||(t1=new p0,p[Q2]=t1);let V2=d.getCameraImage(Q2);t1.sourceTexture=V2}}}}for(let S2=0;S2<w.length;S2++){let T2=C[S2],m2=w[S2];T2!==null&&m2!==void 0&&m2.update(T2,p2,l||r)}j&&j(Z,p2),p2.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:p2}),g=null}let D2=new pr;D2.setAnimationLoop(z2),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}},b9=new e1,Lr=new R2;Lr.set(-1,0,0,0,1,0,0,0,1);function w9(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Na(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,_,b,z){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&u(m,p,z)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&c(m,p)):p.isPointsMaterial?o(m,p,_,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===R1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===R1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),b=_.envMap,z=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(b9.makeRotationFromEuler(z)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lr),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function c(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,_,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,_){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===R1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function T9(n,e,t,i){let a={},s={};function r(_,b){let z=b.program;i.uniformBlockBinding(_,z,a[_.id])}function c(_,b){let z=a[_.id];z===void 0&&(g(_),z=o(_),a[_.id]=z,_.addEventListener("dispose",m));let w=b.program;i.updateUBOMapping(_,w);let C=e.render.frame;s[_.id]!==C&&(l(_),s[_.id]=C)}function o(_){let b=n.createBuffer(),z=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,z,w),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function l(_){let b=a[_.id],z=_.uniforms,w=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,M=z.length;C<M;C++){let y=z[C];if(Array.isArray(y))for(let P=0,N=y.length;P<N;P++)f(y[P],C,P,w);else f(y,C,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,b,z,w){if(h(_,b,z,w)===!0){let C=_.__offset,M=_.value;if(Array.isArray(M)){let y=0;for(let P=0;P<M.length;P++){let N=M[P],I=S(N,!0);d(N,_.__data,y),y+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(M,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,_.__data)}}function d(_,b,z){typeof _=="number"||typeof _=="boolean"?b[z]=_:_.isMatrix3?(b[z]=_.elements[0],b[z+1]=_.elements[1],b[z+2]=_.elements[2],b[z+3]=0,b[z+4]=_.elements[3],b[z+5]=_.elements[4],b[z+6]=_.elements[5],b[z+7]=0,b[z+8]=_.elements[6],b[z+9]=_.elements[7],b[z+10]=_.elements[8],b[z+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-z),z):_.toArray(b,z)}function h(_,b,z,w){let C=_.value,M=b+"_"+z;if(Array.isArray(C)){w[M]===void 0&&(w[M]=[]);let y=w[M],P=!1;for(let N=0;N<C.length;N++)u(C[N],y,N)===!0&&(P=!0);return P}return u(C,w,M)}function u(_,b,z){if(b[z]===void 0)return typeof _=="number"||typeof _=="boolean"?b[z]=_:ArrayBuffer.isView(_)?b[z]=_.slice():b[z]=_.clone(),!0;{let w=b[z];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return b[z]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function g(_){let b=_.uniforms,z=0,w=16;for(let M=0,y=b.length;M<y;M++){let P=Array.isArray(b[M])?b[M]:[b[M]];for(let N=0,I=P.length;N<I;N++){let U=P[N],V=Array.isArray(U.value)?U.value:[U.value],E=Array.isArray(b[M])||Array.isArray(U.value),G=z;for(let O=0,e2=V.length;O<e2;O++){let X=V[O],Q=S(X,E),j=z%w,z2=j%Q.boundary,D2=j+z2;z+=z2,D2!==0&&w-D2<Q.storage&&(z+=w-D2),O===0&&(G=z),z+=Q.storage}let W=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new W((z-G)/Float32Array.BYTES_PER_ELEMENT),U.__offset=G}}let C=z%w;return C>0&&(z+=w-C),_.__size=z,_.__cache={},this}function S(_,b){let z={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(z.boundary=4,z.storage=4):_.isVector2?(z.boundary=8,z.storage=8):_.isVector3||_.isColor?(z.boundary=16,z.storage=12):_.isVector4?(z.boundary=16,z.storage=16):_.isMatrix3?(z.boundary=16,z.storage=48):_.isMatrix4?(z.boundary=16,z.storage=64):_.isTexture?w2("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(z.boundary=16,z.storage=_.byteLength):w2("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(z.boundary=16,z.storage=Math.ceil(z.storage/16)*16),z}function m(_){let b=_.target;b.removeEventListener("dispose",m),n.deleteBuffer(a[b.id]),delete a[b.id],delete s[b.id]}function p(){for(let _ in a)n.deleteBuffer(a[_]);a={},s={}}return{bind:r,update:c,dispose:p}}var A9=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ge=null;function E9(){return Ge===null&&(Ge=new qt(A9,16,16,L4,we),Ge.name="DFG_LUT",Ge.minFilter=$1,Ge.magFilter=$1,Ge.wrapS=Pe,Ge.wrapT=Pe,Ge.generateMipmaps=!1,Ge.needsUpdate=!0),Ge}var on=class{constructor(e={}){let{canvas:t=Bs(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:c=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:u=F1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let S=u,m=new Set([Ci,Li,zi]),p=new Set([F1,Ce,R3,W4,_i,yi]),_=new Uint32Array(4),b=new Int32Array(4),z={textures:[],min:[],max:[],resolution:[]},w=null,C=null,M=[],y=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=He,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,I=!1,U=null,V=null,E=null,G=null;this._outputColorSpace=d1;let W=0,O=0,e2=null,X=-1,Q=null,j=new r1,z2=new r1,D2=null,Z=new I2(0),p2=0,S2=t.width,T2=t.height,m2=1,U2=null,m1=null,E2=new r1(0,0,S2,T2),Q2=new r1(0,0,S2,T2),t1=!1,V2=new v4,I1=new Xt,S1=!1,K1=!1,h1=new e1,Ne=new A,w1=new r1,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function he(){return e2===null?m2:1}let D=i;function ue(x,R){return t.getContext(x,R)}let o1,l1,h2,_1,A2,P2,L,v,B,t2,K,a2,l2,Y,$,r2,T,J,q,c2,n2,s2,C2;try{let x={alpha:!0,depth:a,stencil:s,antialias:c,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",b2,!1),t.addEventListener("webglcontextrestored",B2,!1),t.addEventListener("webglcontextcreationerror",u2,!1),D===null){let R="webgl2";if(D=ue(R,x),D===null)throw ue(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}k2()}catch(x){throw t.removeEventListener("webglcontextlost",b2,!1),t.removeEventListener("webglcontextrestored",B2,!1),t.removeEventListener("webglcontextcreationerror",u2,!1),N2("WebGLRenderer: "+x.message),x}function k2(){o1=new H5(D),o1.init(),n2=new z9(D,o1),l1=new E5(D,o1,e,n2),h2=new _9(D,o1),l1.reversedDepthBuffer&&h&&h2.buffers.depth.setReversed(!0),V=D.createFramebuffer(),E=D.createFramebuffer(),G=D.createFramebuffer(),_1=new W5(D),A2=new c9,P2=new y9(D,o1,h2,A2,l1,n2,_1),L=new O5(N),v=new q8(D),s2=new T5(D,v),B=new G5(D,v,_1,s2),t2=new X5(D,B,v,s2,_1),J=new q5(D,l1,P2),$=new N5(A2),K=new r9(N,L,o1,l1,s2,$),a2=new w9(N,A2),l2=new l9,Y=new m9(o1),T=new w5(N,L,h2,t2,g,o),r2=new S9(N,t2,l1),C2=new T9(D,_1,l1,h2),q=new A5(D,o1,_1),c2=new V5(D,o1,_1),_1.programs=K.programs,N.capabilities=l1,N.extensions=o1,N.properties=A2,N.renderLists=l2,N.shadowMap=r2,N.state=h2,N.info=_1}S!==F1&&(P=new $5(S,t.width,t.height,c,a,s));let i2=new Za(N,D);this.xr=i2,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let x=o1.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=o1.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return m2},this.setPixelRatio=function(x){x!==void 0&&(m2=x,this.setSize(S2,T2,!1))},this.getSize=function(x){return x.set(S2,T2)},this.setSize=function(x,R,H=!0){if(i2.isPresenting){w2("WebGLRenderer: Can't change size while VR device is presenting.");return}S2=x,T2=R,t.width=Math.floor(x*m2),t.height=Math.floor(R*m2),H===!0&&(t.style.width=x+"px",t.style.height=R+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,x,R)},this.getDrawingBufferSize=function(x){return x.set(S2*m2,T2*m2).floor()},this.setDrawingBufferSize=function(x,R,H){S2=x,T2=R,m2=H,t.width=Math.floor(x*H),t.height=Math.floor(R*H),this.setViewport(0,0,x,R)},this.setEffects=function(x){if(S===F1){N2("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let R=0;R<x.length;R++)if(x[R].isOutputPass===!0){w2("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(j)},this.getViewport=function(x){return x.copy(E2)},this.setViewport=function(x,R,H,F){x.isVector4?E2.set(x.x,x.y,x.z,x.w):E2.set(x,R,H,F),h2.viewport(j.copy(E2).multiplyScalar(he()).round())},this.getScissor=function(x){return x.copy(Q2)},this.setScissor=function(x,R,H,F){x.isVector4?Q2.set(x.x,x.y,x.z,x.w):Q2.set(x,R,H,F),h2.scissor(z2.copy(Q2).multiplyScalar(he()).round())},this.getScissorTest=function(){return t1},this.setScissorTest=function(x){h2.setScissorTest(t1=x)},this.setOpaqueSort=function(x){U2=x},this.setTransparentSort=function(x){m1=x},this.getClearColor=function(x){return x.copy(T.getClearColor())},this.setClearColor=function(){T.setClearColor(...arguments)},this.getClearAlpha=function(){return T.getClearAlpha()},this.setClearAlpha=function(){T.setClearAlpha(...arguments)},this.clear=function(x=!0,R=!0,H=!0){let F=0;if(x){let k=!1;if(e2!==null){let f2=e2.texture.format;k=m.has(f2)}if(k){let f2=e2.texture.type,x2=p.has(f2),o2=T.getClearColor(),g2=T.getClearAlpha(),L2=o2.r,F2=o2.g,W2=o2.b;x2?(_[0]=L2,_[1]=F2,_[2]=W2,_[3]=g2,D.clearBufferuiv(D.COLOR,0,_)):(b[0]=L2,b[1]=F2,b[2]=W2,b[3]=g2,D.clearBufferiv(D.COLOR,0,b))}else F|=D.COLOR_BUFFER_BIT}R&&(F|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),U=x},this.dispose=function(){t.removeEventListener("webglcontextlost",b2,!1),t.removeEventListener("webglcontextrestored",B2,!1),t.removeEventListener("webglcontextcreationerror",u2,!1),T.dispose(),l2.dispose(),Y.dispose(),P2.dispose(),A2.dispose(),L.dispose(),t2.dispose(),B.dispose(),s2.dispose(),C2.dispose(),K.dispose(),i2.dispose(),i2.removeEventListener("sessionstart",f6),i2.removeEventListener("sessionend",h6),T4.stop()};function b2(x){x.preventDefault(),s0("WebGLRenderer: Context Lost."),I=!0}function B2(){s0("WebGLRenderer: Context Restored."),I=!1;let x=_1.autoReset,R=r2.enabled,H=r2.autoUpdate,F=r2.needsUpdate,k=r2.type;k2(),_1.autoReset=x,r2.enabled=R,r2.autoUpdate=H,r2.needsUpdate=F,r2.type=k}function u2(x){N2("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function j2(x){let R=x.target;R.removeEventListener("dispose",j2),T1(R)}function T1(x){l4(x),A2.remove(x)}function l4(x){let R=A2.get(x).programs;R!==void 0&&(R.forEach(function(H){K.releaseProgram(H)}),x.isShaderMaterial&&K.releaseShaderCache(x))}this.renderBufferDirect=function(x,R,H,F,k,f2){R===null&&(R=le);let x2=k.isMesh&&k.matrixWorld.determinantAffine()<0,o2=Fc(x,R,H,F,k);h2.setMaterial(F,x2);let g2=H.index,L2=1;if(F.wireframe===!0){if(g2=B.getWireframeAttribute(H),g2===void 0)return;L2=2}let F2=H.drawRange,W2=H.attributes.position,_2=F2.start*L2,q2=(F2.start+F2.count)*L2;f2!==null&&(_2=Math.max(_2,f2.start*L2),q2=Math.min(q2,(f2.start+f2.count)*L2)),g2!==null?(_2=Math.max(_2,0),q2=Math.min(q2,g2.count)):W2!=null&&(_2=Math.max(_2,0),q2=Math.min(q2,W2.count));let g1=q2-_2;if(g1<0||g1===1/0)return;s2.setup(k,F,o2,H,g2);let a1,i1=q;if(g2!==null&&(a1=v.get(g2),i1=c2,i1.setIndex(a1)),k.isMesh)F.wireframe===!0?(h2.setLineWidth(F.wireframeLinewidth*he()),i1.setMode(D.LINES)):i1.setMode(D.TRIANGLES);else if(k.isLine){let U1=F.linewidth;U1===void 0&&(U1=1),h2.setLineWidth(U1*he()),k.isLineSegments?i1.setMode(D.LINES):k.isLineLoop?i1.setMode(D.LINE_LOOP):i1.setMode(D.LINE_STRIP)}else k.isPoints?i1.setMode(D.POINTS):k.isSprite&&i1.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(o1.get("WEBGL_multi_draw"))i1.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let U1=k._multiDrawStarts,y2=k._multiDrawCounts,W1=k._multiDrawCount,Z2=g2?v.get(g2).bytesPerElement:1,A4=A2.get(F).currentProgram.getUniforms();for(let B1=0;B1<W1;B1++)A4.setValue(D,"_gl_DrawID",B1),i1.render(U1[B1]/Z2,y2[B1])}else if(k.isInstancedMesh)i1.renderInstances(_2,g1,k.count);else if(H.isInstancedBufferGeometry){let U1=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,y2=Math.min(H.instanceCount,U1);i1.renderInstances(_2,g1,y2)}else i1.render(_2,g1)};function l6(x,R,H,F){U!==null&&x.isNodeMaterial&&U.setObject(F,x),S1===!0&&$.setState(x,H,!1),x.transparent===!0&&x.side===Q1&&x.forceSinglePass===!1?(x.side=R1,x.needsUpdate=!0,G3(x,R,F),x.side=z4,x.needsUpdate=!0,G3(x,R,F),x.side=Q1):G3(x,R,F)}this.compile=function(x,R,H=null){H===null&&(H=x),U!==null&&U.renderStart(x,R,H),C=Y.get(H),C.init(R),y.push(C),H.traverseVisible(function(k){k.isLight&&k.layers.test(R.layers)&&(C.pushLight(k),k.castShadow&&C.pushShadow(k))}),x!==H&&x.traverseVisible(function(k){k.isLight&&k.layers.test(R.layers)&&(C.pushLight(k),k.castShadow&&C.pushShadow(k))}),C.setupLights(),U!==null&&U.updateLights(C.state.lightsArray),K1=this.localClippingEnabled,S1=$.init(this.clippingPlanes,K1),S1===!0&&$.setGlobalState(this.clippingPlanes,R),U!==null&&r2.render(C.state.shadowsArray,H,R);let F=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let f2=k.material;if(f2)if(Array.isArray(f2))for(let x2=0;x2<f2.length;x2++){let o2=f2[x2];l6(o2,H,R,k),F.add(o2)}else l6(f2,H,R,k),F.add(f2)}),C=y.pop(),U!==null&&U.renderEnd(),F},this.compileAsync=function(x,R,H=null){let F=this.compile(x,R,H);return new Promise(k=>{function f2(){if(F.forEach(function(x2){let g2=A2.get(x2).currentProgram;(g2===void 0||g2.isReady())&&F.delete(x2)}),F.size===0){k(x);return}setTimeout(f2,10)}o1.get("KHR_parallel_shader_compile")!==null?f2():setTimeout(f2,10)})};let vn=null;function Ic(x){vn&&vn(x)}function f6(){T4.stop()}function h6(){T4.start()}let T4=new pr;T4.setAnimationLoop(Ic),typeof self!="undefined"&&T4.setContext(self),this.setAnimationLoop=function(x){vn=x,i2.setAnimationLoop(x),x===null?T4.stop():T4.start()},i2.addEventListener("sessionstart",f6),i2.addEventListener("sessionend",h6),this.render=function(x,R){if(R!==void 0&&R.isCamera!==!0){N2("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(x,R);let H=i2.enabled===!0&&i2.isPresenting===!0,F=P!==null&&(e2===null||H)&&P.begin(N,e2);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),i2.enabled===!0&&i2.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(i2.cameraAutoUpdate===!0&&i2.updateCamera(R),R=i2.getCamera()),x.isScene===!0&&x.onBeforeRender(N,x,R,e2),C=Y.get(x,y.length),C.init(R),C.state.textureUnits=P2.getTextureUnits(),y.push(C),h1.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),R.isArrayCamera?I1.setFromArrayCamera(R):V2.setFromProjectionMatrix(h1,pe,R.reversedDepth),K1=this.localClippingEnabled,S1=$.init(this.clippingPlanes,K1),w=l2.get(x,M.length),w.init(),M.push(w),this.info.render.frame++,i2.enabled===!0&&i2.isPresenting===!0){let x2=N.xr.getDepthSensingMesh();x2!==null&&xn(x2,R,-1/0,N.sortObjects)}xn(x,R,0,N.sortObjects),w.finish(),U!==null&&U.updateLights(C.state.lightsArray),N.sortObjects===!0&&w.sort(U2,m1),fe=i2.enabled===!1||i2.isPresenting===!1||i2.hasDepthSensing()===!1,fe&&T.addToRenderList(w,x),this.info.autoReset===!0&&this.info.reset(),S1===!0&&$.beginShadows();let k=C.state.shadowsArray;if(r2.render(k,x,R),S1===!0&&$.endShadows(),(F&&P.hasRenderPass())===!1){let x2=w.opaque,o2=w.transmissive;if(C.setupLights(),R.isArrayCamera){let g2=R.cameras;if(o2.length>0)for(let L2=0,F2=g2.length;L2<F2;L2++){let W2=g2[L2];d6(x2,o2,x,W2)}fe&&T.render(x);for(let L2=0,F2=g2.length;L2<F2;L2++){let W2=g2[L2];u6(w,x,W2,W2.viewport)}}else o2.length>0&&d6(x2,o2,x,R),fe&&T.render(x),u6(w,x,R)}e2!==null&&O===0&&(P2.updateMultisampleRenderTarget(e2),P2.updateRenderTargetMipmap(e2)),F&&P.end(N),x.isScene===!0&&x.onAfterRender(N,x,R),s2.resetDefaultState(),X=-1,Q=null,y.pop(),y.length>0?(C=y[y.length-1],P2.setTextureUnits(C.state.textureUnits),S1===!0&&$.setGlobalState(N.clippingPlanes,C.state.camera)):C=null,M.pop(),M.length>0?w=M[M.length-1]:w=null,U!==null&&U.renderEnd()};function xn(x,R,H,F){if(x.visible===!1)return;if(x.layers.test(R.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(R);else if(x.isLight)C.pushLight(x),x.castShadow&&C.pushShadow(x);else if(x.isSprite){let x2=R.isArrayCamera?I1:V2;if(!x.frustumCulled||x.intersectsFrustum(x2)){F&&w1.setFromMatrixPosition(x.matrixWorld).applyMatrix4(h1);let o2=t2.update(x),g2=x.material;g2.visible&&w.push(x,o2,g2,H,w1.z,null,R)}}else if(x.isMesh||x.isLine||x.isPoints){let x2=R.isArrayCamera?I1:V2;if(!x.frustumCulled||x.intersectsFrustum(x2)){let o2=t2.update(x),g2=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),w1.copy(x.boundingSphere.center)):(o2.boundingSphere===null&&o2.computeBoundingSphere(),w1.copy(o2.boundingSphere.center)),w1.applyMatrix4(x.matrixWorld).applyMatrix4(h1)),Array.isArray(g2)){let L2=o2.groups;for(let F2=0,W2=L2.length;F2<W2;F2++){let _2=L2[F2],q2=g2[_2.materialIndex];q2&&q2.visible&&w.push(x,o2,q2,H,w1.z,_2,R)}}else g2.visible&&w.push(x,o2,g2,H,w1.z,null,R)}}}let f2=x.children;for(let x2=0,o2=f2.length;x2<o2;x2++)xn(f2[x2],R,H,F)}function u6(x,R,H,F){let{opaque:k,transmissive:f2,transparent:x2}=x;C.setupLightsView(H),S1===!0&&$.setGlobalState(N.clippingPlanes,H),F&&h2.viewport(j.copy(F)),k.length>0&&tt(k,R,H),f2.length>0&&tt(f2,R,H),x2.length>0&&tt(x2,R,H),h2.buffers.depth.setTest(!0),h2.buffers.depth.setMask(!0),h2.buffers.color.setMask(!0),h2.setPolygonOffset(!1)}function d6(x,R,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[F.id]===void 0){let _2=o1.has("EXT_color_buffer_half_float")||o1.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[F.id]=new se(1,1,{generateMipmaps:!0,type:_2?we:F1,minFilter:n4,samples:Math.max(4,l1.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:X2.workingColorSpace})}let f2=C.state.transmissionRenderTarget[F.id],x2=F.viewport||j;f2.setSize(x2.z*N.transmissionResolutionScale,x2.w*N.transmissionResolutionScale);let o2=N.getRenderTarget(),g2=N.getActiveCubeFace(),L2=N.getActiveMipmapLevel();N.setRenderTarget(f2),N.getClearColor(Z),p2=N.getClearAlpha(),p2<1&&N.setClearColor(16777215,.5),N.clear(),fe&&T.render(H);let F2=N.toneMapping;N.toneMapping=He;let W2=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),C.setupLightsView(F),S1===!0&&$.setGlobalState(N.clippingPlanes,F),tt(x,H,F),P2.updateMultisampleRenderTarget(f2),P2.updateRenderTargetMipmap(f2),o1.has("WEBGL_multisampled_render_to_texture")===!1){let _2=!1;for(let q2=0,g1=R.length;q2<g1;q2++){let a1=R[q2],{object:i1,geometry:U1,material:y2,group:W1}=a1;if(y2.side===Q1&&i1.layers.test(F.layers)){let Z2=y2.side;y2.side=R1,y2.needsUpdate=!0,p6(i1,H,F,U1,y2,W1),y2.side=Z2,y2.needsUpdate=!0,_2=!0}}_2===!0&&(P2.updateMultisampleRenderTarget(f2),P2.updateRenderTargetMipmap(f2))}N.setRenderTarget(o2,g2,L2),N.setClearColor(Z,p2),W2!==void 0&&(F.viewport=W2),N.toneMapping=F2}function tt(x,R,H){let F=R.isScene===!0?R.overrideMaterial:null;for(let k=0,f2=x.length;k<f2;k++){let x2=x[k],{object:o2,geometry:g2,group:L2}=x2,F2=x2.material;F2.allowOverride===!0&&F!==null&&(F2=F),o2.layers.test(H.layers)&&p6(o2,R,H,g2,F2,L2)}}function p6(x,R,H,F,k,f2){U!==null&&k.isNodeMaterial&&U.setObject(x,k),x.onBeforeRender(N,R,H,F,k,f2),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(N,R,H,F,x,f2),k.transparent===!0&&k.side===Q1&&k.forceSinglePass===!1?(k.side=R1,k.needsUpdate=!0,N.renderBufferDirect(H,R,F,k,x,f2),k.side=z4,k.needsUpdate=!0,N.renderBufferDirect(H,R,F,k,x,f2),k.side=Q1):N.renderBufferDirect(H,R,F,k,x,f2),x.onAfterRender(N,R,H,F,k,f2)}function m6(x){let R=0;for(let H of x)H.texture!==null&&R++;return R}function G3(x,R,H){R.isScene!==!0&&(R=le);let F=A2.get(x),k=C.state.lights,f2=C.state.shadowsArray,x2=k.state.version,o2=K.getParameters(x,k.state,f2,R,H,C.state.lightProbeGridArray),g2=K.getProgramCacheKey(o2),L2=F.programs;F.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,F.fog=R.fog;let F2=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;F.envMap=L.get(x.envMap||F.environment,F2),F.envMapRotation=F.environment!==null&&x.envMap===null?R.environmentRotation:x.envMapRotation,L2===void 0&&(x.addEventListener("dispose",j2),L2=new Map,F.programs=L2,F.programVariants=new Map);let W2=L2.get(g2);if(W2!==void 0){if(F.currentProgram===W2&&F.lightsStateVersion===x2)return M6(x,o2),W2}else o2.uniforms=K.getUniforms(x),U!==null&&x.isNodeMaterial&&U.build(x,H,o2),x.onBeforeCompile(o2,N),W2=K.acquireProgram(o2,g2),L2.set(g2,W2),F.uniforms=o2.uniforms;let _2=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(_2.clippingPlanes=$.uniform),M6(x,o2),F.needsLights=Bc(x),F.lightsStateVersion=x2,F.needsLights&&(_2.ambientLightColor.value=k.state.ambient,_2.lightProbe.value=k.state.probe,_2.sunLights.value=k.state.sun,_2.sunLightShadows.value=k.state.sunShadow,_2.directionalLights.value=k.state.directional,_2.directionalLightShadows.value=k.state.directionalShadow,_2.spotLights.value=k.state.spot,_2.spotLightShadows.value=k.state.spotShadow,_2.rectAreaLights.value=k.state.rectArea,_2.ltc_1.value=k.state.rectAreaLTC1,_2.ltc_2.value=k.state.rectAreaLTC2,_2.pointLights.value=k.state.point,_2.pointLightShadows.value=k.state.pointShadow,_2.hemisphereLights.value=k.state.hemi,_2.sunShadowMatrix.value=k.state.sunShadowMatrix,_2.sunShadowCascade.value=k.state.sunShadowCascade,_2.directionalShadowMatrix.value=k.state.directionalShadowMatrix,_2.spotLightMatrix.value=k.state.spotLightMatrix,_2.spotLightMap.value=k.state.spotLightMap,_2.pointShadowMatrix.value=k.state.pointShadowMatrix),F.numLightProbeGrids=m6(C.state.lightProbeGridArray),F.currentProgram=W2,F.uniformsList=null,W2}function Dc(x,R,H,F,k){let f2=A2.get(x),x2=f2.currentProgram.id+","+F+","+k,o2=f2.programVariants.get(x2);return o2===void 0?(o2=G3(x,R,H),f2.programVariants.set(x2,o2)):(f2.currentProgram=o2,f2.uniformsList=null,f2.outputColorSpace=F,f2.toneMapping=k),o2}function g6(x){if(x.uniformsList===null){let R=x.currentProgram.getUniforms();x.uniformsList=P3.seqWithValue(R.seq,x.uniforms)}return x.uniformsList}function M6(x,R){let H=A2.get(x);H.outputColorSpace=R.outputColorSpace,H.batching=R.batching,H.batchingColor=R.batchingColor,H.instancing=R.instancing,H.instancingColor=R.instancingColor,H.instancingMorph=R.instancingMorph,H.skinning=R.skinning,H.morphTargets=R.morphTargets,H.morphNormals=R.morphNormals,H.morphColors=R.morphColors,H.morphTargetsCount=R.morphTargetsCount,H.numClippingPlanes=R.numClippingPlanes,H.numIntersection=R.numClipIntersection,H.vertexAlphas=R.vertexAlphas,H.vertexTangents=R.vertexTangents,H.toneMapping=R.toneMapping}function Fc(x,R,H,F,k){R.isScene!==!0&&(R=le),P2.resetTextureUnits();let f2=R.fog,x2=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?R.environment:null,o2=e2===null?N.outputColorSpace:e2.isXRRenderTarget===!0?e2.texture.colorSpace:X2.workingColorSpace,g2=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,L2=L.get(F.envMap||x2,g2),F2=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,W2=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),_2=!!H.morphAttributes.position,q2=!!H.morphAttributes.normal,g1=!!H.morphAttributes.color,a1=He;F.toneMapped&&(e2===null||e2.isXRRenderTarget===!0)&&(a1=N.toneMapping);let i1=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,U1=i1!==void 0?i1.length:0,y2=A2.get(F),W1=C.state.lights;if(S1===!0&&(K1===!0||x!==Q)){let u1=x===Q&&F.id===X;$.setState(F,x,u1)}let Z2=!1,A4=!1;F.version===y2.__version?y2.needsLights&&y2.lightsStateVersion!==W1.state.version||k.isBatchedMesh&&y2.batching===!1||!k.isBatchedMesh&&y2.batching===!0||k.isBatchedMesh&&y2.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&y2.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&y2.instancing===!1||!k.isInstancedMesh&&y2.instancing===!0||k.isSkinnedMesh&&y2.skinning===!1||!k.isSkinnedMesh&&y2.skinning===!0||k.isInstancedMesh&&y2.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&y2.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&y2.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&y2.instancingMorph===!1&&k.morphTexture!==null||y2.envMap!==L2||F.fog===!0&&y2.fog!==f2||y2.numClippingPlanes!==void 0&&(y2.numClippingPlanes!==$.numPlanes||y2.numIntersection!==$.numIntersection)||y2.vertexAlphas!==F2||y2.vertexTangents!==W2||y2.morphTargets!==_2||y2.morphNormals!==q2||y2.morphColors!==g1||y2.morphTargetsCount!==U1||y2.numLightProbeGrids!==m6(C.state.lightProbeGridArray)?Z2=!0:(y2.outputColorSpace!==o2||y2.toneMapping!==a1)&&(A4=!0):(Z2=!0,y2.__version=F.version);let B1=y2.currentProgram;(Z2===!0||A4===!0)&&(B1=A4===!0?Dc(F,R,k,o2,a1):G3(F,R,k),U&&F.isNodeMaterial&&U.onUpdateProgram(F,B1,y2));let it=!1,f4=!1,E4=!1,$2=B1.getUniforms(),D1=y2.uniforms;if(h2.useProgram(B1.program)&&(it=!0,f4=!0,E4=!0),F.id!==X&&(X=F.id,f4=!0),it||Q!==x){h2.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),$2.setValue(D,"projectionMatrix",x.projectionMatrix),$2.setValue(D,"viewMatrix",x.matrixWorldInverse);let A1=$2.map.cameraPosition;A1!==void 0&&A1.setValue(D,Ne.setFromMatrixPosition(x.matrixWorld)),l1.logarithmicDepthBuffer&&$2.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&$2.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,f4=!0,E4=!0)}if(y2.needsLights&&(W1.state.sunShadowMap.length>0&&$2.setValue(D,"sunShadowMap",W1.state.sunShadowMap,P2),W1.state.directionalShadowMap.length>0&&$2.setValue(D,"directionalShadowMap",W1.state.directionalShadowMap,P2),W1.state.spotShadowMap.length>0&&$2.setValue(D,"spotShadowMap",W1.state.spotShadowMap,P2),W1.state.pointShadowMap.length>0&&$2.setValue(D,"pointShadowMap",W1.state.pointShadowMap,P2)),k.isSkinnedMesh){$2.setOptional(D,k,"bindMatrix"),$2.setOptional(D,k,"bindMatrixInverse");let u1=k.skeleton;u1&&(u1.boneTexture===null&&u1.computeBoneTexture(),$2.setValue(D,"boneTexture",u1.boneTexture,P2))}k.isBatchedMesh&&($2.setOptional(D,k,"batchingTexture"),$2.setValue(D,"batchingTexture",k._matricesTexture,P2),$2.setOptional(D,k,"batchingIdTexture"),$2.setValue(D,"batchingIdTexture",k._indirectTexture,P2),$2.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&$2.setValue(D,"batchingColorTexture",k._colorsTexture,P2));let ve=H.morphAttributes;if((ve.position!==void 0||ve.normal!==void 0||ve.color!==void 0)&&J.update(k,H,B1),(f4||y2.receiveShadow!==k.receiveShadow)&&(y2.receiveShadow=k.receiveShadow,$2.setValue(D,"receiveShadow",k.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&R.environment!==null&&(D1.envMapIntensity.value=R.environmentIntensity),D1.dfgLUT!==void 0&&(D1.dfgLUT.value=E9()),f4){if($2.setValue(D,"toneMappingExposure",N.toneMappingExposure),y2.needsLights&&Uc(D1,E4),f2&&F.fog===!0&&a2.refreshFogUniforms(D1,f2),a2.refreshMaterialUniforms(D1,F,m2,T2,C.state.transmissionRenderTarget[x.id]),y2.needsLights&&y2.numLightProbeGrids>0){let u1=z,A1=0;for(let qe of C.state.lightProbeGridArray)qe.texture!==null&&(u1.textures[A1]=qe.texture,u1.min[A1]=qe.boundingBox.min,u1.max[A1]=qe.boundingBox.max,u1.resolution[A1]=qe.resolution,A1++);for(let qe in u1)u1[qe].length=A1;D1.probesSH.value=u1.textures,D1.probesMin.value=u1.min,D1.probesMax.value=u1.max,D1.probesResolution.value=u1.resolution}P3.upload(D,g6(y2),D1,P2)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(P3.upload(D,g6(y2),D1,P2),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&$2.setValue(D,"center",k.center),$2.setValue(D,"modelViewMatrix",k.modelViewMatrix),$2.setValue(D,"normalMatrix",k.normalMatrix),$2.setValue(D,"modelMatrix",k.matrixWorld),F.uniformsGroups!==void 0){let u1=F.uniformsGroups;for(let A1=0,qe=u1.length;A1<qe;A1++){let x6=u1[A1];C2.update(x6,B1),C2.bind(x6,B1)}}return B1}function Uc(x,R){x.ambientLightColor.needsUpdate=R,x.lightProbe.needsUpdate=R,x.sunLights.needsUpdate=R,x.sunLightShadows.needsUpdate=R,x.directionalLights.needsUpdate=R,x.directionalLightShadows.needsUpdate=R,x.pointLights.needsUpdate=R,x.pointLightShadows.needsUpdate=R,x.spotLights.needsUpdate=R,x.spotLightShadows.needsUpdate=R,x.rectAreaLights.needsUpdate=R,x.hemisphereLights.needsUpdate=R}function Bc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return e2},this.setRenderTargetTextures=function(x,R,H){let F=A2.get(x);F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),A2.get(x.texture).__webglTexture=R,A2.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,R){let H=A2.get(x);H.__webglFramebuffer=R,H.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(x,R=0,H=0){e2=x,W=R,O=H;let F=null,k=!1,f2=!1;if(x){let o2=A2.get(x);if(o2.__useDefaultFramebuffer!==void 0){h2.bindFramebuffer(D.FRAMEBUFFER,o2.__webglFramebuffer),j.copy(x.viewport),z2.copy(x.scissor),D2=x.scissorTest,h2.viewport(j),h2.scissor(z2),h2.setScissorTest(D2),X=-1;return}else if(o2.__webglFramebuffer===void 0)P2.setupRenderTarget(x);else if(o2.__hasExternalTextures)P2.rebindTextures(x,A2.get(x.texture).__webglTexture,A2.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let F2=x.depthTexture;if(o2.__boundDepthTexture!==F2){if(F2!==null&&A2.has(F2)&&(x.width!==F2.image.width||x.height!==F2.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");P2.setupDepthRenderbuffer(x)}}let g2=x.texture;(g2.isData3DTexture||g2.isDataArrayTexture||g2.isCompressedArrayTexture)&&(f2=!0);let L2=A2.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(L2[R])?F=L2[R][H]:F=L2[R],k=!0):x.samples>0&&P2.useMultisampledRTT(x)===!1?F=A2.get(x).__webglMultisampledFramebuffer:Array.isArray(L2)?F=L2[H]:F=L2,j.copy(x.viewport),z2.copy(x.scissor),D2=x.scissorTest}else j.copy(E2).multiplyScalar(m2).floor(),z2.copy(Q2).multiplyScalar(m2).floor(),D2=t1;if(H!==0&&(F=V),h2.bindFramebuffer(D.FRAMEBUFFER,F)&&h2.drawBuffers(x,F),h2.viewport(j),h2.scissor(z2),h2.setScissorTest(D2),k){let o2=A2.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+R,o2.__webglTexture,H)}else if(f2){let o2=R;for(let g2=0;g2<x.textures.length;g2++){let L2=A2.get(x.textures[g2]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+g2,L2.__webglTexture,H,o2)}}else if(x!==null&&H!==0){let o2=A2.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,o2.__webglTexture,H)}X=-1};function v6(x){let R=A2.get(x);return(R.__readFormat!==x.format||R.__readType!==x.type)&&(R.__readFormat=x.format,R.__readType=x.type,R.__formatReadable=l1.textureFormatReadable(x.format),R.__typeReadable=l1.textureTypeReadable(x.type)),R}this.readRenderTargetPixels=function(x,R,H,F,k,f2,x2,o2=0){if(!(x&&x.isWebGLRenderTarget)){N2("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let g2=A2.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&x2!==void 0&&(g2=g2[x2],Array.isArray(g2)&&(g2=g2[0])),g2){h2.bindFramebuffer(D.FRAMEBUFFER,g2);try{let L2=x.textures[o2],F2=L2.format,W2=L2.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+o2);let _2=v6(L2);if(_2.__formatReadable===!1){N2("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_2.__typeReadable===!1){N2("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=x.width-F&&H>=0&&H<=x.height-k&&D.readPixels(R,H,F,k,n2.convert(F2),n2.convert(W2),f2)}finally{let L2=e2!==null?A2.get(e2).__webglFramebuffer:null;h2.bindFramebuffer(D.FRAMEBUFFER,L2)}}},this.readRenderTargetPixelsAsync=async function(x,R,H,F,k,f2,x2,o2=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let g2=A2.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&x2!==void 0&&(g2=g2[x2],Array.isArray(g2)&&(g2=g2[0])),g2)if(R>=0&&R<=x.width-F&&H>=0&&H<=x.height-k){h2.bindFramebuffer(D.FRAMEBUFFER,g2);let L2=x.textures[o2],F2=L2.format,W2=L2.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+o2);let _2=v6(L2);if(_2.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(_2.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let q2=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,q2),D.bufferData(D.PIXEL_PACK_BUFFER,f2.byteLength,D.STREAM_READ),D.readPixels(R,H,F,k,n2.convert(F2),n2.convert(W2),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let g1=e2!==null?A2.get(e2).__webglFramebuffer:null;h2.bindFramebuffer(D.FRAMEBUFFER,g1);let a1=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Os(D,a1,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,q2),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,f2),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(q2),D.deleteSync(a1),f2}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,R=null,H=0){let F=Math.pow(2,-H),k=Math.floor(x.image.width*F),f2=Math.floor(x.image.height*F),x2=R!==null?R.x:0,o2=R!==null?R.y:0;P2.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,x2,o2,k,f2),h2.unbindTexture()},this.copyTextureToTexture=function(x,R,H=null,F=null,k=0,f2=0){let x2,o2,g2,L2,F2,W2,_2,q2,g1,a1=x.isCompressedTexture?x.mipmaps[f2]:x.image;if(H!==null)x2=H.max.x-H.min.x,o2=H.max.y-H.min.y,g2=H.isBox3?H.max.z-H.min.z:1,L2=H.min.x,F2=H.min.y,W2=H.isBox3?H.min.z:0;else{let $2=Math.pow(2,-k);x2=Math.floor(a1.width*$2),o2=Math.floor(a1.height*$2),x.isDataArrayTexture?g2=a1.depth:x.isData3DTexture?g2=Math.floor(a1.depth*$2):g2=1,L2=0,F2=0,W2=0}F!==null?(_2=F.x,q2=F.y,g1=F.z):(_2=0,q2=0,g1=0);let i1=n2.convert(R.format),U1=n2.convert(R.type),y2;R.isData3DTexture?(P2.setTexture3D(R,0),y2=D.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(P2.setTexture2DArray(R,0),y2=D.TEXTURE_2D_ARRAY):(P2.setTexture2D(R,0),y2=D.TEXTURE_2D),h2.activeTexture(D.TEXTURE0),h2.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,R.flipY),h2.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),h2.pixelStorei(D.UNPACK_ALIGNMENT,R.unpackAlignment);let W1=h2.getParameter(D.UNPACK_ROW_LENGTH),Z2=h2.getParameter(D.UNPACK_IMAGE_HEIGHT),A4=h2.getParameter(D.UNPACK_SKIP_PIXELS),B1=h2.getParameter(D.UNPACK_SKIP_ROWS),it=h2.getParameter(D.UNPACK_SKIP_IMAGES);h2.pixelStorei(D.UNPACK_ROW_LENGTH,a1.width),h2.pixelStorei(D.UNPACK_IMAGE_HEIGHT,a1.height),h2.pixelStorei(D.UNPACK_SKIP_PIXELS,L2),h2.pixelStorei(D.UNPACK_SKIP_ROWS,F2),h2.pixelStorei(D.UNPACK_SKIP_IMAGES,W2);let f4=x.isDataArrayTexture||x.isData3DTexture,E4=R.isDataArrayTexture||R.isData3DTexture;if(x.isDepthTexture){let $2=A2.get(x),D1=A2.get(R),ve=A2.get($2.__renderTarget),u1=A2.get(D1.__renderTarget);h2.bindFramebuffer(D.READ_FRAMEBUFFER,ve.__webglFramebuffer),h2.bindFramebuffer(D.DRAW_FRAMEBUFFER,u1.__webglFramebuffer);for(let A1=0;A1<g2;A1++)f4&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A2.get(x).__webglTexture,k,W2+A1),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A2.get(R).__webglTexture,f2,g1+A1)),D.blitFramebuffer(L2,F2,L2+x2,F2+o2,_2,q2,_2+x2,q2+o2,D.DEPTH_BUFFER_BIT,D.NEAREST);h2.bindFramebuffer(D.READ_FRAMEBUFFER,null),h2.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||A2.has(x)){let $2=A2.get(x),D1=A2.get(R);h2.bindFramebuffer(D.READ_FRAMEBUFFER,E),h2.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let ve=0;ve<g2;ve++)f4?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$2.__webglTexture,k,W2+ve):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$2.__webglTexture,k),E4?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D1.__webglTexture,f2,g1+ve):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,D1.__webglTexture,f2),k!==0?D.blitFramebuffer(L2,F2,L2+x2,F2+o2,_2,q2,_2+x2,q2+o2,D.COLOR_BUFFER_BIT,D.NEAREST):E4?D.copyTexSubImage3D(y2,f2,_2,q2,g1+ve,L2,F2,x2,o2):D.copyTexSubImage2D(y2,f2,_2,q2,L2,F2,x2,o2);h2.bindFramebuffer(D.READ_FRAMEBUFFER,null),h2.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else E4?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(y2,f2,_2,q2,g1,x2,o2,g2,i1,U1,a1.data):R.isCompressedArrayTexture?D.compressedTexSubImage3D(y2,f2,_2,q2,g1,x2,o2,g2,i1,a1.data):D.texSubImage3D(y2,f2,_2,q2,g1,x2,o2,g2,i1,U1,a1):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,f2,_2,q2,x2,o2,i1,U1,a1.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,f2,_2,q2,a1.width,a1.height,i1,a1.data):D.texSubImage2D(D.TEXTURE_2D,f2,_2,q2,x2,o2,i1,U1,a1);h2.pixelStorei(D.UNPACK_ROW_LENGTH,W1),h2.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Z2),h2.pixelStorei(D.UNPACK_SKIP_PIXELS,A4),h2.pixelStorei(D.UNPACK_SKIP_ROWS,B1),h2.pixelStorei(D.UNPACK_SKIP_IMAGES,it),f2===0&&R.generateMipmaps===!0&&R.mipmapsAutoUpdate===!0&&D.generateMipmap(y2),h2.unbindTexture()},this.initRenderTarget=function(x){A2.get(x).__webglFramebuffer===void 0&&P2.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?P2.setTextureCube(x,0):x.isData3DTexture?P2.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?P2.setTexture2DArray(x,0):P2.setTexture2D(x,0),h2.unbindTexture()},this.resetState=function(){W=0,O=0,e2=null,h2.reset(),s2.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=X2._getDrawingBufferColorSpace(e),t.unpackColorSpace=X2._getUnpackColorSpace()}};var W0=class n extends Y2{constructor(){super(n.Geometry,new G1({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;let e=new A,t=new A,i=new z3(16,16),a=new z3(16,16),s=F1,r=n.Geometry,c=new x4({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),o=new x4({uniforms:{map:{value:i},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new Y2(r,c),f=[],d=We.Shader,h=new x4({name:d.name,uniforms:{map:{value:null},occlusionMap:{value:a},color:{value:new I2(16777215)},scale:{value:new M2},screenPosition:{value:new A}},vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Oe,transparent:!0,depthWrite:!1}),u=new Y2(r,h);this.addElement=function(_){f.push(_)};let g=new M2,S=new M2,m=new E0,p=new r1;this.onBeforeRender=function(_,b,z){_.getCurrentViewport(p);let w=_.getRenderTarget(),C=w!==null?w.texture.type:F1;s!==C&&(i.dispose(),a.dispose(),i.type=a.type=C,s=C);let M=p.w/p.z,y=p.z/2,P=p.w/2,N=16/p.w;if(g.set(N*M,N),m.min.set(p.x,p.y),m.max.set(p.x+(p.z-16),p.y+(p.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(z.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(z.projectionMatrix),S.x=p.x+e.x*y+y-8,S.y=p.y+e.y*P+P-8,m.containsPoint(S))){_.copyFramebufferToTexture(i,S);let I=c.uniforms;I.scale.value=g,I.screenPosition.value=e,_.renderBufferDirect(z,null,r,c,l,null),_.copyFramebufferToTexture(a,S),I=o.uniforms,I.scale.value=g,I.screenPosition.value=e,_.renderBufferDirect(z,null,r,o,l,null);let U=-e.x*2,V=-e.y*2;for(let E=0,G=f.length;E<G;E++){let W=f[E],O=h.uniforms;O.color.value.copy(W.color),O.map.value=W.texture,O.screenPosition.value.x=e.x+U*W.distance,O.screenPosition.value.y=e.y+V*W.distance,N=W.size/p.w;let e2=p.w/p.z;O.scale.value.set(N*e2,N),h.uniformsNeedUpdate=!0,_.renderBufferDirect(z,null,r,h,u,null)}}},this.dispose=function(){c.dispose(),o.dispose(),h.dispose(),i.dispose(),a.dispose();for(let _=0,b=f.length;_<b;_++)f[_].texture.dispose()}}},We=class{constructor(e,t=1,i=0,a=new I2(16777215)){this.texture=e,this.size=t,this.distance=i,this.color=a}};We.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};W0.Geometry=(function(){let n=new f1,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new _3(e,5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new M4(t,3,0,!1)),n.setAttribute("uv",new M4(t,2,3,!1)),n})();var Ja={};Oc(Ja,{faBasketShopping:()=>wr,faBinoculars:()=>Tr,faBrain:()=>Yr,faBug:()=>Jr,faChalkboardUser:()=>Cr,faChartLine:()=>Wr,faCity:()=>Br,faCloudShowersHeavy:()=>qr,faCode:()=>Hr,faCrow:()=>Qr,faDove:()=>Xr,faDroplet:()=>$r,faEarthAfrica:()=>Vr,faEnvelopeOpenText:()=>br,faGlobe:()=>hn,faHouseFloodWater:()=>Kr,faLayerGroup:()=>ic,faMap:()=>Gr,faMapLocationDot:()=>Ar,faMicrophoneLines:()=>Zr,faMountain:()=>Dr,faMountainSun:()=>kr,faRulerCombined:()=>ec,faSatellite:()=>Ir,faSatelliteDish:()=>jr,faSeedling:()=>Fr,faSmog:()=>Nr,faTemperatureHigh:()=>Pr,faTree:()=>Er,faUsers:()=>Ur,faWater:()=>Rr,faWheatAwn:()=>Or,faWind:()=>tc});var Cr={prefix:"fas",iconName:"chalkboard-user",icon:[640,512,["chalkboard-teacher"],"f51c","M192 384c53 0 96 43 96 96 0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32 0-53 43-96 96-96l96 0zM544 32c35.3 0 64 28.7 64 64l0 288c0 33.1-25.2 60.4-57.5 63.7l-6.5 .3-211.1 0c-5.1-24.2-16.3-46.1-32.1-64l51.2 0 0-32c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 32 32 0 0-288-352 0 0 57.3c-14.8-6-31-9.3-48-9.3-5.4 0-10.8 .3-16 1l0-49c0-35.3 28.7-64 64-64l352 0zM144 352a80 80 0 1 1 0-160 80 80 0 1 1 0 160z"]};var br={prefix:"fas",iconName:"envelope-open-text",icon:[576,512,[],"f658","M288 33.9L96.4 175.8 254.5 293c5.3 3.9 11.2 6.9 17.5 8.7L272 464c0 5.5 .5 10.8 1.3 16L96 480c-35.3 0-64-28.7-64-64l0-239.9c0-20.3 9.6-39.4 25.9-51.4L254.5-21c9.7-7.2 21.4-11 33.5-11s23.8 3.9 33.5 11L518.1 124.7c7.2 5.3 13.1 12 17.4 19.6-2.5-.2-5-.3-7.5-.3L436.6 144 288 33.9zM320 240c0-26.5 21.5-48 48-48l160 0c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-224zm80 16c-13.3 0-24 10.7-24 24s10.7 24 24 24l96 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0z"]};var wr={prefix:"fas",iconName:"basket-shopping",icon:[576,512,["shopping-basket"],"f291","M288 0c6.6 0 12.9 2.7 17.4 7.5l144 152 .5 .5 78.1 0c17.7 0 32 14.3 32 32 0 14.5-9.6 26.7-22.8 30.7L491.1 429.9c-6.5 29.3-32.5 50.1-62.5 50.1l-281.3 0c-30 0-56-20.8-62.5-50.1l-46-207.2c-13.2-3.9-22.8-16.2-22.8-30.7 0-17.7 14.3-32 32-32l78.1 0 .5-.5 144-152C275.1 2.7 281.4 0 288 0zm0 58.9L192.2 160 383.8 160 288 58.9zM208 264c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zm80-24c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm128 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112z"]};var Tr={prefix:"fas",iconName:"binoculars",icon:[512,512,[],"f1e5","M128 32l32 0c17.7 0 32 14.3 32 32l0 32-96 0 0-32c0-17.7 14.3-32 32-32zm64 96l0 320c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32l0-59.1c0-34.6 9.4-68.6 27.2-98.3 13.7-22.8 22.5-48.2 25.8-74.6L60.5 156c2-16 15.6-28 31.8-28l99.8 0zm227.8 0c16.1 0 29.8 12 31.8 28L459 216c3.3 26.4 12.1 51.8 25.8 74.6 17.8 29.7 27.2 63.7 27.2 98.3l0 59.1c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-320 99.8 0zM320 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 32-96 0 0-32zm-32 64l0 160-64 0 0-160 64 0z"]};var Ar={prefix:"fas",iconName:"map-location-dot",icon:[640,512,["map-marked-alt"],"f5a0","M576 48c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4L413.5 77.5 234.1 17.6c-8.1-2.7-16.8-2.1-24.4 1.7l-128 64C70.8 88.8 64 99.9 64 112l0 352c0 11.1 5.7 21.4 15.2 27.2s21.2 6.4 31.1 1.4l116.1-58.1 173.3 57.8c-4.3-6.4-8.5-13.1-12.6-19.9-11-18.3-21.9-39.3-30-61.8l-101.2-33.7 0-284.5 128 42.7 0 99.3c31-35.8 77-58.4 128-58.4 22.6 0 44.2 4.4 64 12.5L576 48zM512 224c-66.3 0-120 52.8-120 117.9 0 68.9 64.1 150.4 98.6 189.3 11.6 13 31.3 13 42.9 0 34.5-38.9 98.6-120.4 98.6-189.3 0-65.1-53.7-117.9-120-117.9zM472 344a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]};var Er={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M224-32c7 0 13.7 3.1 18.3 8.5l136 160c6.1 7.1 7.4 17.1 3.5 25.6S369.4 176 360 176l-24.9 0 75.2 88.5c6.1 7.1 7.4 17.1 3.5 25.6S401.4 304 392 304l-38.5 0 88.8 104.5c6.1 7.1 7.4 17.1 3.5 25.6S433.4 448 424 448l-168 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64-168 0c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L94.5 304 56 304c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L112.9 176 88 176c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6l136-160C210.3-28.9 217-32 224-32z"]},Nr={prefix:"fas",iconName:"smog",icon:[576,512,[],"f75f","M176 288C96.5 288 32 223.5 32 144S96.5 0 176 0c27.2 0 52.6 7.5 74.3 20.6 20.1-13 44-20.6 69.7-20.6 47.4 0 88.7 25.7 110.9 64l1.1 0c61.9 0 112 50.1 112 112 0 60.3-47.6 109.4-107.2 111.9-22.6 20-52.3 32.1-84.8 32.1-32.5 0-62.1-12.1-84.7-32L176 288zM512 392c0 13.3-10.7 24-24 24L24 416c-13.3 0-24-10.7-24-24s10.7-24 24-24l464 0c13.3 0 24 10.7 24 24zM88 464l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm176 0l288 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]};var Rr={prefix:"fas",iconName:"water",icon:[512,512,[],"f773","M410.6 124.1c20.7 15.6 46 30.7 74.2 34.5 13.1 1.8 25.2-7.5 27-20.6s-7.5-25.2-20.6-27c-15.9-2.1-33.2-11.3-51.7-25.2-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-18.5 13.9-35.8 23.1-51.7 25.2-13.1 1.8-22.4 13.8-20.6 27s13.8 22.4 27 20.6c28.2-3.8 53.6-18.9 74.2-34.5 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9c21.3-16.1 49.9-16.1 71.2 0zm0 144c20.7 15.6 46 30.7 74.2 34.5 13.1 1.8 25.2-7.5 27-20.6s-7.5-25.2-20.6-27c-15.9-2.1-33.2-11.3-51.7-25.2-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-18.5 13.9-35.8 23.1-51.7 25.2-13.1 1.7-22.4 13.8-20.6 27s13.8 22.4 27 20.6c28.2-3.8 53.6-18.9 74.2-34.5 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9c21.3-16.1 49.9-16.1 71.2 0zm-71.2 144c21.3-16.1 49.9-16.1 71.2 0 20.7 15.6 46 30.7 74.2 34.5 13.1 1.8 25.2-7.5 27-20.6s-7.5-25.2-20.6-27c-15.9-2.1-33.2-11.3-51.7-25.2-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-18.5 13.9-35.8 23.1-51.7 25.2-13.1 1.8-22.4 13.8-20.6 27s13.8 22.4 27 20.6c28.2-3.8 53.6-18.9 74.2-34.5 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9z"]};var Pr={prefix:"fas",iconName:"temperature-high",icon:[512,512,[],"f769","M96 96c0-53 43-96 96-96s96 43 96 96l0 164.7c29.5 26.4 48 64.7 48 107.3 0 79.5-64.5 144-144 144S48 447.5 48 368c0-42.6 18.5-81 48-107.3L96 96zm96 336c35.3 0 64-28.7 64-64 0-26.9-16.5-49.9-40-59.3L216 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 212.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64zM464 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM352 80a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z"]};var Ir={prefix:"fas",iconName:"satellite",icon:[512,512,[128752],"f7bf","M199 7c9.4-9.4 24.6-9.4 33.9 0l89.4 89.4 55-55c12.5-12.5 32.8-12.5 45.3 0l48 48c12.5 12.5 12.5 32.8 0 45.3l-55 55 89.4 89.4c9.4 9.4 9.4 24.6 0 33.9l-96 96c-9.4 9.4-24.6 9.4-33.9 0l-89.4-89.4-15.5 15.5c11.4 24.6 17.8 52 17.8 80.9 0 31.7-7.7 61.5-21.2 87.8-4.7 9-16.7 10.3-23.8 3.1l-96.3-96.3-60 60c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l60-60-96.3-96.3c-7.2-7.2-5.9-19.2 3.1-23.8 26.3-13.6 56.2-21.2 87.8-21.2 28.9 0 56.3 6.4 80.9 17.8L192.4 226.3 103 137c-9.4-9.4-9.4-24.6 0-33.9L199 7zm17 50.9l-62.1 62.1 72.4 72.4 62.1-62.1-72.4-72.4zM392 358.1l62.1-62.1-72.4-72.4-62.1 62.1 72.4 72.4z"]};var Dr={prefix:"fas",iconName:"mountain",icon:[512,512,[127956],"f6fc","M256.5 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5-7.2 12.1-20.3 19.5-34.3 19.5l-432 0c-14.1 0-27.1-7.4-34.3-19.5s-7.5-27.1-.8-39.5l216-400 2.9-4.6C231.7 6.2 243.6 0 256.5 0zM170.4 249.9l26.8 26.8c6.2 6.2 16.4 6.2 22.6 0l43.3-43.3c6-6 14.1-9.4 22.6-9.4l42.8 0-72.1-133.5-86.1 159.4z"]};var Fr={prefix:"fas",iconName:"seedling",icon:[512,512,[127793,"sprout"],"f4d8","M512 32C512 140.1 435.4 230.3 333.6 251.4 325.7 193.3 299.6 141 261.1 100.5 301.2 40 369.9 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"]};var Ur={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]};var Br={prefix:"fas",iconName:"city",icon:[576,512,[127961],"f64f","M320 0c-35.3 0-64 28.7-64 64l0 32-48 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-72C96 10.7 85.3 0 72 0S48 10.7 48 24l0 74c-27.6 7.1-48 32.2-48 62L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-64 0 0-128c0-35.3-28.7-64-64-64L320 0zm64 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zm-16 80c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zm16 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zm112-16c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 304l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM240 192c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM128 304l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM112 192c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0z"]};var kr={prefix:"fas",iconName:"mountain-sun",icon:[576,512,[],"e52f","M256.5 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5-7.2 12.1-20.3 19.5-34.3 19.5l-432 0c-14.1 0-27.1-7.4-34.3-19.5s-7.5-27.1-.8-39.5l216-400 2.9-4.6C231.7 6.2 243.6 0 256.5 0zM170.4 249.9l26.8 26.8c6.2 6.2 16.4 6.2 22.6 0l43.3-43.3c6-6 14.1-9.4 22.6-9.4l42.8 0-72.1-133.5-86.1 159.4zM496.5 160a80 80 0 1 1 0-160 80 80 0 1 1 0 160z"]};var Or={prefix:"fas",iconName:"wheat-awn",icon:[576,512,["wheat-alt"],"e2cd","M79.7 234.6c6.2-4.1 14.7-3.4 20.1 2.1l46.1 46.1 6.1 6.7c19.7 23.8 26.3 55 19.2 83.9 31.7-7.7 66.2 1 90.6 25.3l46.1 46.1c6.2 6.2 6.2 16.4 0 22.6l-7.4 7.4c-37.5 37.5-98.3 37.5-135.8 0L134.1 444.3 49.4 529c-9.4 9.4-24.5 9.4-33.9 0-9.4-9.4-9.4-24.6 0-33.9l84.7-84.7-30.5-30.5c-37.5-37.5-37.5-98.3 0-135.7l7.4-7.4 2.5-2.1zm104-104c6.2-4.1 14.7-3.4 20.1 2.1l46.1 46.1 6.1 6.7c19.7 23.8 26.3 55 19.2 83.9 31.7-7.7 66.2 1 90.6 25.3l46.1 46.1c6.2 6.2 6.2 16.4 0 22.6l-7.4 7.4c-37.5 37.5-98.3 37.5-135.8 0l-94.9-94.9c-37.5-37.5-37.5-98.3 0-135.7l7.4-7.4 2.5-2.1zM495.2 15c9.4-9.4 24.6-9.4 34 0 8.8 8.8 9.3 22.7 1.6 32.2L529.2 49 414.7 163.4c7.7 1 15.2 3 22.5 5.9L495.5 111c9.4-9.4 24.6-9.4 34 0 8.8 8.8 9.3 22.7 1.6 32.1l-1.7 1.8-52.7 52.7 39 39c6.2 6.2 6.2 16.4 0 22.6l-7.4 7.4c-37.5 37.5-98.3 37.5-135.8 0l-94.9-94.9c-37.5-37.5-37.5-98.3 0-135.7l7.4-7.4 2.5-2.1c6.2-4.1 14.7-3.4 20.1 2.1l39 39 52.7-52.7c9.4-9.4 24.6-9.4 34 0 8.8 8.8 9.3 22.7 1.6 32.1l-1.7 1.8-58.3 58.3c2.8 7.1 4.7 14.5 5.7 22.1L495.2 15z"]};var Hr={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]};var Gr={prefix:"fas",iconName:"map",icon:[512,512,[128506,62072],"f279","M512 48c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4L349.5 77.5 170.1 17.6c-8.1-2.7-16.8-2.1-24.4 1.7l-128 64C6.8 88.8 0 99.9 0 112L0 464c0 11.1 5.7 21.4 15.2 27.2s21.2 6.4 31.1 1.4l116.1-58.1 179.4 59.8c8.1 2.7 16.8 2.1 24.4-1.7l128-64c10.8-5.4 17.7-16.5 17.7-28.6l0-352zM192 376.9l0-284.5 128 42.7 0 284.5-128-42.7z"]};var Vr={prefix:"fas",iconName:"earth-africa",icon:[512,512,[127757,"globe-africa"],"f57c","M447.6 175c-31.6-74.6-105.5-127-191.6-127-22.1 0-43.4 3.5-63.4 9.8-.4 2-.6 4.1-.6 6.2l0 73.4c0 12.5 10.1 22.6 22.6 22.6 6 0 11.8-2.4 16-6.6l16-16c6-6 14.1-9.4 22.6-9.4l5.5 0c28.5 0 42.8 34.5 22.6 54.6-6 6-14.1 9.4-22.6 9.4l-61.5 0c-8.5 0-16.6 3.4-22.6 9.4l-21.3 21.3c-6 6-9.4 14.1-9.4 22.6l0 42.7c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32l0 32c0 17.7 14.3 32 32 32l2.7 0c8.5 0 16.6-3.4 22.6-9.4l29.3-29.3c6-6 9.4-14.1 9.4-22.6l0-18.7c0-8.8 7.2-16 16-16s16-7.2 16-16l0-34.7c0-8.5-3.4-16.6-9.4-22.6l-16-16c-4.2-4.2-6.6-10-6.6-16 0-12.5 10.1-22.6 22.6-22.6l45 0c12.4 0 22.7-7.1 28-17zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"]};var Wr={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]};var qr={prefix:"fas",iconName:"cloud-showers-heavy",icon:[512,512,[],"f740","M96 320c-53 0-96-43-96-96 0-42.5 27.6-78.6 65.9-91.2-1.3-6.7-1.9-13.7-1.9-20.8 0-61.9 50.1-112 112-112 43.1 0 80.5 24.3 99.2 60 14.7-17.1 36.5-28 60.8-28 44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16 .5 0 1.1 0 1.6 0 53 0 96 43 96 96s-43 96-96 96L96 320zm6.8 79.6l-32 96C66.6 508.2 53 515 40.4 510.8S21 493 25.2 480.4l32-96C61.4 371.8 75 365 87.6 369.2S107 387 102.8 399.6zm120 0l-32 96c-4.2 12.6-17.8 19.4-30.4 15.2S141 493 145.2 480.4l32-96c4.2-12.6 17.8-19.4 30.4-15.2S227 387 222.8 399.6zm112 0l-32 96c-4.2 12.6-17.8 19.4-30.4 15.2S253 493 257.2 480.4l32-96c4.2-12.6 17.8-19.4 30.4-15.2S339 387 334.8 399.6zm120 0l-32 96c-4.2 12.6-17.8 19.4-30.4 15.2S373 493 377.2 480.4l32-96c4.2-12.6 17.8-19.4 30.4-15.2S459 387 454.8 399.6z"]};var Xr={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M496 64c13.2 0 20.7 15.1 12.8 25.6L480 128 480 304c0 79.5-64.5 144-144 144l-112 0-46.3 46.3c-10.4 10.4-26.5 12.4-39.1 4.8L41.5 440.9c-17-10.2-15-35.5 3.4-42.9L160 352C23.8 311.1 7.5 169.8 22 95.7 25.6 77.9 45.3 71.4 61.3 80.2L320 224 320 144c0-44.2 35.8-80 80-80l96 0zm-96 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM182.5-9.6c12.4-13.7 33.3-8.9 42.5 7.1l56.4 98.3c-5.8 14.4-9.2 30.1-9.4 46.5L138.1 68c10.1-31.6 27-58.4 44.4-77.6z"]};var Yr={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z"]};var $r={prefix:"fas",iconName:"droplet",icon:[384,512,[128167,"tint"],"f043","M192 512C86 512 0 426 0 320 0 228.8 130.2 45.9 166.6-3.5 172.5-11.5 181.8-16 191.8-16l.4 0c10 0 19.3 4.5 25.2 12.5 36.4 49.4 166.6 232.3 166.6 323.5 0 106-86 192-192 192zM112 312c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 75.1 60.9 136 136 136 13.3 0 24-10.7 24-24s-10.7-24-24-24c-48.6 0-88-39.4-88-88z"]};var Zr={prefix:"fas",iconName:"microphone-lines",icon:[384,512,[127897,"microphone-alt"],"f3c9","M96 96c0-53 43-96 96-96 50.3 0 91.6 38.7 95.7 88L232 88c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0 0 48-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l55.7 0c-4.1 49.3-45.3 88-95.7 88-53 0-96-43-96-96L96 96zM24 160c13.3 0 24 10.7 24 24l0 40c0 79.5 64.5 144 144 144s144-64.5 144-144l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 97.9-73.3 178.7-168 190.5l0 49.5 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-49.5C73.3 402.7 0 321.9 0 224l0-40c0-13.3 10.7-24 24-24z"]};var Jr={prefix:"fas",iconName:"bug",icon:[576,512,[],"f188","M192 96c0-53 43-96 96-96s96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6zm345.6 12.8c10.6 14.1 7.7 34.2-6.4 44.8l-97.8 73.3c5.3 8.9 9.3 18.7 11.8 29.1l98.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0 0 32c0 2.6-.1 5.3-.2 7.9l83.4 62.5c14.1 10.6 17 30.7 6.4 44.8s-30.7 17-44.8 6.4l-63.1-47.3c-23.2 44.2-66.5 76.2-117.7 83.9L312 280c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 230.2c-51.2-7.7-94.5-39.7-117.7-83.9L83.2 473.6c-14.1 10.6-34.2 7.7-44.8-6.4s-7.7-34.2 6.4-44.8l83.4-62.5c-.1-2.6-.2-5.2-.2-7.9l0-32-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l98.8 0c2.5-10.4 6.5-20.2 11.8-29.1L44.8 153.6c-14.1-10.6-17-30.7-6.4-44.8s30.7-17 44.8-6.4L192 184c12.3-5.1 25.8-8 40-8l112 0c14.2 0 27.7 2.8 40 8l108.8-81.6c14.1-10.6 34.2-7.7 44.8 6.4z"]};var hn={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"]};var Kr={prefix:"fas",iconName:"house-flood-water",icon:[640,512,[],"e50e","M496 208l4.5 0c15.2 0 27.5-12.3 27.5-27.5 0-7.9-3.4-15.5-9.4-20.7L348 10.5C340.3 3.7 330.3 0 320 0s-20.3 3.7-28 10.5L121.4 159.8c-6 5.2-9.4 12.8-9.4 20.7 0 15.2 12.3 27.5 27.5 27.5l4.5 0 0 94.4c20.3-9.4 42.1-14.2 64-14.4 33.1-.2 66.3 10.2 94.4 31.4 22.1 16.6 29.1 16.6 51.2 0 27.5-20.7 59.9-31.2 92.4-31.4 16.9-.1 33.8 2.6 50 8l0-88zm-224-8c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48zM474.6 412.1c19 14.4 41.9 28.2 67.2 33.3 26.5 5.4 54.3 .8 80.7-19.1 10.6-8 12.7-23 4.7-33.6s-23-12.7-33.6-4.7c-14.9 11.2-28.6 13.1-42.3 10.3-14.9-3-30.9-11.9-47.8-24.6-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-21.6 16.3-41.3 25.8-58.9 25.7-9.6-.1-19.9-3-31.2-11.5-10.6-8-25.6-5.9-33.6 4.7S7 418.3 17.6 426.3c19.1 14.4 39.4 21 59.8 21.1 33.9 .2 64.3-17.4 88.1-35.3 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9c21.3-16.1 49.9-16.1 71.2 0zm-71.2 96c21.3-16.1 49.9-16.1 71.2 0 19 14.4 41.9 28.2 67.2 33.3 26.5 5.4 54.3 .8 80.7-19.1 10.6-8 12.7-23 4.7-33.6s-23-12.7-33.6-4.7c-14.9 11.2-28.6 13.1-42.3 10.3-14.9-3-30.9-11.9-47.8-24.6-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-21.6 16.3-41.3 25.8-58.9 25.7-9.6-.1-19.9-3-31.2-11.5-10.6-8-25.6-5.9-33.6 4.7S7 514.3 17.6 522.3c19.1 14.4 39.4 21 59.8 21.1 33.9 .2 64.3-17.4 88.1-35.3 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9z"]};var Qr={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456.5 0c-48.6 0-88 39.4-88 88l0 36-355.2 266.4C-.8 401-3.7 421 6.9 435.2s30.6 17 44.8 6.4l76.8-57.6 131.3 0 46.6 113.1 1 2.2c5.7 10.7 18.8 15.5 30.3 10.8s17.3-17.3 13.9-29l-.8-2.3-39.1-94.9 40.9 0c1.1 0 2.2 0 3.2 0l46.6 113.2 1 2.2c5.7 10.7 18.8 15.5 30.3 10.8s17.3-17.3 13.9-29l-.8-2.3-42-102C485.3 354.1 544.5 280 544.5 192l0-72 80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4-7.1-28.5-32.7-48.5-62.1-48.5l-50.1 0C508.2 12.5 483.8 0 456.5 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};var jr={prefix:"fas",iconName:"satellite-dish",icon:[512,512,[128225],"f7c0","M232 0c154.6 0 280 125.4 280 280 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1-103.9-232-232-232-13.3 0-24-10.7-24-24S218.7 0 232 0zM208 120c0-13.3 10.7-24 24-24 101.6 0 184 82.4 184 184 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-75.1-60.9-136-136-136-13.3 0-24-10.7-24-24zM26.4 142.7c8.8-17.9 32.4-19.9 46.5-5.8l128.5 128.5 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32 128.5 128.5c14.1 14.1 12 37.6-5.8 46.5-34.2 16.9-72.6 26.4-113.3 26.4-141.4 0-256-114.6-256-256 0-40.7 9.5-79.2 26.4-113.3z"]};var ec={prefix:"fas",iconName:"ruler-combined",icon:[448,512,[],"f546","M1 441.7C5.5 463.5 24.8 480 48 480l352 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72-64 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0 0-64-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0 0-48c0-26.5-21.5-48-48-48L48 32C21.5 32 0 53.5 0 80L0 432c0 3.3 .3 6.6 1 9.7z"]};var tc={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M288 32c0 17.7 14.3 32 32 32l40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L32 112c-17.7 0-32 14.3-32 32s14.3 32 32 32l328 0c48.6 0 88-39.4 88-88S408.6 0 360 0L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l40 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L32 336c-17.7 0-32 14.3-32 32s14.3 32 32 32l136 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"]},ic={prefix:"fas",iconName:"layer-group",icon:[512,512,[],"f5fd","M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z"]};var x1=600,j1=800,ge=34,X4={x:ge,y:ge,w:x1-2*ge,h:400},ac="#f3efe6",sc="#1b1d22",nc="#8a5d1a",un='"Playfair Display", "Times New Roman", serif',rc='"EB Garamond", "Times New Roman", serif',D3='"Courier Prime", "Courier New", monospace',F3={};async function cc(n,e){let t=new Set([e.photo]);return n.forEach(i=>i.items.forEach(a=>{a.image&&t.add(a.image),(a.logos||[]).forEach(s=>t.add(s))})),await Promise.all([...t].map(i=>new Promise(a=>{let s=new Image;s.onload=()=>{F3[i]=s,a()},s.onerror=()=>a(),s.src=i}))),F3}function oc(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function lc(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function R9(n,e,t,i,a,s){let r=Math.max(a/e.width,s/e.height),c=e.width*r,o=e.height*r,l=o>s*1.2?.2:.5;n.drawImage(e,t+(a-c)/2,i+(s-o)*l,c,o)}function P9(n,e,t,i,a,s,r=10){let c=Math.min((a-2*r)/e.width,(s-2*r)/e.height),o=e.width*c,l=e.height*c,f=t+(a-o)/2,d=i+(s-l)/2;n.save(),n.shadowColor="rgba(0,0,0,.28)",n.shadowBlur=14,n.shadowOffsetY=4,n.fillStyle="#fff",n.fillRect(f,d,o,l),n.restore(),n.drawImage(e,f,d,o,l)}function I9(n,e,t,i,a){let{x:s,y:r,w:c,h:o}=e,l=n.createRadialGradient(s+c*.5,r+o*.45,10,s+c*.5,r+o*.5,c*.75);l.addColorStop(0,"#14325a"),l.addColorStop(1,"#050a15"),n.fillStyle=l,n.fillRect(s,r,c,o);let f=lc(a);n.fillStyle="rgba(255,255,255,.7)";for(let P=0;P<70;P++){let N=f()*1.6+.3;n.globalAlpha=.25+f()*.6,n.fillRect(s+f()*c,r+f()*o,N,N)}n.globalAlpha=1;let d=s+c/2,h=r+o/2-6,u=o*.34;n.save(),n.beginPath(),n.rect(s,r,c,o),n.clip(),n.strokeStyle="rgba(127,212,255,.16)",n.lineWidth=1.2;for(let P=-3;P<=3;P++)n.beginPath(),n.ellipse(d,h,Math.abs(u*Math.cos(P/7*Math.PI))+.01,u,0,0,Math.PI*2),n.stroke();for(let P=-2;P<=2;P++){let N=h+P/3*u,I=Math.sqrt(Math.max(u*u-(N-h)**2,0));n.beginPath(),n.ellipse(d,N,I,I*.12,0,0,Math.PI*2),n.stroke()}n.strokeStyle="rgba(127,212,255,.3)",n.beginPath(),n.arc(d,h,u,0,Math.PI*2),n.stroke(),n.strokeStyle="rgba(227,179,90,.55)",n.lineWidth=1.6,n.beginPath(),n.ellipse(d,h,u*1.45,u*.42,-.32,0,Math.PI*2),n.stroke();let g=f()*Math.PI*2,S=d+Math.cos(g)*u*1.45,m=h+Math.sin(g)*u*.42,p=d+(S-d)*Math.cos(-.32)-(m-h)*Math.sin(-.32),_=h+(S-d)*Math.sin(-.32)+(m-h)*Math.cos(-.32);n.fillStyle="#e3b35a",n.beginPath(),n.arc(p,_,5,0,Math.PI*2),n.fill(),n.restore(),n.fillStyle="rgba(5,10,21,.75)",n.beginPath(),n.arc(d,h,u*.62,0,Math.PI*2),n.fill(),n.strokeStyle="#e3b35a",n.lineWidth=2.5,n.stroke();let b=Ja[t]||hn,[z,w,,,C]=b.icon,y=u*.78/Math.max(z,w);n.save(),n.translate(d-z*y/2,h-w*y/2),n.scale(y,y),n.fillStyle="#f1d39a",n.fill(new Path2D(Array.isArray(C)?C.join(" "):C)),n.restore(),i&&(n.font=`bold 15px ${D3}`,n.fillStyle="rgba(127,212,255,.85)",n.textAlign="center",n.fillText(i.toUpperCase(),d,r+o-22))}function fc(n,e){n.fillStyle="#ebe5d8",n.fillRect(e.x,e.y,e.w,e.h),n.strokeStyle="rgba(138,93,26,.16)",n.lineWidth=1;for(let t=e.x;t<=e.x+e.w;t+=28)n.beginPath(),n.moveTo(t,e.y),n.lineTo(t,e.y+e.h),n.stroke();for(let t=e.y;t<=e.y+e.h;t+=28)n.beginPath(),n.moveTo(e.x,t),n.lineTo(e.x+e.w,t),n.stroke()}function D9(n,e,t){fc(n,e);let i=t.map(c=>F3[c]).filter(Boolean),a=i.length;if(!a)return;let s=24,r=(e.h-s*(a+1))/a;i.forEach((c,o)=>{let l=e.w-s*4,f=Math.min(r,a===1?e.h*.6:r),d=Math.min(l/c.width,f/c.height),h=c.width*d,u=c.height*d,g=e.y+s+o*(r+s)+r/2;n.fillStyle="rgba(255,255,255,.8)",n.fillRect(e.x+(e.w-h)/2-12,g-u/2-8,h+24,u+16),n.drawImage(c,e.x+(e.w-h)/2,g-u/2,h,u)})}function hc(n,e,t,i){let a=!!t.full;t.image&&F3[t.image]?(n.save(),n.beginPath(),n.rect(e.x,e.y,e.w,e.h),n.clip(),a?(fc(n,e),P9(n,F3[t.image],e.x,e.y,e.w,e.h,14)):R9(n,F3[t.image],e.x,e.y,e.w,e.h),n.restore()):t.logos?D9(n,e,t.logos):I9(n,e,t.icon,(t.tags||[])[0],oc(t.title)),n.strokeStyle=sc,n.lineWidth=2.2,n.strokeRect(e.x,e.y,e.w,e.h),n.lineWidth=.8,n.strokeRect(e.x-5,e.y-5,e.w+10,e.h+10)}function uc(n,e,t=1){let i={x:18,y:18,w:X4.w,h:X4.h},a=document.createElement("canvas");a.width=(X4.w+36)*t,a.height=(X4.h+36)*t;let s=a.getContext("2d");return s.scale(t,t),s.fillStyle=ac,s.fillRect(0,0,a.width,a.height),hc(s,i,n,e),a}function Ka(n,e,t){let i=e.split(/\s+/),a=[],s="";return i.forEach(r=>{let c=s?s+" "+r:r;n.measureText(c).width>t&&s?(a.push(s),s=r):s=c}),s&&a.push(s),a}function dc(n,e,t=1,i){let a=n.it,s=i||document.createElement("canvas");s.width=Math.round(x1*t),s.height=Math.round(j1*t);let r=s.getContext("2d");if(r.setTransform(t,0,0,t,0,0),r.fillStyle=ac,r.fillRect(0,0,x1,j1),t>.4){let u=lc(oc(a.title));r.fillStyle="rgba(120,100,60,.05)";for(let g=0;g<700;g++)r.fillRect(u()*x1,u()*j1,1.5,1.5)}r.strokeStyle="rgba(27,29,34,.35)",r.lineWidth=1,r.strokeRect(10,10,x1-20,j1-20),hc(r,X4,a,n);let c=X4.y+X4.h+54;if(r.textAlign="left",r.fillStyle=nc,r.font=`bold 19px ${D3}`,r.fillText(`${String(n.k+1).padStart(2,"0")} \xB7 ${n.c.tab.toUpperCase()}`,ge,c),a.year){r.textAlign="right",r.fillStyle="#5b5f68",r.font=`19px ${D3}`;let u=a.year.length>22?a.year.slice(0,21)+"\u2026":a.year;r.fillText(u,x1-ge,c)}let o=x1-2*ge,l=c+16,f=j1-112,d=50,h;for(;d>=22&&(r.font=`700 ${d}px ${un}`,h=Ka(r,a.title,o),!(h.length*d*1.14<=f-l));d-=2);if(r.textAlign="left",r.fillStyle=sc,r.font=`700 ${d}px ${un}`,h.forEach((u,g)=>r.fillText(u,ge,l+d+g*d*1.14)),a.meta){r.font=`italic 23px ${rc}`,r.fillStyle="#3c3f47";let u=a.meta;for(;r.measureText(u).width>o&&u.length>4;)u=u.slice(0,-2);u!==a.meta&&(u=u.trim()+"\u2026"),r.fillText(u,ge,j1-74)}return r.strokeStyle="rgba(27,29,34,.45)",r.lineWidth=1,r.beginPath(),r.moveTo(ge,j1-56),r.lineTo(x1-ge,j1-56),r.stroke(),r.font=`16px ${D3}`,r.fillStyle="#5b5f68",r.textAlign="left",r.fillText(`SHEET ${String(n.n+1).padStart(2,"0")} / ${e}`,ge,j1-30),r.textAlign="right",r.fillStyle=nc,r.font=`bold 16px ${D3}`,r.fillText(a.full?"VIEW MAP \u2197":"OPEN \u2197",x1-ge,j1-30),s}function pc(n,e,t=1,i){let a=i||document.createElement("canvas");a.width=Math.round(x1*t),a.height=Math.round(j1*t);let s=a.getContext("2d");s.setTransform(t,0,0,t,0,0);let r=s.createLinearGradient(0,0,0,j1);r.addColorStop(0,"#0d1a2e"),r.addColorStop(1,"#060a14"),s.fillStyle=r,s.fillRect(0,0,x1,j1),s.strokeStyle="rgba(127,212,255,.18)",s.lineWidth=1.2;for(let f=1;f<=6;f++)s.beginPath(),s.ellipse(x1/2,250,40*f,14*f,-.35,0,Math.PI*2),s.stroke();s.fillStyle="#e3b35a",s.beginPath(),s.arc(x1/2,250,26,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(227,179,90,.6)",s.lineWidth=1,s.strokeRect(18,18,x1-36,j1-36),s.textAlign="center",s.fillStyle="#e3b35a",s.font=`bold 22px ${D3}`,s.fillText(`SECTION ${String(n.ci+1).padStart(2,"0")} / ${String(e).padStart(2,"0")}`,x1/2,450),s.fillStyle="#ffffff";let c=64;s.font=`900 ${c}px ${un}`;let o=n.c.title.toUpperCase(),l=Ka(s,o,x1-90);for(;(l.length>3||l.some(f=>s.measureText(f).width>x1-70))&&c>34;)c-=4,s.font=`900 ${c}px ${un}`,l=Ka(s,o,x1-90);return l.forEach((f,d)=>s.fillText(f,x1/2,530+d*c*1.05)),s.fillStyle="#b9c3d3",s.font=`italic 30px ${rc}`,s.fillText(`${n.c.theme} \xB7 ${n.c.items.length} sheet${n.c.items.length>1?"s":""}`,x1/2,545+l.length*c*1.05+18),a}var mc={Ethiopia:[[[35.268,5.492],[35.253,5.511],[35.163,5.582],[35.081,5.674],[35.03,5.775],[34.983,5.858],[34.958,6.045],[34.897,6.16],[34.839,6.301],[34.749,6.568],[34.71,6.66],[34.638,6.722],[34.562,6.78],[34.483,6.898],[34.278,7.004],[34.202,7.085],[34.065,7.226],[34.029,7.297],[34.022,7.368],[33.979,7.434],[33.903,7.509],[33.666,7.67],[33.601,7.691],[33.515,7.708],[33.392,7.724],[33.227,7.761],[33.083,7.823],[33.014,7.868],[33,7.899],[33.014,7.952],[33.065,8.04],[33.165,8.252],[33.234,8.396],[33.281,8.438],[33.41,8.448],[33.547,8.443],[33.644,8.432],[33.785,8.431],[33.954,8.443],[34.019,8.491],[34.073,8.545],[34.094,8.582],[34.101,8.677],[34.101,8.752],[34.091,9.042],[34.083,9.219],[34.076,9.42],[34.08,9.462],[34.08,9.514],[34.119,9.729],[34.159,9.854],[34.184,9.918],[34.292,10.125],[34.31,10.191],[34.314,10.252],[34.274,10.528],[34.343,10.658],[34.433,10.788],[34.508,10.844],[34.573,10.88],[34.602,10.865],[34.674,10.806],[34.771,10.746],[34.818,10.759],[34.883,10.811],[34.933,10.865],[34.926,10.962],[34.969,11.161],[34.962,11.276],[35.009,11.42],[35.059,11.621],[35.084,11.748],[35.113,11.816],[35.253,11.956],[35.372,12.156],[35.451,12.3],[35.595,12.538],[35.671,12.623],[35.732,12.661],[35.822,12.686],[35.988,12.706],[36.107,12.727],[36.125,12.757],[36.135,12.805],[36.135,12.911],[36.161,13.094],[36.211,13.271],[36.272,13.406],[36.308,13.467],[36.348,13.526],[36.391,13.627],[36.449,13.842],[36.445,13.988],[36.524,14.257],[36.542,14.258],[36.679,14.307],[36.812,14.316],[36.942,14.281],[37.025,14.272],[37.064,14.29],[37.1,14.335],[37.133,14.406],[37.187,14.446],[37.259,14.455],[37.352,14.373],[37.507,14.156],[37.547,14.144],[37.572,14.149],[37.647,14.323],[37.709,14.458],[37.82,14.708],[37.885,14.852],[37.943,14.81],[38.004,14.738],[38.069,14.703],[38.141,14.682],[38.177,14.679],[38.22,14.649],[38.378,14.47],[38.432,14.429],[38.504,14.425],[38.814,14.482],[38.997,14.587],[39.023,14.628],[39.073,14.628],[39.134,14.581],[39.159,14.538],[39.199,14.479],[39.271,14.47],[39.447,14.512],[39.53,14.536],[39.606,14.515],[39.699,14.5],[39.757,14.5],[39.894,14.441],[40.063,14.46],[40.142,14.456],[40.221,14.43],[40.355,14.338],[40.524,14.225],[40.769,14.144],[40.819,14.111],[40.938,13.982],[41.121,13.736],[41.363,13.5],[41.625,13.314],[41.766,13.184],[41.859,13.026],[41.953,12.882],[42.047,12.821],[42.133,12.771],[42.227,12.661],[42.291,12.571],[42.378,12.467],[42.281,12.325],[42.147,12.134],[41.996,11.913],[41.949,11.858],[41.816,11.724],[41.791,11.686],[41.766,11.588],[41.766,11.413],[41.784,11.187],[41.798,10.981],[41.874,10.957],[41.957,10.941],[42.054,10.969],[42.165,10.991],[42.309,11.005],[42.464,11.047],[42.558,11.082],[42.655,11.078],[42.741,11.042],[42.785,11.009],[42.846,10.998],[42.921,11],[42.907,10.96],[42.864,10.903],[42.81,10.845],[42.763,10.786],[42.659,10.621],[42.655,10.601],[42.669,10.568],[42.723,10.491],[42.785,10.37],[42.817,10.257],[42.842,10.203],[42.914,10.141],[43.015,10.012],[43.069,9.925],[43.181,9.88],[43.22,9.771],[43.303,9.609],[43.393,9.481],[43.483,9.38],[43.58,9.34],[43.62,9.337],[43.825,9.151],[43.983,9.009],[44.023,8.986],[44.307,8.892],[44.631,8.787],[44.894,8.7],[45.225,8.59],[45.557,8.483],[45.863,8.38],[46.295,8.234],[46.644,8.118],[46.921,8.026],[46.979,7.997],[47.306,7.997],[47.637,7.997],[47.979,7.997],[47.731,7.759],[47.454,7.49],[47.159,7.209],[46.971,7.026],[46.673,6.738],[46.424,6.497],[46.165,6.235],[45.935,5.997],[45.632,5.669],[45.438,5.455],[45.132,5.122],[44.941,4.912],[44.912,4.9],[44.635,4.915],[44.369,4.931],[44.027,4.952],[43.991,4.95],[43.89,4.931],[43.829,4.912],[43.584,4.854],[43.537,4.841],[43.335,4.75],[43.127,4.644],[43.015,4.563],[42.932,4.445],[42.896,4.361],[42.857,4.325],[42.792,4.292],[42.356,4.212],[42.227,4.202],[42.025,4.138],[41.917,4.032],[41.885,3.978],[41.737,3.98],[41.481,3.964],[41.373,3.947],[41.319,3.943],[41.222,3.943],[41.139,3.962],[41.085,3.992],[41.021,4.058],[40.873,4.19],[40.765,4.273],[40.527,4.177],[40.315,4.082],[40.013,3.948],[39.843,3.851],[39.789,3.754],[39.656,3.579],[39.537,3.469],[39.494,3.455],[39.224,3.48],[39.127,3.5],[38.969,3.521],[38.753,3.559],[38.609,3.599],[38.45,3.605],[38.227,3.618],[38.087,3.648],[37.946,3.747],[37.763,3.865],[37.575,3.986],[37.381,4.111],[37.154,4.254],[36.906,4.412],[36.848,4.427],[36.823,4.431],[36.553,4.438],[36.272,4.445],[36.081,4.45],[36.024,4.467],[35.977,4.504],[35.919,4.62],[35.847,4.703],[35.765,4.808],[35.757,4.95],[35.779,5.106],[35.801,5.157],[35.79,5.209],[35.79,5.278],[35.747,5.344],[35.469,5.419],[35.423,5.413],[35.379,5.386],[35.325,5.365],[35.289,5.384],[35.264,5.412],[35.264,5.459],[35.268,5.492]]],Czechia:[[[18.834,49.511],[18.808,49.51],[18.751,49.494],[18.675,49.489],[18.596,49.491],[18.535,49.465],[18.477,49.421],[18.416,49.392],[18.384,49.364],[18.366,49.336],[18.16,49.258],[18.132,49.225],[18.11,49.18],[18.099,49.119],[18.085,49.065],[18.052,49.036],[17.941,49.011],[17.912,48.999],[17.894,48.972],[17.829,48.928],[17.757,48.888],[17.624,48.841],[17.484,48.827],[17.296,48.843],[17.188,48.86],[17.134,48.841],[17.062,48.781],[16.987,48.676],[16.954,48.598],[16.929,48.621],[16.882,48.704],[16.832,48.715],[16.764,48.722],[16.713,48.734],[16.602,48.782],[16.544,48.796],[16.479,48.8],[16.414,48.772],[16.368,48.739],[16.22,48.739],[16.058,48.755],[15.824,48.864],[15.766,48.866],[15.702,48.86],[15.601,48.886],[15.403,48.958],[15.309,48.973],[15.252,48.965],[15.201,48.949],[15.162,48.946],[15.14,48.97],[15.068,48.998],[14.992,49.001],[14.971,48.984],[14.949,48.827],[14.924,48.772],[14.823,48.774],[14.787,48.748],[14.708,48.671],[14.69,48.6],[14.553,48.614],[14.488,48.626],[14.431,48.616],[14.366,48.576],[14.19,48.579],[14.049,48.602],[13.988,48.692],[13.923,48.729],[13.844,48.76],[13.815,48.767],[13.768,48.815],[13.686,48.876],[13.549,48.959],[13.441,48.956],[13.401,48.977],[13.383,49.008],[13.34,49.06],[13.29,49.098],[13.228,49.112],[13.142,49.159],[13.023,49.26],[12.915,49.331],[12.814,49.329],[12.75,49.366],[12.681,49.414],[12.631,49.461],[12.555,49.576],[12.501,49.64],[12.458,49.68],[12.408,49.713],[12.39,49.739],[12.451,49.8],[12.472,49.831],[12.498,49.853],[12.512,49.878],[12.512,49.895],[12.458,49.956],[12.386,49.999],[12.278,50.043],[12.21,50.098],[12.181,50.149],[12.174,50.176],[12.127,50.213],[12.091,50.268],[12.091,50.301],[12.098,50.312],[12.134,50.312],[12.174,50.289],[12.231,50.244],[12.278,50.182],[12.307,50.206],[12.357,50.274],[12.454,50.35],[12.548,50.393],[12.634,50.397],[12.706,50.409],[12.764,50.432],[12.868,50.423],[12.944,50.407],[12.966,50.416],[12.998,50.456],[13.016,50.491],[13.182,50.51],[13.239,50.577],[13.268,50.576],[13.308,50.586],[13.34,50.612],[13.376,50.622],[13.401,50.609],[13.437,50.602],[13.473,50.617],[13.527,50.694],[13.556,50.704],[13.7,50.716],[13.898,50.761],[13.999,50.801],[14.096,50.822],[14.2,50.862],[14.37,50.899],[14.377,50.914],[14.301,50.952],[14.272,50.977],[14.254,51.003],[14.283,51.029],[14.319,51.037],[14.366,51.027],[14.506,51.01],[14.546,50.994],[14.56,50.954],[14.596,50.919],[14.625,50.914],[14.614,50.855],[14.658,50.833],[14.722,50.815],[14.766,50.819],[14.798,50.843],[14.809,50.859],[14.895,50.862],[14.982,50.886],[14.989,50.928],[14.985,51.003],[14.992,51.015],[15.126,50.992],[15.259,50.959],[15.277,50.883],[15.313,50.846],[15.356,50.812],[15.396,50.796],[15.464,50.794],[15.644,50.749],[15.73,50.741],[15.82,50.709],[15.892,50.676],[15.95,50.671],[15.975,50.635],[16.008,50.612],[16.065,50.629],[16.281,50.655],[16.36,50.621],[16.411,50.584],[16.418,50.574],[16.393,50.541],[16.378,50.517],[16.357,50.501],[16.281,50.484],[16.242,50.454],[16.209,50.425],[16.231,50.393],[16.292,50.373],[16.335,50.367],[16.35,50.345],[16.486,50.249],[16.598,50.123],[16.638,50.102],[16.681,50.098],[16.724,50.116],[16.778,50.157],[16.843,50.187],[16.897,50.202],[16.99,50.237],[16.994,50.26],[16.915,50.345],[16.868,50.414],[16.879,50.426],[16.98,50.416],[17.152,50.378],[17.415,50.254],[17.462,50.254],[17.556,50.265],[17.656,50.284],[17.703,50.307],[17.721,50.298],[17.736,50.23],[17.71,50.194],[17.588,50.157],[17.595,50.14],[17.628,50.116],[17.682,50.1],[17.746,50.057],[17.793,50.006],[17.833,49.984],[17.876,49.971],[17.984,49.999],[18.016,50.02],[18.027,50.036],[18.049,50.032],[18.088,50.008],[18.099,49.992],[18.204,49.965],[18.265,49.93],[18.304,49.914],[18.348,49.93],[18.517,49.902],[18.564,49.879],[18.578,49.841],[18.567,49.819],[18.596,49.758],[18.808,49.614],[18.83,49.541],[18.834,49.511]]],Austria:[[[9.527,47.27],[9.61,47.392],[9.625,47.466],[9.553,47.512],[9.524,47.524],[9.549,47.534],[9.65,47.525],[9.715,47.551],[9.751,47.576],[9.841,47.551],[9.97,47.505],[10.035,47.473],[10.06,47.449],[10.075,47.428],[10.068,47.394],[10.096,47.38],[10.158,47.374],[10.201,47.364],[10.186,47.317],[10.183,47.279],[10.24,47.284],[10.312,47.314],[10.37,47.366],[10.402,47.418],[10.431,47.541],[10.438,47.551],[10.482,47.541],[10.658,47.548],[10.741,47.524],[10.874,47.52],[10.87,47.501],[10.896,47.47],[10.953,47.427],[10.982,47.399],[11.043,47.394],[11.137,47.409],[11.191,47.425],[11.212,47.414],[11.299,47.425],[11.374,47.459],[11.392,47.487],[11.472,47.506],[11.572,47.55],[11.716,47.583],[12.184,47.619],[12.202,47.647],[12.195,47.709],[12.21,47.718],[12.267,47.703],[12.364,47.689],[12.436,47.666],[12.483,47.637],[12.526,47.637],[12.595,47.656],[12.685,47.67],[12.771,47.64],[12.796,47.607],[12.782,47.59],[12.782,47.564],[12.811,47.543],[12.879,47.506],[12.969,47.475],[13.016,47.479],[13.03,47.508],[13.048,47.579],[13.056,47.656],[13.034,47.699],[12.987,47.709],[12.93,47.713],[12.897,47.722],[12.908,47.746],[12.955,47.808],[12.955,47.89],[12.85,47.985],[12.76,48.076],[12.76,48.107],[12.814,48.161],[12.897,48.204],[13.081,48.275],[13.142,48.289],[13.214,48.301],[13.322,48.331],[13.376,48.362],[13.408,48.393],[13.459,48.565],[13.473,48.572],[13.488,48.583],[13.675,48.524],[13.693,48.532],[13.725,48.543],[13.786,48.588],[13.797,48.621],[13.797,48.687],[13.804,48.748],[13.815,48.767],[13.844,48.76],[13.923,48.729],[13.988,48.692],[14.049,48.602],[14.19,48.579],[14.366,48.576],[14.431,48.616],[14.488,48.626],[14.553,48.614],[14.69,48.6],[14.708,48.671],[14.787,48.748],[14.823,48.774],[14.924,48.772],[14.949,48.827],[14.971,48.984],[14.992,49.001],[15.068,48.998],[15.14,48.97],[15.162,48.946],[15.201,48.949],[15.252,48.965],[15.309,48.973],[15.403,48.958],[15.601,48.886],[15.702,48.86],[15.766,48.866],[15.824,48.864],[16.058,48.755],[16.22,48.739],[16.368,48.739],[16.414,48.772],[16.479,48.8],[16.544,48.796],[16.602,48.782],[16.713,48.734],[16.764,48.722],[16.832,48.715],[16.882,48.704],[16.929,48.621],[16.954,48.598],[16.947,48.588],[16.944,48.551],[16.904,48.503],[16.864,48.442],[16.864,48.387],[16.972,48.197],[17.07,48.083],[17.088,48.039],[17.149,48.006],[17.088,47.963],[17.077,47.9],[17.041,47.873],[17.03,47.838],[17.044,47.805],[17.044,47.763],[17.066,47.708],[16.972,47.696],[16.864,47.697],[16.825,47.694],[16.785,47.678],[16.749,47.687],[16.648,47.739],[16.591,47.751],[16.551,47.748],[16.522,47.725],[16.468,47.696],[16.422,47.675],[16.432,47.656],[16.641,47.609],[16.677,47.536],[16.638,47.477],[16.623,47.447],[16.573,47.425],[16.515,47.404],[16.443,47.399],[16.436,47.367],[16.461,47.274],[16.44,47.253],[16.418,47.223],[16.44,47.145],[16.483,47.14],[16.494,47.123],[16.486,47.091],[16.476,47.058],[16.461,47.022],[16.454,47.006],[16.425,46.998],[16.332,47.003],[16.252,46.972],[16.094,46.864],[16.036,46.845],[15.975,46.802],[15.979,46.706],[15.972,46.697],[15.957,46.678],[15.766,46.711],[15.759,46.711],[15.633,46.699],[15.547,46.654],[15.439,46.63],[15.216,46.644],[15,46.626],[14.949,46.614],[14.892,46.605],[14.841,46.581],[14.809,46.545],[14.758,46.499],[14.679,46.463],[14.596,46.435],[14.578,46.413],[14.55,46.401],[14.503,46.418],[14.467,46.416],[14.42,46.428],[14.269,46.44],[14.1,46.461],[14.02,46.482],[13.93,46.498],[13.833,46.512],[13.743,46.515],[13.7,46.52],[13.491,46.555],[13.351,46.559],[13.167,46.572],[12.807,46.626],[12.699,46.647],[12.598,46.654],[12.48,46.673],[12.39,46.703],[12.328,46.76],[12.267,46.836],[12.156,46.935],[12.13,46.986],[12.166,47.029],[12.202,47.06],[12.199,47.076],[12.17,47.083],[11.968,47.039],[11.774,46.986],[11.698,46.984],[11.626,46.996],[11.529,46.998],[11.432,46.984],[11.245,46.975],[11.133,46.937],[11.065,46.859],[11.025,46.796],[10.993,46.777],[10.928,46.77],[10.827,46.776],[10.759,46.793],[10.69,46.847],[10.579,46.854],[10.478,46.855],[10.453,46.866],[10.456,46.899],[10.417,46.965],[10.348,46.986],[10.179,46.862],[10.132,46.852],[9.995,46.885],[9.877,46.937],[9.866,46.975],[9.844,47.008],[9.743,47.038],[9.621,47.057],[9.581,47.057],[9.596,47.076],[9.61,47.107],[9.599,47.131],[9.571,47.157],[9.556,47.185],[9.553,47.213],[9.542,47.234],[9.538,47.255],[9.527,47.27]]]};var b1=window.ATLAS,H2=n=>document.querySelector(n),te=document.body,c4=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<600,$0=matchMedia("(prefers-reduced-motion: reduce)").matches,o4=[],P1=[];b1.collections.forEach((n,e)=>{o4.push({kind:"title",c:n,ci:e}),n.items.forEach((t,i)=>{let a={kind:"item",c:n,ci:e,it:t,k:i};o4.push(a),P1.push(a)})});o4.forEach((n,e)=>n.slot=e);P1.forEach((n,e)=>n.n=e);var J1=o4.length,U9=2.08,b4=J1*U9/(Math.PI*2),n1=b4/17,B9=Math.PI*2/J1,C1=6.4*n1,Mn=1.62,k3=2.16,Z0=0,oe=new A(.34,.27,.9).normalize(),Ae=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function k9(){H2("#introRole").textContent=b1.person.role,H2("#introLine").textContent=b1.person.line,H2("#introStats").innerHTML=b1.person.stats.map(([n,e])=>`<div><b>${n}</b><span>${e}</span></div>`).join(""),H2("#btnCV").href=b1.person.cv,H2("#tabs").innerHTML=b1.collections.map((n,e)=>`<button type="button" data-col="${e}">${n.tab}</button>`).join("")}function O9(n,e){let t="";if(n.year&&(t+=`<p class="sh-year">${Ae(n.year)}</p>`),t+=`<h2 class="sh-title" id="${e}">${Ae(n.title)}</h2>`,n.meta&&(t+=`<p class="sh-meta">${Ae(n.meta)}</p>`),n.authors&&(t+=`<p class="sh-authors">${Ae(n.authors)}</p>`),(n.body||[]).forEach(a=>t+=`<p>${a}</p>`),n.list&&(t+=`<ul class="sh-list">${n.list.map(a=>`<li>${a}</li>`).join("")}</ul>`),n.gallery&&(t+=`<div class="sh-gallery">${n.gallery.map(([a,s,r])=>`<figure>${r?`<a href="${r}" target="_blank" rel="noopener">`:""}<img src="${a}" alt="${Ae(s)}" loading="lazy">${r?"</a>":""}<figcaption>${Ae(s)}</figcaption></figure>`).join("")}</div>`),n.contact){let a=b1.person;t+=`<p class="sh-direct"><b>Email</b> \xB7 ${a.email.map(s=>`<a href="mailto:${s}">${s}</a>`).join(" \xB7 ")}<br><b>Phone</b> \xB7 ${a.phone.join(" \xB7 ")}<br><a href="${a.vcf}" download>Save contact card (.vcf)</a></p>
    <form class="sh-contact" id="contactForm">
      <label>Your name<input name="name" required autocomplete="name"></label>
      <label>Subject<input name="subject" required placeholder="Research collaboration"></label>
      <label>Message<textarea name="message" rows="5" required></textarea></label>
      <button type="submit">Write email \u2197</button>
    </form>
    <p class="sh-direct">${a.social.map(([s,r])=>`<a href="${r}" target="_blank" rel="noopener">${s}</a>`).join(" \xB7 ")}</p>`}n.tags&&(t+=`<ul class="sh-tags">${n.tags.map(a=>`<li>${Ae(a)}</li>`).join("")}</ul>`);let i=[...n.links||[]];return n.full&&i.unshift({label:"Full-size image",href:n.full,zoom:!0}),n.pdf&&i.push({label:"Print PDF",href:n.pdf}),i.length&&(t+=`<div class="sh-links">${i.map(a=>a.zoom?`<button type="button" class="sh-zoom" data-src="${a.href}">View full map \u2922</button>`:`<a href="${a.href}" target="_blank" rel="noopener">${Ae(a.label)} \u2197</a>`).join("")}</div>`),n.note&&(t+=`<p class="sh-note">${Ae(n.note)}</p>`),t}var Ee,Me,p1,ee,n6,a6,dn,pn,bc=[],wc=[],Y4=[],H9=new A(0,1,0),O3={},Qa=oe.y,G9=Math.atan2(oe.z,oe.x),ja=null;function V9(){try{let n=document.createElement("canvas");return!!(n.getContext("webgl2")||n.getContext("webgl"))}catch{return!1}}var r4=(n,e,t)=>{let i=ce.degToRad(n),a=ce.degToRad(e);return new A(t*Math.cos(i)*Math.cos(a),t*Math.sin(i),-t*Math.cos(i)*Math.sin(a))},gc=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>`,e6=`varying vec2 vUv; varying vec3 vN; varying vec3 vP;
  void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`;function W9(n){n.colorSpace=d1;let e=new Y2(new Le(1500,64,32),new G1({map:n,side:R1,depthWrite:!1,toneMapped:!1}));e.rotation.set(.3,1.2,.1),Me.add(e);let t=c4?900:1800,i=new Float32Array(t*3),a=new Float32Array(t),s=new Float32Array(t);for(let o=0;o<t;o++){let l=new A().randomDirection().multiplyScalar(900+Math.random()*300);i.set([l.x,l.y,l.z],o*3),a[o]=Math.random()*6.28,s[o]=Math.pow(Math.random(),3)*2.6+.8}let r=new f1;r.setAttribute("position",new Y1(i,3)),r.setAttribute("ph",new Y1(a,1)),r.setAttribute("sz",new Y1(s,1));let c=new Z1({uniforms:{t:{value:0},dpr:{value:Ee.getPixelRatio()}},transparent:!0,depthWrite:!1,blending:Oe,vertexShader:"attribute float ph; attribute float sz; uniform float t; uniform float dpr; varying float vA; void main(){ vA = 0.55 + 0.45*sin(t*1.7 + ph*3.0); gl_PointSize = sz*dpr; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying float vA; void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d); gl_FragColor = vec4(vec3(1.0,0.97,0.92), a*vA); }"});Me.add(new h0(r,c)),Y4.push(o=>c.uniforms.t.value=o)}function U3(n){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),i=t.createRadialGradient(128,128,0,128,128,128);n==="core"?(i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.08,"rgba(255,250,235,1)"),i.addColorStop(.25,"rgba(255,214,150,.45)"),i.addColorStop(1,"rgba(255,170,90,0)")):n==="ring"?(i.addColorStop(0,"rgba(120,180,255,0)"),i.addColorStop(.75,"rgba(120,180,255,0)"),i.addColorStop(.86,"rgba(160,210,255,.35)"),i.addColorStop(1,"rgba(160,210,255,0)")):(i.addColorStop(0,"rgba(255,220,170,.5)"),i.addColorStop(.6,"rgba(255,200,140,.12)"),i.addColorStop(1,"rgba(255,200,140,0)")),t.fillStyle=i,t.fillRect(0,0,256,256);let a=new k4(e);return a.colorSpace=d1,a}function q9(){let n=new b0(16774114,3);n.position.copy(oe).multiplyScalar(100),Me.add(n,new w0(4213350,.25)),O3.light=n;let e=new f0(new y3({map:U3("core"),color:16777215,transparent:!0,blending:Oe,depthWrite:!1,toneMapped:!1}));e.position.copy(oe).multiplyScalar(1200),e.scale.setScalar(220),O3.glow=e,Me.add(e);let t=new L0(16777215,0,1);t.position.copy(oe).multiplyScalar(1200);let i=new W0;i.addElement(new We(U3("core"),c4?380:620,0,new I2(1,.95,.85))),i.addElement(new We(U3("soft"),70,.45)),i.addElement(new We(U3("ring"),160,.62)),i.addElement(new We(U3("soft"),110,.82)),i.addElement(new We(U3("ring"),90,1)),t.add(i),O3.flare=t,Me.add(t)}function X9(n){let e=new X1;e.rotation.z=ce.degToRad(-16),Me.add(e),ee=new X1,e.add(ee),n.day.colorSpace=d1,n.night.colorSpace=d1;let t=Ee.capabilities.getMaxAnisotropy();[n.day,n.night,n.clouds,n.water].forEach(l=>{l.anisotropy=t}),n.clouds.wrapS=p3;let i={dayMap:{value:n.day},nightMap:{value:n.night},waterMap:{value:n.water},cloudMap:{value:n.clouds},sunDir:{value:oe},cloudOff:{value:0}};n6=new Y2(new Le(C1,160,120),new Z1({uniforms:i,vertexShader:e6,fragmentShader:`uniform sampler2D dayMap, nightMap, waterMap, cloudMap; uniform vec3 sunDir; uniform float cloudOff;
      varying vec2 vUv; varying vec3 vN; varying vec3 vP;
      void main(){
        vec3 n = normalize(vN); vec3 v = normalize(cameraPosition - vP);
        float ndl = dot(n, sunDir);
        vec3 day = texture2D(dayMap, vUv).rgb;
        vec3 night = texture2D(nightMap, vUv).rgb;
        float water = texture2D(waterMap, vUv).r;
        float cloud = texture2D(cloudMap, vUv + vec2(cloudOff + 0.002, -0.002)).r;
        float lit = max(ndl, 0.0);
        vec3 col = day * (0.012 + 1.35 * pow(lit, 0.85)) * (1.0 - 0.5 * cloud * smoothstep(0.0, 0.3, ndl));
        float nightMask = 1.0 - smoothstep(-0.2, 0.06, ndl);
        col += pow(night, vec3(1.4)) * vec3(1.0, 0.75, 0.45) * nightMask * 2.2 * (1.0 - 0.75 * cloud);
        vec3 h = normalize(sunDir + v);
        float spec = pow(max(dot(n, h), 0.0), 80.0) * water * lit;
        col += vec3(1.0, 0.92, 0.78) * spec * 1.4 + vec3(0.25, 0.45, 0.7) * pow(max(dot(n, h), 0.0), 8.0) * water * lit * 0.12;
        float fres = pow(1.0 - max(dot(n, v), 0.0), 2.6);
        vec3 atm = mix(vec3(1.0, 0.42, 0.15), vec3(0.32, 0.62, 1.0), smoothstep(-0.05, 0.45, ndl));
        col += atm * fres * smoothstep(-0.25, 0.4, ndl) * 1.1;
        gl_FragColor = vec4(col, 1.0);${gc}
      }`})),ee.add(n6),dn=new Y2(new Le(C1*1.008,128,96),new Z1({uniforms:{cloudMap:{value:n.clouds},sunDir:{value:oe}},transparent:!0,depthWrite:!1,vertexShader:e6,fragmentShader:`uniform sampler2D cloudMap; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN; varying vec3 vP;
      void main(){
        vec3 n = normalize(vN); float ndl = dot(n, sunDir);
        float c = texture2D(cloudMap, vUv).r;
        float a = smoothstep(0.12, 0.85, c) * 0.92;
        vec3 tint = mix(vec3(1.0, 0.6, 0.38), vec3(1.0), smoothstep(0.0, 0.3, ndl));
        vec3 col = tint * (0.015 + 1.15 * max(ndl, 0.0));
        gl_FragColor = vec4(col, a * (0.25 + 0.75 * smoothstep(-0.3, 0.15, ndl)));${gc}
      }`})),ee.add(dn),Y4.push((l,f)=>{dn.rotation.y+=f*.004,i.cloudOff.value=-dn.rotation.y/(Math.PI*2)});let a=1.07,s=Math.sqrt(1-1/(a*a)).toFixed(4);e.add(new Y2(new Le(C1*a,96,64),new Z1({uniforms:{sunDir:{value:oe}},side:R1,transparent:!0,depthWrite:!1,blending:Oe,vertexShader:e6,fragmentShader:`uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN; varying vec3 vP;
      void main(){
        vec3 n = normalize(vN); vec3 v = normalize(cameraPosition - vP);
        float k = clamp(-dot(n, v) / ${s}, 0.0, 1.0);
        float i = pow(k, 3.0);
        float ndl = dot(n, sunDir);
        vec3 col = mix(vec3(1.0, 0.45, 0.2), vec3(0.35, 0.65, 1.0), smoothstep(-0.1, 0.4, ndl));
        gl_FragColor = vec4(col * i * (0.08 + 1.2 * smoothstep(-0.35, 0.35, ndl)), 1.0);
      }`})));let r=[],c=C1*1.0105;for(let l=-60;l<=60;l+=30)for(let f=-180;f<180;f+=3)r.push(r4(l,f,c),r4(l,f+3,c));for(let l=-180;l<180;l+=30)for(let f=-84;f<84;f+=4)r.push(r4(f,l,c),r4(f+4,l,c));ee.add(new B4(new f1().setFromPoints(r),new Ue({color:10475775,transparent:!0,opacity:.07,depthWrite:!1})));let o=[];Object.values(mc).forEach(l=>l.forEach(f=>{for(let d=0;d<f.length-1;d++)o.push(r4(f[d][1],f[d][0],C1*1.011),r4(f[d+1][1],f[d+1][0],C1*1.011))})),ee.add(new B4(new f1().setFromPoints(o),new Ue({color:16764782,transparent:!0,opacity:.95}))),b1.places.forEach(l=>{let f=r4(l.lat,l.lon,C1*1.012),d=l.home?8377599:14922586,h=new Y2(new Le((l.label?.075:.05)*n1,12,8),new G1({color:d,toneMapped:!1}));h.position.copy(f),ee.add(h);let u=new Y2(new M0(.08*n1,.11*n1,32),new G1({color:d,transparent:!0,side:Q1,depthWrite:!1,toneMapped:!1}));u.position.copy(f),u.lookAt(f.clone().multiplyScalar(2)),ee.add(u),Y4.push(m=>{let p=(m*.6+l.lon*.01)%1;u.scale.setScalar(1+p*3.5),u.material.opacity=.9*(1-p)});let g=(l.label?.55:.3)*n1,S=new Y2(new O4(.012*n1,.012*n1,g,6),new G1({color:d,transparent:!0,opacity:.85,toneMapped:!1}));if(S.position.copy(f.clone().normalize().multiplyScalar(C1+g/2)),S.quaternion.setFromUnitVectors(H9,f.clone().normalize()),ee.add(S),l.label){let m=document.createElement("div");m.className="glabel"+(l.home?" home":""),m.textContent=l.name,H2("#labels").appendChild(m),wc.push({el:m,left:!!l.left,local:f.clone().normalize().multiplyScalar(C1+g+.05)})}}),b1.routes.forEach(([l,f],d)=>{let h=r4(b1.places[l].lat,b1.places[l].lon,1),u=r4(b1.places[f].lat,b1.places[f].lon,1),g=h.angleTo(u),S=[];for(let _=0;_<=64;_++){let b=_/64,z=h.clone().multiplyScalar(Math.sin((1-b)*g)/Math.sin(g)).add(u.clone().multiplyScalar(Math.sin(b*g)/Math.sin(g)));z.normalize().multiplyScalar(C1*(1.012+.16*g*Math.sin(Math.PI*b))),S.push(z)}let m=new C3(S);ee.add(new Y2(new v0(m,80,.018*n1,6),new G1({color:14922586,transparent:!0,opacity:.8,toneMapped:!1})));let p=new Y2(new Le(.06*n1,10,8),new G1({color:16773577,toneMapped:!1}));ee.add(p),Y4.push(_=>p.position.copy(m.getPointAt((_*.16+d*.27)%1)))})}function Y9(n){n.colorSpace=d1,pn=new X1,pn.rotation.set(.25,0,.12),Me.add(pn);let e=new Y2(new Le(2.6*n1,64,48),new ke({map:n,roughness:1,metalness:0}));pn.add(e);let t=150*n1;Y4.push(i=>{let a=2.45+i*.006;e.position.set(Math.cos(a)*t,0,Math.sin(a)*t),e.rotation.y=-a})}function $9(n=1){let e=new X1,t=new ke({color:14198858,metalness:.85,roughness:.35}),i=new ke({color:15265010,metalness:.3,roughness:.5}),a=document.createElement("canvas");a.width=64,a.height=128;let s=a.getContext("2d");s.fillStyle="#10264a",s.fillRect(0,0,64,128),s.strokeStyle="#5d8fd0",s.lineWidth=2;for(let f=0;f<=64;f+=16)s.beginPath(),s.moveTo(f,0),s.lineTo(f,128),s.stroke();for(let f=0;f<=128;f+=16)s.beginPath(),s.moveTo(0,f),s.lineTo(64,f),s.stroke();let r=new k4(a);r.colorSpace=d1;let c=new ke({map:r,metalness:.6,roughness:.3,side:Q1,emissive:662067});e.add(new Y2(new Be(.34,.34,.5),t));let o=new Y2(new Be(.36,.06,.52),i);o.position.y=.2,e.add(o),[-1,1].forEach(f=>{let d=new Y2(new O4(.015,.015,.3),i);d.rotation.z=Math.PI/2,d.position.x=f*.3,e.add(d);let h=new Y2(new i4(1.1,.42),c);h.position.x=f*1,h.rotation.x=-Math.PI/2,e.add(h)});let l=new Y2(new L3(.16,.12,20,1,!0),i);return l.position.y=-.24,l.rotation.x=Math.PI,e.add(l),e.scale.setScalar(n),e}function Z9(){[{r:C1+2.2*n1,inc:98,raan:20,speed:.1,phase:.2,scan:!0},{r:C1+3.4*n1,inc:52,raan:140,speed:.065,phase:2.1},{r:C1+1.6*n1,inc:75,raan:260,speed:.13,phase:4,scan:!0},{r:C1+4.8*n1,inc:12,raan:300,speed:.04,phase:1}].forEach(e=>{let t=new X1;t.rotation.y=ce.degToRad(e.raan),t.rotation.x=ce.degToRad(e.inc),Me.add(t);let i=[];for(let r=0;r<=160;r++){let c=r/160*Math.PI*2;i.push(new A(Math.cos(c)*e.r,0,Math.sin(c)*e.r))}t.add(new U4(new f1().setFromPoints(i),new x0({color:8377599,transparent:!0,opacity:.22,dashSize:.25*n1,gapSize:.18*n1})).computeLineDistances());let a=$9(.62*n1);t.add(a);let s;if(e.scan){let r=e.r-C1;s=new Y2(new L3(.75*n1,r,24,1,!0),new G1({color:8377599,transparent:!0,opacity:.1,side:Q1,depthWrite:!1,blending:Oe})),t.add(s)}Y4.push(r=>{let c=e.phase+r*e.speed;if(a.position.set(Math.cos(c)*e.r,0,Math.sin(c)*e.r),a.lookAt(0,0,0),a.rotateX(Math.PI/2),s){let o=a.position.clone().normalize(),l=e.r-C1;s.position.copy(o.clone().multiplyScalar(e.r-l/2)),s.quaternion.setFromUnitVectors(new A(0,-1,0),o.clone().negate()),s.material.opacity=.07+.05*Math.sin(r*3+e.phase)}})})}var K0=n=>-n*B9,Q0=n=>new A(Math.cos(n),0,Math.sin(n)),r6=n=>new A(Math.sin(n),0,-Math.cos(n)),J9=.22,K9=c4?.62:.9,Mc=c4?4:6;function Tc(n){let e=new k4(n);return e.colorSpace=d1,e.anisotropy=Ee.capabilities.getMaxAnisotropy(),e}var Ac=(n,e)=>n.kind==="title"?pc(n,b1.collections.length,e):dc(n,P1.length,e);function Q9(){let n=new X1;Me.add(n);let e=new i4(Mn,k3),t=new ke({color:1712690,metalness:.6,roughness:.4}),i=new ke({color:1053725,metalness:.7,roughness:.35}),a=new G1({color:14922586,transparent:!0,opacity:0,toneMapped:!1});o4.forEach((o,l)=>{let f=K0(l),d=new X1,h=Q0(f).multiplyScalar(b4);h.y=Z0,d.position.copy(h),d.lookAt(h.clone().multiplyScalar(2).setY(Z0)),o.lo=Tc(Ac(o,J9));let u=new G1({map:o.lo,toneMapped:!1}),g=new Y2(e,u);g.position.z=.012;let S=new Y2(new Be(Mn+.07,k3+.07,.03),i);S.position.z=-.008;let m=new Y2(new i4(Mn+.09,k3+.09),a.clone());m.position.z=-.006;let p=new Y2(e,t);p.rotation.y=Math.PI,p.position.z=-.026,d.add(S,m,g,p),n.add(d),Object.assign(o,{group:d,mesh:g,glow:m,lift:0,hi:null}),g.userData.slot=o,bc.push(g)});let s=Z0-k3/2-.25,r=[];for(let o=0;o<=512;o++){let l=o/512*Math.PI*2;r.push(new A(Math.cos(l)*b4,s,Math.sin(l)*b4))}n.add(new U4(new f1().setFromPoints(r),new Ue({color:14922586,transparent:!0,opacity:.45,toneMapped:!1})));let c=[];o4.forEach((o,l)=>{let f=Q0(K0(l));c.push(f.clone().multiplyScalar(b4).setY(s),f.clone().multiplyScalar(b4).setY(s+(o.kind==="title"?.22:.1)))}),n.add(new B4(new f1().setFromPoints(c),new Ue({color:14922586,transparent:!0,opacity:.6,toneMapped:!1})))}function j9(){if(v2.enter<.3)return;let n=j0(v2.p),e=2,t=i=>{let a=Math.abs(i.slot-n);return Math.min(a,J1-a)};o4.filter(i=>!i.hi&&(t(i)<=Mc||i===ie)).sort((i,a)=>t(i)-t(a)).forEach(i=>{e-- >0&&(i.hi=Tc(Ac(i,K9)),i.mesh.material.map=i.hi,i.mesh.material.needsUpdate=!0)}),o4.forEach(i=>{let a=t(i);i.hi&&a>Mc+4&&i!==ie&&(i.mesh.material.map=i.lo,i.mesh.material.needsUpdate=!0,i.hi.dispose(),i.hi=null)})}var v2={p:0,pT:0,enter:0,enterT:0,focus:0,focusT:0,lastInput:0,current:null,hover:null};function ef(){let n=ce.degToRad(p1.fov),e=2*Math.atan(Math.tan(n/2)*p1.aspect);return Math.max(k3/(.44*2*Math.tan(n/2)),Mn/(.78*2*Math.tan(e/2)))}function tf(n,e,t){let i=K0(n),a=Q0(i),s=r6(i),r=a.clone().multiplyScalar(b4).setY(Z0),c=ef(),o=p1.aspect<.9,l=o?.16:.42;e.copy(r).addScaledVector(a,c*Math.cos(l)).addScaledVector(s,-c*Math.sin(l)),e.y+=o?.55:.75,t.copy(r).addScaledVector(s,o?0:-.25),t.y+=o?.1:.05}function nf(n,e,t){let i=K0(n),a=Q0(i),s=r6(i),r=a.clone().multiplyScalar(b4).setY(Z0),c=ce.degToRad(p1.fov),o=2*Math.atan(Math.tan(c/2)*p1.aspect),l=k3/(.64*2*Math.tan(c/2)),f=innerWidth>860?.5*l*Math.tan(o/2):0;e.copy(r).addScaledVector(a,l).addScaledVector(s,f),t.copy(r).addScaledVector(s,f)}function af(n,e){let t=p1.aspect<.9,i=K0(-3.5),a=Q0(i),s=r6(i);n.copy(a).multiplyScalar((t?84:54)*n1).addScaledVector(s,t?0:-8*n1),n.y=(t?16:11)*n1,e.set(0,(t?-19:0)*n1,0).addScaledVector(s,(t?0:-17)*n1)}var vc=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,t6=new A,xc=new A,B3=new A,q0=new A,Sc=new A,_c=new A,sf=new A;function rf(n){af(t6,xc),$0||t6.add(sf.set(Math.sin(n*.07)*2*n1,Math.sin(n*.05)*1*n1,0)),tf(v2.p,B3,q0);let e=vc(v2.enter);if(B3.lerpVectors(t6,B3,e),q0.lerpVectors(xc,q0,e),B3.y+=Math.sin(Math.PI*e)*4*n1,v2.focus>.001){nf(v2.p,Sc,_c);let t=vc(v2.focus);B3.lerp(Sc,t),q0.lerp(_c,t)}p1.position.copy(B3),p1.lookAt(q0)}var j0=n=>(n%J1+J1)%J1;function et(n){let e=null,t=1e9;for(let i of P1){let a=Math.abs(j0(n)-i.slot);a=Math.min(a,J1-a),a<t&&(t=a,e=i)}return e}function c6(n){let e=j0(n)-j0(v2.pT);e>J1/2&&(e-=J1),e<-J1/2&&(e+=J1),v2.pT+=e}function s6(n){H3(),w4(),c6(P1.find(e=>e.ci===n).slot),v2.lastInput=performance.now()-1e3}function Y0(n){let e=et(v2.pT);c6(P1[(e.n+n+P1.length)%P1.length].slot),v2.lastInput=performance.now()-1e3}function w4(){v2.enterT!==1&&(v2.enterT=1,te.classList.remove("is-intro"))}function yc(){H3(),v2.enterT=0,te.classList.add("is-intro"),Ec(-1)}function Ec(n){document.querySelectorAll("#tabs button").forEach((t,i)=>t.classList.toggle("on",i===n));let e=document.querySelector("#tabs button.on");if(e){let t=H2("#tabs"),i=e.offsetLeft-t.clientWidth/2+e.clientWidth/2;t.scrollTo({left:i,behavior:"smooth"})}}function cf(n){if(!n||v2.current===n)return;let e=!v2.current||v2.current.ci!==n.ci;v2.current=n,H2("#capKicker").textContent=`${String(n.ci+1).padStart(2,"0")} / ${String(b1.collections.length).padStart(2,"0")} \xB7 ${n.c.theme}`,H2("#capTitle").textContent=n.c.title,H2("#capSub").textContent=`Sheet ${n.n+1} of ${P1.length} \u2014 ${c4?"tap":"click"} to open`,e&&Ec(n.ci)}var ie=null;function J0(n){if(!n||n.kind!=="item")return;w4(),ie=n,c6(n.slot),v2.focusT=1;let e=n.it;H2("#sheetCol").textContent=`${n.c.tab} \xB7 Sheet ${n.n+1}/${P1.length}`;let t;e.full?t=`<figure class="sh-fig show"><button type="button" class="sh-zoom sh-zimg" data-src="${e.full}" aria-label="View full map"><img src="${e.image}" alt="${Ae(e.title)}"><span>Click to explore \u2922</span></button></figure>`:e.image?t=`<figure class="sh-fig"><img src="${e.image}" alt="${Ae(e.title)}"></figure>`:t='<figure class="sh-fig" id="shCover"></figure>';let i=n.c.footer&&n.k===n.c.items.length-1?`<div class="sh-links"><a href="${n.c.footer.href}" target="_blank" rel="noopener">${n.c.footer.label} \u2197</a></div>`:"";H2("#sheetBody").innerHTML=t+O9(e,"sheetTitle")+i;let a=H2("#shCover");a&&a.appendChild(uc(e,n,2)),H2("#sheetBody").scrollTop=0;let s=H2("#contactForm");s&&s.addEventListener("submit",r=>{r.preventDefault();let c=new FormData(s);location.href=`mailto:${b1.person.email[0]}?subject=${encodeURIComponent(c.get("subject"))}&body=${encodeURIComponent(`${c.get("message")}

\u2014 ${c.get("name")}`)}`}),setTimeout(()=>{te.classList.add("is-sheet"),H2("#sheet").setAttribute("aria-hidden","false"),H2("#sheetClose").focus({preventScroll:!0})},$0?0:380)}function H3(){ie&&(ie=null,v2.focusT=0,te.classList.remove("is-sheet"),H2("#sheet").setAttribute("aria-hidden","true"))}function mn(n){ie&&J0(P1[(ie.n+n+P1.length)%P1.length])}var J2={s:1,x:0,y:0,pts:new Map,start:null};function Nc(n){let e=H2("#lbImg");e.src=n,J2.s=1,J2.x=0,J2.y=0,o6(),H2("#lbOpen").href=n,te.classList.add("is-lb"),H2("#lightbox").setAttribute("aria-hidden","false")}function Rc(){te.classList.remove("is-lb"),H2("#lightbox").setAttribute("aria-hidden","true")}function o6(){H2("#lbImg").style.transform=`translate(${J2.x}px, ${J2.y}px) scale(${J2.s})`}function X0(n,e,t){let i=ce.clamp(J2.s*n,1,10),a=H2("#lbStage").getBoundingClientRect(),s=e-a.left-a.width/2,r=t-a.top-a.height/2;J2.x=s-(s-J2.x)*(i/J2.s),J2.y=r-(r-J2.y)*(i/J2.s),J2.s=i,J2.s===1&&(J2.x=0,J2.y=0),o6()}function of(){let n=H2("#lbStage");n.addEventListener("wheel",t=>{t.preventDefault(),X0(Math.exp(-t.deltaY*.0015),t.clientX,t.clientY)},{passive:!1}),n.addEventListener("pointerdown",t=>{n.setPointerCapture(t.pointerId),J2.pts.set(t.pointerId,{x:t.clientX,y:t.clientY})}),n.addEventListener("pointermove",t=>{if(!J2.pts.has(t.pointerId))return;let i=J2.pts.get(t.pointerId);if(J2.pts.size===1)J2.x+=t.clientX-i.x,J2.y+=t.clientY-i.y,o6();else if(J2.pts.size===2){let[a,s]=[...J2.pts.values()],r=Math.hypot(a.x-s.x,a.y-s.y);J2.pts.set(t.pointerId,{x:t.clientX,y:t.clientY});let[c,o]=[...J2.pts.values()],l=Math.hypot(c.x-o.x,c.y-o.y);r>0&&X0(l/r,(c.x+o.x)/2,(c.y+o.y)/2);return}J2.pts.set(t.pointerId,{x:t.clientX,y:t.clientY})});let e=t=>J2.pts.delete(t.pointerId);n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e),n.addEventListener("dblclick",t=>X0(J2.s>2?1/J2.s:2.5,t.clientX,t.clientY)),H2("#lbIn").addEventListener("click",()=>{let t=n.getBoundingClientRect();X0(1.5,t.left+t.width/2,t.top+t.height/2)}),H2("#lbOut").addEventListener("click",()=>{let t=n.getBoundingClientRect();X0(1/1.5,t.left+t.width/2,t.top+t.height/2)}),H2("#lbClose").addEventListener("click",Rc),document.addEventListener("click",t=>{let i=t.target.closest(".sh-zoom");i&&Nc(i.dataset.src)})}var i6=new T0,zc=new M2;function Lc(n,e){zc.set(n/innerWidth*2-1,-(e/innerHeight)*2+1),i6.setFromCamera(zc,p1);let t=i6.intersectObjects(bc,!1)[0];if(!t)return null;let i=i6.ray.intersectSphere(new Fe(new A,C1),new A);return i&&i.distanceTo(p1.position)<t.distance?null:t.object.userData.slot}var Cc=()=>te.classList.contains("is-lb");function lf(){let n=Ee.domElement,e=null;addEventListener("wheel",t=>{if(Cc()||ie||t.target.closest&&t.target.closest("#tabs"))return;if(t.preventDefault(),v2.enterT===0){t.deltaY>0&&w4();return}let i=Math.abs(t.deltaY)>Math.abs(t.deltaX)?t.deltaY:t.deltaX;v2.pT+=ce.clamp(i,-120,120)*.0045,v2.lastInput=performance.now()},{passive:!1}),n.addEventListener("pointerdown",t=>{e={x:t.clientX,y:t.clientY,moved:0},n.setPointerCapture(t.pointerId)}),n.addEventListener("pointermove",t=>{if(e){let i=t.clientX-e.x,a=t.clientY-e.y;if(e.moved+=Math.abs(i)+Math.abs(a),e.x=t.clientX,e.y=t.clientY,e.moved>6&&!ie){if(te.classList.add("is-drag"),v2.enterT===0){e.moved>40&&w4();return}v2.pT+=(-i-(t.pointerType==="touch"?a*.8:0))*(c4?.018:.011),v2.lastInput=performance.now()}}else if(t.pointerType==="mouse"){let i=v2.enterT===1?Lc(t.clientX,t.clientY):null;v2.hover=i,te.classList.toggle("is-hover",!!i)}}),n.addEventListener("pointerup",t=>{if(!e)return;let i=e.moved<=6;if(e=null,te.classList.remove("is-drag"),!i)return;if(ie){H3();return}if(v2.enterT===0){w4();return}let a=Lc(t.clientX,t.clientY);if(a){if(a.kind==="title"){s6(a.ci);return}J0(a)}}),n.addEventListener("pointercancel",()=>{e=null,te.classList.remove("is-drag")}),addEventListener("keydown",t=>{if(Cc()){t.key==="Escape"&&Rc();return}if(!(t.target.closest&&t.target.closest("input, textarea"))){if(ie){t.key==="Escape"?H3():t.key==="ArrowRight"?mn(1):t.key==="ArrowLeft"&&mn(-1);return}["ArrowRight","ArrowDown","PageDown"," "].includes(t.key)?(t.preventDefault(),v2.enterT===0?w4():Y0(1)):["ArrowLeft","ArrowUp","PageUp"].includes(t.key)?(t.preventDefault(),v2.enterT===1&&Y0(-1)):t.key==="Enter"&&v2.enterT===1?J0(et(v2.pT)):t.key==="Escape"&&v2.enterT===1&&yc()}}),H2("#btnEnter").addEventListener("click",w4),H2("#btnPrev").addEventListener("click",()=>Y0(-1)),H2("#btnNext").addEventListener("click",()=>Y0(1)),H2("#btnOpen").addEventListener("click",()=>J0(et(v2.pT))),H2("#sheetClose").addEventListener("click",H3),H2("#sheetPrev").addEventListener("click",()=>mn(-1)),H2("#sheetNext").addEventListener("click",()=>mn(1)),H2("#brandHome").addEventListener("click",t=>{t.preventDefault(),yc()}),H2("#tabs").addEventListener("click",t=>{let i=t.target.closest("button[data-col]");i&&s6(+i.dataset.col)})}var ff=new A;function Pc(){let n=Math.min(a6.getDelta(),.05),e=a6.elapsedTime,t=c=>1-Math.exp(-n*c);if(v2.enterT===1&&!ie&&performance.now()-v2.lastInput>220){let o=et(v2.pT).slot-j0(v2.pT);o>J1/2&&(o-=J1),o<-J1/2&&(o+=J1),v2.pT+=o*t(6)}v2.p+=(v2.pT-v2.p)*t($0?30:5.5),v2.enter+=(v2.enterT-v2.enter)*t($0?30:1.9),Math.abs(v2.enterT-v2.enter)<.001&&(v2.enter=v2.enterT),v2.focus+=(v2.focusT-v2.focus)*t($0?30:4.5),ee.rotation.y+=n*.008,Y4.forEach(c=>c(e,n)),o4.forEach(c=>{let o=c===v2.hover&&!ie||c===ie?1:0;c.lift+=(o-c.lift)*t(8),c.mesh.position.z=.012+c.lift*.18,c.glow.position.z=-.006+c.lift*.17,c.glow.material.opacity=c.lift*.9}),rf(e);let i=Math.atan2(p1.position.z,p1.position.x);ja===null&&(ja=G9-i);let a=i+ja,s=Math.sqrt(1-Qa*Qa);oe.set(Math.cos(a)*s,Qa,Math.sin(a)*s),O3.light.position.copy(oe).multiplyScalar(100),O3.glow.position.copy(oe).multiplyScalar(1200),O3.flare.position.copy(oe).multiplyScalar(1200),j9(),v2.enterT===1&&cf(et(v2.p));let r=ff.copy(p1.position).normalize();if(wc.forEach(c=>{let o=c.local.clone();ee.localToWorld(o);let l=o.clone().normalize().dot(r),f=o.clone().project(p1),d=l>.25&&f.z<1&&Math.abs(f.x)<1.1&&Math.abs(f.y)<1.1&&v2.enter<.35&&p1.aspect>.9;c.el.style.opacity=d?Math.min(1,(l-.25)*4):0,d&&(c.el.style.transform=`translate(${(f.x*.5+.5)*innerWidth+(c.left?-8:8)}px, ${(-f.y*.5+.5)*innerHeight-14}px)${c.left?" translateX(-100%)":""}`)}),!c4&&v2.enterT===1){let c=n6.worldToLocal(p1.position.clone()),o=c.length(),l=ce.radToDeg(Math.asin(c.y/o)),f=ce.radToDeg(Math.atan2(-c.z,c.x));H2("#telemetry").textContent=`ALT  ${Math.round((o-C1)/C1*6371).toLocaleString("en")} km
LAT  ${Math.abs(l).toFixed(2)}\xB0${l>=0?"N":"S"}
LON  ${Math.abs(f).toFixed(2)}\xB0${f>=0?"E":"W"}`}Ee.render(Me,p1),requestAnimationFrame(Pc)}function gn(n){let e=H2("#ldPct");e&&(e.textContent=` \xB7 ${Math.round(n*100)}%`)}async function hf(){if(k9(),!V9()){location.replace("classic.html");return}Ee=new on({canvas:H2("#scene"),antialias:!0,powerPreference:"high-performance"}),Ee.setPixelRatio(Math.min(devicePixelRatio,c4?1.6:2)),Ee.setSize(innerWidth,innerHeight,!1),Ee.toneMapping=R0,Ee.toneMappingExposure=1,Me=new c0,Me.background=new I2(0),p1=new H1(innerWidth<innerHeight?50:40,innerWidth/innerHeight,.1,4e3),a6=new A0,gn(.05);let n=Promise.race([Promise.all(['900 60px "Playfair Display"','700 40px "Playfair Display"','italic 24px "EB Garamond"','24px "EB Garamond"','20px "Courier Prime"','bold 20px "Courier Prime"'].map(g=>document.fonts.load(g))),new Promise(g=>setTimeout(g,3500))]),e=new _0,t=0,i=6,a=g=>new Promise(S=>e.load(g,m=>{gn(.05+.5*(++t/i)),S(m)},void 0,()=>S(new y1))),s=c4?"2k":"4k",[r,c,o,l,f,d]=await Promise.all([a(`assets/tex/earth_day_${s}.jpg`),a(`assets/tex/earth_night_${s}.jpg`),a(`assets/tex/earth_clouds_${s}.jpg`),a("assets/tex/earth_water.jpg"),a(`assets/tex/sky_${s}.jpg`),a("assets/tex/moon.jpg"),n]);await cc(b1.collections,b1.person),gn(.7),W9(f),q9(),X9({day:r,night:c,clouds:o,water:l}),ee.rotation.y=-1.45,Y9(d),Z9(),Q9(),lf(),of(),addEventListener("resize",()=>{p1.aspect=innerWidth/innerHeight,p1.fov=innerWidth<innerHeight?50:40,p1.updateProjectionMatrix(),Ee.setSize(innerWidth,innerHeight,!1)});let h=location.hash.match(/^#sheet-(\d+)/);h&&P1[+h[1]-1]?(v2.enterT=v2.enter=1,te.classList.remove("is-intro"),v2.p=v2.pT=P1[+h[1]-1].slot):v2.p=v2.pT=P1[0].slot;let u=location.hash.match(/^#(\w+)$/);if(u){let g=b1.collections.findIndex(S=>S.id===u[1]);g>=0&&(v2.enterT=v2.enter=1,te.classList.remove("is-intro"),v2.p=v2.pT=P1.find(S=>S.ci===g).slot)}gn(1),requestAnimationFrame(Pc),setTimeout(()=>te.classList.remove("is-loading"),150),window.__atlas={state:v2,openSheet:J0,items:P1,enterOrbit:w4,step:Y0,closeSheet:H3,goToCollection:s6,openLightbox:Nc}}hf();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

@fortawesome/free-solid-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2026 Fonticons, Inc.
   *)
*/
