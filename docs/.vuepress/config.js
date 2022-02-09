const sidebar = require("./utils/getSidebarData")

module.exports = {
    head: [
        // 添加百度统计
        [
            "script",
            {},
            `var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?6371333d39195dbe958ef14c0a722ac4";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            })();`
        ],
        ['link', { rel: 'icon', href: '/img/newlogo.ico' }]
      ],
    title: '刀刀的知识积累',
    base:'/daodao-knowledge/',
    description: '立志不再懒懒散散的小前端的知识库',
    markdown:{
        lineNumbers:true,
    },
    themeConfig: {
        repo: 'Ostask/daodao-knowledge', // Github仓库地址
        docsDir: 'docs', // .md文件放在了docs目录下
        editLinks: true, // 启用编辑链接
        editLinkText: '编辑',
        logo: '/img/home.jpg',
        sidebarDepth:2,
        footer: "MIT Licensed | Copyright © 2021-present 刀刀",   
        nav: [
            { text: '主页', link: '/' },
            {text: '前端学习',
                items: [
                    { 
                        text: '基础',
                        items:[
                            {text:'javascript',link:'/pages/600fd9/'},
                            {text:'算法&常用方法',link:'/pages/12e2d5/'}
                            // {text:'ts',link:'/'},
                            // {text:'nodejs',link:'/'},
                            // {text:'css',link:'/'}
                        ]
                    },
                    { 
                        text: '框架学习',
                        items:[
                            // {text:'vue',link:'/vue/lesson1'},
                            {text:'react',link:'/pages/8ea889/'},
                            {text:'vuePress',link:'/pages/3ba846/'},
                            {text:'qiankun微前端',link:'/pages/347ae3/'},
                            {text:'vue3',link:'/pages/f97ef5/'}
                        ]
                    },
                    {
                        text:'webgl学习',
                        items:[
                            {text:'threejs',link:'/pages/7fb7ad/'}
                        ]
                    }
                ]
            },
            { text: '零零碎碎',link:'/pages/cd2a4f/'},
            { text: '随记', link: '/pages/9d1205/' },
            {text: '索引',
                items: [
                    {text:'归档',link:'/archives/'},
                ]
            },
            { text: '关于我', link: '/daodao/' }
        ],
        sidebar:sidebar
    }
}