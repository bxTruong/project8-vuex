import { createApp } from 'vue'
import App from './App.vue'
import Store from './uses/store.js'

createApp(App).use(Store).mount('#app')
