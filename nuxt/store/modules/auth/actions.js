import { auth, database } from '~/plugins/firebase'

export default {
  watchAuthState({ commit, dispatch }) {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        commit('SET_AUTH_USER', { authUser })
      } else {
        commit('DELETE_AUTH_USER')
      }
    })
  },

  async createUserWithEmailAndPassword({}, { email, password }) {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
    }
    catch (e) {
      console.error(e)
    }
  },

  async signInWithEmailAndPassword({}, { email, password }) {
    try {
      await auth.signInWithEmailAndPassword(email, password)
    }
    catch (e) {
      console.error(e)
    }
  },

  async signOut() {
    try {
      await auth.signOut()
    }
    catch (e) {
      console.error(e)
    }
  }
}
