import { createStore } from "vuex"
import getDetailPost from "../uses/get-detail-post"
import getAllPost from "../uses/get-detail-post"

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
        async onGetDetailPost({ commit }, { id }) {
            const { post, fetchData } = getDetailPost(id);
            fetchData();
            commit("changePostDetail", post.value)
        },
        async onGetAllPost({ commit }) {
            const { post, fetchData } = getAllPost(id);
            fetchData();
            commit("changePostDetail", post.value)
        }
    }
})

export default store;

