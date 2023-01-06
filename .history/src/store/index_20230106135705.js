import { createStore } from "vuex"
import {postListModule} from "./modules/post/posts-list-module.js"
import {postController} from "./modules/post/posts-controller.js"

export default createStore ({
    module:{
        postListModule,
        postController
    }
})

