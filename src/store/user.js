import firebase from 'firebase/app'

import User from './user_help'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async registerUser ({commit}, {displayName, email, password}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        let user = null
        await firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
          user = firebase.auth().currentUser
        }).then(function () {
          user.updateProfile({
            displayName: displayName
          })
        })
        const curentUser = await firebase.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', new User(curentUser.uid, curentUser.user.displayName))
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid, user.user.displayName))
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    loggedUser ({commit}, payload) {
      commit('setUser', new User(payload.uid, payload.displayName))
    },
    logoutUser ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
      commit('setLoading', false)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    checkUser (state) {
      return state.user !== null
    }
  }
}
