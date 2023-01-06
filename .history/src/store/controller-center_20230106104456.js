import { createStore } from "vuex"
import {postListController} from "./modules/post/posts-list-controller.js"
import {postController} from "./modules/post/posts-controller.js"

export default createStore {
    module:{
        postListController,
        postController
    }
}

