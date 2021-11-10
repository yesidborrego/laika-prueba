import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/MainContent.vue')
  },
  {
    path: '/products',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "ProductDetail" */ '../views/ProductDetail.vue'),
    props: (route) => ({ id: route.params.id })
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: 'NoPageFound' */ '../views/NotFound.vue')
  },
]


const router = new Router({
  routes,
  mode: 'history'
})

export default router