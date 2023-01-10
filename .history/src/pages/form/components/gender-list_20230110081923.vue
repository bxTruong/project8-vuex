<template>
    <div class="container text-center">
        <div class="row">
            <div class="col border" v-for="item in genders" :key="item"
                :class="{ 'bg-primary': item.id == genderSelected?.id }" @click="onPressGender(item)">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed } from "vue";

const store = useStore()
store.dispatch("formModule/getAllGendersListAct")
const genders = computed(() => { return store.state.formModule.genders })
console.log(genders)
let genderSelected = {}

function onPressGender(gender) {
    store.dispatch("formModule/changeGenderAct", { genderModel: gender })
    genderSelected = computed(() => store.state.formModule.genderSelected)
}

</script>