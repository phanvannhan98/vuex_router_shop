import Services from '../services/EventService'

const wishList = {
  namespaced: true,
  state: {
    wishList: []
  },
  mutations: {
    LOAD_WISHLIST(state, data) {
      state.wishList = data
    },
    ADD_TO_WISHLIST(state, data) {
      state.wishList = [...state.wishList, data]
    },
    DELETE_ONE(state, id) {
      state.wishList = state.wishList.filter(v => v.id !== id)
    }
  },
  actions: {
    async addToWishList({ commit, state }, data) {
      if (
        !state.wishList.find(
          v => v.product.id === data.product.id && v.idUser === data.idUser
        )
      ) {
        commit('utils/SET_ISOPEN_MODAL', true, {
          root: true
        })
        commit('utils/SET_MODAL_CONTENT', 'Đã Thêm vào dánh sách Yêu Thích', {
          root: true
        })
        commit('ADD_TO_WISHLIST', data)
        await Services.addNew('wishList', data)
      }
    },
    async deleteOne({ commit }, id) {
      await Services.deleteByID('wishList', id)
      commit('DELETE_ONE', id)
    },
    async loadWishList({ commit }) {
      const data = await Services.getData('wishList')
      commit('LOAD_WISHLIST', data.data)
    }
  }
}

export default wishList
