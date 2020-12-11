<template>
  <v-row no-gutters class="profile">
    <v-btn @click="refresh">Refresh</v-btn>
    <v-col>
      <v-card
          elevation="3"
          shaped
          height="70vh"
          class="scroll"
      >
        <v-col>
          <v-container class="fill-height">
            <v-row class="fill-height pb-14" align="end">
              <v-col>
                <div v-for="(item, index) in chats" :key="index"
                     :class="['d-flex flex-row align-center my-2', item.userFromId == currUserId ? 'justify-end': null]">
                  <span v-if="item.userFromId == currUserId" class="blue--text mr-3">{{ item.content }}</span>
                  <v-avatar :color="item.userFromId == currUserId ? 'indigo': 'red'" size="36">
                    <span class="white--text">{{ item.userFromUsername.username[0] }}</span>
                  </v-avatar>
                  <span v-if="item.userFromId != currUserId" class="blue--text ml-3">{{ item.content }}</span>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-card>
      <v-col>
        <v-container fixed>
          <v-container class="ma-0 pa-0">
            <v-row no-gutters>
              <v-col>
                <div class="d-flex flex-row align-center">
                  <v-text-field v-model="msg" placeholder="Type Something" @keypress.enter="send"></v-text-field>
                  <v-btn icon class="ml-4" @click="send"><v-icon>mdi-send</v-icon></v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Chat",

  methods: {
    send: function(){
      const params = {url: this.$route.path.split('/')[2], message: this.msg, idUser: this.currUserId}
      this.$store.dispatch('chatApi/sendMessage', params)
    },
    refresh: function() {
      this.$store.dispatch("chatApi/getMessagesOfConversation", this.$route.path.split('/')[2]);
    }
  },

  mounted() {
    this.$store.dispatch("chatApi/getMessagesOfConversation", this.$route.path.split('/')[2]);
  },


  computed: {
    ...mapGetters({
      'chats': 'chatApi/getMessageList',
      'currUserId': 'userApi/getCurrUserId'
    })
  },

  data () {
    return {
      msg: null,
      refreshMessages: null,
    }
  }
}
</script>

<style scoped>
@import "globalCSS.css";
.profile{
  margin: 1%;
}
</style>