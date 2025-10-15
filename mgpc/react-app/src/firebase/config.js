import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCGc7LLruMlJzcCxWffO3Mf4M8I7F5xfQA",
  authDomain: "mgpc-v3.firebaseapp.com",
  projectId: "mgpc-v3",
  storageBucket: "mgpc-v3.appspot.com",
  messagingSenderId: "1039506572515",
  appId: "1:1039506572515:android:f39b04b28a9ca70b3e71d6"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
