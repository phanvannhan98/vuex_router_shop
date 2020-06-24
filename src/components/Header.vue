<template>
  <header id="header">
    <!--header-->
    <div class="header_top">
      <!--header_top-->
      <div class="container">
        <div class="row">
          <div class="col-sm-6 ">
            <div class="contactinfo">
              <ul class="nav nav-pills">
                <li>
                  <a href=""><i class="fa fa-phone"></i> +2 95 01 88 821</a>
                </li>
                <li>
                  <a href=""><i class="fa fa-envelope"></i> info@domain.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="social-icons pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <a href=""><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa fa-dribbble"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header_top-->

    <div class="header-middle" ref="stickyEle">
      <!--header-middle-->
      <div class="container">
        <div class="row">
          <div class="col-md-4 clearfix">
            <div class="logo pull-left">
              <router-link to="/"
                ><img src="images/home/logo.png" alt=""
              /></router-link>
            </div>
            <div class="btn-group pull-right clearfix">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  USA
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><a href="">Canada</a></li>
                  <li><a href="">UK</a></li>
                </ul>
              </div>

              <div class="btn-group">
                <select
                  name="1"
                  id=""
                  class="btn btn-default dropdown-toggle usa"
                  @change="onChangPrice"
                >
                  <option value="1">USD</option>
                  <option value="2">VND</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-8 clearfix">
            <div class="shop-menu clearfix pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <a href=""><i class="fa fa-user"></i> Account</a>
                </li>
                <li>
                  <a href=""><i class="fa fa-star"></i> Wishlist</a>
                </li>
                <li>
                  <a href="checkout.html"
                    ><i class="fa fa-crosshairs"></i> Checkout</a
                  >
                </li>
                <li>
                  <router-link to="/cart"
                    ><i class="fa fa-shopping-cart"></i> Cart
                    <span style="font-weight: bold"
                      >({{ getLengthCart }})</span
                    ></router-link
                  >
                  <div class="wrapper-cart-home">
                    <div id="cart_items">
                      <CartInfo :cart="cart" />
                    </div>
                  </div>
                </li>
                <li>
                  <router-link :to="!isAuthenticated ? '/login' : '/logout'"
                    ><i class="fa fa-lock"></i>
                    {{ !isAuthenticated ? 'Login' : 'Logout' }}</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-middle-->

    <div class="header-bottom">
      <!--header-bottom-->
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="mainmenu pull-left">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li><router-link to="/">Home</router-link></li>
                <li class="dropdown">
                  <a href="#" class="active"
                    >Shop<i class="fa fa-angle-down"></i
                  ></a>
                  <ul role="menu" class="sub-menu">
                    <li><a href="shop.html" class="active">Products</a></li>
                    <li>
                      <a href="product-details.html">Product Details</a>
                    </li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><router-link to="/cart">Cart</router-link></li>
                    <li><a href="login.html">Login</a></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Blog<i class="fa fa-angle-down"></i></a>
                  <ul role="menu" class="sub-menu">
                    <li><a href="blog.html">Blog List</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>
                </li>
                <li><a href="404.html">404</a></li>
                <li><a href="contact-us.html">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="search_box pull-right">
              <input type="text" placeholder="Search" @keyup="onSearch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import CartInfo from '@/components/CartInfo'

export default {
  data() {
    return {
      searchTxt: ''
    }
  },
  components: {
    CartInfo
  },
  mounted() {
    window.addEventListener('scroll', () => {
      window.scrollY > 38
        ? this.$refs.stickyEle.classList.add('sticky')
        : this.$refs.stickyEle.classList.remove('sticky')
    })
  },
  computed: {
    ...mapGetters(['getLengthCart']),
    ...mapState('cart', ['cart']),
    ...mapState('user', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('products', ['getProductListByName', 'getProductList']),
    ...mapActions('utils', ['setParsePrice']),
    onSearch() {
      if (event.target.value === '') {
        this.getProductList()
      } else if (event.keyCode === 13) {
        this.getProductListByName({ field: 'name', txt: event.target.value })
      }
    },
    onChangPrice(event) {
      this.setParsePrice(+event.target.value === 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-cart-home {
  position: absolute;
  background-color: #fff;
  z-index: 99;
  display: none;
  right: -50px;
  top: calc(100% + 20px);
  animation: fadeInOut 0.2s;
}
.nav li::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 20px;
}
.nav li:hover .wrapper-cart-home {
  display: block;
}

.header-middle {
  transition: 0.3s;
}
.sticky {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #7d40409c;
  z-index: 999;
  border-bottom: 1px solid #7d40409c;
  transition: 0.5s;

  .container {
    background: #fff;
    padding: 0;
  }
}
</style>
