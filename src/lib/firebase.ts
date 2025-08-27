import { initializeApp, getApps } from 'firebase/app'
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const isBrowser = typeof window !== 'undefined'

let app: ReturnType<typeof initializeApp> | null = null
let authImpl: any = null
let dbImpl: any = null
let storageImpl: any = null
let googleProviderImpl: any = null
let githubProviderImpl: any = null

try {
  if (isBrowser) {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    }
    // Ensure minimal fields exist
    if (firebaseConfig.projectId && firebaseConfig.appId) {
      app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
      authImpl = getAuth(app)
      dbImpl = getFirestore(app)
      storageImpl = getStorage(app)
      googleProviderImpl = new GoogleAuthProvider()
      githubProviderImpl = new GithubAuthProvider()
    }
  }
} catch {}

export const auth = authImpl
export const db = dbImpl
export const storage = storageImpl
export const googleProvider = googleProviderImpl
export const githubProvider = githubProviderImpl
export const firebaseReady = Boolean(app)


