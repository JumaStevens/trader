<template lang='pug'>
main(
  class='vue-app'
)
  Navigation(
    class='vue-app__nav'
  )

  transition
    Error404(
      v-if='error.isError && error.type == "404"'
      class='vue-app__error'
    )
    router-view(
      class='vue-app__view'
    )
</template>


<script>
import Error404 from './views/Error404.vue'
import Navigation from '~comp/navigation/Index.vue'

export default {
  components: {
    Navigation,
    Error404
  },
  data () {
    return {}
  },
  computed: {
    error () {
      return this.$store.state.error
    },
    isCurrentUser () {
      return this.$store.getters['auth/isCurrentUser']
    }
  },
  methods: {},
  beforeCreate () {
    this.$store.dispatch('auth/watchAuthState')
  }
}
</script>


<style lang='sass'>
@import './assets/sass/main.sass'

.vue-app
  width: 100vw
  height: 100vh
  display: grid
  grid-template-rows: auto 1fr
  +mq-m
    grid-template-rows: unset
    grid-template-columns: auto 1fr

  &__nav

  &__error,
  &__view

</style>
