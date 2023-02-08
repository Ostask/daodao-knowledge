(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{401:function(t,e,r){"use strict";r.r(e);var a=r(14),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"问题描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),e("p",[t._v("工作的时候，有个需求是将threejs渲染的画面保存成图片，但是当我用"),e("code",[t._v("renderer.documentElement.toDataUrl")]),t._v("得到的始终是黑色的图片。")]),t._v(" "),e("h2",{attrs:{id:"找寻原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#找寻原因"}},[t._v("#")]),t._v(" 找寻原因")]),t._v(" "),e("p",[t._v("其实这是 webgl 缓冲数据问题，你可以理解为会不停的清空画布然后再往上画下一帧，所以截屏的时候画布被清空了得到的是黑色的。")]),t._v(" "),e("h2",{attrs:{id:"解决问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决问题"}},[t._v("#")]),t._v(" 解决问题")]),t._v(" "),e("p",[t._v("解决问题就很简单了，只需要在截屏的代码前加上"),e("code",[t._v("renderer.render(scene, camera)")]),t._v("，就可以解决问题了")])])}),[],!1,null,null,null);e.default=s.exports}}]);