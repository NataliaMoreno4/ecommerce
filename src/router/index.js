import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import Products from '../pages/Products.vue';
import CartPage from '../pages/CartPage.vue';
import CheckoutPage from '../pages/CheckoutPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/cart', component: CartPage },
    { path: '/checkout', component: CheckoutPage },
  ],
});
