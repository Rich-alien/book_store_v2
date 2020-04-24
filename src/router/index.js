import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import vCart from '../components/v-cart.vue'

Vue.use(VueRouter)

  const routes = [
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: '/cart',
        name: 'cart',
        component: vCart,
        props:true

      }
]

const router = new VueRouter({

  routes
})

export default router
