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
    console.log('WHAT DOES IT MEAN!')
    console.log('req: ', req)
    console.log('req body: ', req.body)
    console.log('req data: ', req.body.data)

    const text = req.body.data.text
    const result = sentiment.analyze(text)
    res.status(200).send(result)
  }
  catch (e) {
    console.error('catch error: ', e)
    res.status(400).send('Error: A wild Error appeared!')
  }
})


// https://us-central1-trader-814b5.cloudfunctions.net/https-analyzeSentiment
export const listener = functions.https.onRequest(app)
