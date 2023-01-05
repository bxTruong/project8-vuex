<template>
    <h1>News feed</h1>
    <div v-if="posts">
        <ul v-for="item in posts" :key="item.id">
            <router-link :to="{ name: 'post-detail-router' }"> {{ item.title }}</router-link>
        </ul>
    </div>
    <div v-else-if="error">{{ error.message }}</div>
</template>

<script>
import getAllPosts from "../uses/get-all-post.js"
export default {
    created() {
        console.log(this.$store.state.count);
        this.count = this.$store.state.count;
    },
    // setup() {
    //     const { posts, error, fetchData } = getAllPosts()
    //     fetchData();
    //     return { posts, error }
    // }
}
</script>