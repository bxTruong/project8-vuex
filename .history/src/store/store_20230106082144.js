import { createStore } from "vuex"
import getDetailPost from "../uses/get-detail-post.js"
import getAllPost from "../uses/get-all-post.js"

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
        onChangePostDetail(state, postPayload) {
            state.post = postPayload
        },
        onChangePosts(state, response) {
            state.posts = response
        }
    },
    actions: {
        async onGetDetailPost({ commit }, { id }) {
            const { post, fetchData } = getDetailPost(id);
            await fetchData();
            commit("onChangePostDetail", post.value)
        },
        async onGetAllPost({ commit }) {
            const { posts, fetchData } = getAllPost();
            commit("onChangePosts", posts.value)
        }
    }
})

export default store;

