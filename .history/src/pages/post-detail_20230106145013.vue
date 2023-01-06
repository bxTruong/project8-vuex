<template>
    <h1>Detail post</h1>
    <div>{{ route.params.id }}</div>
    <h1 v-if="post">{{ post.title }}</h1>
    <h2 v-if="post">{{ post.body }}</h2>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"

export default {
    setup() {
        const store = useStore()
        const route = useRoute()
        store.dispatch("postModule/onGetDetailPost", { id: route.params.id })
        const post = computed(() => store.state.postModule.post)
        return { post, route }
    },

}
</script>
