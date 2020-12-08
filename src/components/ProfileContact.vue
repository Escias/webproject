<template>
  <div>
    <v-flex v-for="(contact,index) in contacts" :key="contacts[index]">
      <v-card>
        <v-row no-gutters>
          <v-col md="6">
            <v-avatar>
              <img :src="getImage(contact.image)" alt="@/assets/alien.png">
            </v-avatar>
          </v-col>
          <v-col md="6">
            <h3>{{ contact.firstname }} {{contact.lastname}}</h3>
            <h4>{{contact.username}}</h4>
            <p><v-icon>mdi-map-marker</v-icon> {{ contact.city }}</p>
            <p><v-icon>mdi-comment-minus</v-icon> {{contact.comment}}</p>
            <p><v-icon>mdi-gender-transgender</v-icon> {{contact.city}}</p>
            <v-btn
                elevation="1"
                tile
                small
            >
              Delete
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </div>
</template>

<script>

export default {
  name: "ProfileContact",

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
      contacts: [
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
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>