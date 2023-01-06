import { createRouter, createWebHistory } from "vue-router"
import RouterName from "./router-name.js"

import Home from "../pages/home.vue"
import PostsList from "../pages/posts-list.vue"
import PostDetail from "../pages/post-detail.vue"
import FormHandling from "../pages/form-handling.vue"

const routes = [
    { path: '/', name: RouterName.HOME, component: Home },
    { path: '/post/:id', name: RouterName.POST_LIST, component: PostsList },
    { path: '/post/:id', name: RouterName.POST_DETAIL, component: PostDetail },
    { path: '/post/:id', name: RouterName.FORM_HANDLING, component: FormHandling },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
