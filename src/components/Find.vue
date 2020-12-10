<template>
  <v-row no-gutters class="profile">
    <v-col>
      <v-card
          elevation="3"
          shaped
          height="80vh"
          class="scroll"
      >
        <v-flex v-for="(user,index) in users" :key="users[index]">
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
                    <!--<img :src="getImage(user.image)" alt="@/assets/alien.png">-->
                    <img src="@/assets/alien.png" alt="Alien">
                  </v-avatar>
                </v-col>
                <v-col md="6">
                  <h3>{{ user.firstname }} {{user.lastname}}</h3>
                  <h4>{{user.username}}</h4>
                  <!--<p><v-icon>mdi-map-marker</v-icon> {{ user.city }}</p>-->
                  <p><v-icon>mdi-comment-minus</v-icon> {{user.description}}</p>
                  <p><v-icon>mdi-gender-male-female</v-icon> Gender : {{user.gender}}</p>
                  <p><v-icon>mdi-gender-transgender</v-icon> Sexual orientation : {{user.sexual_orientation}}</p>
                  <v-btn
                      elevation="1"
                      tile
                      small
                  >
                    Like
                  </v-btn>
                </v-col>
              </v-container>
            </v-row>
          </v-card>
        </v-flex>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Find",
  
  methods: {
    getImage(url) {
      if (url !== '' && url.startsWith('http')) {
        return url;
      }
      return require(`@/assets/alien.png`)
    },
  },

  computed: {
    ...mapGetters({
      'users': 'userApi/getList'
    })
  },

  data () {
    return {
      alignment: 'center',
      justify: 'center',
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