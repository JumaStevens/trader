<template lang='pug'>
nav(
  :class='{ active: isNavMenuOpen }'
  class='nav-menu'
)

  ul(class='nav-menu__list')
    li(
      v-for='(item, index) in menuList'
      class='nav-menu__item'
    )
      nuxt-link(
        class='nav-menu__link'
        :to='item.path'
      ) {{ item.text }}
</template>


<script>
import { mapState } from 'vuex'

export default {
  components: {},
  props: {},
  data () {
    return {
      menuList: [
        { text: 'Dashboard', path: '/dashboard' },
        { text: 'Account', path: '/account' },
        { text: 'News', path: '/news' },
        { text: 'Settings', path: '/settings' }
      ]
    }
  },
  computed: {
    ...mapState({
      isNavMenuOpen: state => state.app.isNavMenuOpen
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.nav-menu
  transform: translateX(-100%)
  +mq-m
    transform: unset

  &.active
    transform: translateX(0)
    +mq-m
      transform: unset

</style>
