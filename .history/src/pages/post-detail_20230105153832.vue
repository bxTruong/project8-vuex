<template>
    <h1>Detail post</h1>
    <div></div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("getDetailPost", {id: this.$router.pa})
    }
}
</script>
