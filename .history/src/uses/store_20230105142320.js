import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            count: 10,
            transaction: null,
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

export default store;

