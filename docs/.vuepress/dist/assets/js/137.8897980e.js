(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{483:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("随着代码行数增多，Bug在所难免，而避免Bug最好的方法就是进行测试。对于库来说，每次改动代码都要进行全面的测试。特别是当要对库代码进行重构时，测试能够降低重构的风险。但是，如果每次都通过人工测试，则既浪费时间又容易出错，更好的做法是编写代码来测试代码，因为代码能够快速多次运行，并且稳定可靠，这种方法被称作单元测试。")]),s._v(" "),t("p",[t("code",[s._v("Mocha")]),s._v("是历史比较悠久的测试框架，其相对比较成熟，并且使用范围广泛，兼容性能够满足我们的要求，所以我们选择"),t("code",[s._v("Mocha")]),s._v("作为测试框架。虽然"),t("code",[s._v("Mocha")]),s._v("推荐使用"),t("code",[s._v("Chai")]),s._v("作为断言库。由于"),t("code",[s._v("Chai")]),s._v("不能够兼容IE8浏览器，因此这里使用另一个断言库"),t("code",[s._v("expect.js")])]),s._v(" "),t("h2",{attrs:{id:"搭建环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建环境"}},[s._v("#")]),s._v(" 搭建环境")]),s._v(" "),t("p",[s._v("首先安装依赖")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm installl mocha --save-dev\nnpm install expect.js --save-dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后新建一个test目录，并在test目录下新建test.js文件。")]),s._v(" "),t("h2",{attrs:{id:"编写代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写代码"}},[s._v("#")]),s._v(" 编写代码")]),s._v(" "),t("p",[s._v("接下来，在"),t("code",[s._v("test.js")]),s._v("文件中添加如下代码。在"),t("code",[s._v("Mocha")]),s._v("中使用"),t("code",[s._v("describe")]),s._v("来组织测试结构，"),t("code",[s._v("describe")]),s._v("可以嵌套，"),t("code",[s._v("describe")]),s._v("的语义也可以自定义。"),t("code",[s._v("it")]),s._v("代表一个测试用例，一个测试用例中可以有多个"),t("code",[s._v("expect")]),s._v("断言。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" expect "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'expect.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("describe")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'单元测试'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("describe")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test hello'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("it")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("to"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("equal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"执行命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行命令"}},[s._v("#")]),s._v(" 执行命令")]),s._v(" "),t("p",[s._v("通过下面的命令执行测试。其中，"),t("code",[s._v("npx")]),s._v("前缀表示寻找当前路径下的"),t("code",[s._v("node_modules")]),s._v("目录下的"),t("code",[s._v("mocha")]),s._v("命令并执行，如果不使用"),t("code",[s._v("npx")]),s._v("，则需要通过路径来引用。下面两行命令的效果是等价的，推荐使用"),t("code",[s._v("npx")]),s._v("方式来执行。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npx mocha\n./node_modules/mocha/bin/mocha\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("将执行命令添加到"),t("code",[s._v("package.json")]),s._v("的"),t("code",[s._v("sripts")]),s._v("字段中，在"),t("code",[s._v("scripts")]),s._v("字段中可以省略"),t("code",[s._v("npx")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mocha"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("然后就可以通过以下命令来执行测试了：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm test\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输出的结果如下图所示，表示单元测试运行成功了，但是这个测试并没有实际的意义。\n"),t("img",{attrs:{src:"https://daodaoblogpicgo.oss-cn-shanghai.aliyuncs.com/img/20230319180006.png",alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);