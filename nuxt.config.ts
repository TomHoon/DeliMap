// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script:[
        {
          src:"//dapi.kakao.com/v2/maps/sdk.js?autoreload=false&appkey=2ede99203c8df1e5be305398646c566e"
        }
      ]
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  
  
  // hot reload 임시주석
  // vite: {
  //   server: {
  //     watch: {
  //       usePolling: true
  //     }
  //   }
  // }
})