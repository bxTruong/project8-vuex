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
                  "userId": 1,
                  "id": 2,
                  "title": "qui est esse",
                  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },]
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
            commit("changePostDetail", post.value)
        }
    }
})

export default store;

