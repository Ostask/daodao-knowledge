(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{341:function(t,n,e){"use strict";e(343),e(339);var s=function t(){var n=0,e=document.createElement("div");function s(t){return e.appendChild(t.dom),t}function a(t){for(var s=0;s<e.children.length;s++)e.children[s].style.display=s===t?"block":"none";n=t}e.style.cssText="position:absolute;top:0;left:0;cursor:pointer;opacity:0.9;z-index:19",e.addEventListener("click",(function(t){t.preventDefault(),a(++n%e.children.length)}),!1);var o=(performance||Date).now(),r=o,p=0,c=s(new t.Panel("FPS","#0ff","#002")),i=s(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=s(new t.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:e,addPanel:s,showPanel:a,begin:function(){o=(performance||Date).now()},end:function(){p++;var t=(performance||Date).now();if(i.update(t-o,200),t>=r+1e3&&(c.update(1e3*p/(t-r),100),r=t,p=0,l)){var n=performance.memory;l.update(n.usedJSHeapSize/1048576,n.jsHeapSizeLimit/1048576)}return t},update:function(){o=this.end()},domElement:e,setMode:a}};s.Panel=function(t,n,e){var s=1/0,a=0,o=Math.round,r=o(window.devicePixelRatio||1),p=80*r,c=48*r,i=3*r,l=2*r,u=3*r,v=15*r,_=74*r,d=30*r,m=document.createElement("canvas");m.width=p,m.height=c,m.style.cssText="width:80px;height:48px";var b=m.getContext("2d");return b.font="bold "+9*r+"px Helvetica,Arial,sans-serif",b.textBaseline="top",b.fillStyle=e,b.fillRect(0,0,p,c),b.fillStyle=n,b.fillText(t,i,l),b.fillRect(u,v,_,d),b.fillStyle=e,b.globalAlpha=.9,b.fillRect(u,v,_,d),{dom:m,update:function(c,k){s=Math.min(s,c),a=Math.max(a,c),b.fillStyle=e,b.globalAlpha=1,b.fillRect(0,0,p,v),b.fillStyle=n,b.fillText(o(c)+" "+t+" ("+o(s)+"-"+o(a)+")",i,l),b.drawImage(m,u+r,v,_-r,d,u,v,_-r,d),b.fillRect(u+_-r,v,r,d),b.fillStyle=e,b.globalAlpha=.9,b.fillRect(u+_-r,v,r,o((1-c/k)*d))}}},n.a=s},343:function(t,n,e){var s=e(1),a=e(0),o=e(2),r=a.Date,p=o(r.prototype.getTime);s({target:"Date",stat:!0},{now:function(){return p(new r)}})},344:function(t,n,e){"use strict";e.d(n,"f",(function(){return r})),e.d(n,"e",(function(){return p})),e.d(n,"c",(function(){return c})),e.d(n,"g",(function(){return i})),e.d(n,"d",(function(){return l})),e.d(n,"b",(function(){return u})),e.d(n,"h",(function(){return v})),e.d(n,"a",(function(){return _}));e(342),e(6),e(17),e(81),e(109),e(110),e(185);var s=e(341),a=e(338),o=e(351);function r(t,n){var e=void 0!==t&&t&&!isNaN(t)?parseInt(t):0,a=new s.a;return a.showPanel(e),n.appendChild(a.dom),a}function p(t,n){var e=void 0!==n&&n?n:{},s=new a.Tb(e);return s.shadowMap.enabled=!0,s.shadowMapSoft=!0,s.shadowMap.type=a.gb,s.setClearColor(new a.n(0)),s.setSize(t.clientWidth,t.clientHeight),s.shadowMap.enabled=!0,t.appendChild(s.domElement),s}function c(t,n){var e=void 0!==n?n:new a.Qb(-30,40,30),s=new a.hb(45,t.clientWidth/t.clientHeight,.1,1e3);return s.position.set(e.x,e.y,e.z),s.lookAt(new a.Qb(0,0,0)),s}function i(t,n){var e=new o.a(t,n.domElement);return e.rotateSpeed=1,e.zoomSpeed=1.2,e.panSpeed=.8,e.noZoom=!1,e.noPan=!1,e.staticMoving=!0,e.dynamicDampingFactor=.3,e.keys=[65,83,68],e}function l(t,n){var e=void 0!==n?n:new a.Qb(-10,30,40),s=new a.Eb(16777215);s.position.copy(e),s.shadow.mapSize.width=2048,s.shadow.mapSize.height=2048,s.shadow.camera.fov=15,s.castShadow=!0,s.decay=2,s.penumbra=.05,s.name="spotLight",t.add(s);var o=new a.b(3421236);o.name="ambientLight",t.add(o)}function u(t){var n=new a.jb(60,20,120,120),e=new a.W({color:16777215}),s=new a.T(n,e);return s.receiveShadow=!0,s.rotation.x=-.5*Math.PI,s.position.x=15,s.position.y=0,s.position.z=0,t.add(s),s}function v(t,n){var e=t.children;e&&e.length>0?e.forEach((function(t){v(t,n)})):t instanceof a.T&&(t.material instanceof Array?t.material.forEach((function(t){t.color=new a.n(n(Math.random()).hex()),0===t.name.indexOf("building")&&(t.emissive=new a.n(4473924),t.transparent=!0,t.opacity=.8)})):(t.material.color=new a.n(n(Math.random()).hex()),0==t.material.name.indexOf("building")&&(t.material.emissive=new a.n(4473924),t.material.transparent=!0,t.material.opacity=.8)))}function _(t){var n=new a.Kb,e=new a.W({map:n.load("/daodao-knowledge/textures/earth/Earth.png"),normalMap:n.load("/daodao-knowledge/textures/earth/EarthNormal.png"),specularMap:n.load("/daodao-knowledge/textures/earth/EarthSpec.png"),specular:new a.n(4474026),normalScale:new a.Pb(6,6),shininess:.5}),s=new a.T(new a.Cb(15,40,40),e);t.add(s);var o=new a.eb;return l(o),t.add(o),{earth:s,pivot:o}}},351:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var s=e(338);const a={type:"change"},o={type:"start"},r={type:"end"};class p extends s.s{constructor(t,n){super(),void 0===n&&console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'),n===document&&console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');const e=this,p=-1,c=0,i=1,l=2,u=3,v=4;this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:s.P.ROTATE,MIDDLE:s.P.DOLLY,RIGHT:s.P.PAN},this.target=new s.Qb;const _=new s.Qb;let d=1,m=p,b=p,k=0,h=0,f=0;const w=new s.Qb,y=new s.Pb,g=new s.Pb,E=new s.Qb,C=new s.Pb,j=new s.Pb,x=new s.Pb,S=new s.Pb,M=[],P={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const t=e.domElement.getBoundingClientRect(),n=e.domElement.ownerDocument.documentElement;e.screen.left=t.left+window.pageXOffset-n.clientLeft,e.screen.top=t.top+window.pageYOffset-n.clientTop,e.screen.width=t.width,e.screen.height=t.height};const L=function(){const t=new s.Pb;return function(n,s){return t.set((n-e.screen.left)/e.screen.width,(s-e.screen.top)/e.screen.height),t}}(),T=function(){const t=new s.Pb;return function(n,s){return t.set((n-.5*e.screen.width-e.screen.left)/(.5*e.screen.width),(e.screen.height+2*(e.screen.top-s))/e.screen.width),t}}();function R(t){!1!==e.enabled&&(0===M.length&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",z),e.domElement.addEventListener("pointerup",D)),function(t){M.push(t)}(t),"touch"===t.pointerType?function(t){switch(Q(t),M.length){case 1:m=u,g.copy(T(M[0].pageX,M[0].pageY)),y.copy(g);break;default:m=v;const t=M[0].pageX-M[1].pageX,n=M[0].pageY-M[1].pageY;h=k=Math.sqrt(t*t+n*n);const e=(M[0].pageX+M[1].pageX)/2,s=(M[0].pageY+M[1].pageY)/2;x.copy(L(e,s)),S.copy(x)}e.dispatchEvent(o)}(t):function(t){if(m===p)switch(t.button){case e.mouseButtons.LEFT:m=c;break;case e.mouseButtons.MIDDLE:m=i;break;case e.mouseButtons.RIGHT:m=l;break;default:m=p}const n=b!==p?b:m;n!==c||e.noRotate?n!==i||e.noZoom?n!==l||e.noPan||(x.copy(L(t.pageX,t.pageY)),S.copy(x)):(C.copy(L(t.pageX,t.pageY)),j.copy(C)):(g.copy(T(t.pageX,t.pageY)),y.copy(g));e.dispatchEvent(o)}(t))}function z(t){!1!==e.enabled&&("touch"===t.pointerType?function(t){switch(Q(t),M.length){case 1:y.copy(g),g.copy(T(t.pageX,t.pageY));break;default:const n=function(t){const n=t.pointerId===M[0].pointerId?M[1]:M[0];return P[n.pointerId]}(t),e=t.pageX-n.x,s=t.pageY-n.y;h=Math.sqrt(e*e+s*s);const a=(t.pageX+n.x)/2,o=(t.pageY+n.y)/2;S.copy(L(a,o))}}(t):function(t){const n=b!==p?b:m;n!==c||e.noRotate?n!==i||e.noZoom?n!==l||e.noPan||S.copy(L(t.pageX,t.pageY)):j.copy(L(t.pageX,t.pageY)):(y.copy(g),g.copy(T(t.pageX,t.pageY)))}(t))}function D(t){!1!==e.enabled&&("touch"===t.pointerType?function(t){switch(M.length){case 0:m=p;break;case 1:m=u,g.copy(T(t.pageX,t.pageY)),y.copy(g);break;case 2:m=v,g.copy(T(t.pageX-y.pageX,t.pageY-y.pageY)),y.copy(g)}e.dispatchEvent(r)}(t):(m=p,e.dispatchEvent(r)),H(t),0===M.length&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",z),e.domElement.removeEventListener("pointerup",D)))}function Y(t){H(t)}function X(t){!1!==e.enabled&&(window.removeEventListener("keydown",X),b===p&&(t.code!==e.keys[c]||e.noRotate?t.code!==e.keys[i]||e.noZoom?t.code!==e.keys[l]||e.noPan||(b=l):b=i:b=c))}function A(){!1!==e.enabled&&(b=p,window.addEventListener("keydown",X))}function I(t){if(!1!==e.enabled&&!0!==e.noZoom){switch(t.preventDefault(),t.deltaMode){case 2:C.y-=.025*t.deltaY;break;case 1:C.y-=.01*t.deltaY;break;default:C.y-=25e-5*t.deltaY}e.dispatchEvent(o),e.dispatchEvent(r)}}function O(t){!1!==e.enabled&&t.preventDefault()}function H(t){delete P[t.pointerId];for(let n=0;n<M.length;n++)if(M[n].pointerId==t.pointerId)return void M.splice(n,1)}function Q(t){let n=P[t.pointerId];void 0===n&&(n=new s.Pb,P[t.pointerId]=n),n.set(t.pageX,t.pageY)}this.rotateCamera=function(){const t=new s.Qb,n=new s.pb,a=new s.Qb,o=new s.Qb,r=new s.Qb,p=new s.Qb;return function(){p.set(g.x-y.x,g.y-y.y,0);let s=p.length();s?(w.copy(e.object.position).sub(e.target),a.copy(w).normalize(),o.copy(e.object.up).normalize(),r.crossVectors(o,a).normalize(),o.setLength(g.y-y.y),r.setLength(g.x-y.x),p.copy(o.add(r)),t.crossVectors(p,w).normalize(),s*=e.rotateSpeed,n.setFromAxisAngle(t,s),w.applyQuaternion(n),e.object.up.applyQuaternion(n),E.copy(t),f=s):!e.staticMoving&&f&&(f*=Math.sqrt(1-e.dynamicDampingFactor),w.copy(e.object.position).sub(e.target),n.setFromAxisAngle(E,f),w.applyQuaternion(n),e.object.up.applyQuaternion(n)),y.copy(g)}}(),this.zoomCamera=function(){let t;m===v?(t=k/h,k=h,e.object.isPerspectiveCamera?w.multiplyScalar(t):e.object.isOrthographicCamera?(e.object.zoom*=t,e.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(j.y-C.y)*e.zoomSpeed,1!==t&&t>0&&(e.object.isPerspectiveCamera?w.multiplyScalar(t):e.object.isOrthographicCamera?(e.object.zoom/=t,e.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),e.staticMoving?C.copy(j):C.y+=(j.y-C.y)*this.dynamicDampingFactor)},this.panCamera=function(){const t=new s.Pb,n=new s.Qb,a=new s.Qb;return function(){if(t.copy(S).sub(x),t.lengthSq()){if(e.object.isOrthographicCamera){const n=(e.object.right-e.object.left)/e.object.zoom/e.domElement.clientWidth,s=(e.object.top-e.object.bottom)/e.object.zoom/e.domElement.clientWidth;t.x*=n,t.y*=s}t.multiplyScalar(w.length()*e.panSpeed),a.copy(w).cross(e.object.up).setLength(t.x),a.add(n.copy(e.object.up).setLength(t.y)),e.object.position.add(a),e.target.add(a),e.staticMoving?x.copy(S):x.add(t.subVectors(S,x).multiplyScalar(e.dynamicDampingFactor))}}}(),this.checkDistances=function(){e.noZoom&&e.noPan||(w.lengthSq()>e.maxDistance*e.maxDistance&&(e.object.position.addVectors(e.target,w.setLength(e.maxDistance)),C.copy(j)),w.lengthSq()<e.minDistance*e.minDistance&&(e.object.position.addVectors(e.target,w.setLength(e.minDistance)),C.copy(j)))},this.update=function(){w.subVectors(e.object.position,e.target),e.noRotate||e.rotateCamera(),e.noZoom||e.zoomCamera(),e.noPan||e.panCamera(),e.object.position.addVectors(e.target,w),e.object.isPerspectiveCamera?(e.checkDistances(),e.object.lookAt(e.target),_.distanceToSquared(e.object.position)>1e-6&&(e.dispatchEvent(a),_.copy(e.object.position))):e.object.isOrthographicCamera?(e.object.lookAt(e.target),(_.distanceToSquared(e.object.position)>1e-6||d!==e.object.zoom)&&(e.dispatchEvent(a),_.copy(e.object.position),d=e.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){m=p,b=p,e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.up.copy(e.up0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),w.subVectors(e.object.position,e.target),e.object.lookAt(e.target),e.dispatchEvent(a),_.copy(e.object.position),d=e.object.zoom},this.dispose=function(){e.domElement.removeEventListener("contextmenu",O),e.domElement.removeEventListener("pointerdown",R),e.domElement.removeEventListener("pointercancel",Y),e.domElement.removeEventListener("wheel",I),e.domElement.removeEventListener("pointermove",z),e.domElement.removeEventListener("pointerup",D),window.removeEventListener("keydown",X),window.removeEventListener("keyup",A)},this.domElement.addEventListener("contextmenu",O),this.domElement.addEventListener("pointerdown",R),this.domElement.addEventListener("pointercancel",Y),this.domElement.addEventListener("wheel",I,{passive:!1}),window.addEventListener("keydown",X),window.addEventListener("keyup",A),this.handleResize(),this.update()}}},390:function(t,n,e){},443:function(t,n,e){"use strict";e(390)},476:function(t,n,e){"use strict";e.r(n);var s=e(338),a=e(340),o=e(344),r={data:function(){return{gui:null}},mounted:function(){this.init()},beforeDestroy:function(){this.gui&&this.gui.destroy()},methods:{init:function(){var t=document.getElementById("three1"),n=Object(o.f)(0,t),e=Object(o.e)(t),r=Object(o.c)(t),p=new s.vb;t.addEventListener("mousedown",(function(t){var n=E.intersectObjects([_,b,l]);n.length>0&&(n[0].object.material.transparent=!0,n[0].object.material.opacity=.1)}),!1),t.addEventListener("mousemove",(function(n){if(E.setFromCamera(C,r),C.x=n.offsetX/t.clientWidth*2-1,C.y=-n.offsetY/t.clientHeight*2+1,f.showRay){var e=E.intersectObjects([_,b,l]);if(e.length>0){var a=[];a.push(new s.Qb(-30,39.8,30)),a.push(e[0].point);var o=new s.U({color:16711680,transparent:!0,opacity:.6}),c=new s.Nb(new s.k(a),60,.001);y&&p.remove(y),f.showRay&&(y=new s.T(c,o),p.add(y))}}}),!1),Object(o.d)(p),Object(o.b)(p).position.y=0;var c=new s.g(4,4,4),i=new s.Y({color:16711680}),l=new s.T(c,i);l.castShadow=!0,l.position.x=-10,l.position.y=4,l.position.z=0,p.add(l);var u=new s.Cb(4,20,20),v=new s.Y({color:7829503}),_=new s.T(u,v);_.position.x=20,_.position.y=0,_.position.z=2,p.add(_);var d=new s.p(2,2,20),m=new s.Y({color:7864183}),b=new s.T(d,m);b.castShadow=!0,b.position.set(0,0,1),p.add(b),r.position.x=-30,r.position.y=40,r.position.z=30,r.lookAt(p.position);var k=new s.b(3487029);p.add(k);var h=0,f=new function(){this.rotationSpeed=.02,this.bouncingSpeed=.03,this.scalingSpeed=.03,this.showRay=!1},w=new a.a({},t);w.add(f,"rotationSpeed",0,.5),w.add(f,"bouncingSpeed",0,.5),w.add(f,"scalingSpeed",0,.5),w.add(f,"showRay").onChange((function(t){y&&p.remove(y)})),this.gui=w,function t(){n.update(),l.rotation.x+=f.rotationSpeed,l.rotation.y+=f.rotationSpeed,l.rotation.z+=f.rotationSpeed,h+=f.bouncingSpeed,_.position.x=20+10*Math.cos(h),_.position.y=2+10*Math.abs(Math.sin(h)),g+=f.scalingSpeed;var s=Math.abs(Math.sin(g/4)),a=Math.abs(Math.cos(g/5)),o=Math.abs(Math.sin(g/7));b.scale.set(s,a,o),requestAnimationFrame(t),e.render(p,r)}();h=0;var y,g=0;var E=new s.tb,C=new s.Pb}}},p=(e(443),e(56)),c=Object(p.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("尽管跟动画没有直接的联系，但是再这里讨论一下对象的选择也对学习动画有帮助，这里展示一下如何使用鼠标在场景中选择一个对象。")]),t._v(" "),e("p",[t._v("在看示例之前，先看一下代码：")]),t._v(" "),e("h2",{attrs:{id:"光线投射raycaster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#光线投射raycaster"}},[t._v("#")]),t._v(" 光线投射"),e("code",[t._v("Raycaster")]),t._v(":")]),t._v(" "),e("p",[t._v("这个类用于进行光线投射。光线投射用于进行鼠标拾取（在三维空间中计算出鼠标移过了什么物体）。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" raycaster "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Raycaster")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mouse "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMouseMove")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将鼠标位置归一化为设备坐标。x和y方向的取值范围是( -1 to +1)")]),t._v("\n  mouse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  mouse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过摄像机和鼠标位置更新射线")]),t._v("\n  raycaster"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFormCamera")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mouse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//计算物体和射线的焦点")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" intersects "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" raycaster"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("intersectObjects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" intersects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    intersects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff0000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  renderer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousemove'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("onMouseMove"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br")])]),[e("div",{attrs:{id:"three1"}})],t._v(" "),e("p",[t._v("因为本例的"),e("code",[t._v("three.js")]),t._v("渲染的容器不是整个屏幕，所以代码作了些许调整")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" raycaster "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Raycaster")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mouse "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" domEl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'three'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMouseMove")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将鼠标位置归一化为设备坐标。x和y方向的取值范围是( -1 to +1), domEl为渲染容器的dom")]),t._v("\n  mouse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetX "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" domEl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  mouse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetY "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" domEl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过摄像机和鼠标位置更新射线")]),t._v("\n  raycaster"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFormCamera")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mouse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//计算物体和射线的焦点")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" intersects "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" raycaster"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("intersectObjects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" intersects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    intersects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff0000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  renderer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousemove'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("onMouseMove"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br")])])],2)}),[],!1,null,"5ff4bf66",null);n.default=c.exports}}]);