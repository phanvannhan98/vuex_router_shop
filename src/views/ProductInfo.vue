<template>
  <div class="container product-info">
    <div class="breadcrumbs">
      <ol class="breadcrumb">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li class="active">Product {{ product.name || '' }}</li>
      </ol>
    </div>

    <div v-if="isLoading" class="row">
      <Loading />
    </div>
    <div v-else class="row">
      <div class="col-md-6 product-info-img">
        <div class="product-info-img__img">
          <img v-if="run" :src="image" alt="" />
        </div>
      </div>
      <div class="col-md-6">
        <h2>Name: {{ product.name || '' }}</h2>
        <h2>Price: {{ product.price || 0 }} $</h2>
        <div class="product-info-color">
          <h3>Color:</h3>
          <div class="wrapper-box">
            <div
              v-for="(cl, i) in product.color"
              :key="i"
              class="box-color div--color"
              :class="{ active: colorActive === i }"
              :style="`--color:${cl.color}`"
              @click="onChangeColor(i)"
            ></div>
          </div>
        </div>
        <h3>Amount: {{ amount }}</h3>
        <div>
          <button
            class="btn-add-cart"
            :disabled="amount === 0"
            @click="onAddToCart"
          >
            ADD TO CART
          </button>
          <button
            class="btn-add-cart"
            :disabled="amount === 0"
            @click="$router.push('/cart')"
          >
            GO TO CART
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Loading from '@/components/Loading'

export default {
  data() {
    return {
      colorActive: 0,
      run: true
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  components: {
    Loading
  },
  computed: {
    ...mapState('products', ['products']),
    ...mapState('cart', ['cart']),
    ...mapState('utils', ['isLoading']),
    product() {
      const product = this.products.find(v => v.id === +this.$route.params.id)

      return product || {}
    },
    amount() {
      const { product, colorActive } = this
      return (
        (product &&
          product.color &&
          product.color.length &&
          product.color[colorActive].amount) ||
        0
      )
    },
    image() {
      const { product, colorActive } = this
      return (
        (product &&
          product.color &&
          product.color.length &&
          product.color[colorActive].image) ||
        0
      )
    }
  },

  methods: {
    ...mapActions('cart', ['addToCart']),
    ...mapActions('utils', ['setIsOpenModal']),
    onAddToCart() {
      const product = { ...this.product },
        colorActive = this.colorActive

      product.color = [product.color[colorActive]]
      this.addToCart(product)
      window.scrollTo(0, 0)
      this.setIsOpenModal(true)
      setTimeout(() => this.setIsOpenModal(false), 1500)
    },
    onChangeColor(i) {
      if (this.colorActive !== +i) {
        this.run = false
        this.colorActive = +i
        setTimeout(() => (this.run = true), 0)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.product-info {
  position: relative;
  min-height: 45vh;
  &-color {
    display: flex;
    align-items: center;
  }

  &-img {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    &__img {
      border: 1px solid #ccc;
      text-align: center;
      padding: 20px 0;
      min-height: 291px;
      min-width: 270px;
      overflow: hidden;
      img {
        animation: rightToLeft 0.5s;

        @keyframes rightToLeft {
          0% {
            margin-left: 100%;
          }
          100% {
            margin-left: 0;
          }
        }
      }
    }
  }
}

.wrapper-box {
  display: flex;
  margin-left: 10px;

  .box-color {
    width: 50px;
    height: 50px;
    margin-right: 8px;
  }
}
.div--color {
  border: 1px solid var(--color);
  &:hover {
    background: var(--color);
    opacity: 0.5;
    transition: 0.3s;
    cursor: pointer;
  }
}
.btn-add-cart {
  margin-top: 20px;
  margin-right: 20px;
  background: rgba(255, 87, 34, 0.1);
  border: 1px solid #ee4d2d;
  outline: none;
  padding: 10px;
  color: #ee4d2d;
}
.active {
  background: var(--color);
  opacity: 0.5;
}
</style>
