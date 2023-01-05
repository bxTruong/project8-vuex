import PostsList from "./pages/posts-list.vue"
import PostDE from "./pages/posts-list.vue"

const routes = [
    {path:'/', name: 'posts-list-router', component:PostsList},
    {path:'/post', name: 'posts-detail-router', component:PostsList},
]