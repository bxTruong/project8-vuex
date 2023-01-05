import { createStore } from "vuex";

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
        getDetailPost({ commit }, { id }) {
            commit
        }
    }
})

export default store;

