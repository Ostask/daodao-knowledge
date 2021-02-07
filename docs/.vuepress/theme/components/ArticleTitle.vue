<template>
    <div class="article-title theme-default-content">
        <h1><span class="circle"></span>{{title}}</h1>
        <div class="lastUpdatedTime" v-if="showTime"><span class="text">更新时间:</span> {{lastUpdated}}</div>
    </div>
</template>

<script>
import {filterDateTime } from '../util'
export default {
    props:{
        showTime:{
            type:Boolean,
            default:true
        }
    },
    computed:{
        lastUpdated () {
            return filterDateTime(this.$frontmatter.date).time || filterDateTime(this.$page.lastUpdated).time
        },
        title(){
            return this.$page.title
        }
    }
}
</script>

<style lang="stylus" scoped>
    .article-title{
        padding-bottom:0;
        h1{
            font-size:1.8rem;
            .circle{
                display:inline-block;
                height:1.2rem;
                vertical-align :bottom;
                border:4px solid $accentColor;
                margin-right:10px;
            }
        }
        .lastUpdatedTime{
            font-size:0.9em;
            .text{
                color lighten($textColor, 25%)
            }
        }
    }
</style>