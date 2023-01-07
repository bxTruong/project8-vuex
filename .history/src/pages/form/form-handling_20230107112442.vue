<template>
    <div class="mb-3">
        <label class="form-label">Full name</label>
        <input type="text" class="form-control"  placeholder="eg: David John">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control"  placeholder="name@example.com">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <gender-list />
    <br />
    <button @click="onPressSubmit">Submit</button>
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
            //store.dispatch()
        }

        return { userModel, onPressSubmit }
    },
    components: {
        genderList
    }
}

</script>