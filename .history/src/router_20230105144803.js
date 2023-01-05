import {createRouter,createWebHistory} from "vue-router"
import PostsList from "./pages/posts-list.vue"
import PostDetail from "./pages/post-detail.vue"

const routes = [
    {path:'/', name: 'posts-list-router', component:PostsList},
    {path:'/post', name: 'posts-detail-router', component:PostDetail},
]

const router = createRouter()
