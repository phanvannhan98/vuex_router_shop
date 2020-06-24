<template>
  <div>
    <Header />
    <ModalNoti v-if="isOpenModal" :modalContent="modalContent" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ModalNoti from '@/components/ModalNoti'

import { mapState, mapActions } from 'vuex'
// import firebase from 'firebase'
import { getCartLocal, setCartLocal } from '@/utils/updateLS.js'
export default {
  components: {
    Footer,
    Header,
    ModalNoti
  },
  computed: {
    ...mapState('utils', ['isOpenModal', 'modalContent']),
    ...mapState('cart', ['cart'])
  },
  async mounted() {
    await this.getProductList()
    await this.getCategoryList()
    await this.setRate()
    await this.loadWishList()
    this.loadCart(getCartLocal())
  },
  methods: {
    ...mapActions('products', ['getProductList']),
    ...mapActions('categories', ['getCategoryList']),
    ...mapActions('wishList', ['loadWishList']),
    ...mapActions('cart', ['loadCart']),
    ...mapActions('utils', ['setRate'])
  },
  watch: {
    cart() {
      setCartLocal(this.cart)
    }
  }
}
</script>
