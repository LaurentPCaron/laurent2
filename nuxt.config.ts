// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/css/main.scss',
  ],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/pro-solid-svg-icons',
      '@fortawesome/pro-regular-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },
  postcss: {
    plugins: {
      'postcss-custom-properties': false,
    },
  },
  ssr: false,
});
