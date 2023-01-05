<template>
    <h1>Detail post</h1>
    <div>{{ $route.params.id }}</div>
    <div v-if="post.title">{{ post.title }}</div>
    <div>{{ post.body }}</div>
    <div></div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("getDetailPost", { id: this.$route.params.id })
    },
    computed: {
        post() {
            return this.$store.state.post
        }
    }
}
</script>
