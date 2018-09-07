import Vue from 'vue'
import Vuex from 'vuex'

// modules
import error from './modules/error'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    error,
    auth
  },
  strict: process.env.NODE_ENV !== 'production'
})
