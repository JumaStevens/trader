const admin = require('firebase-admin')
const functions = require('firebase-functions')
import axios from 'axios'

const docRef = functions.firestore.document('tweets/{tweetsId}')


export const listener = docRef.onCreate(async (snapshot, context) => {
  try {

    const firestore = admin.firestore()

    // write to metadata
    const { search_metadata, statuses } = snapshot.data()
    await firestore.collection('tweetsMetadata').doc('metadata').set(search_metadata)

    // axios configuration
    const config = {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
      },
      method: 'post',
      url: 'https://us-central1-trader-814b5.cloudfunctions.net/https-analyzeSentiment/',
      data: { statuses }
    }

    // get sentiment analysis of tweets
    const { data } = await axios(config)

    // write results to database
    await firestore.collection('tweetsSentiment').add({ search_metadata, statuses: data })

    return
  }
  catch (e) {
    console.error(e)
    return
  }
})
