<template>
    <p>Full name</p>
    <input v-model="userModel.fullName" />
</template>

<script setup>

import { reactive } from "vue"
import { useStore } from "vuex"

const store =useStore()

const userModel = reactive({
    fullName: '',
    birthday: '',
    address: '',
    gender: '',
})

function onPressSubmit(){
    store.dispatch()
}

return {userModel}

</script>