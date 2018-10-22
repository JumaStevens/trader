<template lang='pug'>
a(class='card-ticker')

  h3(class='card-ticker__text') {{ productId }}

  trend(
    :data='trend'
    :gradient='["#21ce99"]'
    smooth
    class='crypto'
  )

  span(class='card-ticker__price') {{ Number(price).toFixed(2) }}
</template>


<script>


export default {
  components: {},
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
  },
  computed: {},
  methods: {}
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

  &__text
    white-space: nowrap

.crypto
  stroke-width: 4px
</style>
