(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{472:function(v,_,l){"use strict";l.r(_);var i=l(42),e=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("p",[v._v("JavaScript变量可以保存两种类型的值：原始值和引用值。原始值可能是以下6种原始数据类型之一：")]),v._v(" "),l("ul",[l("li",[l("code",[v._v("Undefined")])]),v._v(" "),l("li",[l("code",[v._v("Null")])]),v._v(" "),l("li",[l("code",[v._v("Boolean")])]),v._v(" "),l("li",[l("code",[v._v("Number")])]),v._v(" "),l("li",[l("code",[v._v("String")])]),v._v(" "),l("li",[l("code",[v._v("Symbol")])])]),v._v(" "),l("p",[v._v("原始值和引用值有以下特点：")]),v._v(" "),l("ul",[l("li",[v._v("原始值大小固定，因此保存在栈内存上")]),v._v(" "),l("li",[v._v("从一个变量到另一个变量复制原始值会创建该值的第二个副本")]),v._v(" "),l("li",[v._v("引用值是对象，存储在堆内存上")]),v._v(" "),l("li",[v._v("包含引用值的变量实际上只包含指向相应对象的一个指针，而不是对象本身")]),v._v(" "),l("li",[v._v("从一个变量到另一个变量复制引用值只会复制指针，因此结果是两个变量都指向同一个对象")]),v._v(" "),l("li",[l("code",[v._v("typeof")]),v._v("操作符可以确定值的原始类型，而"),l("code",[v._v("instanceof")]),v._v("操作符用于确保值的引用类型")])]),v._v(" "),l("p",[v._v("任何变量（不管包含的是原始值还是引用值）都存在于某个执行上下文中（也称为作用域）。这个上下文（作用域）决定了变量的生命周期，以及它们可以访问代码的哪些部分。执行上下文可以总结如下：")]),v._v(" "),l("ul",[l("li",[v._v("执行上下文分全局上下文、函数上下文和块级上下文")]),v._v(" "),l("li",[v._v("代码执行流每进入一个新上下文，都会创建一个作用域链，而且也可以访问包含上下文乃至全局上下文中的变量")]),v._v(" "),l("li",[v._v("全局上下文只能访问全局上下文中的变量和函数，不能直接访问局部上下文中的任何数据")]),v._v(" "),l("li",[v._v("变量的执行上下文用于确定什么时候释放内存")])]),v._v(" "),l("p",[v._v("JavaScript是使用垃圾回收的编程语言，开发者不许要操心内存分配和回收。JavaScript的垃圾回收程序可以总结如下：")]),v._v(" "),l("ul",[l("li",[v._v("离开作用域的值会被自动标记为可回收，然后再垃圾回收期间被删除")]),v._v(" "),l("li",[v._v("主流的垃圾回收算法是标记清理，即先给当前不使用的值加上标记，再回来回收它们的内存")]),v._v(" "),l("li",[v._v("引用计数是另一种垃圾回收策略，需要记录值被引用了多少次。JavaScript引擎不再使用这种算法，但某些旧版本的IE仍然会受这种算法的影响，原因是JavaScript会访问非原生JavaScript对象（如DOM元素）")]),v._v(" "),l("li",[v._v("引用计数在代码中存在循环引用时会出现问题")]),v._v(" "),l("li",[v._v("解除变量的引用不仅可以消除循环引用，而且对垃圾回收也有帮助。为促进内存回收，全局对象、全局对象的属性和循环引用都应该在不需要时解除引用")])])])}),[],!1,null,null,null);_.default=e.exports}}]);