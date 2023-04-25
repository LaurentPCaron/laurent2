import install from 'vue3-recaptcha-v2';
import { defineNuxtPlugin, useRuntimeConfig } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(install, {
    siteKey: '6LdRdqslAAAAAAiCvMLjldym06YCUVtYzB5gs3Xr',
  });
});
