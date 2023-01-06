const sate = () => {
    posts: []
}

const getters = {
    postsFilter(state) {
        return state.posts.filter((e) => e.id % 2 == 0)
    }
}

const action = 