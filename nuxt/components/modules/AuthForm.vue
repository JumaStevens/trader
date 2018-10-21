<template lang='pug'>
form(
  @submit.prevent=''
  class='auth-form'
)

  //- header
  header(class='auth-form__header')
    a(
      @click='isSignIn = false'
      :class='{ active: !isSignIn }'
      class='auth-form__header-tab'
    ) Sign Up
    a(
      @click='isSignIn = true'
      :class='{ active: isSignIn }'
      class='auth-form__header-tab'
    ) Sign In

  //- email
  BaseInput(
    :label='"Email"'
    v-model='email'
    v-validate='"required|email"'
    name='email'
    placeholder='Email'
    class='auth-form__input'
  )

  //- password
  BaseInput(
    :label='"Password"'
    v-model='password'
    v-validate='"required|min:6"'
    name='password'
    type='password'
    placeholder='Password'
    class='auth-form__input'
  )

  //- password reset
  a(
    @click='resetPassword'
    :class='{ active: isSignIn }'
    class='auth-form__password-reset'
  ) Forgot your password?

  //- submit
  BaseButton(
    @click='validateForm'
    :class='{ loading }'
    class='auth-form__button'
  )
</template>


<script>
import { mapActions } from 'vuex'


export default {
  components: {},
  props: {},
  data () {
    return {
      email: '',
      password: '',
      isSignIn: false,
      loading: false
    }
  },
  computed: {},
  methods: {
    async validateForm() {
      try {
        this.loading = true
        const email = this.email
        const password = this.password
        const isValid = await this.$validator.validateAll()
        if (!isValid) return

        this.isSignIn
          ? await this.signInWithEmailAndPassword({ email, password })
          : await this.createUserWithEmailAndPassword({ email, password })

        this.$router.replace('/dashboard')
        return
      }
      catch(e) {
        console.error(e)
        return e
      }
      finally {
        this.loading = false
      }
    },


    async resetPassword() {
      try {
        return
      }
      catch(e) {
        console.error(e)
        return e
      }
    },


    ...mapActions({
      signInWithEmailAndPassword: 'auth/signInWithEmailAndPassword',
      createUserWithEmailAndPassword: 'auth/createUserWithEmailAndPassword',
      sendPasswordResetEmail: 'auth/sendPasswordResetEmail'
    })
  }
}
</script>


<style lang='sass' scoped>
.auth-form
  display: grid
  grid-gap: $unit*3 0


  &__header
    width: min-content
    display: flex
    justify-self: end

    &-tab
      @extend %flex--row-center
      min-width: $unit*10
      height: $unit*6
      padding: 0 $unit
      white-space: nowrap
      color: $dark

      &.active
        color: $success


  &__password-reset
    color: $success
    visibility: hidden

    &.active
      visibility: visible


  &__button
    justify-self: start
    margin-top: $unit*2
</style>
