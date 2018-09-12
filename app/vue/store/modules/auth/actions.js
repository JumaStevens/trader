import firebase, { database } from '~/firebase'

const currentUser = () => firebase.auth().currentUser

export default {
  watchAuthState ({ commit, dispatch }) {
    firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        commit('SET_AUTH_USER', { authUser })
        // dispatch('presence/authPresence', {}, { root: true })
      } else {
        commit('DELETE_AUTH_USER')
      }
    })
  },


  async createUserWithEmailAndPassword ({}, payload) {
    try { await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password) }
    catch (e) { console.error(e) }
  },


  async signInWithEmailAndPassword ({}, payload) {
    try { await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password) }
    catch (e) { console.error(e) }
  },


  async signOut () {
    try { await firebase.auth().signOut() }
    catch (e) { console.error(e) }
  },


  async updateProfile ({ dispatch }, payload) {
    try {
      await currentUser().updateProfile(payload)

      await dispatch('users/updateCurrentUser', payload, { root: true })
      console.log('auth ---> ', payload)
    }
    catch (e) { console.error(e) }
  },


  async updateEmail ({}, payload) {
    try { await currentUser().updateEmail(payload.newEmail) }
    catch (e) { console.error(e) }
  },


  async sendEmailVerification ({}, payload) {
    try { await currentUser().useDeviceLanguage().sendEmailVerification() }
    catch (e) { console.error(e) }
  },


  async updatePassword ({}, payload) {
    try { await currentUser().updatePassword(payload.newPassword) }
    catch (e) { console.error(e) }
  },


  async sendPasswordResetEmail ({}, payload) {
    try { await currentUser().sendPasswordResetEmail(currentUser().email) }
    catch (e) { console.error(e) }
  },


  async deleteUserAccount ({ commit }, payload) {
    try {
      await currentUser().delete()
      commit('DELETE_AUTH_USER')
    }
    catch (e) { console.error(e) }
  },


  async reauthenticateWithCredential ({}, payload) {
    try { await currentUser().reauthenticateWithCredential(payload.credential) }
    catch (e) { console.error(e) }
  }
}
