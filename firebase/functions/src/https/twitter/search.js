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
    console.log('SHOW ME THE MONEY')
    console.log('req: ', req)
    console.log('req body: ', req.body)
    console.log('req data: ', req.body.data)

    const searchConfig = {
      q: 'btc',
      lang: 'en',
      result_type: 'recent',
      count: 100,
    }

    const twitterRes = await client.get('search/tweets', searchConfig)
    console.log('twitterRes: ', twitterRes)
    res.status(200).send(twitterRes)
  }
  catch (e) {
    console.error('catch error: ', e)
    res.status(400).send('Error: A wild Error appeared!')
  }
})


// https://us-central1-trader-814b5.cloudfunctions.net/https-twitterSearch
export const listener = functions.https.onRequest(app)



/*
search api limit: 450 / 15minutes

7days * 24hrs * 60mins = 10,080 minutes

10,080mins / 60mins = 168 requests (aka 60minute increments of tweets equals 168 requests to the API)

168requests * 100tweets = 16,800tweets (for a week period)
*/
