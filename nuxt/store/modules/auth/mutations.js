import Vue from 'vue'

export default {
  SET_AUTH_USER(state, { authUser }) {
    state.authUser = authUser.toJSON()
    console.log('SET_AUTH_USER: ', authUser)
  },

  DELETE_AUTH_USER(state) {
    state.authUser = null
    console.log('DELETE_AUTH_USER')
  }
}
