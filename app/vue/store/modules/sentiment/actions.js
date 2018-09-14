import firebase, { database, firestore } from '~/firebase'


export default {
  watchTwitterSentiment ({ commit }) {
    const success = (snapshot) => snapshot.forEach(child => commit('SET_TWITTER_SENTIMENT', { sentiment: child.data() }))

    const error = (err) => console.error(err)

    const docRef = firestore.collection('tweetsSentiment')
    docRef.onSnapshot(snapshot => success(snapshot), e => error(e))
  }
}
