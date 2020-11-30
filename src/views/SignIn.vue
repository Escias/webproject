<template>
  <v-stepper v-model="e1">
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
    <!--step 1-->
    <v-stepper-content step="1" row>
      <h2>Etape 1</h2>
      <p>Pseudo</p>
      <v-text-field
          placeholder="Pseudo"
          filled
          v-model="nickname"
      ></v-text-field>
      <p>Adresse mail</p>
      <v-text-field
          placeholder="xxx@xxx.xx"
          filled
          v-model="mail"
      ></v-text-field>
      <p>Mot de passe</p>
      <v-text-field
          placeholder="mot de passe"
          filled
          v-model="password"
      ></v-text-field>
    </v-stepper-content>
    <!--step 2-->
    <v-stepper-content step="2">
      <h2>Etape 2</h2>
      <v-avatar>
        <img src="@/assets/alien.png" alt="">
      </v-avatar>
      <p>Image de profil</p>
      <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
      <p>Prénom</p>
      <v-text-field
          placeholder="Prénom"
          filled
          v-model="firstname"
      ></v-text-field>
      <p>Nom</p>
      <v-text-field
          placeholder="Nom"
          filled
          v-model="lastname"
      ></v-text-field>
      <p>Sexe</p>
      <v-radio-group
          row
          v-model="sex"
      >
        <v-radio
            label="Homme"
            id="radio"
        >
        </v-radio>
        <v-radio
            label="Femme"
            id="radio"
        >
        </v-radio>
        <v-radio
            label="Non spécifié"
            id="radio"
        >
        </v-radio>
      </v-radio-group>
      <p>Date de naissance</p>
      <v-date-picker v-model="picker"></v-date-picker>
    </v-stepper-content>
    <!--step 3-->
    <v-stepper-content step="3">
      <p>Centre d'intérêt(s)</p>
      <v-col cols="8">
        <v-combobox
            label="ajouter un centre d'intérêt"
            :items="tags"
            hide-selected
            multiple
            chips
            deletable-chips
        ></v-combobox>
      </v-col>
    </v-stepper-content>
    <!--footer-->
    <v-footer>
      <v-btn
          class="prev"
          elevation="1"
          rounded
          @click="prevbtn"
      >
        Précédent
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
          class="next"
          elevation="1"
          rounded
          color="primary"
          @click="nextbtn"
      >
        Suivant
      </v-btn>
    </v-footer>

  </v-stepper>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
//import AddUser from "@/components/AddUser";
export default {
name: "SignIn",
  components: {
    vueDropzone: vue2Dropzone
  },

  methods:{
    prevbtn(){
      if (this.e1 === 1){
        this.$router.push('/')
      }else{
        this.e1--
      }
    },
    nextbtn(){
      this.display()
      if (this.e1 === 3){
        this.$router.push('/')
      }else{
        this.e1++
      }
    },
    display(){
      console.log(this.nickname)
      console.log(this.mail)
      console.log(this.password)
      console.log(this.firstname)
      console.log(this.lastname)
      console.log(this.sex)
      console.log(this.picker)
    }
  },

  data: function () {
    return {
      e1: 1,
      dropzoneOptions: {
        dictDefaultMessage: 'Glisser et déposer vos fichier ici',
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
      },
      tags: [
        'anti-vacc',
        'anti-covid',
        '5G',
        'terre plate',
          'illuminati',
      ],
      picker: new Date().toISOString().substr(0, 10),
      lastname: 'lastname',
      firstname: 'firstname',
      nickname: 'nickname',
      mail: 'mail',
      password: 'password',
      sex: 'not specified',
    }
  }
}
</script>

<style scoped>

</style>