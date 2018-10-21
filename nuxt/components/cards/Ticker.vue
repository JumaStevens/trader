<template lang='pug'>
a(class='card-ticker')
  h3(class='card-ticker__text') {{ productId }}
  span(class='card-ticker__price') {{ price }}

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
    }
  },
  data () {
    return {}
  },
  computed: {

  },
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

  &__text
    white-space: nowrap
</style>
