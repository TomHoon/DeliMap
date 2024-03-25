import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
    const domain = 'http://tomhoon.duckdns.org:3300/'
  
    let prodApi = axios.create({
      baseURL: domain,
    //   headers: {}
    })
  
    return {
      provide: {
        prodApi: prodApi
      }
    }
});