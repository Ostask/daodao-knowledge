<template>
    <div class="archives-content">
        <!-- 显示归档页面的标题，但是不用显示时间 -->
        <ArticleTitle :showTime="false"></ArticleTitle>    
        <div class="wrapper">
            <!-- 循环出归档的列表 -->
            <div class="year-content" v-for="yearobj in list">
                <div class="year">{{yearobj.year}}</div>
                <div class="list-wrapper">
                    <router-link tag="li" :to="item.path" v-for="item in yearobj.articles" class="article">
                        <span class="time">{{item.time}}</span>{{item.title}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArticleTitle from '@theme/components/ArticleTitle.vue'
import {filterDateTime } from '../util'

export default {
    data(){
        return {
            list:[]
        }
    },
    components:{
        ArticleTitle
    },
    mounted(){
        this.getList()
    },
    methods:{
        getList(){
            //首先排除不是文章的页面
            let pages = this.$site.pages.filter(item => item.frontmatter.article!==false)
            //首先划分年份
            let obj = []
            for(let i = 0;i<pages.length;i++){
                const time = filterDateTime(pages[i].frontmatter.date)
                const year = time.year
                const month = time.month
                const date = time.date
                let yearObj = obj.find(item => item.year == year)
                if(!yearObj){
                    yearObj = {
                        year:year,
                        articles:[]
                    }
                    obj.push(yearObj)
                }
                yearObj.articles.push({
                    title:pages[i].title,
                    path:pages[i].path,
                    time:month + '-' + date,
                    fullTime:time.time
                })
            }
            //对年份从大到小排序
            obj.sort((a,b) => b.year - a.year)
            for(let i = 0;i<obj.length;i++){
                obj[i].articles.sort((a,b) => a.fullTime < b.fullTime ? 1 : -1)
            }
            //对日期从大到小排序
            this.list = obj
        }
    }
}
</script>

<style lang="stylus" scoped>
@require '../styles/wrapper'

.archives-content{
    .wrapper{
        @extend $wrapper
    }
    .year-content{
        margin-bottom 1rem
        .year{
            font-size 2rem
            color $accentColor
        }
        .list-wrapper{
            display :flex;
            flex-wrap:wrap;
            .article{
                list-style none
                width:50%;
                line-height 1.8rem
                cursor pointer
                .time{
                    margin-right 1rem
                }
                &:hover{
                    color $accentColor
                }
                @media (max-width:700px){
                    width:100%;
                }
            }
        }
    }
}
</style>
