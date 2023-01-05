import PostsList from "./pages/posts-list.vue"
import PostDetail from "./pages/posts-de.vue"

const routes = [
    {path:'/', name: 'posts-list-router', component:PostsList},
    {path:'/post', name: 'posts-detail-router', component:PostsList},
]