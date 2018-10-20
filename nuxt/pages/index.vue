<template lang='pug'>
main(class='container-index')
  div(class='index')

    div(class='index__logo')
      span
      span
      span

    header(class='index__header')
      h1(class='index__header-title') {{ header.title }}
      p(class='index__header-copy') {{ header.copy }}
        span &nbsp; Coming Soon.

    img(
      src='~/assets/stock_dashboard.png'
      class='index__img'
    )

    form(
      @submit.prevent='submitEmail'
      class='index__form'
    )
      input(
        v-model='email'
        v-validate='"required|email"'
        name='email'
        placeholder='Enter your email to stay informed'
        class='index__form-input'
      )
      input(
        type='submit'
        class='index__form-submit'
      )
</template>


<script>


export default {
  async fetch ({ store, params }) {
    return
  },
  components: {},
  data () {
    return {
      header: {
        title: 'Trade Smarter',
        copy: 'Artificial intelligence analyses your trading patterns and formulates the insight you need to become a better trader.'
      },
      email: ''
    }
  },
  computed: {},
  methods: {
    async submitEmail() {
      try {
        const email = this.email
        const isValid = await this.$validator.validateAll()
        if (!isValid) return

        // axios configuration
        const config = {
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
          },
          method: 'post',
          url: 'https://us-central1-trader-814b5.cloudfunctions.net/https-emailSubscribe/',
          data: { email }
        }
        const res = await this.$axios(config)
        console.log('data: ', res)
      }
      catch(e) {
        console.error(e)
      }
    }
  }
}
</script>


<style lang='sass' scoped>
.container-index
  @extend %container

.index
  @extend %content
  display: grid
  grid-gap: $unit*8
  grid-auto-rows: min-content

  &__logo
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


  &__header
    display: grid
    grid-gap: $unit 0
    +mq-m
      grid-auto-flow: column

    &-title
      font-size: $fs2
      font-weight: bold

    &-copy
      max-width: 420px
      +mq-m
        margin-top: $unit
      & span
        color: $dark

  &__img
    width: 100%
    box-shadow: 0 $unit $unit*3 rgba(34, 34, 34, 0.1)
    align-self: center
    +mq(1200)
      width: auto
      max-height: 400px
      justify-self: center



  &__form
    display: grid
    grid-gap: $unit
    +mq-m
      grid-auto-flow: column

    &-input
      padding: $unit*2
      border: 1px solid $grey
      background: transparent

      &.valid + input
        cursor: pointer

    &-submit
      padding: $unit*2
      color: $white
      background: $success

</style>
