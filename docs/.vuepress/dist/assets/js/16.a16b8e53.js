(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{240:function(t,e,n){"use strict";var a=function(){var t=0,e=document.createElement("div");function n(t){return e.appendChild(t.dom),t}function s(n){for(var a=0;a<e.children.length;a++)e.children[a].style.display=a===n?"block":"none";t=n}e.style.cssText="position:absolute;top:0;left:0;cursor:pointer;opacity:0.9;z-index:19",e.addEventListener("click",(function(n){n.preventDefault(),s(++t%e.children.length)}),!1);var o=(performance||Date).now(),i=o,r=0,c=n(new a.Panel("FPS","#0ff","#002")),l=n(new a.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=n(new a.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:e,addPanel:n,showPanel:s,begin:function(){o=(performance||Date).now()},end:function(){r++;var t=(performance||Date).now();if(l.update(t-o,200),t>=i+1e3&&(c.update(1e3*r/(t-i),100),i=t,r=0,p)){var e=performance.memory;p.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t},update:function(){o=this.end()},domElement:e,setMode:s}};a.Panel=function(t,e,n){var a=1/0,s=0,o=Math.round,i=o(window.devicePixelRatio||1),r=80*i,c=48*i,l=3*i,p=2*i,v=3*i,d=15*i,h=74*i,u=30*i,m=document.createElement("canvas");m.width=r,m.height=c,m.style.cssText="width:80px;height:48px";var _=m.getContext("2d");return _.font="bold "+9*i+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=n,_.fillRect(0,0,r,c),_.fillStyle=e,_.fillText(t,l,p),_.fillRect(v,d,h,u),_.fillStyle=n,_.globalAlpha=.9,_.fillRect(v,d,h,u),{dom:m,update:function(c,f){a=Math.min(a,c),s=Math.max(s,c),_.fillStyle=n,_.globalAlpha=1,_.fillRect(0,0,r,d),_.fillStyle=e,_.fillText(o(c)+" "+t+" ("+o(a)+"-"+o(s)+")",l,p),_.drawImage(m,v+i,d,h-i,u,v,d,h-i,u),_.fillRect(v+h-i,d,i,u),_.fillStyle=n,_.globalAlpha=.9,_.fillRect(v+h-i,d,i,o((1-c/f)*u))}}},e.a=a},242:function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return v})),n.d(e,"h",(function(){return d})),n.d(e,"a",(function(){return h}));var a=n(240),s=n(239),o=n(243);function i(t,e){var n=void 0!==t&&t&&!isNaN(t)?parseInt(t):0,s=new a.a;return s.showPanel(n),e.appendChild(s.dom),s}function r(t,e){var n=void 0!==e&&e?e:{},a=new s.Wb(n);return a.shadowMap.enabled=!0,a.shadowMapSoft=!0,a.shadowMap.type=s.jb,a.setClearColor(new s.p(0)),a.setSize(t.clientWidth,t.clientHeight),a.shadowMap.enabled=!0,t.appendChild(a.domElement),a}function c(t,e){var n=void 0!==e?e:new s.Tb(-30,40,30),a=new s.kb(45,t.clientWidth/t.clientHeight,.1,1e3);return a.position.set(n.x,n.y,n.z),a.lookAt(new s.Tb(0,0,0)),a}function l(t,e){var n=new o.a(t,e.domElement);return n.rotateSpeed=1,n.zoomSpeed=1.2,n.panSpeed=.8,n.noZoom=!1,n.noPan=!1,n.staticMoving=!0,n.dynamicDampingFactor=.3,n.keys=[65,83,68],n}function p(t,e){var n=void 0!==e?e:new s.Tb(-10,30,40),a=new s.Hb(16777215);a.position.copy(n),a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,a.shadow.camera.fov=15,a.castShadow=!0,a.decay=2,a.penumbra=.05,a.name="spotLight",t.add(a);var o=new s.b(3421236);o.name="ambientLight",t.add(o)}function v(t){var e=new s.mb(60,20,120,120),n=new s.Z({color:16777215}),a=new s.W(e,n);return a.receiveShadow=!0,a.rotation.x=-.5*Math.PI,a.position.x=15,a.position.y=0,a.position.z=0,t.add(a),a}function d(t,e){var n=t.children;n&&n.length>0?n.forEach((function(t){d(t,e)})):t instanceof s.W&&(t.material instanceof Array?t.material.forEach((function(t){t.color=new s.p(e(Math.random()).hex()),0===t.name.indexOf("building")&&(t.emissive=new s.p(4473924),t.transparent=!0,t.opacity=.8)})):(t.material.color=new s.p(e(Math.random()).hex()),0==t.material.name.indexOf("building")&&(t.material.emissive=new s.p(4473924),t.material.transparent=!0,t.material.opacity=.8)))}function h(t){var e=new s.Nb,n=new s.Z({map:e.load("/daodao-knowledge/textures/earth/Earth.png"),normalMap:e.load("/daodao-knowledge/textures/earth/EarthNormal.png"),specularMap:e.load("/daodao-knowledge/textures/earth/EarthSpec.png"),specular:new s.p(4474026),normalScale:new s.Sb(6,6),shininess:.5}),a=new s.W(new s.Fb(15,40,40),n);t.add(a);var o=new s.hb;return p(o),t.add(o),{earth:a,pivot:o}}},282:function(t,e,n){},334:function(t,e,n){"use strict";n(282)},362:function(t,e,n){"use strict";n.r(e);var a=n(239);const s=new a.Tb,o=new a.Gb,i=new a.Tb;class r{constructor(t,e){void 0===e&&(console.warn('THREE.FirstPersonControls: The second parameter "domElement" is now mandatory.'),e=document),this.object=t,this.domElement=e,this.enabled=!0,this.movementSpeed=1,this.lookSpeed=.005,this.lookVertical=!0,this.autoForward=!1,this.activeLook=!0,this.heightSpeed=!1,this.heightCoef=1,this.heightMin=0,this.heightMax=1,this.constrainVertical=!1,this.verticalMin=0,this.verticalMax=Math.PI,this.mouseDragOn=!1,this.autoSpeedFactor=0,this.mouseX=0,this.mouseY=0,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.viewHalfX=0,this.viewHalfY=0;let n=0,r=0;this.handleResize=function(){this.domElement===document?(this.viewHalfX=window.innerWidth/2,this.viewHalfY=window.innerHeight/2):(this.viewHalfX=this.domElement.offsetWidth/2,this.viewHalfY=this.domElement.offsetHeight/2)},this.onMouseDown=function(t){if(this.domElement!==document&&this.domElement.focus(),this.activeLook)switch(t.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0}this.mouseDragOn=!0},this.onMouseUp=function(t){if(this.activeLook)switch(t.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1}this.mouseDragOn=!1},this.onMouseMove=function(t){this.domElement===document?(this.mouseX=t.pageX-this.viewHalfX,this.mouseY=t.pageY-this.viewHalfY):(this.mouseX=t.pageX-this.domElement.offsetLeft-this.viewHalfX,this.mouseY=t.pageY-this.domElement.offsetTop-this.viewHalfY)},this.onKeyDown=function(t){switch(t.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"KeyR":this.moveUp=!0;break;case"KeyF":this.moveDown=!0}},this.onKeyUp=function(t){switch(t.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"KeyR":this.moveUp=!1;break;case"KeyF":this.moveDown=!1}},this.lookAt=function(t,e,n){return t.isVector3?i.copy(t):i.set(t,e,n),this.object.lookAt(i),u(this),this},this.update=function(){const t=new a.Tb;return function(e){if(!1===this.enabled)return;if(this.heightSpeed){const t=a.U.clamp(this.object.position.y,this.heightMin,this.heightMax)-this.heightMin;this.autoSpeedFactor=e*(t*this.heightCoef)}else this.autoSpeedFactor=0;const s=e*this.movementSpeed;(this.moveForward||this.autoForward&&!this.moveBackward)&&this.object.translateZ(-(s+this.autoSpeedFactor)),this.moveBackward&&this.object.translateZ(s),this.moveLeft&&this.object.translateX(-s),this.moveRight&&this.object.translateX(s),this.moveUp&&this.object.translateY(s),this.moveDown&&this.object.translateY(-s);let o=e*this.lookSpeed;this.activeLook||(o=0);let i=1;this.constrainVertical&&(i=Math.PI/(this.verticalMax-this.verticalMin)),r-=this.mouseX*o,this.lookVertical&&(n-=this.mouseY*o*i),n=Math.max(-85,Math.min(85,n));let c=a.U.degToRad(90-n);const l=a.U.degToRad(r);this.constrainVertical&&(c=a.U.mapLinear(c,0,Math.PI,this.verticalMin,this.verticalMax));const p=this.object.position;t.setFromSphericalCoords(1,c,l).add(p),this.object.lookAt(t)}}(),this.dispose=function(){this.domElement.removeEventListener("contextmenu",c),this.domElement.removeEventListener("mousedown",p),this.domElement.removeEventListener("mousemove",l),this.domElement.removeEventListener("mouseup",v),window.removeEventListener("keydown",d),window.removeEventListener("keyup",h)};const l=this.onMouseMove.bind(this),p=this.onMouseDown.bind(this),v=this.onMouseUp.bind(this),d=this.onKeyDown.bind(this),h=this.onKeyUp.bind(this);function u(t){const e=t.object.quaternion;s.set(0,0,-1).applyQuaternion(e),o.setFromVector3(s),n=90-a.U.radToDeg(o.phi),r=a.U.radToDeg(o.theta)}this.domElement.addEventListener("contextmenu",c),this.domElement.addEventListener("mousemove",l),this.domElement.addEventListener("mousedown",p),this.domElement.addEventListener("mouseup",v),window.addEventListener("keydown",d),window.addEventListener("keyup",h),this.handleResize(),u(this)}}function c(t){t.preventDefault()}n(244);var l=n(246),p=n(247),v=n.n(p),d=n(242),h={data:()=>({}),mounted(){this.init()},beforeDestroy(){},methods:{init(){var t=document.getElementById("three1"),e=Object(d.f)(0,t),n=Object(d.e)(t),s=Object(d.c)(t),o=new a.yb,i=new a.o;Object(d.d)(o);var c=new r(s,n.domElement);c.lookSpeed=.02,c.movementSpeed=20,c.lookVertical=!0,c.constrainVertical=!0,c.verticalMin=1,c.verticalMax=2,c.lon=-150,c.lat=120,(new l.a).load("/daodao-knowledge/models/city.obj",(function(t){var e=v.a.scale(["red","green","blue"]);Object(d.h)(t,e);var n=t;o.add(n)})),function t(){e.update(),c.update(i.getDelta()),requestAnimationFrame(t),n.render(o,s)}()}}},u=(n(334),n(14)),m=Object(u.a)(h,(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("顾名思义，通过"),e("code",[t._v("FristPersonControls")]),t._v("你可以像第一人称设计游戏中的枪手一样控制相机。用鼠标控制视角，用键盘来移动角色。")]),t._v(" "),[e("div",{attrs:{id:"three1"}})],t._v(" "),e("p",[t._v("该控件的创建跟我们之前看到的空间一样，在展示的示例中，我们使用如下的配置：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fpControls "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FirstPersonControls")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("renderer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfpControls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lookSpeed "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.02")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfpControls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("movementSpeed "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfpControls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lookVertical "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfpControls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constrainVertical "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfpControls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("verticalMin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfpControls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("verticalMax "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfpControls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lon "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfpControls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lat "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[t._v("使用该控件是，只有最后两个属性（lon 和 lat ）需要小心对待。这两个属性定义的是场景初次渲染时相机指向的位置。")]),t._v(" "),e("p",[t._v("该控件的控制方法非常直白：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("操控")]),t._v(" "),e("th",[t._v("动作")]),t._v(" "),e("th",[t._v("操控")]),t._v(" "),e("th",[t._v("动作")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("移动鼠标")]),t._v(" "),e("td",[t._v("往四周看")]),t._v(" "),e("td",[t._v("D")]),t._v(" "),e("td",[t._v("右移")])]),t._v(" "),e("tr",[e("td",[t._v("上下左右房间小")]),t._v(" "),e("td",[t._v("前后左右移动")]),t._v(" "),e("td",[t._v("R")]),t._v(" "),e("td",[t._v("上移")])]),t._v(" "),e("tr",[e("td",[t._v("w")]),t._v(" "),e("td",[t._v("前移")]),t._v(" "),e("td",[t._v("F")]),t._v(" "),e("td",[t._v("下移")])]),t._v(" "),e("tr",[e("td",[t._v("A")]),t._v(" "),e("td",[t._v("左移")]),t._v(" "),e("td",[t._v("Q")]),t._v(" "),e("td",[t._v("停止")])]),t._v(" "),e("tr",[e("td",[t._v("S")]),t._v(" "),e("td",[t._v("后移")]),t._v(" "),e("td"),t._v(" "),e("td")])])])],2)}),[],!1,null,"7ff9beea",null);e.default=m.exports}}]);