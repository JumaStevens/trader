export default {
  SET_TWITTER_SENTIMENT (state, { sentiment }) {
    state.twitterSentiment.push(sentiment)
    console.log('SET_TWITTER_SENTIMENT: ', state.twitterSentiment)
  }
}
