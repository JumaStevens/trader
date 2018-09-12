import axios from 'axios'
import moment from 'moment'
import firebase, { database, firestore } from '~/firebase'
firestore.settings({ timestampsInSnapshots: true })


export default {
  async fetchTweets ({ dispatch }) {
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
        }
      }

      const { data } = await axios(config)

      const tweets = data.statuses.map(status => {
         return {
           timestamp: status.created_at,
           text: status.text
         }
      })

      const startTime = () => moment({ h: moment().format('h') }).format()

      const endTime = () => moment(startTime()).add(1, 'hour').subtract(1, 'millisecond').format()



      console.log('startTime: ', startTime())
      console.log('endTime: ', endTime())
      console.log('data: ', data)
      // dispatch('writeTweets', { tweets, timestamp: timestamp() })
    }
    catch (e) {
      console.error(e)
    }
  },


  async writeTweets ({}, { tweets, timestamp }) {
    try {
      const data = {
        timestamp,
        tweets
      }
      const snapshot = await firestore.collection('tweets').add(data)
      console.log('snapshot: ', snapshot)
    }
    catch (e) {
      console.error(e)
    }
  }
}
