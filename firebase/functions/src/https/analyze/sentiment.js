import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
const express = require('express')
const cors = require('cors')
const Sentiment = require('sentiment')


// create express instance
const app = express()

// automatically allow cross-origin requests
app.use(cors({ origin: true }))


const sentiment = new Sentiment()

// analyze the sentiment of text
app.post('/', async (req, res) => {
  try {

    // twitter statuses
    const { statuses } = req.body

    // get sentiment analysis of tweets
    const results = statuses.map(status => {
      const { created_at, created_at_unix, text } = status
      const { score } = sentiment.analyze(text)
      return { score, created_at, created_at_unix }
    })

    res.status(200).send(results)
  }
  catch (e) {
    console.error('catch error: ', e)
    res.status(400).send('Error: A wild Error appeared!')
  }
})


// https://us-central1-trader-814b5.cloudfunctions.net/https-analyzeSentiment
export const listener = functions.https.onRequest(app)
