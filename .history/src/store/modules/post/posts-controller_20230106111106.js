import getDetailPost from "../../../uses/get-detail-post.js"

const postController = {

const state = () => {
    post: null
}

const mutations = {
    onChangePostDetail(state, postPayload) {
        state.post = postPayload
    },
}

const actions = {
    async onGetDetailPost({ commit }, { id }) {
        const { post, fetchData } = getDetailPost(id);
        await fetchData();
        commit("onChangePostDetail", post.value)
    },
}

