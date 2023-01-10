<template>
   
</template>

<script setup>

import { reactive } from "vue"
import { useStore } from "vuex"
import GenderList from "@/pages/form/components/gender-list.vue"

const store = useStore()

const userModel = reactive({
    fullName: '',
    birthday: '',
    address: '',
    gender: '',
})

function onPressSubmit() {
    //store.dispatch()
}

</script>