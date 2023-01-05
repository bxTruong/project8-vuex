import PostsList from "./pages/posts-list.vue"
import PostDetail from "./pages/post"

const routes = [
    {path:'/', name: 'posts-list-router', component:PostsList},
    {path:'/post', name: 'posts-detail-router', component:PostsList},
]