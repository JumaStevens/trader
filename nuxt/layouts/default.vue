<template lang='pug'>
main(class='vue-app')
  nuxt(class='vue-app__view')
</template>


<script>

export default {
  name: 'vueApp',
  components: {},
  data () {
    return {}
  }
}
</script>


<style lang='sass'>
.vue-app
  min-height: 100vh
  display: grid
</style>
