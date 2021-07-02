import { createApp } from 'vue';
import App from '/src/App.vue';
import { routes } from '/src/router/router';
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp(App);
const router = createRouter({
   history: createWebHistory(),
   routes
});

// check types.d.ts
app.config.globalProperties.$log = console.log;

app.use(router);

router.isReady().then(() => {
   app.mount('#app');
});
