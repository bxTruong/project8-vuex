<template>
    <h1>News feed</h1>
    <div if></div>
</template>

<script>
import getAllPosts from "../uses/get-all-post.js"
export default {
    setup() {
        const { posts, error, fetchData } = getAllPosts()
        fetchData();
        return { posts, error }
    }
}
</script>