// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['normalize.css/normalize.css'],
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/main.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/lun5stm.css' },
      ],
    },
  },
})
