<template>
  <v-row no-gutters class="profile">
    <v-col>
      <v-card
          elevation="3"
          shaped
          height="790px"
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
                    <img :src="getImage(user.image)" alt="@/assets/alien.png">
                  </v-avatar>
                </v-col>
                <v-col md="6">
                  <h3>{{ user.firstname }} {{user.lastname}}</h3>
                  <h4>{{user.username}}</h4>
                  <p><v-icon>mdi-map-marker</v-icon> {{ user.city }}</p>
                  <p><v-icon>mdi-comment-minus</v-icon> {{user.comment}}</p>
                  <p><v-icon>mdi-gender-transgender</v-icon> {{user.gender}}</p>
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
export default {
name: "Find",

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
      users: [
        {
          image: "../assets/alien.png",
          firstname: "Firstnom",
          lastname: "Lastnom",
          username: "Usernom",
          city: "Ville",
          comment: "mmmmmmmmmmmmmm",
          gender: "bi",
        },
        {
          image: "@/assets/alien.png",
          firstname: "test",
          lastname: "nom",
          username: "Usernom",
          city: "Ville",
          comment: "sssssssssss",
          gender: "bi",
        },
        {
          image: "../assets/alien.png",
          firstname: "Firstnom",
          lastname: "Lastnom",
          username: "Usernom",
          city: "Ville",
          comment: "mmmmmmmmmmmmmm",
          gender: "bi",
        },
        {
          image: "../assets/alien.png",
          firstname: "Firstnom",
          lastname: "Lastnom",
          username: "Usernom",
          city: "Ville",
          comment: "mmmmmmmmmmmmmm",
          gender: "bi",
        },
      ],
    }
  }
}
</script>

<style scoped>
.profile{
  margin: 1%;
}
.scroll {
  overflow-y: scroll
}
</style>