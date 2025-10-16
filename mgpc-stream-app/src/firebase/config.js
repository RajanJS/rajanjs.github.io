import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK5IpNZxcIIrG3DVtM4zFXPNTExTPwW0A",
  authDomain: "mgpc-v3.firebaseapp.com",
  projectId: "mgpc-v3",
  storageBucket: "mgpc-v3.firebasestorage.app",
  messagingSenderId: "1039506572515",
  appId: "1:1039506572515:web:17b6dbf49357d9673e71d6",
  measurementId: "G-4MG6PQ4BBN"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Initialize App Check for security
if (typeof window !== 'undefined') {
  try {
    // Enable debug token for development
    if (import.meta.env.DEV) {
      window.FIREBASE_APPCHECK_DEBUG_TOKEN = '719e574b-c954-4eb9-8d75-0092b72ffd31'
    }
    
    // Initialize App Check for web app
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider('6LdnH-wrAAAAANDZzD0zgUzW20xB2NjVPCDuHKRW'),
      isTokenAutoRefreshEnabled: true
    })    
  } catch (error) {
    console.warn('App Check initialization failed:', error)
  }
}
