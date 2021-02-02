const sidebar = require("./utils/getSidebarData")

module.exports = {
    title: '刀刀的知识积累',
    base:'/daodao-knowledge/',
    description: '立志不再懒懒散散的小前端的知识库',
    themeConfig: {
        logo: '/img/home.jpg',
        nav: [
            { text: '主页', link: '/' },
            {text: '前端学习',
                items: [
                    { 
                        text: '基础',
                        items:[
                            {text:'es6',link:'/es6/'},
                            {text:'ts',link:'/'},
                            {text:'nodejs',link:'/'},
                            {text:'css',link:'/'}
                        ]
                    },
                    { 
                        text: '框架学习',
                        items:[
                            {text:'vue',link:'/vue/lesson1'},
                            {text:'react',link:'/'},
                            {text:'vuePress',link:'/'},
                            {text:'qiankun微前端',link:'/'}
                        ]
                    },
                ]
            },
            { text: '随记', link: '/' },
            { text: '大佬文章转载', link: '/' },
            { text: '大佬博客链接', link: '/' },
        ],
        sidebar:sidebar
    }
}