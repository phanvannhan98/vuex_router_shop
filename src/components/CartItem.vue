<template>
  <tr>
    <td class="cart_product">
      <a href=""
        ><img
          :src="cartItem.product.color[0].image"
          alt=""
          class="cart_product_img"
          style="width:110px; height: 110px"
      /></a>
    </td>
    <td class="cart_description">
      <h4>
        <a href="">{{ cartItem.product.name }}</a>
      </h4>
      <p>Web ID: 1089772</p>
    </td>
    <td class="cart_price">
      <p>{{ parse(cartItem.product.price) }}</p>
    </td>
    <td class="cart_quantity">
      <div class="cart_quantity_button">
        <a class="cart_quantity_up" @click.prevent="onChange(1)" href="#">
          +
        </a>
        <input
          class="cart_quantity_input"
          type="text"
          name="quantity"
          :value="cartItem.amount"
          autocomplete="off"
          size="2"
          @keyup.enter="onChange()"
        />
        <a class="cart_quantity_down" @click.prevent="onChange(-1)" href="#">
          -
        </a>
      </div>
    </td>
    <td class="cart_total">
      <p class="cart_total_price">
        {{ parse(cartItem.product.price * cartItem.amount) }}
      </p>
    </td>
    <td class="cart_delete">
      <a
        class="cart_quantity_delete"
        href=""
        @click.prevent="deleteOne(cartItem.product.id)"
        ><i class="fa fa-times"></i
      ></a>
    </td>
  </tr>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    cartItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('utils', ['parsePrice', 'rate'])
  },
  methods: {
    ...mapActions('cart', ['deleteOne', 'updateAmount']),
    onChange(num) {
      let amountUpdate = num ? num + this.cartItem.amount : +event.target.value
      if (amountUpdate > 0)
        this.updateAmount({
          id: this.cartItem.product.id,
          amount: amountUpdate
        })
    },
    parse(num) {
      let formatter = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'VND'
      })

      if (this.parsePrice) {
        return formatter.format(num * this.rate)
      }

      return '$ ' + num
    }
  }
}
</script>
<style scoped>
.wrapper-cart-home a {
  font-size: 13px !important;
}
.wrapper-cart-home .cart_description p {
  font-size: 11px !important;
}
.cart_product_img {
  width: 110px;
  height: 110px;
}
.wrapper-cart-home .cart_product_img {
  width: 60px !important;
  height: 60px !important;
}
.wrapper-cart-home .cart_delete {
  margin-top: 45px;
}
</style>
