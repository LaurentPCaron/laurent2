import { createApp } from 'vue';
import App from './App.vue';
import '@/scss/main.scss';
import VueRecaptcha from 'vue3-recaptcha-v2';

const app = createApp(App);

app
  .use(VueRecaptcha, {
    siteKey: '6LdRdqslAAAAAAiCvMLjldym06YCUVtYzB5gs3Xr',
  })
  .mount('#app');
