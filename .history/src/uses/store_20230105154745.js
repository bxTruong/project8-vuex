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
        changePostDetail(state, ){
state.post
        }
    },
    actions: {
        getDetailPost({commit},{id}) {
            console.log(ctx);
        }
    }
})

export default store;

