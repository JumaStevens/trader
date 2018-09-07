import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { configTwitter } from './../../config/twitter'
const express = require('express')
const cors = require('cors')
const Twitter = require('twitter')
const app = express()

// Automatically allow cross-origin requests
app.use(cors({ origin: true }))


// authenticate Twitter client
const client = new Twitter(configTwitter)

//
app.post('/', async (req, res) => {
  try {
    console.log('SHOW ME THE MONEY')
    console.log('req: ', req)
    console.log('req body: ', req.body)
    const query = { q: 'btc' }
    const twitterRes = await client.get('search/tweets', query)
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
