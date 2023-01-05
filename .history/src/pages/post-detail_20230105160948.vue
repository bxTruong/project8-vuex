<template>
    <h1>Detail post</h1>
    <div>{{ $route.params.id }}</div>
    <div>{{ $route.params.title }}</div>
    <div>{{ $route.params.id }}</div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("getDetailPost", {id: this.$route.params.id})
    }
}
</script>
