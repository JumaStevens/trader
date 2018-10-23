<template lang='pug'>
trend(
  v-if='isBrowser'
  v-bind='$attrs'
  class='trend-line'
)
</template>


<script>
import { mapState } from 'vuex'


export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapState({
      isBrowser: state => state.app.isBrowser
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.trend-line

</style>
