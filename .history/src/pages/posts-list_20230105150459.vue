<template>
    <h1>News feed</h1>
    <ul v-for="item in " :key="">
    <li></li>
</ul>
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