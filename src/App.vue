<template>
  <v-app>
    <Header style="z-index: 99"/>
    <router-view/>
    <Footer style="z-index: 98" id="footer"/>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>