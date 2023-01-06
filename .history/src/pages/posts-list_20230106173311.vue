<template>
    <h1>News feed</h1>
    <div v-if="posts?.length">
        <ul v-for="item in posts" :key="item.id">
            <router-link :to="{ name: '', params: { id: item.id } }"> {{
                item.title
            }}</router-link>
        </ul>
    </div>
    <!-- <div v-else-if="error">{{ error.message }}</div> -->
</template>

<script>
import { useStore } from "vuex"
import { computed } from "vue"
import RouterName from "../router/router-name"

export default {
    setup() {
        const store = useStore()
        store.dispatch("postListModule/onGetAllPost")
        const posts = computed(() => store.state.postListModule.posts)
        return { posts, RouterName }
    },
}
</script>