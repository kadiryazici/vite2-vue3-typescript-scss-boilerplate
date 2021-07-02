import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
   {
      path: '/',
      name: 'Home',
      component: () => import('/src/pages/Home.vue')
   },
   {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('/src/pages/404.vue')
   }
];
