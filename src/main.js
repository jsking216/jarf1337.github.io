import { createApp } from 'vue';
import App from './App.vue';
import { VueCookieNext } from 'vue-cookie-next';

const myApp = createApp(App);
myApp.use(VueCookieNext);
myApp.mount('#app');
