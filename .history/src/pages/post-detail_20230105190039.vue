<template>
    <h1>Detail post</h1>
    <div>{{ $route.params.id }}</div>
    <div v-if="post.title">{{ post.title }}</div>
    <div v-if="post.body">{{ post.body }}</div>
    <div></div>
</template>

<script>
import {useStore} from "vuex"
import { computed } from "vuex"
export default {
    setup(){
        const store = useStore()
        store.dispatch("onGetDetailPost", { id: this.$route.params.id })
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
