import Vue from 'vue';
import Router from 'vue-router';

import Index from '../views/Index.vue';
import About from '../views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});