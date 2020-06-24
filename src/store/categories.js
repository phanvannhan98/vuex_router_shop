import EventService from '../services/EventService'

const categories = {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    GET_CATEGORY_LIST(state, data) {
      state.categories = data
    }
  },
  actions: {
    async getCategoryList({ commit }) {
      const data = await EventService.getData('categories')
      commit('GET_CATEGORY_LIST', data.data)
    }
  }
}

export default categories
