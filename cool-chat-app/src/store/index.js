import { createStore } from 'vuex'

export default createStore({
  state: {
    user: [{}]
  },
  mutations: {
    setUser (state, user) {
      state.user[0] = user
    }
  },
  actions: {
  },
  getters: {
    getUser (state) {
      return state.user[0]
    }
  },
  modules: {
  }
})
