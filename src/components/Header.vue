<template>
  <v-card>
    <v-app-bar
        dense
        color="black"
        dark
        scroll-target="#scrolling-techniques-6"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img src="@/assets/didier.png" alt="" class="logo">
      <v-btn text @click="home"><v-toolbar-title>NOMeetic</v-toolbar-title></v-btn>
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
          @click="signup"
      >Sign-Up</v-btn>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        width="200"
        height="300px"
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Header",

  methods: {
    home(){
      this.$router.push('/')
    },
    signin(){
      this.$router.push('/signin')
    },
    signup(){
      this.$router.push('/signup')
    },
  },

  data: function () {
    return {
      drawer: false,
      group: null,
    }
  },
  watch: {
    group(){
      this.drawer = false
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