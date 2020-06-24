import axios from 'axios'

export default {
  namespaced: true,
  state: {
    isOpenModal: false,
    modalContent: '',
    isLoading: false,
    rate: 1,
    parsePrice: false,
    error: ''
  },
  mutations: {
    SET_ISOPEN_MODAL(state, data) {
      state.isOpenModal = data
    },
    SET_IS_LOADING(state, data) {
      state.isLoading = data
    },
    SET_RATE(state, data) {
      state.rate = data
    },
    SET_PARSE_PRICE(state, data) {
      state.parsePrice = data
    },
    SET_ERROR(state, data) {
      console.log('run', data)

      state.error = data
    },
    SET_MODAL_CONTENT(state, data) {
      state.modalContent = data
    }
  },
  actions: {
    setIsOpenModal({ commit }, data) {
      commit('SET_ISOPEN_MODAL', data)
    },
    setIsLoading({ commit }, data) {
      commit('SET_IS_LOADING', data)
    },
    setParsePrice({ commit }, data) {
      commit('SET_PARSE_PRICE', data)
    },
    async setRate({ commit }) {
      axios
        .get(
          'http://apilayer.net/api/live?access_key=027dfa4ds93ecb8b7f972f63bd2f180467&currencies=EUR,GBP,CAD,PLN,VND&source=USD&format=1'
        )
        .then(d => commit('SET_RATE', d.data.quotes.USDVND))
        .catch(() => commit('SET_RATE', 23265.5))
    },
    setModalContent({ commit }, data) {
      commit('SET_MODAL_CONTENT', data)
    }
  }
}
