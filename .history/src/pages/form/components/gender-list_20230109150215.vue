<template>
    <div class="container text-center">
        <div class="row">
            <div v-for="item in gendersList" :key="item" :class="{ 'bg-primary': item.id == genderSelected?.id }">
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

store.dispatch("formModule/getAllGendersListAct")
const gendersList = computed(() => store.state.form)


</script>