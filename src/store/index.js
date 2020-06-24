import Vue from 'vue'
import Vuex from 'vuex'

import products from './products'
import categories from './categories'
import cateActived from './cateActived'
import cart from './cart'
import user from './user'
import wishList from './wishList'
import utils from './utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { test: 'oke' },
  modules: {
    products,
    categories,
    cateActived,
    cart,
    user,
    utils,
    wishList
  },
  getters: {
    getTotalPrice: () => {
      return 'Hello'
    },
    getLengthCart: state => {
      return state.cart.cart.length
    },
    getUserInfo: state => {
      return state.user.userInfo
    }
  }
})
