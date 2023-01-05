<template>
    <h1>Detail post</h1>
    <div>{{ $route.params.id }}</div>
    <div v-if="post.title">{{ post.title }}</div>
    <div v-if="post.body">{{ post.body }}</div>
    <div></div>
</template>

<script>
import {useStore} from "vuex"

export default {
    setup(){

    },
    created() {
        this.$store.dispatch("getDetailPost", { id: this.$route.params.id })
    },
    computed: {
        post() {
            return this.$store.state.post
        },
        postsFilter() {
            return this.$store.getters.postsFilter
        }
    }
}
</script>
