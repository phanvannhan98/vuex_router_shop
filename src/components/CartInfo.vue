<template>
  <div v-if="cart.length" class="table-responsive cart_info">
    <table class="table table-condensed">
      <thead>
        <tr class="cart_menu">
          <td class="image">Item</td>
          <td class="description"></td>
          <td class="price">Price</td>
          <td class="quantity">Quantity</td>
          <td class="total">Total</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <CartItem v-for="(c, i) in cart" :key="i" :cartItem="c" />
      </tbody>
    </table>
  </div>
  <div v-else class="cart-empty">
    <img width="200px" src="/images/cart/giotrong.png" alt="" />
    <p class="cart-noti">Giỏ hàng của bạn còn trống!</p>
  </div>
</template>

<script>
import CartItem from './CartItem'
export default {
  components: {
    CartItem
  },
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  computed: {
    isHomePage() {
      return this.$route.name === 'shop'
    }
  }
}
</script>

<style scoped>
.cart-empty {
  text-align: center;
  padding: 20px;
  border: 1px solid #e6e4df;
}
.cart-noti {
  color: rgba(0, 0, 0, 0.4);
  font-weight: bold;
  margin: 0;
  margin-top: 10px;
  text-align: center;
}
.wrapper-cart-home .table {
  margin-bottom: 0 !important;
}
.wrapper-cart-home .cart_info {
  margin-bottom: 0 !important;
}
</style>
