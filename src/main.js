// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate'

import '@/assets/fonts/fonts.styl'

import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

Vue.use(Vuelidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyBfEWFDHKDjFZuyItfONwKe4unatEpaxP4',
      authDomain: 'hybrid-ai.firebaseapp.com',
      databaseURL: 'https://hybrid-ai.firebaseio.com',
      projectId: 'hybrid-ai',
      storageBucket: 'hybrid-ai.appspot.com',
      messagingSenderId: '523402187452',
      appId: '1:523402187452:web:a48648283a5477e85c76b9',
      measurementId: 'G-F3DVYJ7H38'
    }
    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        this.$store.dispatch('loggedUser', user)
      }
    })
  }
})
