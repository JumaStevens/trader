<template lang='pug'>
label(class='base-label')
  span(
    v-if='label'
    class='base-label__text'
  ) {{ label }}
  input(
    v-bind='$attrs'
    v-on='listeners'
    class='base-input'
  )
</template>


<script>

export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>


<style lang='sass' scoped>
.base-label
  display: grid
  grid-gap: $unit/2 0

  &__label
    font-size: 14px

.base-input
  height: $unit*6
  padding: 0 $unit*2
  border: 1px solid #fafafa
  border-radius: $unit/2
  background: #fafafa

  &:focus,
  &:hover
    background: transparent
    border-color: $grey

  &:focus
    border-color: $success
</style>
