<template>
  <div>
    <div id="bg">
      <v-container
          fill-height
          fluid
      >
        <v-col
            :align="alignment"
            :justify="justify"
        >
          <div id="main">
            <h1>ComploMeet</h1>
            <br/>
            <p>Hello and Welcome to the new meet experience, have you ever wondered
            <br/>
            “how can I find a person who is aware of all the lie that the world government is delivering to us?”.
            <br/>
            Here you are, this is the place where you can find a person who really matches you.
            <br/>
              Go on and register 😊.</p>
          </div>
          <br/>
          <v-card
              width="35vh"
              color="#000000"
          >
            <p style="color: white">Retrouvez des profils utilisateur :) </p>
          </v-card>
          <div id="person">
            <v-flex v-for="(fake,index) in fakes" :key="fakes[index]">
                <v-card
                    elevation="10"
                    width="20vh"
                    color="#26c6da"
                    shaped
                >
                  <v-avatar>
                    <img :src="getImage(fake.image)" alt="@/assets/alien.png">
                  </v-avatar>
                  <h3>{{ fake.firstname }} {{fake.lastname}}</h3>
                  <h4>{{fake.username}}</h4>
                  <p><v-icon>mdi-map-marker</v-icon> {{ fake.city }}</p>
                  <p><v-icon>mdi-gender-male-female</v-icon> Gender : {{fake.gender}}</p>
                  <p><v-icon>mdi-gender-transgender</v-icon> Sexual orientation : {{fake.orientation}}</p>
                </v-card>
            </v-flex>
          </div>
        </v-col>
      </v-container>
    </div>
  </div>
</template>

<script>
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  name: "Home",

  methods: {
    getImage(url) {
      if (url !== '' && url.startsWith('http')) {
        return url;
      }
      return require(`@/assets/alien.png`)
    }
  },

  components: {
  },
  data () {
    return {
      alignment: 'center',
      justify: 'center',
      fakes: [
        {
          image: "../assets/alien.png",
          firstname: "Firstnom",
          lastname: "Lastnom",
          username: "Usernom",
          city: "Ville",
          gender: "bi",
          orientation: 'hetero',
        },
        {
          image: "@/assets/alien.png",
          firstname: "test",
          lastname: "nom",
          username: "Usernom",
          city: "Ville",
          gender: "bi",
          orientation: 'hetero',
        },
        {
          image: "@/assets/alien.png",
          firstname: "test",
          lastname: "nom",
          username: "Usernom",
          city: "Ville",
          gender: "bi",
          orientation: 'hetero',
        },
      ]
    }
  },
}
</script>

<style scoped>
#bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('../assets/bg.png') no-repeat center center;
  background-size: cover;
  transform: scale(1.1);
  z-index: 0;
}
#person{
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-content: center;
  z-index: 5;
}
#main{
  border-color: #9ecaed;
  border-radius: 35%;
  box-shadow: 0px 0px 25px 25px #fdff00;
  width: 80vh;
  background-color: #fdff00;
}
</style>
