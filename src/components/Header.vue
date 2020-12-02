<template>
  <v-app-bar
      dense
      color="black"
      dark
      scroll-target="#scrolling-techniques-6"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-img
        class="logo"
        src="@/assets/didier.png"
        aspect-ratio="1.0"
        contain
        height="70px"
        width="auto"
    ></v-img>
    <v-toolbar-title>NOMeetic</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
        elevation="1"
        rounded
        color="primary"
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

  data: function () {
    return {
      collapseOnScroll: true,
    }
  }
}
</script>

<style scoped>
.logo{
  margin-left: -30%;
  margin-right: -29%;
}
</style>