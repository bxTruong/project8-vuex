<template>
    <h1>Detail post</h1>
    <div>{{ $route.params.id }}</div>
    <div>{{ this.$store.commit }}</div>
    <div></div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("getDetailPost", {id: this.$route.params.id})
    },
    computed:{
        post(){
            return this.$store
        }
    }
}
</script>
