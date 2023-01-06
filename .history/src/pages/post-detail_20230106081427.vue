<template>
    <h1>Detail post</h1>
    <div>{{ route.params.id }}</div>
    <div v-if="post.tile">{{ post.title }}</div>
    <div>{{ post.body }}</div>
    <div></div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"

export default {
    setup() {
        const store = useStore()
        const route = useRoute()
        store.dispatch("onGetDetailPost", { id: route.params.id })
        const post = computed(()=>store.state.post) 
        return { post, route }
    },

}
</script>
