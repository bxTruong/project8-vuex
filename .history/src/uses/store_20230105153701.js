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
        }
    },
    actions: {
        getDetailPost({comit}) {
            console.log(ctx);
        }
    }
})

export default store;

