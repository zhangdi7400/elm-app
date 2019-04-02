// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue'
import  Food  from "./components/food/Food.vue";
import  Rating from "./components/rating/Rating.vue";
import  Seller  from "./components/seller/Seller.vue";
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;


const routes = [
  { path: '/', component: Food },
  { path: '/food', component: Food },
  { path: '/ratings', component: Rating },
  { path: '/seller', component: Seller }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
