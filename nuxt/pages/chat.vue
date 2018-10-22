<template lang='pug'>
section(class='container-chat')
  div(class='chat')
    h1 Chat
</template>


<script>


export default {
  name: 'chat',
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
.container-chat

.chat

</style>
