<template>
    <p>Full name:</p>
    <input v-model="userModel.fullName" />
    <p>Birthday:</p>
    <input v-model="userModel.birthday" />
    <p>Address</p>
    <input v-model="userModel.address" />
</template>

<script>

import { reactive } from "vue"
import { useStore } from "vuex"

export default{}

</script>