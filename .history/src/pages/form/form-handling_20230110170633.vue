<template>
   <div class="container-fluid form-handling">
    <h2>Hồ sơ cá nhân</h2>
    <img alt="Avatar" class="avt-profile rounded-circle border border-0" src="@/assets/images/avt.jpg"/>
    <div class="mb-3">
        <label class="form-label">Full name</label>
        <input type="text" class="form-control" placeholder="David John">
    </div>
    <div class="mb-3">
        <label class="form-label">Birthday</label>
        <input type="email" class="form-control" placeholder="01/06/2000">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Time City, New York">
    </div>
    <gender-list />
    <br />
    <button type="button" class="btn btn-primary" @click="onPressSubmit">Submit</button>
   </div>
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