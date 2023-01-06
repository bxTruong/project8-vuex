<template>
    <h1>Detail post</h1>
    <div>{{ route.params.id }}</div>
    <div v-if="post.title">{{ post.title }}</div>
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
