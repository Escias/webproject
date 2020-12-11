<template>
  <div>
    <v-btn @click="debug">DEBUG</v-btn>
    <v-flex v-for="(chat,index) in chats" :key="chats[index]">
      <v-card>
        <v-row no-gutters>
          <v-container
              fill-height
              fluid
          >
            <v-col
                md="3"
                :align="alignment"
                :justify="justify"
            >
              <v-avatar size="120">
                <img src="../assets/alien.png" alt="@/assets/alien.png">
              </v-avatar>
            </v-col>
            <v-col md="6">
              <h3>{{chat.oppositeUser.username}}</h3>
<!--              <p>{{chat.content}}</p>-->
            </v-col>
          </v-container>
        </v-row>
      </v-card>
    </v-flex>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "ProfileChat",

  methods: {
    getImage(url) {
      if (url !== '' && url.startsWith('http')) {
        return url;
      }
      return require(`@/assets/alien.png`)
    },
    debug() {
      console.log(this.chats)
      console.log(this.$store.state.conversationsList)
    }
  },

  mounted() {
    this.$store.dispatch("chatApi/getConversationsIdsOfUser");
  },

  computed: {
    ...mapGetters({
      'chats': 'chatApi/getConvList'
    })
  },

  data () {
    return {
      alignment: 'center',
      justify: 'center',
    }
  },
}
</script>

<style scoped>
@import "globalCSS.css";
</style>