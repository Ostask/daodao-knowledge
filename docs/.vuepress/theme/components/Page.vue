<template>
  <main class="page">
    <slot name="top" />

    <div class="page-content" :class="{'hasRightNav':hasRightNav}">
      <RightNav v-if="hasRightNav"></RightNav>
      <articleTitle v-if="isArticle"></articleTitle>
      <Content class="theme-default-content" />
      <PageEdit />
    </div>

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
    <div
      v-if="themeConfig.footer"
      class="footer"
    >
      {{ themeConfig.footer }}
    </div>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import RightNav from '@theme/components/RightNav.vue'
import ArticleTitle from '@theme/components/ArticleTitle.vue'

export default {
  components: { PageEdit, PageNav, ArticleTitle,RightNav },
  props: ['sidebarItems'],
  computed:{
    data () {
      return this.$page.frontmatter
    },
    themeConfig () {
      return this.$site.themeConfig
    },
    isArticle(){
      return this.$frontmatter.article !== false
    },
    hasRightNav(){
      const { $frontmatter, $themeConfig, $page } = this
      const { sidebar } = $frontmatter
      return (
        $page.headers &&
        ($frontmatter && sidebar && sidebar !== false) !== false
      )
    }
  },
  methods:{
    
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
  .page-content
    width 900px
    margin 0 auto
    position relative
    &.hasRightNav{
      padding-right 200px
    }
  .footer
    padding-top 2rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)
  @media (max-width:$smallComputer){
      .page-content{
        width 700px
      }    
  }
  @media (max-width:1250px){
      .page-content{
        width 700px
        &.hasRightNav{
          padding-right 0
        }
      }
  }
  @media (max-width: $MQNarrow){
    .page-content{
        width 100%
    }
  }
  @media (max-width: $MQMobileNarrow){
    .page-content{
        width 100%
    }
  }

</style>
