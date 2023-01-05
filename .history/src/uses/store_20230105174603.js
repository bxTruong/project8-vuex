import { createStore } from "vuex"
import getDetailPostUse from "../uses/get-detail-post"

const store = createStore({
    state() {
        return {
            count: 10,
            post: null,
            post: [
                {
                    id: 1,
                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                },
                {
                    id: 2,
                    title: "qui est esse",
                },
                {
                    id: 3,
                    title: "long time no see",
                },
            ]
        }
    },
    getters:{
        posts
    },
    mutations: {
        increment(state) {
            state.count++
        },
        changePostDetail(state, postPayload) {
            state.post = postPayload
        }
    },
    actions: {
        async getDetailPost({ commit }, { id }) {
            const { post, fetchData } = getDetailPostUse(id);
            await fetchData();
            commit("changePostDetail", post.value)
        }
    }
})

export default store;

