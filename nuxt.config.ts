// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  image: { dir: 'assets/images' },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/main.scss" as *; @use "~/assets/colors.scss" as *;'
        }
      }
    }
  },

  compatibilityDate: "2024-07-05",
  modules: ["@nuxt/icon", "@nuxt/image"]
})