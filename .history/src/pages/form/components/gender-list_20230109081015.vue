<template>
    <h1>This is genders List</h1>
    <!-- <div class="container text-center">
        <div class="row">
            <div v-for="item in gendersList" :key="item" :class="{ 'bg-primary': item.title == genderSelected?.title }">
                <div class="col border">
                    item.title
                </div>
            </div>
        </div>
    </div> -->
</template>

<script setup>
// import { useStore } from "vuex"
// const store = useStore()

// store.dispatch("")

defineProps(gendersList, genderSelected)

</script>