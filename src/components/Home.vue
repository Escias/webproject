<template>
  <div>
    <Header/>
    <div id="HomePage">
      <div id="Text">
        <h1>HOME</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
//import Footer from "@/components/Footer";

export default {
  name: "Home",
  components:{
    Header,
    //Footer
  },
}
</script>

<style scoped>
#Text{
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
