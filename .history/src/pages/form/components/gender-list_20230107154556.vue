<template>
    <div class="container text-center">
        <div class="row">
            <div v-for="item in gendersList" :key="item">
                <div class="col border">
                    Male
                </div>
            </div>

            <div class="col border">
                Female
            </div>
            <div class="col border">
                Other
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps(gendersList)

</script>