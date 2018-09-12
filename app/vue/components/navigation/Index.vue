<template lang='pug'>
section(
  class='container-nav'
)

  nav(
    class='nav'
  )

    Hamburger(
      @handleClick='toggleNavMenu'
      :active='navMenuActive'
      class='nav__hamburger'
    )

    NavMenu(
      @handleRouteChange='closeNavMenu'
      :active='navMenuActive'
      class='nav__menu'
    )


</template>


<script>
import Hamburger from '~comp/navigation/Hamburger.vue'
import NavMenu from '~comp/navigation/NavMenu.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Hamburger,
    NavMenu
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      route: state => state.route,
      routeId: state => state.route.params.id,
      navMenuActive: state => state.app.navMenuActive
    })
  },
  methods: {

    ...mapMutations({
      openNavMenu: 'app/OPEN_NAV_MENU',
      closeNavMenu: 'app/CLOSE_NAV_MENU',
      toggleNavMenu: 'app/TOGGLE_NAV_MENU'
    })
  }
}
</script>


<style lang='sass' scoped>

.container-nav

.nav
  position: relative

  &__hamburger
    +mq-m
      display: none

  &__menu


</style>
