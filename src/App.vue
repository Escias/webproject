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
  },

  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      // eslint-disable-next-line no-unused-vars
      return new Promise(function (resolve, reject) {
        if (err.status === 401) {
          this.$store.dispatch('logout')
          return this.$router.push('/login')
        }
        throw err;
      });
    });
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
