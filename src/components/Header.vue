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
      <v-btn text @click="home"><v-toolbar-title>ComploMeet</v-toolbar-title></v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="isAuth"
             elevation="1"
             rounded
             color="primary"
             @click="finder"
      >Meet hot complotists in your area</v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="isAuth"
             elevation="1"
             rounded
             color="primary"
             @click="logout"
      >Logout</v-btn>
      <div v-else>
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
      </div>
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
            <v-list-item-title @click="changePage('profile')">Profile</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="changePage('chat')">Chat</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Header",

  computed: {
    ...mapGetters({
      'isAuth': 'userApi/isLoggedIn'
    })
  },

  methods: {
    home(){
      this.$router.push('/')
    },
    finder(){
      this.$router.push('/finder')
    },
    signin(){
      this.$router.push('/signin')
    },
    signup(){
      this.$router.push('/signup')
    },
    logout () {
      this.$store.dispatch('userApi/logout')
      this.$router.push('/')
    },
    changePage(page){
      this.$router.push('/'+page)
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
    },
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