import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Home from '@/components/Home'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      beforeEnter (to, from, next) {
        store.getters.checkUser ? next() : next('/sign-in')
      }
    }
  ]
})
