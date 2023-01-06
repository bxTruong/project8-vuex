<template>
    <button @click="onPressPostList">Post List</button>
    <button @click="onPressFormHandling">Form Handling </button>
</template>

<script setup>
import {  useRouter } from "vue-router"
function onPressPostList() {
    const router = useRouter

    router.push({name:})
}

function onPressFormHandling() {

}

</script>