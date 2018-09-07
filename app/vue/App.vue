<template lang='pug'>
main(
  class='vue-app'
)
  h1 hello world 3
  a(
    @click='twitterSearch()'
  ) Search Twitter!

  //- transition
  //-   Error404(
  //-     v-if='error.isError && error.type == "404"'
  //-     class='vue-app__error'
  //-   )
  //-   router-view(
  //-     class='vue-app__view'
  //-   )
</template>


<script>
import axios from 'axios'
import Error404 from './views/Error404.vue'

export default {
  components: {
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
  methods: {
    async twitterSearch () {
      try {
        const url = 'https://us-central1-trader-814b5.cloudfunctions.net/https-twitterSearch/'
        const config = {
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
          },
          data: {
            hello: 'world'
          }
        }
        const response = await axios.post(url, config)
        console.log('response: ', response)
      }
      catch (e) {
        console.error(e)
      }
    }
  },
  beforeCreate () {
    this.$store.dispatch('auth/watchAuthState')
  }
}
</script>


<style lang='sass'>
@import './assets/sass/main.sass'

.vue-app
  display: grid
  grid-template-rows: calc(100vh - 48px) 48px
  align-items: stretch
  background: $white
  +mq-l
    grid-template-rows: 100vh
    grid-template-columns: 64px 1fr


  &__error,
  &__view
    grid-row: 1 / 2
    +mq-l
      grid-row: 1 / 2
      grid-column: 2 / 3


  &__nav
    grid-row: 2 / 3
    +mq-l
      grid-row: 1 / 2
      grid-column: 1 / 2


</style>
