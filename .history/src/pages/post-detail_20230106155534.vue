<template>
    <h1>Detail post</h1>
    <div>{{ route.params.id }}</div>
    <h2 v-if="post">{{ post.title }}</h2>
    <h3 v-if="post">{{ post.body }}</h3>
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
