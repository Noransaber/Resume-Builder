import { create } from 'zustand'
import { auth, googleProvider, githubProvider } from '@/lib/firebase'
import { onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth'

type AuthState = {
  user: User | null
  loading: boolean
  init: () => void
  loginGoogle: () => Promise<void>
  loginGithub: () => Promise<void>
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  init: () => {
    onAuthStateChanged(auth, (u) => set({ user: u, loading: false }))
  },
  loginGoogle: async () => { await signInWithPopup(auth, googleProvider) },
  loginGithub: async () => { await signInWithPopup(auth, githubProvider) },
  logout: async () => { await signOut(auth) }
}))


