(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{341:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(325);const s={type:"change"},r={type:"start"},a={type:"end"};class o extends i.u{constructor(e,t){super(),void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new i.Tb,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:i.S.ROTATE,MIDDLE:i.S.DOLLY,RIGHT:i.S.PAN},this.touches={ONE:i.Kb.ROTATE,TWO:i.Kb.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",Q),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(s),n.update(),c=o.NONE},this.update=function(){const t=new i.Tb,r=(new i.sb).setFromUnitVectors(e.up,new i.Tb(0,1,0)),a=r.clone().invert(),p=new i.Tb,b=new i.sb,g=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(r),h.setFromVector3(t),n.autoRotate&&c===o.NONE&&O(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(h.theta+=u.theta*n.dampingFactor,h.phi+=u.phi*n.dampingFactor):(h.theta+=u.theta,h.phi+=u.phi);let i=n.minAzimuthAngle,v=n.maxAzimuthAngle;return isFinite(i)&&isFinite(v)&&(i<-Math.PI?i+=g:i>Math.PI&&(i-=g),v<-Math.PI?v+=g:v>Math.PI&&(v-=g),h.theta=i<=v?Math.max(i,Math.min(v,h.theta)):h.theta>(i+v)/2?Math.max(i,h.theta):Math.min(v,h.theta)),h.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,h.phi)),h.makeSafe(),h.radius*=d,h.radius=Math.max(n.minDistance,Math.min(n.maxDistance,h.radius)),!0===n.enableDamping?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),t.setFromSpherical(h),t.applyQuaternion(a),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),f.set(0,0,0)),d=1,!!(m||p.distanceToSquared(n.object.position)>l||8*(1-b.dot(n.object.quaternion))>l)&&(n.dispatchEvent(s),p.copy(n.object.position),b.copy(n.object.quaternion),m=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",H),n.domElement.removeEventListener("pointercancel",X),n.domElement.removeEventListener("wheel",Z),n.domElement.removeEventListener("pointermove",B),n.domElement.removeEventListener("pointerup",K),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",Q)};const n=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=o.NONE;const l=1e-6,h=new i.Gb,u=new i.Gb;let d=1;const f=new i.Tb;let m=!1;const p=new i.Sb,b=new i.Sb,g=new i.Sb,v=new i.Sb,E=new i.Sb,T=new i.Sb,w=new i.Sb,y=new i.Sb,S=new i.Sb,x=[],R={};function P(){return Math.pow(.95,n.zoomSpeed)}function O(e){u.theta-=e}function C(e){u.phi-=e}const _=function(){const e=new i.Tb;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),f.add(e)}}(),A=function(){const e=new i.Tb;return function(t,i){!0===n.screenSpacePanning?e.setFromMatrixColumn(i,1):(e.setFromMatrixColumn(i,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),f.add(e)}}(),L=function(){const e=new i.Tb;return function(t,i){const s=n.domElement;if(n.object.isPerspectiveCamera){const r=n.object.position;e.copy(r).sub(n.target);let a=e.length();a*=Math.tan(n.object.fov/2*Math.PI/180),_(2*t*a/s.clientHeight,n.object.matrix),A(2*i*a/s.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(_(t*(n.object.right-n.object.left)/n.object.zoom/s.clientWidth,n.object.matrix),A(i*(n.object.top-n.object.bottom)/n.object.zoom/s.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(e){n.object.isPerspectiveCamera?d/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(e){n.object.isPerspectiveCamera?d*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function M(e){p.set(e.clientX,e.clientY)}function N(e){v.set(e.clientX,e.clientY)}function j(){if(1===x.length)p.set(x[0].pageX,x[0].pageY);else{const e=.5*(x[0].pageX+x[1].pageX),t=.5*(x[0].pageY+x[1].pageY);p.set(e,t)}}function I(){if(1===x.length)v.set(x[0].pageX,x[0].pageY);else{const e=.5*(x[0].pageX+x[1].pageX),t=.5*(x[0].pageY+x[1].pageY);v.set(e,t)}}function Y(){const e=x[0].pageX-x[1].pageX,t=x[0].pageY-x[1].pageY,n=Math.sqrt(e*e+t*t);w.set(0,n)}function z(e){if(1==x.length)b.set(e.pageX,e.pageY);else{const t=q(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);b.set(n,i)}g.subVectors(b,p).multiplyScalar(n.rotateSpeed);const t=n.domElement;O(2*Math.PI*g.x/t.clientHeight),C(2*Math.PI*g.y/t.clientHeight),p.copy(b)}function U(e){if(1===x.length)E.set(e.pageX,e.pageY);else{const t=q(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);E.set(n,i)}T.subVectors(E,v).multiplyScalar(n.panSpeed),L(T.x,T.y),v.copy(E)}function F(e){const t=q(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);y.set(0,r),S.set(0,Math.pow(y.y/w.y,n.zoomSpeed)),k(S.y),w.copy(y)}function H(e){!1!==n.enabled&&(0===x.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",B),n.domElement.addEventListener("pointerup",K)),function(e){x.push(e)}(e),"touch"===e.pointerType?function(e){switch(W(e),x.length){case 1:switch(n.touches.ONE){case i.Kb.ROTATE:if(!1===n.enableRotate)return;j(),c=o.TOUCH_ROTATE;break;case i.Kb.PAN:if(!1===n.enablePan)return;I(),c=o.TOUCH_PAN;break;default:c=o.NONE}break;case 2:switch(n.touches.TWO){case i.Kb.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&Y(),n.enablePan&&I(),c=o.TOUCH_DOLLY_PAN;break;case i.Kb.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&Y(),n.enableRotate&&j(),c=o.TOUCH_DOLLY_ROTATE;break;default:c=o.NONE}break;default:c=o.NONE}c!==o.NONE&&n.dispatchEvent(r)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case i.S.DOLLY:if(!1===n.enableZoom)return;!function(e){w.set(e.clientX,e.clientY)}(e),c=o.DOLLY;break;case i.S.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;N(e),c=o.PAN}else{if(!1===n.enableRotate)return;M(e),c=o.ROTATE}break;case i.S.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;M(e),c=o.ROTATE}else{if(!1===n.enablePan)return;N(e),c=o.PAN}break;default:c=o.NONE}c!==o.NONE&&n.dispatchEvent(r)}(e))}function B(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(W(e),c){case o.TOUCH_ROTATE:if(!1===n.enableRotate)return;z(e),n.update();break;case o.TOUCH_PAN:if(!1===n.enablePan)return;U(e),n.update();break;case o.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&F(e),n.enablePan&&U(e)}(e),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&F(e),n.enableRotate&&z(e)}(e),n.update();break;default:c=o.NONE}}(e):function(e){if(!1===n.enabled)return;switch(c){case o.ROTATE:if(!1===n.enableRotate)return;!function(e){b.set(e.clientX,e.clientY),g.subVectors(b,p).multiplyScalar(n.rotateSpeed);const t=n.domElement;O(2*Math.PI*g.x/t.clientHeight),C(2*Math.PI*g.y/t.clientHeight),p.copy(b),n.update()}(e);break;case o.DOLLY:if(!1===n.enableZoom)return;!function(e){y.set(e.clientX,e.clientY),S.subVectors(y,w),S.y>0?k(P()):S.y<0&&D(P()),w.copy(y),n.update()}(e);break;case o.PAN:if(!1===n.enablePan)return;!function(e){E.set(e.clientX,e.clientY),T.subVectors(E,v).multiplyScalar(n.panSpeed),L(T.x,T.y),v.copy(E),n.update()}(e)}}(e))}function K(e){!1!==n.enabled&&(e.pointerType,n.dispatchEvent(a),c=o.NONE,G(e),0===x.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",B),n.domElement.removeEventListener("pointerup",K)))}function X(e){G(e)}function Z(e){!1===n.enabled||!1===n.enableZoom||c!==o.NONE&&c!==o.ROTATE||(e.preventDefault(),n.dispatchEvent(r),function(e){e.deltaY<0?D(P()):e.deltaY>0&&k(P()),n.update()}(e),n.dispatchEvent(a))}function Q(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:L(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:L(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:L(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:L(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function V(e){!1!==n.enabled&&e.preventDefault()}function G(e){delete R[e.pointerId];for(let t=0;t<x.length;t++)if(x[t].pointerId==e.pointerId)return void x.splice(t,1)}function W(e){let t=R[e.pointerId];void 0===t&&(t=new i.Sb,R[e.pointerId]=t),t.set(e.pageX,e.pageY)}function q(e){const t=e.pointerId===x[0].pointerId?x[1]:x[0];return R[t.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",H),n.domElement.addEventListener("pointercancel",X),n.domElement.addEventListener("wheel",Z,{passive:!1}),this.update()}}},354:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var i=n(325);class s{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const r=new i.ib(-1,1,1,-1,0,1),a=new i.i;a.setAttribute("position",new i.w([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new i.w([0,2,0,0,2,0],2));class o{constructor(e){this._mesh=new i.W(a,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,r)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},359:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return r}));var i=n(354);class s extends i.b{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;let r,a;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0),this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class r extends i.b{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}},399:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform float opacity;\n\n\t\tuniform sampler2D tDiffuse;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 texel = texture2D( tDiffuse, vUv );\n\t\t\tgl_FragColor = opacity * texel;\n\n\t\t}"}},400:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(325),s=n(354);class r extends s.b{constructor(e,t){super(),this.textureID=void 0!==t?t:"tDiffuse",e instanceof i.zb?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=i.Rb.clone(e.uniforms),this.material=new i.zb({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new s.a(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}},401:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i={uniforms:{tDiffuse:{value:null},time:{value:0},nIntensity:{value:.5},sIntensity:{value:.05},sCount:{value:4096},grayscale:{value:1}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\t#include <common>\n\n\t\t// control parameter\n\t\tuniform float time;\n\n\t\tuniform bool grayscale;\n\n\t\t// noise effect intensity value (0 = no effect, 1 = full effect)\n\t\tuniform float nIntensity;\n\n\t\t// scanlines effect intensity value (0 = no effect, 1 = full effect)\n\t\tuniform float sIntensity;\n\n\t\t// scanlines effect count value (0 = no effect, 4096 = full effect)\n\t\tuniform float sCount;\n\n\t\tuniform sampler2D tDiffuse;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t// sample the source\n\t\t\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\n\n\t\t// make some noise\n\t\t\tfloat dx = rand( vUv + time );\n\n\t\t// add noise\n\t\t\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );\n\n\t\t// get us a sine and cosine\n\t\t\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\n\n\t\t// add scanlines\n\t\t\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\n\n\t\t// interpolate between source and result by intensity\n\t\t\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\n\n\t\t// convert to grayscale if desired\n\t\t\tif( grayscale ) {\n\n\t\t\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\n\n\t\t\t}\n\n\t\t\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\n\n\t\t}"}},462:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(325),s=n(399),r=n(400),a=n(359);class o{constructor(e,t){if(this.renderer=e,void 0===t){const n={minFilter:i.N,magFilter:i.N,format:i.ub},s=e.getSize(new i.Sb);this._pixelRatio=e.getPixelRatio(),this._width=s.width,this._height=s.height,(t=new i.Vb(this._width*this._pixelRatio,this._height*this._pixelRatio,n)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===s.a&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===r.a&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new r.a(s.a),this.clock=new i.o}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let t=0,i=this.passes.length;t<i;t++){const i=this.passes[t];if(!1!==i.enabled){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),i.needsSwap){if(n){const t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==a.b&&(i instanceof a.b?n=!0:i instanceof a.a&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){const t=this.renderer.getSize(new i.Sb);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new i.ib(-1,1,1,-1,0,1);const c=new i.i;c.setAttribute("position",new i.w([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new i.w([0,2,0,0,2,0],2))},463:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(325),s=n(354),r=n(401);class a extends s.b{constructor(e,t,n,a){super(),void 0===r.a&&console.error("THREE.FilmPass relies on FilmShader");const o=r.a;this.uniforms=i.Rb.clone(o.uniforms),this.material=new i.zb({uniforms:this.uniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),void 0!==a&&(this.uniforms.grayscale.value=a),void 0!==e&&(this.uniforms.nIntensity.value=e),void 0!==t&&(this.uniforms.sIntensity.value=t),void 0!==n&&(this.uniforms.sCount.value=n),this.fsQuad=new s.a(this.material)}render(e,t,n,i){this.uniforms.tDiffuse.value=n.texture,this.uniforms.time.value+=i,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}}},464:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(325),s=n(354);class r extends s.b{constructor(e,t,n,s,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=void 0!==r?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new i.p}render(e,t,n){const i=e.autoClear;let s,r;e.autoClear=!1,void 0!==this.overrideMaterial&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=r),e.autoClear=i}}}}]);