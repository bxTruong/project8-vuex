<template>
    <h1>Detail post</h1>
    <div>{{ route.params.id }}</div>
    <div v-if="post.title">{{ post.title }}</div>
    <div v-if="post.body">{{ post.body }}</div>
    <div></div>
</template>

<script>
import { useStore } from "vuex"
import { useRoute } from "vue-router"

export default {
    setup() {
        const store = useStore()
        const route = useRoute()
        store.dispatch("onGetDetailPost", { id: route.params.id })
        const post = store.state.post
    return {post , route}
},

}
</script>
