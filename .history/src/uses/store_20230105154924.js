import { createStore } from "vuex"
import getDetailPost from 

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

            commit("changePostDetail", [])
        }
    }
})

export default store;

