import { Store } from 'vuex'

// modules
import error from './modules/error'
import app from './modules/app'
import auth from './modules/auth'

const createStore = () => {
  return new Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
      error,
      app,
      auth
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
      async nuxtClientInit({ state, dispatch }, context) {
        try {
          dispatch('auth/watchAuthState')
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
