<template>
  <div>
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
                <img :src="getImage(chat.image)" alt="@/assets/alien.png">
              </v-avatar>
            </v-col>
            <v-col md="6">
              <h3>{{chat.username}}</h3>
              <p>{{chat.content}}</p>
            </v-col>
          </v-container>
        </v-row>
      </v-card>
    </v-flex>
  </div>
</template>

<script>

export default {
  name: "ProfileChat",

  components: {

  },

  methods: {
    getImage(url) {
      if (url !== '' && url.startsWith('http')) {
        return url;
      }
      return require(`@/assets/alien.png`)
    }
  },

  data () {
    return {
      alignment: 'center',
      justify: 'center',
      chats: [
        {
          image: "../assets/alien.png",
          username: "Usernom",
          content: "Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least.",
        },
        {
          image: "@/assets/alien.png",
          username: "Usernom",
          content: "Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.",
        },
        {
          image: "../assets/alien.png",
          username: "Usernom",
        },
        {
          image: "../assets/alien.png",
          username: "Usernom",
        },
      ],
    }
  },
}
</script>

<style scoped>
@import "globalCSS.css";
</style>