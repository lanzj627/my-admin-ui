<template>
<div>
  123
  <p>{{this.$store.getters.name}}</p>
</div>

</template>

<script>
export default {
  name: "index",
  created() {
    console.log(this.$store.getters.name)
  }
}
</script>

<style scoped>

</style>