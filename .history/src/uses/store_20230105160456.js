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
            const post = reactive(null)
    const error = ref(null)
            const fetchData = async () => {
                try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
                    if (!response.ok) throw Error(response.status + " " + response.body)
                    post = await response.json()
                } catch (err) {
                    error.value = err
                    console.log(error.value)
                }
            }
            fetchData();
            commit("changePostDetail", post)
        }
    }
})

export default store;

