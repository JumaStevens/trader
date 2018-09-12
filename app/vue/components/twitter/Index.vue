<template lang='pug'>
div
  a(@click='fetchTweets()') Fetch Tweets

</template>


<script>
import { mapActions } from 'vuex'


export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {
    ...mapActions({
      fetchTweets: 'twitter/fetchTweets'
    })
  }
}
</script>


<style lang='sass' scoped>

</style>
