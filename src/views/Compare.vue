<template>
  <div class="container compare-area">
    <div class="breadcrumbs">
      <ol class="breadcrumb">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li class="active">Compare</li>
      </ol>
    </div>
    <div v-if="isLoading" class="row">
      <Loading />
    </div>
    <div v-if="compare.length" class="row wrapper-product">
      <div
        class="compare-area__product"
        v-for="product in compare"
        :key="product.id"
      >
        <h2 class="compare-area__product__name">{{ product.name || '' }}</h2>
        <img :src="product.image" alt="" />
        <h2 class="compare-area__product__price">{{ product.price || 0 }} $</h2>
        <h3>{{ product.color.length }} colors</h3>
        <div class="wrapper-box">
          <div
            v-for="(cl, i) in product.color"
            :key="i"
            class="box-color div--color"
            :style="`--color:${cl.color}`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '@/components/Loading'
export default {
  data() {
    return {
      colorActive: 0,
      run: true
    }
  },
  components: {
    Loading
  },
  computed: {
    ...mapState('products', ['products']),
    ...mapState('utils', ['isLoading']),
    compare() {
      const { one, two } = this.$route.params
      const arr = this.products.filter(v => v.id === +one || v.id === +two)
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.compare-area {
  position: relative;
  min-height: 45vh;

  .wrapper-product {
    display: flex;
    justify-content: space-around;
    padding-bottom: 40px;
  }

  &__product {
    border: 1px solid #ccc;
    padding: 20px;

    &__name {
      color: #a09070;
    }
    &__price {
      text-align: right;
      color: #fff;
      padding-right: 20px;
      background: #fe980f;
    }
  }
  .wrapper-box {
    display: flex;

    .box-color {
      width: 50px;
      height: 50px;
      margin-right: 8px;
      background: var(--color);
      opacity: 0.6;
    }
  }
  .div--color {
    border: 1px solid var(--color);
    &:hover {
      background: var(--color);
      opacity: 0.3;
      transition: 0.3s;
      cursor: pointer;
    }
  }
}
</style>
