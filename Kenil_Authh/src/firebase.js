import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
 apiKey: "AIzaSyC9od_LWmxwe_m1ymI6ZwCLA4FbwxHzyzI",
  authDomain: "reactauth-8ca1a.firebaseapp.com",
  projectId: "reactauth-8ca1a",
  storageBucket: "reactauth-8ca1a.appspot.com",
  messagingSenderId: "103694817107",
  appId: "1:103694817107:web:f0aac8c7d84d00cea2b3a6"
})

export const auth = app.auth()
export default app
