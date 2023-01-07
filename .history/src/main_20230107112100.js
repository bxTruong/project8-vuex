import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/router.js'
import "b"

createApp(App).use(router).use(store).mount('#app')
