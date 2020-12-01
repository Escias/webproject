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
      <v-flex offset-md-3 xs6>
        <h3 class="display-error" id="E1"></h3>
        <v-text-field
            v-model="username"
            label="Enter Username"
            hint="Min. 3 characters. Max. 15 characters. Special character not allowed"
            :rules="[rules.username]"
        ></v-text-field>
        <v-text-field
            v-model="mail"
            label="Enter Email Address"
            hint="Enter a valid email address"
            :rules="[rules.mail]"
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Enter password"
            hint="Min. 8 characters with at least one lowercase, one uppercase and a number."
            :append-icon="valuePass ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (valuePass = !valuePass)"
            :type="valuePass ? 'password' : 'text'"
            :rules="[rules.password]"
        ></v-text-field>
        <v-text-field
            label="Confirm password"
            hint="Enter same password"
            :append-icon="valuePass2 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (valuePass2 = !valuePass2)"
            :type="valuePass2 ? 'password' : 'text'"
            :rules="[rules.confirmPassword]"
        ></v-text-field>
      </v-flex>
    </v-stepper-content>
    <!--step 2-->
    <v-stepper-content step="2">
      <h2>Etape 2</h2>
      <v-flex offset-md-3 xs6>
        <v-avatar>
          <img src="@/assets/alien.png" alt="">
        </v-avatar>
        <p>Image de profil</p>
        <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
        <v-text-field
          label="Firstname"
          v-model="firstname"
          :rules="[rules.name]"
        ></v-text-field>
        <v-text-field
          label="Lastname"
          v-model="lastname"
          :rules="[rules.name]"
        ></v-text-field>
        <p>Sex</p>
        <v-radio-group
          row
          v-model="sex"
        >
          <v-radio
            label="Male"
            id="radio"
          >
          </v-radio>
          <v-radio
            label="Female"
            id="radio"
          >
          </v-radio>
          <v-radio
            label="Not specified"
            id="radio"
          >
          </v-radio>
        </v-radio-group>
        <p>Date de naissance</p>
        <v-date-picker v-model="picker"></v-date-picker>
      </v-flex>
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
      }else if (this.e1 === 1){
        if (this.rules.username===true && this.rules.mail===true && this.rules.confirmPassword===true){
          this.e1++
        }else{
          document.getElementById('E1').innerHTML = "Complete all fields"
        }
      }
    },
    display(){
      console.log("Username")
      console.log(this.rules.username())
      console.log("Mail")
      console.log(this.rules.mail())
      console.log("Password")
      console.log(this.rules.confirmPassword())
    }
  },

  data: function () {
    return {
      e1: 2,
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
      lastname: "",
      firstname: "",
      username: "",
      mail: "",
      password: "",
      sex: "",
      valid: true,
      valuePass: true,
      valuePass2: true,
      rules: {
        username: () => {
          if (this.username.length>=3 && this.username.length<=15 && this.username.match(/[a-z]/i)){
            return true
          }else{
            return false
          }
        },
        mail: value => {
          const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+[\w-]{1,5}$/;
          return pattern.test(value)
        },
        password: value => {
          const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
          return pattern.test(value)
        },
        confirmPassword: value => {
          if (value === this.password){
            return true
          }else{
            return false
          }
        },
        name: value => {
          if (value === ''){
            return false
          }else{
            return true
          }
        }
      }
    }
  }
}
// ^(?=.*[a-zA-Z]{1})([a-zA-Z0-9]{3,15})$
</script>

<style scoped>
.display-error{
  color: red;
}
</style>