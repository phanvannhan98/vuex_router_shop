import firebase from 'firebase'
import Services from '../services/EventService'

const user = {
  namespaced: true,
  state: {
    userInfo: {},
    isAuthenticated: false
  },
  mutations: {
    LOG_IN(state, userInfo) {
      state.isAuthenticated = true
      state.userInfo = userInfo
    },
    LOG_OUT(state) {
      state.isAuthenticated = false
      state.userInfo = {}
    }
  },
  actions: {
    async checkLogin({ commit }, params) {
      const { username, password } = params
      commit('utils/SET_IS_LOADING', true, { root: true })

      await firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then(result => {
          commit('LOG_IN', result.user)
        })
        .catch(() => {
          commit('utils/SET_ERROR', 'Wrong email or password!', { root: true })
        })
        .then(() => {
          setTimeout(() => {
            commit('utils/SET_IS_LOADING', false, { root: true })
            commit('utils/SET_ERROR', '', { root: true })
          }, 1000)
        })
    },
    async getInfoUser({ commit }) {
      commit('utils/SET_IS_LOADING', true, { root: true })
      const info = await Services.getInfo()

      if (info.uid) commit('LOG_IN', info)

      setTimeout(() => {
        commit('utils/SET_IS_LOADING', false, { root: true })
      }, 0)
    },
    logout({ commit }) {
      commit('utils/SET_IS_LOADING', true, { root: true })
      commit('LOG_OUT')
      setTimeout(() => {
        commit('utils/SET_IS_LOADING', false, { root: true })
      }, 0)
    }
  }
}

export default user
