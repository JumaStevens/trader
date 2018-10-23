<template lang='pug'>
div(class='price-history')

  header(class='price-history__header')
    h3(class='price-history__header-title') {{ activeProductId }}
    p(class='price-history__header-price') {{ currentTickerPrice[activeProductId] }}

  ChartTrendLine(
    :data='trend'
    :gradient='trend[0] < trend[trend.length - 1] ? ["#21ce99"] : ["#f45531"]'
    smooth
    class='price-history__trend'
  )
</template>


<script>
import { mapState, mapGetters } from 'vuex'
import { forEach } from 'lodash'
import ChartTrendLine from '@/components/charts/TrendLine.vue'


export default {
  components: {
    ChartTrendLine
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    trend () {
      const productId = this.activeProductId
      const data = this.OHLCV
      const trend = {}
      forEach(data, (value, key) => trend[key] = Object.values(value).map(val => Number(val.price || val.close)))
      return trend[productId] || []
    },


    ...mapState({
      isBrowser: state => state.app.isBrowser,
      activeProductId: state => state.app.activeProductId
    }),


    ...mapGetters({
      currentTickerPrice: 'coinbase/currentTickerPrice',
      historicPrice: 'coinbase/historicPrice',
      OHLCV: 'coinbase/OHLCV'
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.price-history
  padding: 24px
  border-radius: $unit/2
  background: $white

  &__trend
</style>
