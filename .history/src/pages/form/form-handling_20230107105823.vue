<template>
    <p>Full name:</p>
    <input v-model="userModel.fullName" />
    <p>Birthday:</p>
    <input v-model="userModel.birthday" />
    <p>Address</p>
    <input v-model="userModel.address" />
    <gender-list></gender-list>

</template>

<script>

import { reactive } from "vue"
import { useStore } from "vuex"
import genderList from "@/pages/form/components/gender-list.vue"

export default {
    setup() {
        const store = useStore()

        const userModel = reactive({
            fullName: '',
            birthday: '',
            address: '',
            gender: '',
        })

        function onPressSubmit() {
            store.dispatch()
        }

        return { userModel }
    },
    components:{
        genderList
    }
}

</script>