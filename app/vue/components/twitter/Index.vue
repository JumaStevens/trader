<template lang='pug'>
div
  line-chart(
    :data='chartData'
    class='chart'
  )
  area-chart(
    :data='chartData2'
    class='chart'
  )
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'

export default {
  props: {},
  data () {
    return {}
  },
  computed: {
    chartData () {
      // return this.twitterSentiment.map(sentiment => [sentiment.created_at_unix, sentiment.score ])
      return this.twitterSentimentDaily.map(sentiment => [ sentiment.date, sentiment.averageScore ])
    },

    chartData2 () {
      return this.twitterSentiment.map(sentiment => [sentiment.created_at_unix, sentiment.score ])
      // return this.twitterSentimentDaily.map(sentiment => [ sentiment.date, sentiment.averageScore ])
    },


    ...mapGetters({
      twitterSentiment: 'sentiment/twitterSentiment',
      twitterSentimentDaily: 'sentiment/twitterSentimentDaily'
    })
  },
  methods: {
    ...mapActions({
      watchTweetsMetadata: 'twitter/watchTweetsMetadata',
      watchTwitterSentiment: 'sentiment/watchTwitterSentiment'
    })
  },
  mounted () {
    this.watchTweetsMetadata()
    this.watchTwitterSentiment()
  }
}
</script>


<style lang='sass' scoped>

.chart
  width: 80%
  margin: $unit*5
</style>
