import { createRouter, createWebHistory } from "vue-router"
import PostsList from "../pages/posts-list.vue"
import PostDetail from "../pages/post-detail.vue"
import routerName

const routes = [
    { path: '/', name: 'posts-list-router', component: PostsList },
    { path: '/post/:id', name: 'post-detail-router', component: PostDetail },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
