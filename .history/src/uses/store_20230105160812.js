import { createStore } from "vuex"

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
            const post = null
            const error = null
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
                if (!response.ok) throw Error(response.status + " " + response.body)
                post = await response.json()
            } catch (err) {
                error = err
                console.log(error.value)
            }
            commit("changePostDetail", post)
        }
    }
})

export default store;

