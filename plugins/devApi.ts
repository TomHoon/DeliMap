import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
    const domain = 'http://localhost:3300/'
  
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