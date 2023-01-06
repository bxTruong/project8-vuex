import getAllPost from "../../../uses/get-all-post.js"

const postListModule = {
    namespa
    sate: {
        posts: []
    },

    // getters: {
    //     postsFilter(state) {
    //         return state.posts.filter((e) => e.id % 2 == 0)
    //     }
    // },

    mutations: {
        onChangePosts(state, response) {
            state.posts = response
        }
    },

    action: {
        async onGetAllPost({ commit }) {
            const { posts, fetchData } = getAllPost();
            await fetchData();
            commit("onChangePosts", posts.value)
        }
    }
}



export default postListModule