<template lang='pug'>
section(class='container-auth')
  div(class='auth')

    div(class='auth__wrapper')
      h2(class='auth__title') {{ title }}
      ModuleAuthForm(class='auth__auth-form')

    div(class='auth__background-image')
</template>


<script>
import ModuleAuthForm from '@/components/modules/AuthForm.vue'


export default {
  name: 'auth',
  async fetch ({ store, params }) {
    return
  },
  components: {
    ModuleAuthForm
  },
  data () {
    return {
      title: 'Welcome to Trader'
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-auth

.auth
  height: 100%
  display: grid
  justify-items: center
  align-items: center
  +mq-m
    grid-template-rows:
    grid-template-columns: repeat(2, 1fr)

  &__wrapper
    +mq-m
      grid-row: 1 / 2
      grid-column: 2 / 3


  &__title
    font-size: $fs1
    font-weight: bold
    margin-bottom: $unit*4
    +mq-m
      font-size: $fs2

  &__auth-form
    max-width: 360px
    margin: 0 auto


  &__background-image
    display: none
    +mq-m
      width: 100%
      height: 100%
      grid-row: 1 / 2
      grid-column: 1 / 2
      display: unset
      background-image: url(https://d2ue93q3u507c2.cloudfront.net/assets/generated_assets/94977d34f99015525dcd0fc9987fcbe6.png)
      background-size: cover
      background-position: center


</style>
