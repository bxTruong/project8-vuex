import { createStore } from "vuex"
import getDetailPost from "../uses/get-detail-post.js"

const store = createStore({
    state() {
        return {
            count: 10,
            post: null,
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        changePostDetail(state, response) {
            state.post = response
        }
    },
    actions: {
        async getDetailPost({ commit }, { id }) {
            const { post, getDetailPost } = getDetailPost(id);
           await getDetailPost();
            commit("changePostDetail", post)
        }
    }
})

export default store;

