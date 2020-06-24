const cart = {
  namespaced: true,
  state: {
    cart: []
  },
  mutations: {
    LOAD_CART(state, data) {
      state.cart = data
    },
    ADD_TO_CART(state, data) {
      let cartTemp = state.cart
      const productInCart = cartTemp.find(v => v.product.id === data.id)
      if (productInCart) {
        productInCart.amount += 1
      } else {
        cartTemp.push({ product: data, amount: 1 })
      }
      state.cart = [...cartTemp]
    },
    DELETE_ONE(state, data) {
      state.cart = state.cart.filter(v => v.product.id !== data)
    },
    UPDATE_AMOUNT(state, data) {
      let cartTemp = state.cart
      const productInCart = cartTemp.find(v => v.product.id === data.id)
      if (productInCart && data.amount > 0) {
        productInCart.amount = data.amount
      }
      state.cart = [...cartTemp]
    }
  },
  actions: {
    addToCart({ commit }, data) {
      commit('ADD_TO_CART', data)
      commit('utils/SET_MODAL_CONTENT', 'Đã Thêm vào giỏ hàng', { root: true })
    },
    deleteOne({ commit }, id) {
      commit('DELETE_ONE', id)
    },
    updateAmount({ commit }, data) {
      commit('UPDATE_AMOUNT', data)
    },
    loadCart({ commit }, data) {
      commit('LOAD_CART', data)
    }
  }
}

export default cart
