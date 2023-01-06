import { createStore } from "vuex"
import {postListModule} from "./modules/post/posts-list-module.js"
import {postModule} from "./modules/post/posts-module.js"

export default createStore ({
    modules:{
        postListModule,
        postModule
    }
})

