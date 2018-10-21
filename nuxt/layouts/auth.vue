<template lang='pug'>
main(class='vue-app')
  AppNavigationBar(class='vue-app__nav-bar')
  AppNavigationMenu(class='vue-app__nav-menu')
  nuxt(class='vue-app__view')
</template>


<script>
import AppNavigationBar from '@/components/app/NavigationBar.vue'
import AppNavigationMenu from '@/components/app/NavigationMenu.vue'

export default {
  name: 'vueApp',
  components: {
    AppNavigationBar,
    AppNavigationMenu
  },
  data () {
    return {}
  }
}
</script>


<style lang='sass'>
.vue-app
  background: $grey
  min-height: 100vh
  display: grid
  grid-template-rows: auto 1fr
  grid-template-columns: auto 1fr
  grid-gap: 0 $unit/2

  &__nav-bar
    background: $white
    grid-row: 1 / 2
    grid-column: 1 / 3
    +mq-m
      grid-column: 1 / 2


  &__nav-menu
    background: $white
    grid-row: 2 / 3
    grid-column: 1 / 3
    +mq-m
      grid-row: 2 / 3
      grid-column: 1 / 2


  &__view
    background: $white
    height: calc(100vh - #{$unit*6})
    grid-row: 2 / 3
    grid-column: 1 / 3
    overflow: auto
    +mq-m
      height: 100vh
      grid-row: 1 / 3
      grid-column: 2 / 3


</style>
