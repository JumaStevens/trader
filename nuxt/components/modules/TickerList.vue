<template lang='pug'>
carousel(
  v-if='isBrowser'
  :paginationEnabled='false'
  :perPageCustom='[[0, 1], [624, 2], [960, 3], [1344, 4]]'
  :scrollPerPage='false'
  :speed='500'
  class='ticker-list'
)
  slide(
    v-for='(item, key) in currentTickerPrice'
    :key='item + key'
    class='ticker-list__item'
  )
    CardTicker(
      @click.native='SET_ACTIVE_PRODUCT_ID({ productId: key })'
      :productId='key'
      :price='item'
      :trend='trend[key]'
      :class='{ active: key === activeProductId }'
      class='ticker-list__card'
    )
</template>


<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import CardTicker from '@/components/cards/Ticker.vue'
import { forEach } from 'lodash'


export default {
  components: {
    CardTicker
  },
  props: {},
  data () {
    return {
      isBrowser: false
    }
  },
  computed: {
    trend () {
      const data = this.historicPrice
      const trend = {}
      forEach(data, (value, key) => trend[key] = Object.values(value).map(val => Number(val.price || val.close)))
      return trend
    },


    ...mapState({
      activeProductId: state => state.app.activeProductId
    }),


    ...mapGetters({
      currentTickerPrice: 'coinbase/currentTickerPrice',
      historicPrice: 'coinbase/historicPrice'
    })
  },
  mounted () {
    this.isBrowser = true
  },
  methods: {
    ...mapMutations({
      SET_ACTIVE_PRODUCT_ID: 'app/SET_ACTIVE_PRODUCT_ID'
    })
  }
}
</script>
<style lang='sass'>
.VueCarousel-inner
  display: grid
  grid-auto-flow: column
  grid-auto-columns: min-content

</style>

<style lang='sass' scoped>
.ticker-list

  &__item
    padding: $unit*2 $unit*2

  &__card
    width: 280px

    &.active
      box-shadow: 0 0 $unit*3 rgba(34, 34, 34, 0.05)
</style>
