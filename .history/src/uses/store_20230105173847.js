import { createStore } from "vuex"
import getDetailPostUse from "../uses/get-detail-post"

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
        changePostDetail(state, postPayload) {
            state.post = postPayload
        }
    },
    actions: {
        async getDetailPost({ ctx , {id}) {
            console.log(ctx)
            console.log(id)
            // const { post, fetchData } = getDetailPostUse(id);
            // await fetchData();
            // commit("changePostDetail", post.value)
        }
    }
})

export default store;

