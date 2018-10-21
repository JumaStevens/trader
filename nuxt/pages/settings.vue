<template lang='pug'>
section(class='container-settings')
  div(class='settings')
    h1 Settings
</template>


<script>


export default {
  name: 'settings',
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
.container-settings

.settings

</style>
