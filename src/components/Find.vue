<template>
  <v-row no-gutters class="profile">
    <v-col>
      <v-card
          elevation="3"
          shaped
          height="80vh"
          class="scroll"
      >
        <div id="filters">
        <v-col cols="3">
          <v-combobox
              label="add sexual orientations"
              :items="sexual"
              hide-selected
              multiple
              chips
              deletable-chips
              v-model="sexuals"
          ></v-combobox>
        </v-col>
        <v-col cols="3">
          <v-combobox
              label="add conspiracies"
              :items="conspiracy"
              hide-selected
              multiple
              chips
              deletable-chips
              v-model="conspiracies"
          ></v-combobox>
        </v-col>
        <v-col cols="3">
          <v-combobox
              label="add genders"
              :items="genderList"
              hide-selected
              multiple
              chips
              deletable-chips
              v-model="gender"
          ></v-combobox>
        </v-col>
        </div>
        <v-flex v-for="(user,index) in users" v-bind:key="index">
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
                  <v-btn @click="initConversation(user._id)"
                      elevation="1"
                      tile
                      small
                  >
                    Chat
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
    getUsersWithFilter(){
      this.$store.dispatch("userApi/getListOtherUsers",{sexual_orientation:this.sexuals,conspiracies:this.conspiracies,genders:this.gender})
    },
    async initConversation(idTo) {
      await this.$store.dispatch('chatApi/initConversation', idTo)
      await this.$router.push({name: 'ChatPage', params: {conversation_id: this.lastConv._id}})
    }
  },
  watch:{
    sexuals:function(){this.getUsersWithFilter()},
    conspiracies:function(){this.getUsersWithFilter()},
    genders:function(){this.getUsersWithFilter()}
  },

  computed: {
    ...mapGetters({
      'users': 'userApi/getList',
      'lastConv': 'chatApi/getLastConv'
    })
  },
  mounted:function(){
    this.getUsersWithFilter()
  },
  data () {
    return {
      alignment: 'center',
      justify: 'center',
      sexuals:"",
      conspiracies:"",
      gender:"",
      sexual:[
        'Bisexual',
        'Heterosexual',
        'Homosexual',
        'Androphilia',
        'Gynephilia',
        'Bi-curious',
        'Gray asexual',
        'Non-heterosexual',
        'Pansexual',
        'Queer',
      ],
      conspiracy:[
        'antivax',
        'anti-covid',
        '5G',
        'flat earth',
        'illuminati',
      ],
      genderList:[
        "Male",
        "Female",
      ],
    }
  }
}
</script>

<style scoped>
@import "globalCSS.css";
.profile{
  margin: 1%;
}
#filters{
  display: flex;
  align-items: center;
}
</style>