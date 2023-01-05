<template>
    <h1>News feed</h1>
    <div v-if="posts">
        <ul v-for="item in posts" :key="item.id">
            <li> {{ item.title }} </li>
        </ul>
    </div>
    <div v-else-if="error"></div>
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