<template>
    <input v-model="obj.message" />
</template>

<script setup>

import { reactive } from "vue"
import { }
const store =useStore

const userModel = reactive({
    fullName: '',
    birthday: '',
    address: '',
    gender: '',
})

function onPressSubmit(){

}

</script>