import { Store } from 'vuex'


// modules
import error from './modules/error'
import app from './modules/app'
import auth from './modules/auth'
import coinbase from './modules/coinbase'


const createStore = () => {
  return new Store({
    strict: process.env.NODE_ENV !== 'production',


    modules: {
      error,
      app,
      auth,
      coinbase
    },


    actions: {
      async nuxtServerInit({ dispatch }, context) {
        try {
          return
        }
        catch(e) {
          console.error(e)
          throw e
        }
      },

      async nuxtClientInit({ state, commit, dispatch }, context) {
        try {
          commit('app/SET_IS_BROWSER')
          dispatch('auth/watchAuthState')
          dispatch('coinbase/feedInit')
          dispatch('coinbase/historicRateInit')
          return
        }
        catch(e) {
          console.error(e)
          throw e
        }
      }
    }
  })
}

export default createStore
