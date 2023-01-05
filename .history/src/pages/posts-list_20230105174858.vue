<template>
    <h1>News feed</h1>
    <div v-if="posts.length">
        <ul v-for="item in posts" :key="item.id">
            <router-link :to="{ name: 'post-detail-router', params: { id: item.id } }"> {{
                item.title
            }}</router-link>
        </ul>
    </div>
    <div v-else-if="error">{{ error.message }}</div>
</template>

<script>
import getAllPosts from "../uses/get-all-post.js"
export default {
    data() {
        return {
            posts: []
        }
    },
    setup() {
        const { posts, error, fetchData } = getAllPosts()
        fetchData();
        return { posts, error }
    },
    computed: {
        postsFilter() =>
            return this.$store.getters.postsFilter
        
    }
}
</script>