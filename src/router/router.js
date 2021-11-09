import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue';
import Comp01 from '../components/comp01.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/foo', component: HelloWorld },
    { path: '/bar', component: Comp01 }
  ]
});

export default router;