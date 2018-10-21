<template lang='pug'>
section(class='container-news')
  div(class='news')
    h1 News
</template>


<script>


export default {
  name: 'news',
  layout: 'auth',
  async fetch ({ store, params }) {
    return
  },
  components: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-news

.news

</style>
