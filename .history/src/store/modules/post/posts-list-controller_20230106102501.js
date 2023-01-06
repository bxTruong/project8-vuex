import getAllPost from "../uses/get-all-post.js"

const sate = () => {
    posts: []
}

const getters = {
    postsFilter(state) {
        return state.posts.filter((e) => e.id % 2 == 0)
    }
}

const mutations = {
    onChangePosts(state, response) {
        state.posts = response
    }
}

const action = {
    async onGetAllPost({ commit }) {
        const { posts, fetchData } = getAllPost();
        await fetchData();
        commit("onChangePosts", posts.value)
    }
}

export default {
    nameSpaced: true,
    sate,
    getters,
    mutations,
    action,
}