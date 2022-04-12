(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{530:function(s,t,a){"use strict";a.r(t);var n=a(47),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("首先我们先随便画一个多边形，为了避免有特殊性，我就画得随意一点：\n"),a("img",{attrs:{src:"https://cdn.JsDelivr.net/gh/Ostask/img-bed//20210220211213113847.png",alt:""}}),a("br"),s._v("\n怎么样，够不够复杂刁钻，然后判断一下P这个点在不在多边形里面，你别告诉我用眼睛看，我打不死你哦。")]),s._v(" "),a("h3",{attrs:{id:"射线法原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#射线法原理"}},[s._v("#")]),s._v(" 射线法原理")]),s._v(" "),a("p",[s._v("那到底要怎么办呢，有种方法叫射线法（别问，这方法不是我想出来的），即从P点引出一条射线，看这条射线和多边形相交的次数。"),a("br"),s._v(" "),a("strong",[s._v("假如P点在多边形外")]),s._v("，那么P点射线和多边形相交情况一定是："),a("br"),s._v("\n穿入 -> ..(中间可能有N次穿入穿出)... ->穿出，即穿入穿出的次数是偶数次，交点是偶数个。"),a("br"),s._v(" "),a("strong",[s._v("假如P点在多边形内")]),s._v("，那么P点射线和多边形相交的情况一定是:\n穿出 -> ...（后面可能有N次穿入穿出）...，总之最后一定是穿出，交点是奇数个。")]),s._v(" "),a("p",[s._v("是不是听不懂，我写得也有点晕乎，接下来看图吧：")]),s._v(" "),a("h3",{attrs:{id:"一般情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般情况"}},[s._v("#")]),s._v(" 一般情况")]),s._v(" "),a("p",[s._v("首先是P点在多边形外："),a("br"),s._v(" "),a("img",{attrs:{src:"https://cdn.JsDelivr.net/gh/Ostask/img-bed//20210220211213131630.png",alt:""}}),s._v("\n要么一个相交点也没有，要么是双数个")]),s._v(" "),a("p",[s._v("然后是P点在多边形内：\n"),a("img",{attrs:{src:"https://cdn.JsDelivr.net/gh/Ostask/img-bed//20210220211213132225.png",alt:""}}),a("br"),s._v("\n相交点总共是1个或者奇数个")]),s._v(" "),a("h3",{attrs:{id:"特殊情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊情况"}},[s._v("#")]),s._v(" 特殊情况")]),s._v(" "),a("p",[s._v("因为所有方向的射线都是一样的，所以为了分析方便，我们使用从P点开始的一条水平线作为射线来分析。\n然而还有特殊情况：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("P点在多边形顶点上"),a("br"),s._v(" "),a("img",{attrs:{src:"https://cdn.JsDelivr.net/gh/Ostask/img-bed//20210220211213134124.png",alt:""}}),a("br"),s._v(" "),a("strong",[s._v("这个还是很好判断，通过对比P的坐标和多边形顶点坐标就可以了")])])]),s._v(" "),a("li",[a("p",[s._v("P点在多边形线段上\n"),a("img",{attrs:{src:"https://cdn.JsDelivr.net/gh/Ostask/img-bed//20210220211213140040.png",alt:""}}),s._v(" "),a("strong",[s._v("可以求P点射出的射线和线段AB的交点，假如交点的坐标等于P点，那么P点就在多边形的线上")])])]),s._v(" "),a("li",[a("p",[s._v("P点和多边形的交点是顶点\n"),a("img",{attrs:{src:"https://cdn.JsDelivr.net/gh/Ostask/img-bed//20210220211213144802.png",alt:""}}),a("br"),s._v("\n实际上明眼很容易看出P点不在多边形内或多边形上，但是交点只有A点一个，这样就不符合射线法的判断标准了。因为我们变通一下，判断一下，P点的射线，和AB，AC线段有没有相交，如果相交次数是偶数，就没有在多边形里，相交次数是奇数，就算在多边形里了。"),a("br"),s._v("\n判断线段有没有和射线P相交，"),a("strong",[s._v("只需要判断线段的两个端点是不是在P点两侧，将A点判定为在射线的上侧，那么现在就可以判定，射线P和AB，AC都相交，相交两次为偶数。")])])]),s._v(" "),a("li",[a("p",[s._v("P点的射线刚好经过多边形的一条边\n"),a("img",{attrs:{src:"https://cdn.JsDelivr.net/gh/Ostask/img-bed//20210220211213151821.png",alt:""}}),a("br"),s._v("\n按照刚刚第三点的解决方案，线段AB的两个顶点都在射线P上侧，所以没有和P相交，射线P和AF,BC线段相交两次为偶数，所以P在多边形外。\n而射线P1，根据第三点的方案，ED两个顶点都在线段上方，所以线段ED没有和P1相交，线段FE，CD也没有和P1相交，相交次数为0，所以P在多边形外。")])]),s._v(" "),a("li",[a("p",[s._v("P点的射线刚好经过多边形一条边，并且P点在这条边上\n"),a("img",{attrs:{src:"https://cdn.JsDelivr.net/gh/Ostask/img-bed//20210220211213152455.png",alt:""}}),a("br"),s._v("\n这种情况按照第四点的解析方法会判定成不相交，所以还需要判定一下，"),a("strong",[s._v("假如E点D点P点y坐标相等，同时P点的x坐标在ED的x坐标中间，就可以判定为第五种特殊情况。")])])])]),s._v(" "),a("h2",{attrs:{id:"代码解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码解析"}},[s._v("#")]),s._v(" 代码解析")]),s._v(" "),a("p",[s._v("原理分析完毕，现在开始撸代码，js版本哦，我只会js了：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n* p :[x,y] ,带判定的P点\n* poly: [[x0,y0],[x1,y1]......] 多边形的路径\n*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rayCasting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" poly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// px，py为p点的x和y坐标")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" px "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        py "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这个for循环是为了遍历多边形的每一个线段")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" poly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" poly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//线段起点x坐标")]),s._v("\n            sy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" poly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//线段起点y坐标")]),s._v("\n            tx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" poly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//线段终点x坐标")]),s._v("\n            ty "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" poly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//线段终点y坐标")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 点与多边形顶点重合")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" px "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" sy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" py"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" px "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ty "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" py"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 点的射线和多边形的一条边重合，并且点在边上")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" ty "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" sy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" py"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" px "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" tx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" px "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" tx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断线段两端点是否在射线两侧")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" py "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ty "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" py"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" py "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ty "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" py"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 求射线和线段的交点x坐标，交点y坐标当然是py")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("py "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" sy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" sx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ty "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" sy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 点在多边形的边上")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x大于px来保证射线是朝右的，往一个方向射，假如射线穿过多边形的边界，flag取反一下")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("flag\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 射线穿过多边形边界的次数为奇数时点在多边形内")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br")])]),a("p",[s._v("其中高亮的第31行理解起来可能有点困难，我们画个图理解一下：\n"),a("img",{attrs:{src:"https://cdn.JsDelivr.net/gh/Ostask/img-bed//20210220211213153942.png",alt:""}}),a("br"),s._v("\n线段AB和射线P相交于C点，已知P、A、B的坐标,求C点坐标。我们已经知道C点的y坐标等于P点的y坐标，所以只要求x坐标就好。"),a("br"),s._v(" "),a("strong",[s._v("C点x坐标 =  B点x坐标 + 线段BD的长度")]),a("br"),s._v("\n而三角形BCD相似于三角形BAE，所以线段"),a("br"),s._v("\nCD ： AE = BD : BE"),a("br"),s._v("\n所以： BD = CD * BE / AE"),a("br"),s._v("\n假设A点坐标是(tx,ty),B点坐标是(sx,sy)\n就等于： BD = (py - sy) * (tx - sx) / (ty - sy)"),a("br"),s._v("\n所以，交点C的x坐标为 sx + (py - sy) * (tx - sx) / (ty - sy)")])])}),[],!1,null,null,null);t.default=r.exports}}]);