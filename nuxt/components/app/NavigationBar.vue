<template lang='pug'>
nav(class='nav-bar')

  div(class='nav-bar__logo')
    span
    span
    span

  a(
    @click='TOGGLE_NAV_MENU'
    class='nav-bar__hamburger'
  )
</template>


<script>
import { mapMutations } from 'vuex'

export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {
    ...mapMutations({
      TOGGLE_NAV_MENU: 'app/TOGGLE_NAV_MENU'
    })
  }
}
</script>


<style lang='sass' scoped>
.nav-bar
  height: $unit*6
  display: flex
  justify-content: space-between
  align-items: center


  &__logo
    height: $unit*2
    display: grid
    grid-gap: $unit/2 0

    & span
      width: $unit*2
      height: $unit/2
      background: $success

    & span:nth-child(2)
      width: $unit*1.5

    & span:nth-child(3)
      width: $unit


  &__hamburger
    position: relative
    width: $unit*5
    height: $unit*5
    display: block
    border-radius: 50%
    background: transparent
    +mq-m
      display: none

    &::after,
    &::before
      content: ''
      position: absolute
      top: 50%
      left: 50%
      width: $unit*3
      height: 2px
      background: $black
      transform: translate(-50%, -#{$unit/2})
      transition: transform 500ms

    &::before
      transform: translate(-50%, #{$unit/2})

    &.active
      &::after,
      &::before
        transform: translate(-50%, 0)
</style>
