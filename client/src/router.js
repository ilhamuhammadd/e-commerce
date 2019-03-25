import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import Product from './views/Product';
import Cart from './views/Cart';
import HomeAdmin from './views/HomeAdmin.vue';
import ProductAdmin from './views/ProductAdmin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin/home',
      name: 'HomeAdmin',
      component: HomeAdmin,
    },
    {
      path: '/admin/products',
      name: 'ProductAdmin',
      component: ProductAdmin,
    },
    {
      path: '/user/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/user/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/user/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/user/products',
      name: 'product',
      component: Product,
    },
    {
      path: '/user/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
