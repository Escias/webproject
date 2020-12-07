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
          <div id="Text">
            <h1>ComploMeet</h1>
            <br/>
            Hello and Welcome to the new meet experience, have you ever wondered
            <br/>
            “how can I find a person who is aware of all the lie that the world government is delivering to us?”.
            <br/>
            Here you are, this is the place where you can find a person who really matches you.
            <br/>
            Go on and register 😊.
          </div><br/>
        </v-col>
      </v-container>
    </div>
  </div>
</template>

<script>
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  name: "Home",
  components: {
  },
  data () {
    return {
      alignment: 'center',
      justify: 'center'
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
  z-index: 1;
}
#Text {
  background: coral;
}
</style>
