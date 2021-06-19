import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         name: 'Home',
         component: () => import('/src/pages/Home.vue'),
      },
   ],
});

export default router;
