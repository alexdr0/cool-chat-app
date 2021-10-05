import { createStore } from 'vuex'

export default createStore({
  state: {
    user: [{}]
  },
  mutations: {
    setUser (state, payload) {
      state.user[0] = payload.user
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
