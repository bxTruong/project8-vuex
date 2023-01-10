import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/router.js'
import "bootstrap/dist/css/bootstrap.css"
import "@"

createApp(App).use(router).use(store).mount('#app')
