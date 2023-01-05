import { createApp } from 'vue'
import App from './App.vue'
import store from './uses/store.js'
import router from './router.js'

createApp(App).use(router).use(store).mount('#app')
