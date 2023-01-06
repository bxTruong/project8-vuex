<template>
    <h1>Detail post</h1>
    <div>{{ $route.params.id }}</div>
    <div v-if="post.title">{{ post.title }}</div>
    <div v-if="post.body">{{ post.body }}</div>
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
        computed(()=>{
          
        

        
            store.getters.postsFilter
        }
        })
        return {}
    },

}
</script>
