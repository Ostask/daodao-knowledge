(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{397:function(_,v,e){"use strict";e.r(v);var t=e(14),l=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("结构化克隆算法是HTML5规范定义的用于复制复杂JavaScript对象的算法。")]),_._v(" "),v("p",[_._v("当通过postMessage()与Workers之间进行数据传输或使用IndexedDB存储对象时，在内部使用它。")]),_._v(" "),v("p",[_._v("它通过递归遍历输入对象而建立一个副本，同时保持先前访问的引用的映射，以避免无限遍历循环。")]),_._v(" "),v("h2",{attrs:{id:"不适用的场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不适用的场景"}},[_._v("#")]),_._v(" 不适用的场景")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("Error")]),_._v("和"),v("code",[_._v("Function")]),_._v("对象不能通过结构化克隆算法复制；尝试这样做将引发"),v("code",[_._v("DATA_CLONE_ERR")]),_._v("异常。")]),_._v(" "),v("li",[_._v("克隆"),v("code",[_._v("DOM")]),_._v("节点会引发"),v("code",[_._v("DATA_CLONE_ERR")]),_._v("异常。")]),_._v(" "),v("li",[_._v("对象的以下参数不会保留：\n"),v("ul",[v("li",[v("code",[_._v("RegExp")]),_._v("对象的"),v("code",[_._v("lastIndex")]),_._v("字段不会保留。")]),_._v(" "),v("li",[_._v("属性描述符，"),v("code",[_._v("setter")]),_._v("和"),v("code",[_._v("getter")]),_._v("(以及类似元数据的功能)不会被复制。例如，如果使用属性描述符将对象标记为只读，则复制后的对象中是可读写(默认配置)。")]),_._v(" "),v("li",[_._v("原型链不会复制。")])])])]),_._v(" "),v("h2",{attrs:{id:"支持的类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#支持的类型"}},[_._v("#")]),_._v(" 支持的类型")]),_._v(" "),v("ul",[v("li",[_._v("除了symbol以外的基本类型")]),_._v(" "),v("li",[_._v("Boolean object")]),_._v(" "),v("li",[_._v("String object")]),_._v(" "),v("li",[_._v("Date")]),_._v(" "),v("li",[_._v("RegExp lastIndex字段不会保留")]),_._v(" "),v("li",[_._v("Blob")]),_._v(" "),v("li",[_._v("File")]),_._v(" "),v("li",[_._v("FileList")]),_._v(" "),v("li",[_._v("ArrayBuffer")]),_._v(" "),v("li",[_._v("ArrayBufferView 所有的arrayBuffer视图，例如Int32Array.")]),_._v(" "),v("li",[_._v("ImageBitmap")]),_._v(" "),v("li",[_._v("ImageData")]),_._v(" "),v("li",[_._v("Array")]),_._v(" "),v("li",[_._v("Object 普通js Object")]),_._v(" "),v("li",[_._v("Map")]),_._v(" "),v("li",[_._v("Set")])])])}),[],!1,null,null,null);v.default=l.exports}}]);