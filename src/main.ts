import { createApp } from 'vue';
import App from '/src/App.vue';
import router from '/src/router/router';

const app = createApp(App);

app.use(router);

router.isReady().then(() => {
   app.mount('#app');
})