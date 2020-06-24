<template>
  <div class="col-sm-4">
    <div class="product-image-wrapper">
      <div
        class="single-products"
        @click="$router.push(`product/${product.id}`)"
      >
        <div class="productinfo text-center">
          <img :src="product.image" alt />
          <h2>{{ parse(+product.price) }}</h2>
          <p>{{ product.name }}</p>
          <a href="#" @click="onAddToCart" class="btn btn-default add-to-cart">
            <i class="fa fa-shopping-cart"></i>Add to cart
          </a>
        </div>
        <div class="product-overlay">
          <div class="overlay-content">
            <h2>{{ parse(+product.price) }}</h2>
            <p>{{ product.name }}</p>
            <a
              href="#"
              @click="onAddToCart"
              class="btn btn-default add-to-cart"
            >
              <i class="fa fa-shopping-cart"></i>Add to cart
            </a>
          </div>
        </div>
      </div>
      <div class="choose">
        <ul class="nav nav-pills nav-justified">
          <li @click.prevent="onAddToWishList">
            <a href> <i class="fa fa-plus-square"></i>Add to wishlist </a>
          </li>
          <li
            @click.prevent="$emit('onReqCompare', product.id)"
            :class="{ active: isActiveCompare(product.id) }"
          >
            <a href> <i class="fa fa-plus-square"></i>Add to compare </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    compare: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState('utils', ['rate']),
    ...mapState('utils', ['parsePrice']),
    ...mapState('user', ['isAuthenticated', 'userInfo'])
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    ...mapActions('utils', ['setIsOpenModal', 'setModalContent']),
    ...mapActions('wishList', ['addToWishList']),
    onAddToCart() {
      event.preventDefault()
      event.stopPropagation()
      this.addToCart(this.product)
      this.setIsOpenModal(true)
      setTimeout(() => this.setIsOpenModal(false), 1500)
    },
    isActiveCompare(id) {
      return this.compare.find(v => v === id) !== undefined
    },
    onAddToWishList() {
      const ele = event.currentTarget

      ele.classList.add('active')

      if (!this.isAuthenticated) this.$router.push('/login')
      else {
        this.addToWishList({
          product: this.product,
          idUser: this.userInfo.uid
        })
      }
      setTimeout(() => {
        ele.classList.remove('active')
        this.setIsOpenModal(false)
      }, 1500)
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
