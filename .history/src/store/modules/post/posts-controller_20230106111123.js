import getDetailPost from "../../../uses/get-detail-post.js"

const postController = {

 state : {
    post: null
}

 mutations :L {
    onChangePostDetail(state, postPayload) {
        state.post = postPayload
    },
}

 actions = {
    async onGetDetailPost({ commit }, { id }) {
        const { post, fetchData } = getDetailPost(id);
        await fetchData();
        commit("onChangePostDetail", post.value)
    },
}

}