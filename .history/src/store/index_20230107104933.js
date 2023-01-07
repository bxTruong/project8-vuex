import { createStore, createLogger } from "vuex"
import postListModule from "./modules/post/posts-list-module.js"
import postModule from "./modules/post/posts-module.js"
import postModule from "./modules/post/posts-module.js"

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        postListModule,
        postModule
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

