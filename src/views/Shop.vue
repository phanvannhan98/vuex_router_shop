<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="left-sidebar">
            <h2>Category</h2>
            <div class="panel-group category-products" id="accordian">
              <!--category-productsr-->
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordian"
                      href="#sportswear"
                    >
                      <span class="badge pull-right">
                        <i class="fa fa-plus"></i>
                      </span>
                      Sportswear
                    </a>
                  </h4>
                </div>
                <div id="sportswear" class="panel-collapse collapse">
                  <div class="panel-body">
                    <ul>
                      <li>
                        <a href>Nike</a>
                      </li>
                      <li>
                        <a href>Under Armour</a>
                      </li>
                      <li>
                        <a href>Adidas</a>
                      </li>
                      <li>
                        <a href>Puma</a>
                      </li>
                      <li>
                        <a href>ASICS</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordian"
                      href="#mens"
                    >
                      <span class="badge pull-right">
                        <i class="fa fa-plus"></i>
                      </span>
                      Mens
                    </a>
                  </h4>
                </div>
                <div id="mens" class="panel-collapse collapse">
                  <div class="panel-body">
                    <ul>
                      <li>
                        <a href>Fendi</a>
                      </li>
                      <li>
                        <a href>Guess</a>
                      </li>
                      <li>
                        <a href>Valentino</a>
                      </li>
                      <li>
                        <a href>Dior</a>
                      </li>
                      <li>
                        <a href>Versace</a>
                      </li>
                      <li>
                        <a href>Armani</a>
                      </li>
                      <li>
                        <a href>Prada</a>
                      </li>
                      <li>
                        <a href>Dolce and Gabbana</a>
                      </li>
                      <li>
                        <a href>Chanel</a>
                      </li>
                      <li>
                        <a href>Gucci</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordian"
                      href="#womens"
                    >
                      <span class="badge pull-right">
                        <i class="fa fa-plus"></i>
                      </span>
                      Womens
                    </a>
                  </h4>
                </div>
                <div id="womens" class="panel-collapse collapse">
                  <div class="panel-body">
                    <ul>
                      <li>
                        <a href>Fendi</a>
                      </li>
                      <li>
                        <a href>Guess</a>
                      </li>
                      <li>
                        <a href>Valentino</a>
                      </li>
                      <li>
                        <a href>Dior</a>
                      </li>
                      <li>
                        <a href>Versace</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="panel panel-default" @click="setCateActived('')">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#">ALL</a>
                  </h4>
                </div>
              </div>
              <Category
                v-for="cate in categories"
                :key="cate.id"
                :cate="cate"
              />
            </div>
            <!--/category-productsr-->

            <div class="brands_products">
              <!--brands_products-->
              <h2>Brands</h2>
              <div class="brands-name">
                <ul class="nav nav-pills nav-stacked">
                  <li>
                    <a href> <span class="pull-right">(50)</span>Acne </a>
                  </li>
                  <li>
                    <a href> <span class="pull-right">(56)</span>Grüne Erde </a>
                  </li>
                  <li>
                    <a href> <span class="pull-right">(27)</span>Albiro </a>
                  </li>
                  <li>
                    <a href> <span class="pull-right">(32)</span>Ronhill </a>
                  </li>
                  <li>
                    <a href> <span class="pull-right">(5)</span>Oddmolly </a>
                  </li>
                  <li>
                    <a href> <span class="pull-right">(9)</span>Boudestijn </a>
                  </li>
                  <li>
                    <a href>
                      <span class="pull-right">(4)</span>Rösch creative culture
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!--/brands_products-->

            <div class="price-range">
              <!--price-range-->
              <h2>Price Range</h2>
              <div class="well">
                <input
                  type="text"
                  class="span2"
                  value
                  data-slider-min="0"
                  data-slider-max="600"
                  data-slider-step="5"
                  data-slider-value="[250,450]"
                  id="sl2"
                />
                <br />
                <b>$ 0</b>
                <b class="pull-right">$ 600</b>
              </div>
            </div>
            <!--/price-range-->

            <div class="shipping text-center">
              <!--shipping-->
              <img src="images/home/shipping.jpg" alt />
            </div>
            <!--/shipping-->
          </div>
        </div>

        <div class="col-sm-9 padding-right">
          <div class="features_items">
            <!--features_items-->

            <div
              class="wrapper-img"
              v-if="productWithCate.length === 0 && isLoading === false"
            >
              <img class="img-hethang" src="/images/shop/hethang.jpg" alt />
            </div>

            <div v-if="isLoading">
              <Loading />
            </div>

            <div v-else>
              <Product
                v-for="product in productWithCate"
                :key="product.id"
                :product="product"
                @onReqCompare="onReqCompare"
                :compare="compare"
              />
            </div>

            <ul class="pagination" v-if="productWithCate.length > 9">
              <li class="active">
                <a href>1</a>
              </li>
              <li>
                <a href>2</a>
              </li>
              <li>
                <a href>3</a>
              </li>
              <li>
                <a href>&raquo;</a>
              </li>
            </ul>
          </div>
          <!--features_items-->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Category from '@/components/Category'
import Product from '@/components/Product'
import Loading from '@/components/Loading'

export default {
  data() {
    return {
      compare: []
    }
  },
  components: {
    Category,
    Product,
    Loading
  },
  computed: {
    ...mapState('products', ['products']),
    ...mapState('categories', ['categories']),
    ...mapState('cateActived', ['cateActived']),
    ...mapState('utils', ['isOpenModal', 'isLoading']),
    productWithCate() {
      return this.products.filter(
        v => v.category === this.cateActived || this.cateActived === ''
      )
    }
  },
  methods: {
    ...mapActions('products', ['getProductList']),
    ...mapActions('categories', ['getCategoryList']),
    ...mapActions('cateActived', ['setCateActived']),
    onReqCompare(id) {
      const { compare } = this
      if (compare.length < 2) {
        if (!compare.find(v => v === id)) compare.push(id)
      }
      if (compare.length === 2) {
        this.$router.push(`/compare/${compare[0]}/${compare[1]}`)
      }
    }
  }
}
</script>

<style>
.panel-heading:hover {
  background: #d0cdcd !important;
}
.pagination {
  width: 100%;
}
.wrapper-img {
  text-align: center;
  margin-bottom: 20px;
}
.img-hethang {
  width: 70%;
}
</style>
