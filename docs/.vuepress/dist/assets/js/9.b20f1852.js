(window.webpackJsonp=window.webpackJsonp||[]).push([[9,10],{326:function(t,e,n){var o=n(15),a=Date.prototype,i=a.toString,r=a.getTime;"Invalid Date"!=String(new Date(NaN))&&o(a,"toString",(function(){var t=r.call(this);return t==t?i.call(this):"Invalid Date"}))},328:function(t,e,n){var o=n(0),a=n(340);o({global:!0,forced:parseInt!=a},{parseInt:a})},329:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},332:function(t,e,n){n(0)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},333:function(t,e,n){var o=n(26),a=n(20),i="["+n(329)+"]",r=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),c=function(t){return function(e){var n=a(o(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},334:function(t,e,n){"use strict";var o=n(179),a=n(6),i=n(14),r=n(20),s=n(26),c=n(50),l=n(180),u=n(181);o("match",(function(t,e,n){return[function(e){var n=s(this),o=null==e?void 0:c(e,t);return o?o.call(e,n):new RegExp(e)[t](r(n))},function(t){var o=a(this),s=r(t),c=n(e,o,s);if(c.done)return c.value;if(!o.global)return u(o,s);var h=o.unicode;o.lastIndex=0;for(var p,d=[],f=0;null!==(p=u(o,s));){var m=r(p[0]);d[f]=m,""===m&&(o.lastIndex=l(s,i(o.lastIndex),h)),f++}return 0===f?null:d}]}))},335:function(t,e,n){"use strict";var o=n(179),a=n(176),i=n(6),r=n(26),s=n(109),c=n(180),l=n(14),u=n(20),h=n(50),p=n(181),d=n(80),f=n(178),m=n(2),b=f.UNSUPPORTED_Y,g=[].push,v=Math.min;o("split",(function(t,e,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=u(r(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===t)return[o];if(!a(t))return e.call(o,t,i);for(var s,c,l,h=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,m=new RegExp(t.source,p+"g");(s=d.call(m,o))&&!((c=m.lastIndex)>f&&(h.push(o.slice(f,s.index)),s.length>1&&s.index<o.length&&g.apply(h,s.slice(1)),l=s[0].length,f=c,h.length>=i));)m.lastIndex===s.index&&m.lastIndex++;return f===o.length?!l&&m.test("")||h.push(""):h.push(o.slice(f)),h.length>i?h.slice(0,i):h}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=r(this),i=null==e?void 0:h(e,t);return i?i.call(e,a,n):o.call(u(a),e,n)},function(t,a){var r=i(this),h=u(t),d=n(o,r,h,a,o!==e);if(d.done)return d.value;var f=s(r,RegExp),m=r.unicode,g=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(b?"g":"y"),M=new f(b?"^(?:"+r.source+")":r,g),E=void 0===a?4294967295:a>>>0;if(0===E)return[];if(0===h.length)return null===p(M,h)?[h]:[];for(var P=0,y=0,x=[];y<h.length;){M.lastIndex=b?0:y;var w,O=p(M,b?h.slice(y):h);if(null===O||(w=v(l(M.lastIndex+(b?y:0)),h.length))===P)y=c(h,y,m);else{if(x.push(h.slice(P,y)),x.length===E)return x;for(var T=1;T<=O.length-1;T++)if(x.push(O[T]),x.length===E)return x;y=P=w}}return x.push(h.slice(P)),x}]}),!!m((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),b)},336:function(t,e,n){var o=n(7),a=n(1),i=n(108),r=n(341),s=n(21),c=n(9).f,l=n(53).f,u=n(176),h=n(20),p=n(177),d=n(178),f=n(15),m=n(2),b=n(8),g=n(27).enforce,v=n(186),M=n(3),E=n(187),P=n(188),y=M("match"),x=a.RegExp,w=x.prototype,O=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,T=/a/g,A=/a/g,I=new x(T)!==T,R=d.UNSUPPORTED_Y,N=o&&(!I||R||E||P||m((function(){return A[y]=!1,x(T)!=T||x(A)==A||"/a/i"!=x(T,"i")})));if(i("RegExp",N)){for(var S=function(t,e){var n,o,a,i,c,l,d=this instanceof S,f=u(t),m=void 0===e,v=[],M=t;if(!d&&f&&m&&t.constructor===S)return t;if((f||t instanceof S)&&(t=t.source,m&&(e="flags"in M?M.flags:p.call(M))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),M=t,E&&"dotAll"in T&&(o=!!e&&e.indexOf("s")>-1)&&(e=e.replace(/s/g,"")),n=e,R&&"sticky"in T&&(a=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,"")),P&&(t=(i=function(t){for(var e,n=t.length,o=0,a="",i=[],r={},s=!1,c=!1,l=0,u="";o<=n;o++){if("\\"===(e=t.charAt(o)))e+=t.charAt(++o);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:O.test(t.slice(o+1))&&(o+=2,c=!0),a+=e,l++;continue;case">"===e&&c:if(""===u||b(r,u))throw new SyntaxError("Invalid capture group name");r[u]=!0,i.push([u,l]),c=!1,u="";continue}c?u+=e:a+=e}return[a,i]}(t))[0],v=i[1]),c=r(x(t,e),d?this:w,S),(o||a||v.length)&&(l=g(c),o&&(l.dotAll=!0,l.raw=S(function(t){for(var e,n=t.length,o=0,a="",i=!1;o<=n;o++)"\\"!==(e=t.charAt(o))?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),a+=e):a+="[\\s\\S]":a+=e+t.charAt(++o);return a}(t),n)),a&&(l.sticky=!0),v.length&&(l.groups=v)),t!==M)try{s(c,"source",""===M?"(?:)":M)}catch(t){}return c},L=function(t){t in S||c(S,t,{configurable:!0,get:function(){return x[t]},set:function(e){x[t]=e}})},j=l(x),D=0;j.length>D;)L(j[D++]);w.constructor=S,S.prototype=w,f(a,"RegExp",S)}v("RegExp")},337:function(t,e,n){"use strict";var o=n(77).PROPER,a=n(15),i=n(6),r=n(20),s=n(2),c=n(177),l=RegExp.prototype,u=l.toString,h=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),p=o&&"toString"!=u.name;(h||p)&&a(RegExp.prototype,"toString",(function(){var t=i(this),e=r(t.source),n=t.flags;return"/"+e+"/"+r(void 0===n&&t instanceof RegExp&&!("flags"in l)?c.call(t):n)}),{unsafe:!0})},338:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(325);const a={type:"change"},i={type:"start"},r={type:"end"};class s extends o.s{constructor(t,e){super(),void 0===e&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Qb,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.P.ROTATE,MIDDLE:o.P.DOLLY,RIGHT:o.P.PAN},this.touches={ONE:o.Hb.ROTATE,TWO:o.Hb.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",V),this._domElementKeyEvents=t},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),c=s.NONE},this.update=function(){const e=new o.Qb,i=(new o.pb).setFromUnitVectors(t.up,new o.Qb(0,1,0)),r=i.clone().invert(),m=new o.Qb,b=new o.pb,g=2*Math.PI;return function(){const t=n.object.position;e.copy(t).sub(n.target),e.applyQuaternion(i),u.setFromVector3(e),n.autoRotate&&c===s.NONE&&A(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(u.theta+=h.theta*n.dampingFactor,u.phi+=h.phi*n.dampingFactor):(u.theta+=h.theta,u.phi+=h.phi);let o=n.minAzimuthAngle,v=n.maxAzimuthAngle;return isFinite(o)&&isFinite(v)&&(o<-Math.PI?o+=g:o>Math.PI&&(o-=g),v<-Math.PI?v+=g:v>Math.PI&&(v-=g),u.theta=o<=v?Math.max(o,Math.min(v,u.theta)):u.theta>(o+v)/2?Math.max(o,u.theta):Math.min(v,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=p,u.radius=Math.max(n.minDistance,Math.min(n.maxDistance,u.radius)),!0===n.enableDamping?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),e.setFromSpherical(u),e.applyQuaternion(r),t.copy(n.target).add(e),n.object.lookAt(n.target),!0===n.enableDamping?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),d.set(0,0,0)),p=1,!!(f||m.distanceToSquared(n.object.position)>l||8*(1-b.dot(n.object.quaternion))>l)&&(n.dispatchEvent(a),m.copy(n.object.position),b.copy(n.object.quaternion),f=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",z),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",Z),n.domElement.removeEventListener("pointermove",K),n.domElement.removeEventListener("pointerup",X),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",V)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=s.NONE;const l=1e-6,u=new o.Db,h=new o.Db;let p=1;const d=new o.Qb;let f=!1;const m=new o.Pb,b=new o.Pb,g=new o.Pb,v=new o.Pb,M=new o.Pb,E=new o.Pb,P=new o.Pb,y=new o.Pb,x=new o.Pb,w=[],O={};function T(){return Math.pow(.95,n.zoomSpeed)}function A(t){h.theta-=t}function I(t){h.phi-=t}const R=function(){const t=new o.Qb;return function(e,n){t.setFromMatrixColumn(n,0),t.multiplyScalar(-e),d.add(t)}}(),N=function(){const t=new o.Qb;return function(e,o){!0===n.screenSpacePanning?t.setFromMatrixColumn(o,1):(t.setFromMatrixColumn(o,0),t.crossVectors(n.object.up,t)),t.multiplyScalar(e),d.add(t)}}(),S=function(){const t=new o.Qb;return function(e,o){const a=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;t.copy(i).sub(n.target);let r=t.length();r*=Math.tan(n.object.fov/2*Math.PI/180),R(2*e*r/a.clientHeight,n.object.matrix),N(2*o*r/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(e*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),N(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(t){n.object.isPerspectiveCamera?p/=t:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*t)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(t){n.object.isPerspectiveCamera?p*=t:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/t)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(t){m.set(t.clientX,t.clientY)}function k(t){v.set(t.clientX,t.clientY)}function Y(){if(1===w.length)m.set(w[0].pageX,w[0].pageY);else{const t=.5*(w[0].pageX+w[1].pageX),e=.5*(w[0].pageY+w[1].pageY);m.set(t,e)}}function C(){if(1===w.length)v.set(w[0].pageX,w[0].pageY);else{const t=.5*(w[0].pageX+w[1].pageX),e=.5*(w[0].pageY+w[1].pageY);v.set(t,e)}}function H(){const t=w[0].pageX-w[1].pageX,e=w[0].pageY-w[1].pageY,n=Math.sqrt(t*t+e*e);P.set(0,n)}function F(t){if(1==w.length)b.set(t.pageX,t.pageY);else{const e=B(t),n=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);b.set(n,o)}g.subVectors(b,m).multiplyScalar(n.rotateSpeed);const e=n.domElement;A(2*Math.PI*g.x/e.clientHeight),I(2*Math.PI*g.y/e.clientHeight),m.copy(b)}function _(t){if(1===w.length)M.set(t.pageX,t.pageY);else{const e=B(t),n=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);M.set(n,o)}E.subVectors(M,v).multiplyScalar(n.panSpeed),S(E.x,E.y),v.copy(M)}function Q(t){const e=B(t),o=t.pageX-e.x,a=t.pageY-e.y,i=Math.sqrt(o*o+a*a);y.set(0,i),x.set(0,Math.pow(y.y/P.y,n.zoomSpeed)),L(x.y),P.copy(y)}function z(t){!1!==n.enabled&&(0===w.length&&(n.domElement.setPointerCapture(t.pointerId),n.domElement.addEventListener("pointermove",K),n.domElement.addEventListener("pointerup",X)),function(t){w.push(t)}(t),"touch"===t.pointerType?function(t){switch(q(t),w.length){case 1:switch(n.touches.ONE){case o.Hb.ROTATE:if(!1===n.enableRotate)return;Y(),c=s.TOUCH_ROTATE;break;case o.Hb.PAN:if(!1===n.enablePan)return;C(),c=s.TOUCH_PAN;break;default:c=s.NONE}break;case 2:switch(n.touches.TWO){case o.Hb.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&H(),n.enablePan&&C(),c=s.TOUCH_DOLLY_PAN;break;case o.Hb.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&H(),n.enableRotate&&Y(),c=s.TOUCH_DOLLY_ROTATE;break;default:c=s.NONE}break;default:c=s.NONE}c!==s.NONE&&n.dispatchEvent(i)}(t):function(t){let e;switch(t.button){case 0:e=n.mouseButtons.LEFT;break;case 1:e=n.mouseButtons.MIDDLE;break;case 2:e=n.mouseButtons.RIGHT;break;default:e=-1}switch(e){case o.P.DOLLY:if(!1===n.enableZoom)return;!function(t){P.set(t.clientX,t.clientY)}(t),c=s.DOLLY;break;case o.P.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===n.enablePan)return;k(t),c=s.PAN}else{if(!1===n.enableRotate)return;D(t),c=s.ROTATE}break;case o.P.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===n.enableRotate)return;D(t),c=s.ROTATE}else{if(!1===n.enablePan)return;k(t),c=s.PAN}break;default:c=s.NONE}c!==s.NONE&&n.dispatchEvent(i)}(t))}function K(t){!1!==n.enabled&&("touch"===t.pointerType?function(t){switch(q(t),c){case s.TOUCH_ROTATE:if(!1===n.enableRotate)return;F(t),n.update();break;case s.TOUCH_PAN:if(!1===n.enablePan)return;_(t),n.update();break;case s.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(t){n.enableZoom&&Q(t),n.enablePan&&_(t)}(t),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(t){n.enableZoom&&Q(t),n.enableRotate&&F(t)}(t),n.update();break;default:c=s.NONE}}(t):function(t){if(!1===n.enabled)return;switch(c){case s.ROTATE:if(!1===n.enableRotate)return;!function(t){b.set(t.clientX,t.clientY),g.subVectors(b,m).multiplyScalar(n.rotateSpeed);const e=n.domElement;A(2*Math.PI*g.x/e.clientHeight),I(2*Math.PI*g.y/e.clientHeight),m.copy(b),n.update()}(t);break;case s.DOLLY:if(!1===n.enableZoom)return;!function(t){y.set(t.clientX,t.clientY),x.subVectors(y,P),x.y>0?L(T()):x.y<0&&j(T()),P.copy(y),n.update()}(t);break;case s.PAN:if(!1===n.enablePan)return;!function(t){M.set(t.clientX,t.clientY),E.subVectors(M,v).multiplyScalar(n.panSpeed),S(E.x,E.y),v.copy(M),n.update()}(t)}}(t))}function X(t){!1!==n.enabled&&(t.pointerType,n.dispatchEvent(r),c=s.NONE,W(t),0===w.length&&(n.domElement.releasePointerCapture(t.pointerId),n.domElement.removeEventListener("pointermove",K),n.domElement.removeEventListener("pointerup",X)))}function U(t){W(t)}function Z(t){!1===n.enabled||!1===n.enableZoom||c!==s.NONE&&c!==s.ROTATE||(t.preventDefault(),n.dispatchEvent(i),function(t){t.deltaY<0?j(T()):t.deltaY>0&&L(T()),n.update()}(t),n.dispatchEvent(r))}function V(t){!1!==n.enabled&&!1!==n.enablePan&&function(t){let e=!1;switch(t.code){case n.keys.UP:S(0,n.keyPanSpeed),e=!0;break;case n.keys.BOTTOM:S(0,-n.keyPanSpeed),e=!0;break;case n.keys.LEFT:S(n.keyPanSpeed,0),e=!0;break;case n.keys.RIGHT:S(-n.keyPanSpeed,0),e=!0}e&&(t.preventDefault(),n.update())}(t)}function G(t){!1!==n.enabled&&t.preventDefault()}function W(t){delete O[t.pointerId];for(let e=0;e<w.length;e++)if(w[e].pointerId==t.pointerId)return void w.splice(e,1)}function q(t){let e=O[t.pointerId];void 0===e&&(e=new o.Pb,O[t.pointerId]=e),e.set(t.pageX,t.pageY)}function B(t){const e=t.pointerId===w[0].pointerId?w[1]:w[0];return O[e.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",z),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",Z,{passive:!1}),this.update()}}},340:function(t,e,n){var o=n(1),a=n(2),i=n(20),r=n(333).trim,s=n(329),c=o.parseInt,l=o.Symbol,u=l&&l.iterator,h=/^[+-]?0[Xx]/,p=8!==c(s+"08")||22!==c(s+"0x16")||u&&!a((function(){c(Object(u))}));t.exports=p?function(t,e){var n=r(i(t));return c(n,e>>>0||(h.test(n)?16:10))}:c},341:function(t,e,n){var o=n(4),a=n(5),i=n(79);t.exports=function(t,e,n){var r,s;return i&&o(r=e.constructor)&&r!==n&&a(s=r.prototype)&&s!==n.prototype&&i(t,s),t}},342:function(t,e,n){"use strict";var o=n(0),a=n(48),i=n(349),r=n(350),s=n(2),c=1..toFixed,l=Math.floor,u=function(t,e,n){return 0===e?n:e%2==1?u(t,e-1,n*t):u(t*t,e/2,n)},h=function(t,e,n){for(var o=-1,a=n;++o<6;)a+=e*t[o],t[o]=a%1e7,a=l(a/1e7)},p=function(t,e){for(var n=6,o=0;--n>=0;)o+=t[n],t[n]=l(o/e),o=o%e*1e7},d=function(t){for(var e=6,n="";--e>=0;)if(""!==n||0===e||0!==t[e]){var o=String(t[e]);n=""===n?o:n+r.call("0",7-o.length)+o}return n};o({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}))},{toFixed:function(t){var e,n,o,s,c=i(this),l=a(t),f=[0,0,0,0,0,0],m="",b="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*u(2,69,1))-69)<0?c*u(2,-e,1):c/u(2,e,1),n*=4503599627370496,(e=52-e)>0){for(h(f,0,n),o=l;o>=7;)h(f,1e7,0),o-=7;for(h(f,u(10,o,1),0),o=e-1;o>=23;)p(f,1<<23),o-=23;p(f,1<<o),h(f,1,1),p(f,2),b=d(f)}else h(f,0,n),h(f,1<<-e,0),b=d(f)+r.call("0",l);return b=l>0?m+((s=b.length)<=l?"0."+r.call("0",l-s)+b:b.slice(0,s-l)+"."+b.slice(s-l)):m+b}})},343:function(t,e,n){n(0)({target:"Function",proto:!0},{bind:n(190)})},344:function(t,e,n){var o=n(0),a=n(351);o({global:!0,forced:parseFloat!=a},{parseFloat:a})},345:function(t,e,n){var o=n(0),a=n(2),i=n(17),r=n(28).f,s=n(7),c=a((function(){r(1)}));o({target:"Object",stat:!0,forced:!s||c,sham:!s},{getOwnPropertyDescriptor:function(t,e){return r(i(t),e)}})},346:function(t,e,n){"use strict";var o=n(0),a=n(112),i=n(48),r=n(14),s=n(11),c=n(113),l=n(54),u=n(55)("splice"),h=Math.max,p=Math.min;o({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var n,o,u,d,f,m,b=s(this),g=r(b.length),v=a(t,g),M=arguments.length;if(0===M?n=o=0:1===M?(n=0,o=g-v):(n=M-2,o=p(h(i(e),0),g-v)),g+n-o>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=c(b,o),d=0;d<o;d++)(f=v+d)in b&&l(u,d,b[f]);if(u.length=o,n<o){for(d=v;d<g-o;d++)m=d+n,(f=d+o)in b?b[m]=b[f]:delete b[m];for(d=g;d>g-o+n;d--)delete b[d-1]}else if(n>o)for(d=g-o;d>v;d--)m=d+n-1,(f=d+o-1)in b?b[m]=b[f]:delete b[m];for(d=0;d<n;d++)b[d+v]=arguments[d+2];return b.length=g-o+n,u}})},347:function(t,e,n){var o=n(0),a=n(7);o({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperties:n(189)})},349:function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},350:function(t,e,n){"use strict";var o=n(48),a=n(20),i=n(26);t.exports=function(t){var e=a(i(this)),n="",r=o(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},351:function(t,e,n){var o=n(1),a=n(2),i=n(20),r=n(333).trim,s=n(329),c=o.parseFloat,l=o.Symbol,u=l&&l.iterator,h=1/c(s+"-0")!=-1/0||u&&!a((function(){c(Object(u))}));t.exports=h?function(t){var e=r(i(t)),n=c(e);return 0===n&&"-"==e.charAt(0)?-0:n}:c},440:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var o=n(325);class a extends o.o{getPoint(t,e=new o.Qb){const n=e;t=2*Math.PI*t;const a=-.22*Math.cos(t)-1.28*Math.sin(t)-.44*Math.cos(3*t)-.78*Math.sin(3*t),i=-.1*Math.cos(2*t)-.27*Math.sin(2*t)+.38*Math.cos(4*t)+.46*Math.sin(4*t),r=.7*Math.cos(3*t)-.4*Math.sin(3*t);return n.set(a,i,r).multiplyScalar(20)}}class i extends o.o{constructor(t=5){super(),this.scale=t}getPoint(t,e=new o.Qb){const n=e;t*=2*Math.PI;const a=16*Math.pow(Math.sin(t),3),i=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);return n.set(a,i,0).multiplyScalar(this.scale)}}class r extends o.o{constructor(t=70){super(),this.scale=t}getPoint(t,e=new o.Qb){const n=e;t=4*t*Math.PI;const a=this.scale/2,i=a*(1+Math.cos(t)),r=a*Math.sin(t),s=2*a*Math.sin(t/2);return n.set(i,r,s)}}class s extends o.o{getPoint(t,e=new o.Qb){const n=e;t*=2*Math.PI;const a=50*Math.sin(t),i=Math.cos(t)*(10+50*Math.cos(t)),r=Math.sin(t)*(10+50*Math.cos(t));return n.set(a,i,r)}}class c extends o.o{getPoint(t,e=new o.Qb){const n=e,a=2*Math.PI*t*150/30,i=30*Math.cos(a),r=30*Math.sin(a),s=150*t;return n.set(i,r,s)}}class l extends o.o{constructor(t=10){super(),this.scale=t}getPoint(t,e=new o.Qb){const n=e;t*=2*Math.PI;const a=(2+Math.cos(3*t))*Math.cos(2*t),i=(2+Math.cos(3*t))*Math.sin(2*t),r=Math.sin(3*t);return n.set(a,i,r).multiplyScalar(this.scale)}}class u extends o.o{constructor(t=10){super(),this.scale=t}getPoint(t,e=new o.Qb){const n=e;t*=2*Math.PI;const a=(2+Math.cos(4*t))*Math.cos(3*t),i=(2+Math.cos(4*t))*Math.sin(3*t),r=Math.sin(4*t);return n.set(a,i,r).multiplyScalar(this.scale)}}class h extends o.o{constructor(t=10){super(),this.scale=t}getPoint(t,e=new o.Qb){const n=e;t*=2*Math.PI;const a=(2+Math.cos(5*t))*Math.cos(2*t),i=(2+Math.cos(5*t))*Math.sin(2*t),r=Math.sin(5*t);return n.set(a,i,r).multiplyScalar(this.scale)}}class p extends o.o{constructor(t=10){super(),this.scale=t}getPoint(t,e=new o.Qb){const n=e;t=4*t-2;const a=Math.pow(t,3)-3*t,i=Math.pow(t,4)-4*t*t,r=.2*Math.pow(t,5)-2*t;return n.set(a,i,r).multiplyScalar(this.scale)}}class d extends o.o{constructor(t=1){super(),this.scale=t}getPoint(t,e=new o.Qb){const n=e,a=.4*(t=function(t,e,n){return n*(e-t)+t}(-4,4,t))*(t*t-7)*(t*t-10),i=Math.pow(t,4)-13*t*t,r=.1*t*(t*t-4)*(t*t-9)*(t*t-12);return n.set(a,i,r).multiplyScalar(this.scale)}}class f extends o.o{constructor(t=40){super(),this.scale=t}getPoint(t,e=new o.Qb){const n=e;t*=2*Math.PI;const a=Math.cos(2*t)*(1+.6*(Math.cos(5*t)+.75*Math.cos(10*t))),i=Math.sin(2*t)*(1+.6*(Math.cos(5*t)+.75*Math.cos(10*t))),r=.35*Math.sin(5*t);return n.set(a,i,r).multiplyScalar(this.scale)}}class m extends o.o{constructor(t=40){super(),this.scale=t}getPoint(t,e=new o.Qb){const n=e,a=t*Math.PI*2,i=Math.cos(2*a)*(1+.45*Math.cos(3*a)+.4*Math.cos(9*a)),r=Math.sin(2*a)*(1+.45*Math.cos(3*a)+.4*Math.cos(9*a)),s=.2*Math.sin(9*a);return n.set(i,r,s).multiplyScalar(this.scale)}}class b extends o.o{constructor(t=40){super(),this.scale=t}getPoint(t,e=new o.Qb){const n=e,a=t*Math.PI*2,i=Math.cos(3*a)*(1+.3*Math.cos(5*a)+.5*Math.cos(10*a)),r=Math.sin(3*a)*(1+.3*Math.cos(5*a)+.5*Math.cos(10*a)),s=.2*Math.sin(20*a);return n.set(i,r,s).multiplyScalar(this.scale)}}class g extends o.o{constructor(t=40){super(),this.scale=t}getPoint(t,e=new o.Qb){const n=e,a=t*Math.PI*2,i=Math.cos(4*a)*(1+.5*(Math.cos(5*a)+.4*Math.cos(20*a))),r=Math.sin(4*a)*(1+.5*(Math.cos(5*a)+.4*Math.cos(20*a))),s=.35*Math.sin(15*a);return n.set(i,r,s).multiplyScalar(this.scale)}}const v={GrannyKnot:a,HeartCurve:i,VivianiCurve:r,KnotCurve:s,HelixCurve:c,TrefoilKnot:l,TorusKnot:u,CinquefoilKnot:h,TrefoilPolynomialKnot:p,FigureEightPolynomialKnot:d,DecoratedTorusKnot4a:f,DecoratedTorusKnot4b:m,DecoratedTorusKnot5a:b,DecoratedTorusKnot5c:g}}}]);