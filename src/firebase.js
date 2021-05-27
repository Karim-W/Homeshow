import firebase from  'firebase'
import 'firebase/auth'

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    apiKey: "AIzaSyCELWjsjbwihWggIbjdCxc68jrMP1TBsrI",
    authDomain: "shome-22c21.firebaseapp.com",
    databaseURL: "https://shome-22c21-default-rtdb.firebaseio.com",
    projectId: "shome-22c21",
    storageBucket: "shome-22c21.appspot.com",
    messagingSenderId: "902265567623",
    appId: "1:902265567623:web:5ee83ae70fc95569d5bb22",
    measurementId: "G-3QEMZNT8JH"
})

export const auth = app.auth()
export default app