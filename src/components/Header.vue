<template>
  <v-app-bar
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      absolute
      color="black"
      dark
      scroll-target="#scrolling-techniques-6"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <img src="@/assets/didier.png" alt="" class="logo">
    <v-toolbar-title>NOMeetic</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
        elevation="1"
        rounded
        color="primary"
        @click="signin"
    >Sign-In</v-btn>
    <v-btn
        elevation="1"
        rounded
        color="primary"
    >Sign-Up</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",

  methods: {
    signin(){
      this.$router.push('/signin')
    },
  },

  data: function () {
    return {
      collapseOnScroll: true,
    }
  }
}
</script>

<style scoped>
.logo{
  height: 100%;
  width: auto;
  margin-right: 1%;
}
</style>