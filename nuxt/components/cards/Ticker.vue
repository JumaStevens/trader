<template lang='pug'>
a(class='card-ticker')

  h3(class='card-ticker__text') {{ productId }}

  ChartTrendLine(
    :data='trend'
    :gradient='trend[0] < trend[trend.length - 1] ? ["#21ce99"] : ["#f45531"]'
    smooth
    class='card-ticker__trend'
  )

  span(class='card-ticker__price') {{ price }}
</template>


<script>
import ChartTrendLine from '@/components/charts/TrendLine.vue'


export default {
  components: {
    ChartTrendLine
  },
  props: {
    productId: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: '0.00'
    },
    trend: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>


<style lang='sass' scoped>
.card-ticker
  height: $unit*9
  display: grid
  grid-auto-flow: column
  grid-gap: 0 $unit*2
  align-items: center
  padding: 0 $unit*3
  border-radius: $unit/2
  background: $white

  &__text
    white-space: nowrap

  &__trend
    stroke-width: 4px
</style>
