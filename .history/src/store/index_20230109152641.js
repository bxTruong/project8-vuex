import { createStore, createLogger } from "vuex"
import postListModule from "./modules/post/posts-list-module.js"
import postModule from "@/store//modules/post/posts-module.js"
import formModule from "@/store/modules/form/form-module"

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        postListModule,
        postModule,
        formModule,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

