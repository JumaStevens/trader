<template lang='pug'>
div.nav-menu
  ul.nav-menu__list
    li(
      v-for='(item, index) in menuList'
      :key='index'
    ).nav-menu__item
      router-link(
        :to='item.url'
      ).nav-menu__link {{ item.text }}
</template>


<script>
// import generalData from '../data/general.json'

export default {
  components: {},
  data () {
    return {
      menuList: []
    }
  },
  methods: {},
  beforeMount () {
  }
}
</script>


<style lang='sass' scoped>
.nav-menu

  &__list
    display: flex

  &__item
    margin-right: 2rem

</style>
