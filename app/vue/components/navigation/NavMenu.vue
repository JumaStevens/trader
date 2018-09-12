<template lang='pug'>
div(
  :class='{ active }'
  class='container-nav-menu'
)

  ul(
    :class=''
    class='nav-menu'
  )
    li(
      class='nav-menu__item'
    )
      router-link(
        to='/'
        class='nav-menu__link'
      ) TR
    li(
      class='nav-menu__item'
    )
      router-link(
        to='/account'
        class='nav-menu__link'
      )
        IconAccount(
          class='nav-menu__icon'
        )

</template>


<script>
import IconAccount from '~/assets/svg/logo-account.svg'


export default {
  components: {
    IconAccount
  },
  props: {
    active: {
      type: Boolean
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-nav-menu
  position: absolute
  top: $unit*5
  left: -100%
  width: 100vw
  height: calc(100vh - #{$unit*5})
  background: grey
  transition: transform 500ms
  +mq-m
    position: unset
    top: unset
    left: unset
    width: $unit*5
    height: 100vh
    transition: unset

  &.active
    transform: translateX(100%)
    +mq-m
      transform: unset


.nav-menu
  display: grid
  grid-template-rows: auto
  grid-gap: $unit*2
  justify-content: center
  align-items: stretch

  &__item

  &__link
    width: $unit*5
    height: $unit*5
    display: flex
    justify-content: center
    align-items: center

  &__icon
    width: $unit*3
    height: $unit*3
</style>
