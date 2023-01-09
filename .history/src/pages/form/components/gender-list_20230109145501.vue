<template>
    <div class="container text-center">
        <div class="row">
            <div v-for="item in gendersList" :key="item" :class="{ 'bg-primary': item.id == genderSelected?.title }">
                <div class="col border">
                    item.title
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex"
const store = useStore()

store.dispatch("getAllGendersListAct")

const props = defineProps({
    gendersList: [],
    genderSelected: {}
})
const gendersList = props.gendersList
const genderSelected = props.genderSelected

</script>