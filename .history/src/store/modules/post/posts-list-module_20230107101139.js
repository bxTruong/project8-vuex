import getAllPost from "../../../uses/get-all-post.js"

const postListModule = {
    namespaced: true,

    sate: {
        posts: []
    },

    mutations: {
        onChangePosts(state, response) {
            state.posts = response
        }
    },

    actions: {
        async onGetAllPost({ commit }) {
            const { posts, fetchData } = getAllPost();
            await fetchData();
            commit("onChangePosts", posts.value)
        }
    },

    // getters: {
    //     postsFilter(state) {
    //         return state.posts.filter((e) => e.id % 2 == 0)
    //     }
    // },
}



export default postListModule