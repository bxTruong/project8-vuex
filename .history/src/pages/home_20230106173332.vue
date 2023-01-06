<template>
    <button @click="onPressPostList">Post List</button>
    <button @click="onPressFormHandling">Form Handling </button>
</template>

<script setup>
import { useRouter } from "vue-router"
import RouterName from "../router/router-name"

const router = useRouter

function onPressPostList() {
    router.push({ name: RouterName.POST_DETAIL })
}

function onPressFormHandling() {
    //router.push({ name: RouterName.POST_DETAIL })
}

</script>