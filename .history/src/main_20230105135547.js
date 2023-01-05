import { createApp } from 'vue'
import App from './App.vue'
import store from './uses/store.js'

createApp(App).use(store).mount('#app')
