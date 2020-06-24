// import EventService from '../services/EventService'

const cateActived = {
  namespaced: true,
  state: {
    cateActived: ''
  },
  mutations: {
    SET_CATE_ACTIVED(state, data) {
      state.cateActived = data
    }
  },
  actions: {
    setCateActived({ commit }, payload) {
      commit('SET_CATE_ACTIVED', payload)
    }
  }
}

export default cateActived
