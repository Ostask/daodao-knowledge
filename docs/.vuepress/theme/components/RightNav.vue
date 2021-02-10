<template>
    <div class="right-nav">
        <div v-for="item in headers" :class="['right-menu-item', 'level'+item.level, { active: item.slug === hashText }]">
            <a :href="'#'+item.slug">{{item.title}}</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            headers:[],
            hashText:''
        }
    },
    mounted() {
        this.getHeadersData()
        this.getHashText()
    },
    watch: {
        $route () {
            this.getHeadersData()
            this.getHashText()
        }
    },
    methods:{
        getHeadersData(){
            this.headers = this.$page.headers || []
        },
        getHashText () {
            this.hashText = decodeURIComponent(window.location.hash.slice(1))
        }
    }
}
</script>

<style lang="stylus" scoped>
    .right-nav{
        width:218px;
        padding-left:10px;
        border-left:2px solid #e4e4e4;
        float:right;
        position:sticky;
        top:100px;
        margin-right:-200px;
        .right-menu-item{
            a{
                color:$textColor;
            }
            &.active{
                a{
                    color:$accentColor; 
                }
            }
        }
        .level2{
            font-size:0.9rem;
            margin-top:0.5em;
            margin-bottom:0.5em;
        }
        .level3{
            font-size:0.9rem;
            margin-left:2em;
            margin-top:0.5em;
            margin-bottom:0.5em;
        }
        @media (max-width:1250px){
            display:none;
        }
    }
</style>