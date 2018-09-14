<template lang='pug'>
main.container
  Twitter
</template>


<script>
import Twitter from '~comp/twitter/Index.vue'

export default {
  components: {
    Twitter
  },
  data () {
    return {}
  }
}
</script>

<style lang='sass' scoped>
.container
  box-shadow: 0px 0px 0.5rem rgba(33, 33, 33, 0.2)
  border-radius: 0.75%
  overflow: hidden
  background: $pri-cl

  & h1
    color: black

</style>
