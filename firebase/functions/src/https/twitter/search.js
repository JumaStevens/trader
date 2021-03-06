import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { configTwitter } from './../../config/twitter'
const express = require('express')
const cors = require('cors')
const Twitter = require('twitter')


// create express instance
const app = express()


// automatically allow cross-origin requests
app.use(cors({ origin: true }))


// authenticate Twitter client
const client = new Twitter(configTwitter)


// query Twitter for keywords
app.post('/', async (req, res) => {
  try {

    // twitter parameters
    const { until, since_id } = req.body

    // parameters documentation
    // https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html
    const searchConfig = {
      q: 'btc',
      lang: 'en',
      result_type: 'recent',
      count: 100,
      until,
      since_id
    }

    const twitterRes = await client.get('search/tweets', searchConfig)
    res.status(200).send(twitterRes)
  }
  catch (e) {
    console.error('catch error: ', e)
    res.status(400).send('Error: A wild Error appeared!')
  }
})


// https://us-central1-trader-814b5.cloudfunctions.net/https-twitterSearch
export const listener = functions.https.onRequest(app)
