const state = {
  token: null,
  user: null,
  isUserLoggedIn: false,
}
//mutation
const mutations = {
  setToken(state, token) {
    state.token = token
    if (token) {
      state.isUserLoggedIn = true
    } else {
      state.isUserLoggedIn = false
    }
  },
  setUser(state, user) {
    state.user = user
  }
}
// const getters = {
//   getToken(state) {
//     return state.token
//   }
// }
//actions
const actions = {
  setToken({
    commit
  }, token) {
    commit('setToken', token)
  },
  setUser({
    commit
  }, user) {
    commit('setUser', user)
  }
}
//export variables
export const auth ={
  namespaced: true,
  state,
  actions,
  mutations,
 
}
