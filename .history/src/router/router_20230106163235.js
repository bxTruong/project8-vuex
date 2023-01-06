import { createRouter, createWebHistory } from "vue-router"
import RouterName from "../router/router-path"

import PostsList from "../pages/posts-list.vue"
import PostDetail from "../pages/post-detail.vue"
import FormHandling from "../pages/form-handling"

const routes = [
    { path: '/', name: RouterName.HOME, component: PostsList },
    { path: '/post/:id', name: RouterName.POST_LIST, component: PostDetail },
    { path: '/post/:id', name: RouterName.POST_DETAIL, component: PostDetail },
    { path: '/post/:id', name: RouterName.FORM_HANDLING, component: PostDetail },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
