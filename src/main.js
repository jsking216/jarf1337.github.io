import { createApp } from 'vue';
import App from './App.vue';
import { VueCookieNext } from 'vue-cookie-next';
import Vue3Geolocation from 'vue3-geolocation';

const myApp = createApp(App);
myApp.use(VueCookieNext);
myApp.use(Vue3Geolocation);
myApp.mount('#app');
