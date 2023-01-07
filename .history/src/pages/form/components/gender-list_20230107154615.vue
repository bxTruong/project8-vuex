<template>
    <div class="container text-center">
        <div class="row">
            <div v-for="item in gendersList" :key="item" :class="">
                <div class="col border">
                    item.title
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps(gendersList)

</script>