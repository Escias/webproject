<template>
  <v-stepper v-model="e1">
    <p>test</p>
    <!--header-->
    <v-stepper-header>
      <v-stepper-step
          :complete="e1 > 1"
          step="1"
      >
        Etape 1
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step
          :complete="e1 > 2"
          step="2"
      >
        Etape 2
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">
        Etape 3
      </v-stepper-step>
    </v-stepper-header>
    <!--main section-->
  </v-stepper>
</template>

<script>
//import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'AddUser',

  components: {
    //vueDropzone: vue2Dropzone
  },

  methods:{

  },

  data: function () {
    return {
      e1: 1,
    }
  }
};
</script>

<style>
.prev{
  border: 1px solid darkred;
}
.next{
  border: 1px solid blue;
}
</style>