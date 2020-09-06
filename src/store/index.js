// import Vue from 'vue'
import { createStore } from 'vuex/dist/vuex.esm-browser'

// Vue.use(Vuex)
const store = createStore({
  state: {
    username: '',
    email: '',
    userID: ''
  },
  mutations: {
    setUsername (state, username) {
      state.username = username
    },
    setEmail (state, email) {
      state.email = email
    },
    setUserID (state, userID) {
      state.userID = userID
    }
  }
})

export default store
