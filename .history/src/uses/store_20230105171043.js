import { createStore } from "vuex"
import getDetailPostUse from "../uses"
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
        async getDetailPost({ commit }, { id }) {
            const { post, fetchData } = getDetailPostUse(id);
            await fetchData();
            // const post = null
            // const error = null
            // try {
            //     const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            //     if (!response.ok) throw Error(response.status + " " + response.body)
            //     this.post = await response.json()
            // } catch (err) {
            //     this.error = err
            //     console.log(error)
            // }
            commit("changePostDetail", post)
        }
    }
})

export default store;

