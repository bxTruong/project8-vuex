<template>
    <h1>Detail post</h1>
    <div>{{ $route.params.id }}</div>
    <div>{{ post }}</div>
    <div></div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("getDetailPost", {id: this.$route.params.id})
    },
    computed:{
        post(){
            return this.$store.state.post
        }
    }
}
</script>
