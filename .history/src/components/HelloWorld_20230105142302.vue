<template>
<h1>{{ count }}</h1>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      transaction
    }
  },
  created() {
    console.log(this.$store.state.count);
    this.count = this.$store.state.count;
  }
}
</script>


