import _ from 'lodash'
import moment from 'moment'

export default {
  twitterSentiment ({ twitterSentiment }) {
    if (_.isEmpty(twitterSentiment)) return []
    const statuses = _.flatten( twitterSentiment.map(sentiment => sentiment.statuses) )
    // oldest to most recent
    const sortStatuses = statuses.sort((a, b) => a.created_at_unix - b.created_at_unix)
    return sortStatuses
  },


  twitterSentimentDaily ({ twitterSentiment }) {
    if (_.isEmpty(twitterSentiment)) return []
    // oldest to most recent
    const sortSentiment = twitterSentiment.map(t => t).sort((a, b) => a.search_metadata.end_time_unix - b.search_metadata.end_time_unix)

    const dailyAverage = sortSentiment.map(sentiment => {
      const date = moment(sentiment.search_metadata.end_time).format('DD-MM')
      const totalScore = sentiment.statuses.map(status => status.score).reduce((acc, cur) => acc + cur)
      const averageScore = Math.round(totalScore / sentiment.statuses.length * 100) / 100
      return { date, averageScore }
    })

    return dailyAverage
  }
}
