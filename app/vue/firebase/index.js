import * as firebase from 'firebase'
import { config } from './config'


firebase.initializeApp(config)


const database = firebase.database()


const storage = firebase.storage()


const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })


export { database, storage, firestore }

export default firebase
