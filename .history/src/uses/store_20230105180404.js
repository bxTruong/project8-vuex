import { createStore } from "vuex"
import getDetailPostUse from "../uses/get-detail-post"
import getPostUse from "../uses/get-detail-post"

const store = createStore({
    state() {
        return {
            count: 10,
            post: null,
            posts: []
        }
    },
    getters: {
        postsFilter(state) {
            return state.posts.filter((e) => e.id % 2 == 0)
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        changePostDetail(state, postPayload) {
            state.post = postPayload
        },
        changePosts(state, response) {
            state.post = response
        }
    },
    actions: {
        async getDetailPost({ commit }, { id }) {
            const { post, fetchData } = getDetailPostUse(id);
            fetchData();
            commit("changePostDetail", post.value)
        },
        async getAllPost({ commit }) {
            const { post, fetchData } = getDetailPostUse(id);
            fetchData();
            commit("changePostDetail", post.value)
        }
    }
})

export default store;

