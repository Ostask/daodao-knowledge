(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11,12,13,14],{311:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},312:function(t,e,n){var o=n(22),i="["+n(311)+"]",r=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),a=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:a(1),end:a(2),trim:a(3)}},313:function(t,e,n){var o=n(0),i=n(317);o({global:!0,forced:parseInt!=i},{parseInt:i})},315:function(t,e,n){"use strict";var o=n(168),i=n(5),r=n(13),s=n(22),a=n(169),c=n(170);o("match",1,(function(t,e,n){return[function(e){var n=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,n):new RegExp(e)[t](String(n))},function(t){var o=n(e,t,this);if(o.done)return o.value;var s=i(t),l=String(this);if(!s.global)return c(s,l);var u=s.unicode;s.lastIndex=0;for(var h,p=[],m=0;null!==(h=c(s,l));){var d=String(h[0]);p[m]=d,""===d&&(s.lastIndex=a(l,r(s.lastIndex),u)),m++}return 0===m?null:p}]}))},316:function(t,e,n){"use strict";var o=n(168),i=n(167),r=n(5),s=n(22),a=n(100),c=n(169),l=n(13),u=n(170),h=n(70),p=n(1),m=[].push,d=Math.min,f=!p((function(){return!RegExp(4294967295,"y")}));o("split",2,(function(t,e,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=String(s(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===t)return[o];if(!i(t))return e.call(o,t,r);for(var a,c,l,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,f=new RegExp(t.source,p+"g");(a=h.call(f,o))&&!((c=f.lastIndex)>d&&(u.push(o.slice(d,a.index)),a.length>1&&a.index<o.length&&m.apply(u,a.slice(1)),l=a[0].length,d=c,u.length>=r));)f.lastIndex===a.index&&f.lastIndex++;return d===o.length?!l&&f.test("")||u.push(""):u.push(o.slice(d)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=s(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,i,n):o.call(String(i),e,n)},function(t,i){var s=n(o,t,this,i,o!==e);if(s.done)return s.value;var h=r(t),p=String(this),m=a(h,RegExp),b=h.unicode,g=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(f?"y":"g"),v=new m(f?h:"^(?:"+h.source+")",g),y=void 0===i?4294967295:i>>>0;if(0===y)return[];if(0===p.length)return null===u(v,p)?[p]:[];for(var x=0,E=0,w=[];E<p.length;){v.lastIndex=f?E:0;var j,O=u(v,f?p:p.slice(E));if(null===O||(j=d(l(v.lastIndex+(f?0:E)),p.length))===x)E=c(p,E,b);else{if(w.push(p.slice(x,E)),w.length===y)return w;for(var P=1;P<=O.length-1;P++)if(w.push(O[P]),w.length===y)return w;E=x=j}}return w.push(p.slice(x)),w}]}),!f)},317:function(t,e,n){var o=n(2),i=n(312).trim,r=n(311),s=o.parseInt,a=/^[+-]?0[Xx]/,c=8!==s(r+"08")||22!==s(r+"0x16");t.exports=c?function(t,e){var n=i(String(t));return s(n,e>>>0||(a.test(n)?16:10))}:s},318:function(t,e,n){var o=n(6),i=n(2),r=n(98),s=n(319),a=n(8).f,c=n(69).f,l=n(167),u=n(101),h=n(173),p=n(10),m=n(1),d=n(29).set,f=n(172),b=n(3)("match"),g=i.RegExp,v=g.prototype,y=/a/g,x=/a/g,E=new g(y)!==y,w=h.UNSUPPORTED_Y;if(o&&r("RegExp",!E||w||m((function(){return x[b]=!1,g(y)!=y||g(x)==x||"/a/i"!=g(y,"i")})))){for(var j=function(t,e){var n,o=this instanceof j,i=l(t),r=void 0===e;if(!o&&i&&t.constructor===j&&r)return t;E?i&&!r&&(t=t.source):t instanceof j&&(r&&(e=u.call(t)),t=t.source),w&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=s(E?new g(t,e):g(t,e),o?this:v,j);return w&&n&&d(a,{sticky:n}),a},O=function(t){t in j||a(j,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},P=c(g),R=0;P.length>R;)O(P[R++]);v.constructor=j,j.prototype=v,p(i,"RegExp",j)}f("RegExp")},319:function(t,e,n){var o=n(4),i=n(99);t.exports=function(t,e,n){var r,s;return i&&"function"==typeof(r=e.constructor)&&r!==n&&o(s=r.prototype)&&s!==n.prototype&&i(t,s),t}},321:function(t,e,n){var o=n(24);t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},322:function(t,e,n){"use strict";var o=n(43),i=n(22);t.exports="".repeat||function(t){var e=String(i(this)),n="",r=o(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},323:function(t,e,n){var o=n(2),i=n(312).trim,r=n(311),s=o.parseFloat,a=1/s(r+"-0")!=-1/0;t.exports=a?function(t){var e=i(String(t)),n=s(e);return 0===n&&"-"==e.charAt(0)?-0:n}:s},326:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(310);const i={type:"change"},r={type:"start"},s={type:"end"};class a extends o.u{constructor(t,e){super(),void 0===e&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Sb,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.R.ROTATE,MIDDLE:o.R.DOLLY,RIGHT:o.R.PAN},this.touches={ONE:o.Jb.ROTATE,TWO:o.Jb.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",G),this._domElementKeyEvents=t},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),c=a.NONE},this.update=function(){const e=new o.Sb,r=(new o.rb).setFromUnitVectors(t.up,new o.Sb(0,1,0)),s=r.clone().invert(),f=new o.Sb,b=new o.rb,g=2*Math.PI;return function(){const t=n.object.position;e.copy(t).sub(n.target),e.applyQuaternion(r),u.setFromVector3(e),n.autoRotate&&c===a.NONE&&T(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(u.theta+=h.theta*n.dampingFactor,u.phi+=h.phi*n.dampingFactor):(u.theta+=h.theta,u.phi+=h.phi);let o=n.minAzimuthAngle,v=n.maxAzimuthAngle;return isFinite(o)&&isFinite(v)&&(o<-Math.PI?o+=g:o>Math.PI&&(o-=g),v<-Math.PI?v+=g:v>Math.PI&&(v-=g),u.theta=o<=v?Math.max(o,Math.min(v,u.theta)):u.theta>(o+v)/2?Math.max(o,u.theta):Math.min(v,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=p,u.radius=Math.max(n.minDistance,Math.min(n.maxDistance,u.radius)),!0===n.enableDamping?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),e.setFromSpherical(u),e.applyQuaternion(s),t.copy(n.target).add(e),n.object.lookAt(n.target),!0===n.enableDamping?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),m.set(0,0,0)),p=1,!!(d||f.distanceToSquared(n.object.position)>l||8*(1-b.dot(n.object.quaternion))>l)&&(n.dispatchEvent(i),f.copy(n.object.position),b.copy(n.object.quaternion),d=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",J),n.domElement.removeEventListener("pointerdown",U),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",K),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",X),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",G)};const n=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=a.NONE;const l=1e-6,u=new o.Fb,h=new o.Fb;let p=1;const m=new o.Sb;let d=!1;const f=new o.Rb,b=new o.Rb,g=new o.Rb,v=new o.Rb,y=new o.Rb,x=new o.Rb,E=new o.Rb,w=new o.Rb,j=new o.Rb,O=[],P={};function R(){return Math.pow(.95,n.zoomSpeed)}function T(t){h.theta-=t}function A(t){h.phi-=t}const L=function(){const t=new o.Sb;return function(e,n){t.setFromMatrixColumn(n,0),t.multiplyScalar(-e),m.add(t)}}(),I=function(){const t=new o.Sb;return function(e,o){!0===n.screenSpacePanning?t.setFromMatrixColumn(o,1):(t.setFromMatrixColumn(o,0),t.crossVectors(n.object.up,t)),t.multiplyScalar(e),m.add(t)}}(),S=function(){const t=new o.Sb;return function(e,o){const i=n.domElement;if(n.object.isPerspectiveCamera){const r=n.object.position;t.copy(r).sub(n.target);let s=t.length();s*=Math.tan(n.object.fov/2*Math.PI/180),L(2*e*s/i.clientHeight,n.object.matrix),I(2*o*s/i.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(e*(n.object.right-n.object.left)/n.object.zoom/i.clientWidth,n.object.matrix),I(o*(n.object.top-n.object.bottom)/n.object.zoom/i.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function M(t){n.object.isPerspectiveCamera?p/=t:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*t)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(t){n.object.isPerspectiveCamera?p*=t:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/t)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(t){f.set(t.clientX,t.clientY)}function V(t){v.set(t.clientX,t.clientY)}function F(){if(1===O.length)f.set(O[0].pageX,O[0].pageY);else{const t=.5*(O[0].pageX+O[1].pageX),e=.5*(O[0].pageY+O[1].pageY);f.set(t,e)}}function k(){if(1===O.length)v.set(O[0].pageX,O[0].pageY);else{const t=.5*(O[0].pageX+O[1].pageX),e=.5*(O[0].pageY+O[1].pageY);v.set(t,e)}}function z(){const t=O[0].pageX-O[1].pageX,e=O[0].pageY-O[1].pageY,n=Math.sqrt(t*t+e*e);E.set(0,n)}function D(t){if(1==O.length)b.set(t.pageX,t.pageY);else{const e=q(t),n=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);b.set(n,o)}g.subVectors(b,f).multiplyScalar(n.rotateSpeed);const e=n.domElement;T(2*Math.PI*g.x/e.clientHeight),A(2*Math.PI*g.y/e.clientHeight),f.copy(b)}function Y(t){if(1===O.length)y.set(t.pageX,t.pageY);else{const e=q(t),n=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);y.set(n,o)}x.subVectors(y,v).multiplyScalar(n.panSpeed),S(x.x,x.y),v.copy(y)}function _(t){const e=q(t),o=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(o*o+i*i);w.set(0,r),j.set(0,Math.pow(w.y/E.y,n.zoomSpeed)),M(j.y),E.copy(w)}function U(t){!1!==n.enabled&&(0===O.length&&(n.domElement.setPointerCapture(t.pointerId),n.domElement.addEventListener("pointermove",H),n.domElement.addEventListener("pointerup",X)),function(t){O.push(t)}(t),"touch"===t.pointerType?function(t){switch(W(t),O.length){case 1:switch(n.touches.ONE){case o.Jb.ROTATE:if(!1===n.enableRotate)return;F(),c=a.TOUCH_ROTATE;break;case o.Jb.PAN:if(!1===n.enablePan)return;k(),c=a.TOUCH_PAN;break;default:c=a.NONE}break;case 2:switch(n.touches.TWO){case o.Jb.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&z(),n.enablePan&&k(),c=a.TOUCH_DOLLY_PAN;break;case o.Jb.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&z(),n.enableRotate&&F(),c=a.TOUCH_DOLLY_ROTATE;break;default:c=a.NONE}break;default:c=a.NONE}c!==a.NONE&&n.dispatchEvent(r)}(t):function(t){let e;switch(t.button){case 0:e=n.mouseButtons.LEFT;break;case 1:e=n.mouseButtons.MIDDLE;break;case 2:e=n.mouseButtons.RIGHT;break;default:e=-1}switch(e){case o.R.DOLLY:if(!1===n.enableZoom)return;!function(t){E.set(t.clientX,t.clientY)}(t),c=a.DOLLY;break;case o.R.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===n.enablePan)return;V(t),c=a.PAN}else{if(!1===n.enableRotate)return;C(t),c=a.ROTATE}break;case o.R.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===n.enableRotate)return;C(t),c=a.ROTATE}else{if(!1===n.enablePan)return;V(t),c=a.PAN}break;default:c=a.NONE}c!==a.NONE&&n.dispatchEvent(r)}(t))}function H(t){!1!==n.enabled&&("touch"===t.pointerType?function(t){switch(W(t),c){case a.TOUCH_ROTATE:if(!1===n.enableRotate)return;D(t),n.update();break;case a.TOUCH_PAN:if(!1===n.enablePan)return;Y(t),n.update();break;case a.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(t){n.enableZoom&&_(t),n.enablePan&&Y(t)}(t),n.update();break;case a.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(t){n.enableZoom&&_(t),n.enableRotate&&D(t)}(t),n.update();break;default:c=a.NONE}}(t):function(t){if(!1===n.enabled)return;switch(c){case a.ROTATE:if(!1===n.enableRotate)return;!function(t){b.set(t.clientX,t.clientY),g.subVectors(b,f).multiplyScalar(n.rotateSpeed);const e=n.domElement;T(2*Math.PI*g.x/e.clientHeight),A(2*Math.PI*g.y/e.clientHeight),f.copy(b),n.update()}(t);break;case a.DOLLY:if(!1===n.enableZoom)return;!function(t){w.set(t.clientX,t.clientY),j.subVectors(w,E),j.y>0?M(R()):j.y<0&&N(R()),E.copy(w),n.update()}(t);break;case a.PAN:if(!1===n.enablePan)return;!function(t){y.set(t.clientX,t.clientY),x.subVectors(y,v).multiplyScalar(n.panSpeed),S(x.x,x.y),v.copy(y),n.update()}(t)}}(t))}function X(t){!1!==n.enabled&&(t.pointerType,n.dispatchEvent(s),c=a.NONE,B(t),0===O.length&&(n.domElement.releasePointerCapture(t.pointerId),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",X)))}function Z(t){B(t)}function K(t){!1===n.enabled||!1===n.enableZoom||c!==a.NONE&&c!==a.ROTATE||(t.preventDefault(),n.dispatchEvent(r),function(t){t.deltaY<0?N(R()):t.deltaY>0&&M(R()),n.update()}(t),n.dispatchEvent(s))}function G(t){!1!==n.enabled&&!1!==n.enablePan&&function(t){let e=!1;switch(t.code){case n.keys.UP:S(0,n.keyPanSpeed),e=!0;break;case n.keys.BOTTOM:S(0,-n.keyPanSpeed),e=!0;break;case n.keys.LEFT:S(n.keyPanSpeed,0),e=!0;break;case n.keys.RIGHT:S(-n.keyPanSpeed,0),e=!0}e&&(t.preventDefault(),n.update())}(t)}function J(t){!1!==n.enabled&&t.preventDefault()}function B(t){delete P[t.pointerId];for(let e=0;e<O.length;e++)if(O[e].pointerId==t.pointerId)return void O.splice(e,1)}function W(t){let e=P[t.pointerId];void 0===e&&(e=new o.Rb,P[t.pointerId]=e),e.set(t.pageX,t.pageY)}function q(t){const e=t.pointerId===O[0].pointerId?O[1]:O[0];return P[e.pointerId]}n.domElement.addEventListener("contextmenu",J),n.domElement.addEventListener("pointerdown",U),n.domElement.addEventListener("pointercancel",Z),n.domElement.addEventListener("wheel",K,{passive:!1}),this.update()}}},327:function(t,e,n){"use strict";var o=n(0),i=n(104),r=n(43),s=n(13),a=n(11),c=n(105),l=n(47),u=n(46),h=n(17),p=u("splice"),m=h("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,f=Math.min;o({target:"Array",proto:!0,forced:!p||!m},{splice:function(t,e){var n,o,u,h,p,m,b=a(this),g=s(b.length),v=i(t,g),y=arguments.length;if(0===y?n=o=0:1===y?(n=0,o=g-v):(n=y-2,o=f(d(r(e),0),g-v)),g+n-o>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=c(b,o),h=0;h<o;h++)(p=v+h)in b&&l(u,h,b[p]);if(u.length=o,n<o){for(h=v;h<g-o;h++)m=h+n,(p=h+o)in b?b[m]=b[p]:delete b[m];for(h=g;h>g-o+n;h--)delete b[h-1]}else if(n>o)for(h=g-o;h>v;h--)m=h+n-1,(p=h+o-1)in b?b[m]=b[p]:delete b[m];for(h=0;h<n;h++)b[h+v]=arguments[h+2];return b.length=g-o+n,u}})},328:function(t,e,n){n(0)({target:"Function",proto:!0},{bind:n(177)})},329:function(t,e,n){"use strict";var o=n(0),i=n(43),r=n(321),s=n(322),a=n(1),c=1..toFixed,l=Math.floor,u=function(t,e,n){return 0===e?n:e%2==1?u(t,e-1,n*t):u(t*t,e/2,n)};o({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){c.call({})}))},{toFixed:function(t){var e,n,o,a,c=r(this),h=i(t),p=[0,0,0,0,0,0],m="",d="0",f=function(t,e){for(var n=-1,o=e;++n<6;)o+=t*p[n],p[n]=o%1e7,o=l(o/1e7)},b=function(t){for(var e=6,n=0;--e>=0;)n+=p[e],p[e]=l(n/t),n=n%t*1e7},g=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==p[t]){var n=String(p[t]);e=""===e?n:e+s.call("0",7-n.length)+n}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*u(2,69,1))-69)<0?c*u(2,-e,1):c/u(2,e,1),n*=4503599627370496,(e=52-e)>0){for(f(0,n),o=h;o>=7;)f(1e7,0),o-=7;for(f(u(10,o,1),0),o=e-1;o>=23;)b(1<<23),o-=23;b(1<<o),f(1,1),b(2),d=g()}else f(0,n),f(1<<-e,0),d=g()+s.call("0",h);return d=h>0?m+((a=d.length)<=h?"0."+s.call("0",h-a)+d:d.slice(0,a-h)+"."+d.slice(a-h)):m+d}})},330:function(t,e,n){var o=n(0),i=n(6);o({target:"Object",stat:!0,forced:!i,sham:!i},{defineProperties:n(176)})},331:function(t,e,n){var o=n(0),i=n(1),r=n(14),s=n(23).f,a=n(6),c=i((function(){s(1)}));o({target:"Object",stat:!0,forced:!a||c,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(r(t),e)}})},332:function(t,e,n){var o=n(0),i=n(323);o({global:!0,forced:parseFloat!=i},{parseFloat:i})},335:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(310);const i=/^[og]\s*(.+)?/,r=/^mtllib /,s=/^usemtl /,a=/^usemap /,c=new o.Sb,l=new o.Sb,u=new o.Sb,h=new o.Sb,p=new o.Sb;function m(){const t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=t,void(this.object.fromDeclaration=!1!==e);const n=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:!1!==e,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(t,e){const n=this._finalize(!1);n&&(n.inherited||n.groupCount<=0)&&this.materials.splice(n.index,1);const o={index:this.materials.length,name:t||"",mtllib:Array.isArray(e)&&e.length>0?e[e.length-1]:"",smooth:void 0!==n?n.smooth:this.smooth,groupStart:void 0!==n?n.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(t){const e={index:"number"==typeof t?t:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return e.clone=this.clone.bind(e),e}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(t){const e=this.currentMaterial();if(e&&-1===e.groupEnd&&(e.groupEnd=this.geometry.vertices.length/3,e.groupCount=e.groupEnd-e.groupStart,e.inherited=!1),t&&this.materials.length>1)for(let t=this.materials.length-1;t>=0;t--)this.materials[t].groupCount<=0&&this.materials.splice(t,1);return t&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),e}},n&&n.name&&"function"==typeof n.clone){const t=n.clone(0);t.inherited=!0,this.object.materials.push(t)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return 3*(n>=0?n-1:n+e/3)},parseNormalIndex:function(t,e){const n=parseInt(t,10);return 3*(n>=0?n-1:n+e/3)},parseUVIndex:function(t,e){const n=parseInt(t,10);return 2*(n>=0?n-1:n+e/2)},addVertex:function(t,e,n){const o=this.vertices,i=this.object.geometry.vertices;i.push(o[t+0],o[t+1],o[t+2]),i.push(o[e+0],o[e+1],o[e+2]),i.push(o[n+0],o[n+1],o[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const o=this.normals,i=this.object.geometry.normals;i.push(o[t+0],o[t+1],o[t+2]),i.push(o[e+0],o[e+1],o[e+2]),i.push(o[n+0],o[n+1],o[n+2])},addFaceNormal:function(t,e,n){const o=this.vertices,i=this.object.geometry.normals;c.fromArray(o,t),l.fromArray(o,e),u.fromArray(o,n),p.subVectors(u,l),h.subVectors(c,l),p.cross(h),p.normalize(),i.push(p.x,p.y,p.z),i.push(p.x,p.y,p.z),i.push(p.x,p.y,p.z)},addColor:function(t,e,n){const o=this.colors,i=this.object.geometry.colors;void 0!==o[t]&&i.push(o[t+0],o[t+1],o[t+2]),void 0!==o[e]&&i.push(o[e+0],o[e+1],o[e+2]),void 0!==o[n]&&i.push(o[n+0],o[n+1],o[n+2])},addUV:function(t,e,n){const o=this.uvs,i=this.object.geometry.uvs;i.push(o[t+0],o[t+1]),i.push(o[e+0],o[e+1]),i.push(o[n+0],o[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,o,i,r,s,a,c){const l=this.vertices.length;let u=this.parseVertexIndex(t,l),h=this.parseVertexIndex(e,l),p=this.parseVertexIndex(n,l);if(this.addVertex(u,h,p),this.addColor(u,h,p),void 0!==s&&""!==s){const t=this.normals.length;u=this.parseNormalIndex(s,t),h=this.parseNormalIndex(a,t),p=this.parseNormalIndex(c,t),this.addNormal(u,h,p)}else this.addFaceNormal(u,h,p);if(void 0!==o&&""!==o){const t=this.uvs.length;u=this.parseUVIndex(o,t),h=this.parseUVIndex(i,t),p=this.parseUVIndex(r,t),this.addUV(u,h,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,o=t.length;n<o;n++){const o=this.parseVertexIndex(t[n],e);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,o=this.uvs.length;for(let e=0,o=t.length;e<o;e++)this.addVertexLine(this.parseVertexIndex(t[e],n));for(let t=0,n=e.length;t<n;t++)this.addUVLine(this.parseUVIndex(e[t],o))}};return t.startObject("",!1),t}class d extends o.P{constructor(t){super(t),this.materials=null}load(t,e,n,i){const r=this,s=new o.v(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,(function(n){try{e(r.parse(n))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new m;-1!==t.indexOf("\r\n")&&(t=t.replace(/\r\n/g,"\n")),-1!==t.indexOf("\\\n")&&(t=t.replace(/\\\n/g,""));const n=t.split("\n");let c="",l="",u=0,h=[];const p="function"==typeof"".trimLeft;for(let t=0,o=n.length;t<o;t++)if(c=n[t],c=p?c.trimLeft():c.trim(),u=c.length,0!==u&&(l=c.charAt(0),"#"!==l))if("v"===l){const t=c.split(/\s+/);switch(t[0]){case"v":e.vertices.push(parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])),t.length>=7?e.colors.push(parseFloat(t[4]),parseFloat(t[5]),parseFloat(t[6])):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]));break;case"vt":e.uvs.push(parseFloat(t[1]),parseFloat(t[2]))}}else if("f"===l){const t=c.substr(1).trim().split(/\s+/),n=[];for(let e=0,o=t.length;e<o;e++){const o=t[e];if(o.length>0){const t=o.split("/");n.push(t)}}const o=n[0];for(let t=1,i=n.length-1;t<i;t++){const i=n[t],r=n[t+1];e.addFace(o[0],i[0],r[0],o[1],i[1],r[1],o[2],i[2],r[2])}}else if("l"===l){const t=c.substring(1).trim().split(" ");let n=[];const o=[];if(-1===c.indexOf("/"))n=t;else for(let e=0,i=t.length;e<i;e++){const i=t[e].split("/");""!==i[0]&&n.push(i[0]),""!==i[1]&&o.push(i[1])}e.addLineGeometry(n,o)}else if("p"===l){const t=c.substr(1).trim().split(" ");e.addPointGeometry(t)}else if(null!==(h=i.exec(c))){const t=(" "+h[0].substr(1).trim()).substr(1);e.startObject(t)}else if(s.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(r.test(c))e.materialLibraries.push(c.substring(7).trim());else if(a.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===l){if(h=c.split(" "),h.length>1){const t=h[1].trim().toLowerCase();e.object.smooth="0"!==t&&"off"!==t}else e.object.smooth=!0;const t=e.object.currentMaterial();t&&(t.smooth=e.object.smooth)}else{if("\0"===c)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}e.finalize();const d=new o.z;d.materialLibraries=[].concat(e.materialLibraries);if(!0===!(1===e.objects.length&&0===e.objects[0].geometry.vertices.length))for(let t=0,n=e.objects.length;t<n;t++){const n=e.objects[t],i=n.geometry,r=n.materials,s="Line"===i.type,a="Points"===i.type;let c=!1;if(0===i.vertices.length)continue;const l=new o.i;l.setAttribute("position",new o.w(i.vertices,3)),i.normals.length>0&&l.setAttribute("normal",new o.w(i.normals,3)),i.colors.length>0&&(c=!0,l.setAttribute("color",new o.w(i.colors,3))),!0===i.hasUVIndices&&l.setAttribute("uv",new o.w(i.uvs,2));const u=[];for(let t=0,n=r.length;t<n;t++){const n=r[t],i=n.name+"_"+n.smooth+"_"+c;let l=e.materials[i];if(null!==this.materials)if(l=this.materials.create(n.name),!s||!l||l instanceof o.I){if(a&&l&&!(l instanceof o.pb)){const t=new o.pb({size:10,sizeAttenuation:!1});o.S.prototype.copy.call(t,l),t.color.copy(l.color),t.map=l.map,l=t}}else{const t=new o.I;o.S.prototype.copy.call(t,l),t.color.copy(l.color),l=t}void 0===l&&(l=s?new o.I:a?new o.pb({size:1,sizeAttenuation:!1}):new o.Y,l.name=n.name,l.flatShading=!n.smooth,l.vertexColors=c,e.materials[i]=l),u.push(l)}let h;if(u.length>1){for(let t=0,e=r.length;t<e;t++){const e=r[t];l.addGroup(e.groupStart,e.groupCount,t)}h=s?new o.K(l,u):a?new o.ob(l,u):new o.V(l,u)}else h=s?new o.K(l,u[0]):a?new o.ob(l,u[0]):new o.V(l,u[0]);h.name=n.name,d.add(h)}else if(e.vertices.length>0){const t=new o.pb({size:1,sizeAttenuation:!1}),n=new o.i;n.setAttribute("position",new o.w(e.vertices,3)),e.colors.length>0&&void 0!==e.colors[0]&&(n.setAttribute("color",new o.w(e.colors,3)),t.vertexColors=!0);const i=new o.ob(n,t);d.add(i)}return d}}},435:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(310);class i{constructor(t,e=32){this.lut=[],this.map=[],this.n=0,this.minV=0,this.maxV=1,this.setColorMap(t,e)}set(t){return!0===t.isLut&&this.copy(t),this}setMin(t){return this.minV=t,this}setMax(t){return this.maxV=t,this}setColorMap(t,e=32){this.map=r[t]||r.rainbow,this.n=e;const n=1/this.n;this.lut.length=0;for(let t=0;t<=1;t+=n)for(let e=0;e<this.map.length-1;e++)if(t>=this.map[e][0]&&t<this.map[e+1][0]){const n=this.map[e][0],i=this.map[e+1][0],r=new o.p(this.map[e][1]),s=new o.p(this.map[e+1][1]),a=r.lerp(s,(t-n)/(i-n));this.lut.push(a)}return this}copy(t){return this.lut=t.lut,this.map=t.map,this.n=t.n,this.minV=t.minV,this.maxV=t.maxV,this}getColor(t){t<=this.minV?t=this.minV:t>=this.maxV&&(t=this.maxV),t=(t-this.minV)/(this.maxV-this.minV);let e=Math.round(t*this.n);return e==this.n&&(e-=1),this.lut[e]}addColorMap(t,e){return r[t]=e,this}createCanvas(){const t=document.createElement("canvas");return t.width=1,t.height=this.n,this.updateCanvas(t),t}updateCanvas(t){const e=t.getContext("2d",{alpha:!1}),n=e.getImageData(0,0,1,this.n),i=n.data;let r=0;const s=1/this.n;for(let t=1;t>=0;t-=s)for(let e=this.map.length-1;e>=0;e--)if(t<this.map[e][0]&&t>=this.map[e-1][0]){const n=this.map[e-1][0],s=this.map[e][0],a=new o.p(this.map[e-1][1]),c=new o.p(this.map[e][1]),l=a.lerp(c,(t-n)/(s-n));i[4*r]=Math.round(255*l.r),i[4*r+1]=Math.round(255*l.g),i[4*r+2]=Math.round(255*l.b),i[4*r+3]=255,r+=1}return e.putImageData(n,0,0),t}}i.prototype.isLut=!0;const r={rainbow:[[0,255],[.2,65535],[.5,65280],[.8,16776960],[1,16711680]],cooltowarm:[[0,3952322],[.2,10206463],[.5,14474460],[.8,16163717],[1,11797542]],blackbody:[[0,0],[.2,7864320],[.5,15086080],[.8,16776960],[1,16777215]],grayscale:[[0,0],[.2,4210752],[.5,8355712],[.8,12566463],[1,16777215]]}}}]);