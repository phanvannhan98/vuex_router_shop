<template>
  <fragment>
    <section id="cart_items">
      <div class="container">
        <div class="breadcrumbs">
          <ol class="breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li class="active">Shopping Cart</li>
          </ol>
        </div>
        <CartInfo :cart="cart" @parse="parse" />
      </div>
    </section>
    <!--/#cart_items-->
    <div v-if="cart.length" class="container">
      <div class="price-total">
        <h2>TOTAL: {{ parse(totalPrice) }}</h2>
      </div>
    </div>
    <section id="do_action">
      <div class="container">
        <div class="heading">
          <h3>What would you like to do next?</h3>
          <p>
            Choose if you have a discount code or reward points you want to use
            or would like to estimate your delivery cost.
          </p>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="chose_area">
              <ul class="user_option">
                <li>
                  <input type="checkbox" />
                  <label>Use Coupon Code</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Use Gift Voucher</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Estimate Shipping & Taxes</label>
                </li>
              </ul>
              <ul class="user_info">
                <li class="single_field">
                  <label>Country:</label>
                  <select>
                    <option>United States</option>
                    <option>Bangladesh</option>
                    <option>UK</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Ucrane</option>
                    <option>Canada</option>
                    <option>Dubai</option>
                  </select>
                </li>
                <li class="single_field">
                  <label>Region / State:</label>
                  <select>
                    <option>Select</option>
                    <option>Dhaka</option>
                    <option>London</option>
                    <option>Dillih</option>
                    <option>Lahore</option>
                    <option>Alaska</option>
                    <option>Canada</option>
                    <option>Dubai</option>
                  </select>
                </li>
                <li class="single_field zip-field">
                  <label>Zip Code:</label>
                  <input type="text" />
                </li>
              </ul>
              <a class="btn btn-default update" href="">Get Quotes</a>
              <a class="btn btn-default check_out" href="">Continue</a>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="total_area">
              <ul>
                <li>Cart Sub Total <span>$59</span></li>
                <li>Eco Tax <span>$2</span></li>
                <li>Shipping Cost <span>Free</span></li>
                <li>Total <span>$61</span></li>
              </ul>
              <a class="btn btn-default update" href="">Update</a>
              <a class="btn btn-default check_out" href="">Check Out</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/#do_action-->
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import CartInfo from '@/components/CartInfo'
import { mapState } from 'vuex'
export default {
  components: {
    Fragment,
    CartInfo
  },
  computed: {
    ...mapState('cart', ['cart']),
    ...mapState('utils', ['parsePrice', 'rate']),

    totalPrice() {
      return this.cart.reduce((t, v) => t + v.product.price * v.amount, 0)
    }
  },
  methods: {
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
<style lang="scss" scoped>
.price-total {
  h2 {
    text-align: right;
    margin: 0;
    padding: 0;
    padding-right: 20px;
    margin-bottom: 20px;
    color: #fe980f;
  }
}
</style>
