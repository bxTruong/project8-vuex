<template>
    <input v-model="obj.message" />
</template>

<script setup>

import { reactive } from "vue"

const userModel = reactive({
    fullName: '',
    birthday: '',
    address:'',
    gender: '',
})

</script>