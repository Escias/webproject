<template>
  <v-row no-gutters class="profile">
    <v-col
        cols="6"
        md="3"
        id="leftcard"
    >
      <v-card
          elevation="3"
          shaped
          height="80vh"
      >
        <v-container
            fill-height
            fluid
        >
          <v-col
              :align="alignment"
          >
            <v-avatar size="70">
              <img src="@/assets/alien.png" alt="">
            </v-avatar>
            <div id="btnConfig">
              <br/>
              <v-btn x-large class="menu" text @click="swapComponent('info')">Profile</v-btn>
              <br/>
              <v-btn x-large class="menu" text @click="swapComponent('contact')">Contact</v-btn>
              <br/>
              <v-btn x-large class="menu" text @click="swapComponent('chat')">Chat</v-btn>
              <br/>
              <v-btn x-large class="menu" text @click="swapComponent('security')">Security</v-btn>
              <br/>
              <v-btn x-large class="menu" color="error">Log-Out</v-btn>
            </div>
          </v-col>
        </v-container>
      </v-card>
    </v-col>
    <v-col
        cols="12"
        sm="6"
        md="9"
        id="rightcard"
    >
      <v-card
          elevation="3"
          shaped
          class="scroll"
          height="80vh"
      >
        <div :is="currentComponent"></div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ProfileInfo from "@/components/ProfileInfo";
import ProfileContact from "@/components/ProfileContact";
import ProfileChat from "@/components/ProfileChat";
import ProfileSecurity from "@/components/ProfileSecurity";
import {mapState} from "vuex";

export default {
  name: "ProfileConfig",

  components: {
    info: ProfileInfo,
    contact: ProfileContact,
    chat: ProfileChat,
    security: ProfileSecurity,
  },

  methods: {
    swapComponent(component){
      this.$store.commit('setCurrentProfilePage', component)
    },
  },

  computed: {
    ...mapState({
      'currentComponent': 'currentProfilePage'
    })
  },

  data () {
    return {
      alignment: 'center',
    }
  },
}
</script>

<style scoped>
@import "globalCSS.css";
.profile{
  margin: 1%;
}
#leftcard{
  padding-right: 10px;
}
#rightcard{
  padding-left: 10px;
}
#btnConfig{
  display: flex;
  flex-direction: column;
}
.menu{
  font-size: 150%;
}
.scroll {
  overflow-y: scroll
}
</style>