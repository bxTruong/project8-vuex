import { createStore } from "vuex"
import getDetailPostUse from "../uses/get-detail-post.js"

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
            // const { post, fetchData } = getDetailPostUse(id);
            // await fetchData();
            
            commit("changePostDetail", post)
        }
    }
})

export default store;

