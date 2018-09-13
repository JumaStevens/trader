export default {
  SET_TWEETS_METADATA (state, { metadata }) {
    state.tweetsMetadata = metadata
    console.log('SET_TWEETS_METADATA: ', metadata)
  }
}
