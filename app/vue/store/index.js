import Vue from 'vue'
import Vuex from 'vuex'

// modules
import error from './modules/error'
import app from './modules/app'
import auth from './modules/auth'
import twitter from './modules/twitter'
import sentiment from './modules/sentiment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    error,
    app,
    auth,
    twitter,
    sentiment
  },
  strict: process.env.NODE_ENV !== 'production'
})
