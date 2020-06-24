import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layouts/Home.vue'
import Shop from '../views/Shop.vue'
import Cart from '../views/Cart.vue'
import PageNotFound from '../views/PageNotFound.vue'
import ProductInfo from '../views/ProductInfo.vue'
import Compare from '../views/Compare.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'shop',
        component: Shop
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart
      },
      {
        path: '/product/:id',
        name: 'product-info',
        component: ProductInfo
      },
      {
        path: '/compare/:one/:two',
        name: 'compare',
        component: Compare
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      }
    ]
  },
  { path: '*', component: PageNotFound }
]

Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
