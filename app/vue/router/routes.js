import Index from '~/views/Index.vue'
import Auth from '~/views/Auth.vue'
import Account from '~/views/Account.vue'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  }
]
