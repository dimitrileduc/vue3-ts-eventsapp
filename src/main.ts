import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Create a reactive object
//const GStore = reactive({ flashMessage: '' })
const GStore = reactive<{ flashMessage: string }>({
  flashMessage: ''
})

createApp(App)
  .use(store)
  .use(router)
  .provide('GStore', GStore)
  .mount('#app')
