import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
  // const domain = 'http://localhost:3300/'
  // 배포테스트용
  const domain = 'http://tomhoon.duckdns.org:11000/'
  let devApi = axios.create({
    baseURL: domain,
    //   headers: {}
  })

  return {
    provide: {
      devApi: devApi
    }
  }
});