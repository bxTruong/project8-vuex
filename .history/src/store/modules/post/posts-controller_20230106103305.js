const state = ()=>{
    post: null
}

const mutations = {
    onChangePostDetail(state, postPayload) {
        state.post = postPayload
    },
}