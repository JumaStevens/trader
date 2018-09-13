const admin = require('firebase-admin')
const functions = require('firebase-functions')


const docRef = functions.firestore.document('tweets/{tweetsId}')


export const listener = docRef.onCreate(async (snapshot, context) => {
  try {

    // write to metadata
    const { search_metadata } = snapshot.data()
    await admin.firestore().collection('tweetsMetadata').doc('metadata').set(search_metadata)

    return
  }
  catch (e) {
    console.error(e)
    return
  }
})
