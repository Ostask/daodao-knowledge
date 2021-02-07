<template>
  <main class="page">
    <slot name="top" />

    <articleTitle v-if="isArticle"></articleTitle>
    <Content class="theme-default-content" />
    <PageEdit />

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
import ArticleTitle from '@theme/components/ArticleTitle.vue'

export default {
  components: { PageEdit, PageNav, ArticleTitle },
  props: ['sidebarItems'],
  computed:{
    data () {
      return this.$page.frontmatter
    },
    themeConfig () {
      console.log(this.$site)
      return this.$site.themeConfig
    },
    isArticle(){
      return this.$frontmatter.article !== false
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
  .footer
    padding-top 2rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

</style>
