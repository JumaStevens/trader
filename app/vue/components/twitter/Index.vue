<template lang='pug'>
div
  a(@click='initTweets()') Init Tweets
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
      initTweets: 'twitter/initTweets',
      watchTweetsMetadata: 'twitter/watchTweetsMetadata',
    })
  },
  mounted () {
    this.watchTweetsMetadata()
  }
}
</script>


<style lang='sass' scoped>

a
  display: inline-block
  background: lightblue
  padding: 8px 16px
  margin: 0 8px

</style>
