<template>
    <h1>Detail post</h1>
    <div>{{ $route.params.id }}</div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("getDetailPost", {id: this.$router.params.id})
    }
}
</script>
