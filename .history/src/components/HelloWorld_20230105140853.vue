<template>
<h1>Hello </h1>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  created() {
    console.log(this.$store)
  }
}
</script>


