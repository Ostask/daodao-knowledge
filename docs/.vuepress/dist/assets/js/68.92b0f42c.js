(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{516:function(e,t,a){"use strict";a.r(t);var s=a(47),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"what-is-a-fragment-shader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-fragment-shader"}},[e._v("#")]),e._v(" What is a fragment shader?")]),e._v(" "),a("p",[e._v("In the previous chapter we described shaders as the equivalent of the Gutenberg press for graphics. Why? And more importantly: what's a shader?")]),e._v(" "),a("p",[e._v("If you already have experience making drawings with computers, you know that in that process you draw a circle, then a rectangle, a line, some triangles until you compose the image you want. That process is very similar to writing a letter or a book by hand - it is a set of "),a("code",[e._v("instructions")]),e._v(" that do one task after another.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("单词")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("instructions")]),e._v("\nn. 指令；说明（instruction 的复数形式）")])])]),e._v(" "),a("p",[e._v("Shaders are also a set of instructions, but the instructions are "),a("code",[e._v("executed")]),e._v(" all at once for every single pixel on the screen. That means the code you write has to behave differently depending on the position of the pixel on the screen. Like a type press, your program will work as a function that receives a position and returns a color, and when it's compiled it will run "),a("code",[e._v("extraordinarily")]),e._v(" fast.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("单词")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("executed")]),e._v("\nv. 处决；实施；完成（动作）；执行（execute 的过去式与过去分词）")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("extraordinarily")]),e._v("\nadv. 极其，极端地；非常奇怪地，不寻常地")])])])]),e._v(" "),a("h2",{attrs:{id:"why-are-shaders-fast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-are-shaders-fast"}},[e._v("#")]),e._v(" Why are shaders fast?")]),e._v(" "),a("p",[e._v("To answer this, I present the wonders of "),a("code",[e._v("parallel processing")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("单词")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("parallel processing")]),e._v("\n并行处理")])])]),e._v(" "),a("p",[e._v("Imagine the CPU of your computer as a big "),a("code",[e._v("industrial")]),e._v(" pipe, and every task as something that passes through it - like a factory line. Some tasks are bigger than others, which means they require more time and "),a("code",[e._v("energy")]),e._v(" to deal with. We say they require more processing power. Because of the "),a("code",[e._v("architecture")]),e._v(" of computers the jobs are forced to run in a series; each job has to be finished one at a time. Modern computers usually have groups of four processors that work like these pipes, completing tasks one after another to keep things running smoothly. Each pipe is also known as a "),a("code",[e._v("thread")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("单词")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("parallel processing")]),e._v("\nadj. 工业的，产业的；有很多产业的，工业发达的；工业用的，用于工业的；（与）工业摇滚（有关）的；因勤劳而得到的"),a("br"),e._v("\nn. 从事工业的公司；工业股票；工业工人")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("energy")]),e._v("\nn. 能力，力气；精力，活力；能源；能，能量")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("architecture")]),e._v("\n架构")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("thread")]),e._v("\n线程")])])])]),e._v(" "),a("p",[e._v("Video games and other graphic applications require a lot more processing power than other programs. Because of their graphic content they have to do huge numbers of pixel-by-pixel "),a("code",[e._v("operations")]),e._v(". Every single pixel on the screen needs to be computed, and in 3D games geometries and perspectives need to be calculated as well.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("单词")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("operations")]),e._v("\nn. 运营；运作；业务操作（operation 的复数）")])])]),e._v(" "),a("p",[e._v("Let's go back to our "),a("code",[e._v("metaphor")]),e._v(" of the pipes and tasks. Each pixel on the screen "),a("code",[e._v("represents")]),e._v(" a simple small task. "),a("code",[e._v("Individually")]),e._v(" each pixel task isn't an issue for the CPU, but (and here is the problem) the "),a("code",[e._v("tiny")]),e._v(" task has to be done to each pixel on the screen! That means in an old 800x600 screen, 480,000 pixels have to processed per frame which means 14,400,000 calculations per second! Yes! That’s a problem big enough to overload a microprocessor. In a modern 2880x1800 "),a("code",[e._v("retina display")]),e._v(" running at 60 frames per second that calculation adds up to 311,040,000 calculations per second. How do graphics engineers solve this problem?")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("单词")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("metaphor")]),e._v("\nn. 隐喻，暗喻；象征，标志\n网络 隐喻 /暗喻 /比喻 /比喻说话")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("represents")]),e._v("\nv. 代表（represent 的三单形式）；表现，表示；描绘")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("individually")]),e._v("\nadv. 分别地，单独地，各别地；独特地，有个性地；个人地，以个人身份地\n网络 个别地 /单独地 /单个地")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("tiny")]),e._v("\nadj. 极小的，微小的")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("microprocessor")]),e._v("\nn. [计] 微处理器")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("retina display")]),a("br"),e._v("\n视网膜显示屏")])])])]),e._v(" "),a("p",[e._v("This is when parallel processing becomes a good solution. Instead of having a couple of big and powerful microprocessors, or pipes, it is smarter to have lots of tiny microprocessors running in parallel at the same time. That’s what a Graphic Processor Unit (GPU) is.")]),e._v(" "),a("p",[e._v("Picture the tiny microprocessors as a table of pipes, and the data of each pixel as a ping pong ball. 14,400,000 ping pong balls a second can "),a("code",[e._v("obstruct")]),e._v(" almost any pipe. But a table of 800x600 tiny pipes receiving 30 waves of 480,000 pixels a second can be handled smoothly. This works the same at higher "),a("code",[e._v("resolutions")]),e._v(" - the more parallel hardware you have, the bigger the stream it can manage.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("单词")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("obstruct")]),e._v("\nv. 堵塞，阻塞（洞口、通道、道路等）；遮住，挡住（视线）；阻碍，妨碍")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("resolutions")]),e._v("\nn. 决议（resolution 的复数）；解决；决心；[物]分辨率")])])])]),e._v(" "),a("p",[e._v("Another “super power” of the GPU is special math functions accelerated via hardware, so complicated math operations are resolved directly by the microchips instead of by software. That means extra fast trigonometrical and matrix operations - as fast as electricity can go.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("难句")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("Another “super power” of the GPU is special math functions accelerated via hardware")]),e._v("\nGPU的另一个“超能力”是通过硬件加速的特殊数学功能")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("microchips")]),e._v("\nn. 微芯片（microchip 的复数形式）")])])])]),e._v(" "),a("h2",{attrs:{id:"what-is-glsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-glsl"}},[e._v("#")]),e._v(" What is GLSL?")]),e._v(" "),a("p",[e._v("GLSL stands for openGL Shading Language, which is the specific standard of shader programs you'll see in the following chapters. There are other types of shaders depending on hardware and Operating Systems. Here we will work with the openGL specs regulated by Khronos Group. Understanding the history of OpenGL can be helpful for understanding most of its weird "),a("code",[e._v("conventions")]),e._v(", for that I recommend taking a look at: openglbook.com/chapter-0-preface-what-is-opengl.html")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("单词")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("conventions")]),e._v("\nn. [法]惯例；会议；[计]约定（convention 的复数）")])])]),e._v(" "),a("h2",{attrs:{id:"why-are-shaders-famously-painful"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-are-shaders-famously-painful"}},[e._v("#")]),e._v(" Why are Shaders famously painful?")]),e._v(" "),a("p",[e._v("As Uncle Ben said “with great power comes great responsibility,” and parallel computation follows this rule; the powerful architectural design of the GPU comes with its own "),a("code",[e._v("constraints")]),e._v(" and "),a("code",[e._v("restrictions")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("单词")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("constraints")]),e._v("\nn. [数]约束；限制；约束条件（constraint 的复数形式）")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("restrictions")]),e._v("\nn. 限制；限制条件（restriction 的复数）")])])])]),e._v(" "),a("p",[e._v("In order to run in parallel every pipe, or thread, has to be "),a("code",[e._v("independent")]),e._v(" from every other thread. We say the threads are blind to what the rest of the threads are doing. This restriction implies that all data must flow in the same direction. So it’s impossible to check the result of another thread, modify the input data, or pass the "),a("code",[e._v("outcome")]),e._v(" of a thread into another thread. Allowing thread-to-thread communications puts the integrity of the data at risk.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("单词")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("independent")]),e._v("\nadj. 自治的，独立的；自立的，自力更生的；公正的，不受他人影响的；分离的，单独的；私营的；无党派的；有主见的，有独立见解的"),a("br"),e._v("\nn. 独立自主者，独立团体；无党派政治家；公理会教友")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("outcome")]),e._v("\nn. 结果，效果")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("integrity")]),e._v("\nn. 正直，诚实；完整，完全；职业操守；（电子数据的）集成度")])])])]),e._v(" "),a("p",[e._v("Also the GPU keeps the parallel micro-processor (the pipes) constantly busy; as soon as they get free they receive new information to process. It's impossible for a thread to know what it was doing in the previous moment. It could be drawing a button from the UI of the operating system, then rendering a portion of sky in a game, then displaying the text of an email. Each thread is not just blind but also memoryless. Besides the "),a("code",[e._v("abstraction")]),e._v(" required to code a general function that changes the result pixel by pixel depending on its position, the blind and memoryless constraints make shaders not very popular among beginning programmers.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("单词")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("abstraction")]),e._v("\nn. 抽象；提取；抽象概念；空想；心不在焉"),a("br"),e._v("\n网络 抽象化 /抽象 /抽象概念 /出神")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("outcome")]),e._v("\nn. 结果，效果")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("integrity")]),e._v("\nn. 正直，诚实；完整，完全；职业操守；（电子数据的）集成度")])])])]),e._v(" "),a("p",[e._v("Don't worry! In the following chapters, we will learn step-by-step how to go from simple to advanced shading computations. If you are reading this with a modern browser, you will appreciate playing with the interactive examples. So let's not delay the fun any longer and press Next >> to jump into the code!")])])}),[],!1,null,null,null);t.default=o.exports}}]);