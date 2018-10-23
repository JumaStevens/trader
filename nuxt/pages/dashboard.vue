<template lang='pug'>
section(class='container-dashboard')
  div(class='dashboard')

    h2 Tickers
    TickerList
    PriceHistory

</template>


<script>
import TickerList from '@/components/modules/TickerList.vue'
import PriceHistory from '@/components/modules/PriceHistory.vue'


export default {
  name: 'dashboard',
  layout: 'auth',
  async fetch ({ store, params }) {
    return
  },
  components: {
    TickerList,
    PriceHistory
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-dashboard

.dashboard

h2
  font-size: $fs1
</style>
