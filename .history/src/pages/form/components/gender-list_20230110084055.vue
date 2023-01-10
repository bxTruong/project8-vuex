<template>
    <div class="container text-center">
        <div class="row">
            <div class="col border" v-for="item in genders" :key="item" @click="onPressGender(item)"
                :class="{ 'bg-primary': item.id == genderSelected?.value?.id }">
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
console.log('gender length',genders?.value?.length)
let genderSelected = {}

function onPressGender(gender) {
    store.dispatch("formModule/changeGenderAct", { genderModel: gender })
    tgenderSelected = computed(() => store.state.formModule.genderSelected)
    console.log(gender.id == genderSelected.value.id , [gender.id, genderSelected.value.id])
}

</script>