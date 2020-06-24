import EventService from '../services/EventService'

const products = {
  namespaced: true,
  state: {
    products: []
  },
  mutations: {
    GET_PRODUCT_LIST(state, data) {
      state.products = data
    }
  },
  actions: {
    async getProductList({ commit }) {
      commit('utils/SET_IS_LOADING', true, { root: true })

      const data = await EventService.getData('products')
      commit('GET_PRODUCT_LIST', data.data)
      commit('utils/SET_IS_LOADING', false, { root: true })
    },
    async getProductListByName({ commit }, { field, txt }) {
      commit('utils/SET_IS_LOADING', true, { root: true })

      const data = await EventService.getDataFilter('products', field, txt)
      commit('GET_PRODUCT_LIST', data.data)
      commit('utils/SET_IS_LOADING', false, { root: true })
    }
  }
}

export default products
