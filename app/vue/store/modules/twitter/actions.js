import axios from 'axios'
import moment from 'moment'
import _ from 'lodash'
import { twitterTimestamp } from '~/utils'
import firebase, { database, firestore } from '~/firebase'


export default {
  async initTweets ({ state, dispatch }) {
    try {

      // retrieve tweets metadata
      const metadata = state.tweetsMetadata
      const { end_time, end_time_unix, max_id } = _.isEmpty(metadata) ? await dispatch('fetchTweetsMetadata') : metadata

      // get today's date
      const today = moment().format('YYYY-MM-DD')

      // exit if last tweets retrieval was today
      if (moment(end_time).format('YYYY-MM-DD') === today) {
        console.log('tweets collection is all caught up!')
        return
      }

      // get date 7 days ago
      const lastWeek = moment().subtract(7, 'day')

      // default fetchTweets data
      let until = lastWeek.format('YYYY-MM-DD')
      let since_id = 0

      // if last tweets fetch was within 7 days, retrieve since last fetch
      if (end_time_unix > lastWeek.unix()) {
        until = moment(end_time).add(1, 'day').format('YYYY-MM-DD')
        since_id = max_id
      }

      // retrieve tweets from Twitter
      const { search_metadata, statuses } = await dispatch('fetchTweets', { until, since_id })

      // write tweets to database
      await dispatch('writeTweets', { search_metadata, statuses })

      return
    }
    catch (e) {
      console.error(e)
    }
  },


  async fetchTweets ({}, { until, since_id }) {
    try {

      // axios configuration
      const config = {
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
        },
        method: 'post',
        url: 'https://us-central1-trader-814b5.cloudfunctions.net/https-twitterSearch/',
        data: {
          until,
          since_id
        }
      }

      const { data } = await axios(config)

      return data
    }
    catch (e) {
      console.error(e)
    }
  },


  async writeTweets ({}, { search_metadata, statuses }) {
    try {

      // format twitter search metadata
      const startTime = statuses[statuses.length - 1].created_at
      const endTime = statuses[0].created_at

      const metadata = {
        start_time: twitterTimestamp(startTime).format(),
        start_time_unix: twitterTimestamp(startTime).unix(),
        end_time: twitterTimestamp(endTime).format(),
        end_time_unix: twitterTimestamp(endTime).unix(),
        max_id: search_metadata.max_id,
        since_id: search_metadata.since_id
      }

      // format twitter statuses
      const tweets = statuses.map(status => {
        return {
          id: status.id,
          text: status.text,
          created_at: twitterTimestamp(status.created_at).format(),
          lang: status.lang
        }
      })

      // write to database
      const snapshot = await firestore.collection('tweets').add({
        search_metadata: metadata,
        statuses: tweets
      })

      return snapshot
    }
    catch (e) {
      console.error(e)
    }
  },


  async fetchTweetsMetadata ({ commit }) {
    try {
      const docRef = firestore.collection('tweetsMetadata').doc('metadata')
      const snapshot = await docRef.get()
      const metadata = snapshot.data()
      commit('SET_TWEETS_METADATA', { metadata })
      return metadata
    }
    catch (e) {
      console.error(e)
    }
  },


  watchTweetsMetadata ({ commit, dispatch }) {
    const success = (snapshot) => {
      commit('SET_TWEETS_METADATA', { metadata: snapshot.data() })
      dispatch('initTweets')
    }

    const error = (err) => console.error(err)

    const docRef = firestore.collection('tweetsMetadata').doc('metadata')
    docRef.onSnapshot(snapshot => success(snapshot), e => error(e))
  }
}
