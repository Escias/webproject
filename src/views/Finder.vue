<template>
  <Find/>
</template>

<script>
import Find from "@/components/Find";

export default {
  name: "Finder",

  mounted() {
    this.$store.dispatch("userApi/getListOtherUsers");
  },

  components: {
    Find
  }
}
</script>

<style scoped>

</style>