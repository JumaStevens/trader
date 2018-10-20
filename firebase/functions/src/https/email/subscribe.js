import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
const express = require('express')
const cors = require('cors')


// create express instance
const app = express()


// automatically allow cross-origin requests
app.use(cors({ origin: true }))

// add email to launch list
app.post('/', async (req, res) => {
  try {

    // email address
    const { email } = req.body

    if (!email) throw 'Invalid email parameter.'

    console.log('email: ', email)

    const customersRef = admin.firestore().collection('emailLaunchList').doc()
    await customersRef.set({ email })

    res.status(200).send('Email successfully submitted')
  }
  catch (e) {
    console.error('catch error: ', e)
    res.status(400).send('Error: A wild Error appeared!')
  }
})


// https://us-central1-trader-814b5.cloudfunctions.net/https-emailSubscribe
export const listener = functions.https.onRequest(app)
