<template>
  <div>
    <Header/>
    <div id="HomePage">
      <h1>ComploMeet</h1>
      <br/>
      Hello and Welcome to the new meet experience, have you ever wondered
      <br/>
      “how can I find a person who is aware of all the lie that the world government is delivering to us?”.
      <br/>
      Here you are, this is the place where you can find a person who really matches you.
      <br/>
      Go on and register 😊.
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
//import Footer from "@/components/Footer";
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: "Home",
  components: {
    Header,
    //Footer
  },
}
</script>

<style scoped>
template {

}

#HomePage {
  position: absolute;
  top: 50%;
  left: 35%;
}

#Text {

}
</style>
