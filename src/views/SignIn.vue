<template>
  <div>
    <v-stepper v-model="e1">
      <!--header-->
      <v-stepper-header>
        <v-stepper-step
            :complete="e1 > 1"
            step="1"
        >
          Step 1
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
            :complete="e1 > 2"
            step="2"
        >
          Step 2
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">
          Step 3
        </v-stepper-step>
      </v-stepper-header>
      <!--main section-->
      <!--step 1-->
      <v-stepper-content step="1" row>
        <h2>Step 1</h2>
        <v-flex offset-md-3 xs6>
          <h3 class="display-error" id="E1"></h3>
          <v-text-field
              v-model="username"
              label="Enter Username"
              hint="Min. 3 characters. Max. 15 characters. Special character not allowed"
              :rules="[rules.username(username)]"
          ></v-text-field>
          <v-text-field
              v-model="mail"
              label="Enter Email Address"
              hint="Enter a valid email address"
              :rules="[rules.mail(mail)]"
          ></v-text-field>
          <v-text-field
              v-model="password"
              label="Enter password"
              hint="Min. 8 characters with at least one lowercase, one uppercase and a number."
              :append-icon="valuePass ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (valuePass = !valuePass)"
              :type="valuePass ? 'password' : 'text'"
              :rules="[rules.password(password)]"
          ></v-text-field>
          <v-text-field
              v-model="password2"
              label="Confirm password"
              hint="Enter same password"
              :append-icon="valuePass2 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (valuePass2 = !valuePass2)"
              :type="valuePass2 ? 'password' : 'text'"
              :rules="[rules.confirmPassword(password2)]"
          ></v-text-field>
        </v-flex>
      </v-stepper-content>
      <!--step 2-->
      <v-stepper-content step="2">
        <h2>Step 2</h2>
        <v-flex offset-md-3 xs6>
          <div id="profile">
            <v-avatar>
              <img src="@/assets/alien.png" alt="">
            </v-avatar>
            <v-dialog
                v-model="dialog"
                scrollable
                max-width="400px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    outlined
                    x-small
                >
                  Change Image
                </v-btn>
              </template>
              <v-card>
                <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" :useCustomSlot=true>
                  <div class="dropzone-custom-content">
                    <h3 class="dropzone-custom-title">Drag and drop your file</h3>
                    <h5 class="subtitle">...or click to select a file from your computer</h5>
                  </div>
                </vue-dropzone>
                <p id="path"></p>
                <v-card-actions>
                  <v-btn
                      color="blue darken-1"
                      outlined
                      @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue darken-1"
                      outlined
                      @click="dialog = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>

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
                value="Male"
                label="Male"
                id="radio"
            >
            </v-radio>
            <v-radio
                value="Female"
                label="Female"
                id="radio"
            >
            </v-radio>
            <v-radio
                value="Not specified"
                label="Not specified"
                id="radio"
            >
            </v-radio>
          </v-radio-group>
          <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="date"
                  label="Birthday"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
                ref="picker"
                v-model="date"
                :max="new Date().toISOString().substr(0,10)"
                min="1900-01-01"
                @input="menu = false"
                :rules="[rules.name(date)]"
            ></v-date-picker>
          </v-menu>
          <!--<v-date-picker v-model="picker"></v-date-picker>-->
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
              v-model="interest"
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
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
name: "SignIn",
  components: {
    vueDropzone: vue2Dropzone,
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
        if (this.check.userCheck===true && this.check.mailCheck===true && this.check.passCheck===true){
          this.e1++
        }else{
          document.getElementById('E1').innerHTML = "Complete all fields"
        }
      }else if(this.e1 === 2){
        if (this.firstname.length!==0 && this.lastname.length!==0 && this.sex!==''){
          this.e1++
        }
      }
    },
    display(){
      console.log(this.interest)
    },
  },

  watch: {
    menu (val) {
      val && setTimeout(()=>(this.$refs.picker.activePicker = 'YEAR'))
    }
  },

  data: function () {
    return {
      e1: 1,
      dropzoneOptions: {
        maxFiles: 1,
        url: 'https://httpbin.org/post',
        thumbnailHeight: 150,
        thumbnailWidth: 150,
        maxFilesize: 5,
        addRemoveLinks: true,
      },
      tags: [
        'anti-vacc',
        'anti-covid',
        '5G',
        'terre plate',
        'illuminati',
      ],
      check: {
        userCheck: false,
        mailCheck: false,
        passCheck: false,
      },
      lastname: "",
      firstname: "",
      username: "",
      mail: "",
      password: "",
      password2: "",
      sex: "",
      date: "",
      interest: "",
      menu: false,
      valid: true,
      valuePass: true,
      valuePass2: true,
      dialogm1: '',
      dialog: false,
      rules: {
        username: () => {
          if (this.username.length>=3 && this.username.length<=15 && this.username.match(/[a-z]/i)){
            this.check.userCheck = true
            return true
          }else{
            return false
          }
        },
        mail: value => {
          const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+[\w-]{1,5}$/i;
          this.check.mailCheck = pattern.test(value)
          return pattern.test(value)
        },
        password: value => {
          const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
          return pattern.test(value)
        },
        confirmPassword: value => {
          if (value === this.password){
            this.check.passCheck = true
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
//service firebase.storage {
//  match /b/{bucket}/o {
//  match /{allPaths=**} {
//    allow read, write: if request.auth != null;
//  }
//}
//}
</script>

<style scoped>
.display-error{
  color: red;
}
#profile{
  display: flex;
  align-items: center;
}
.dropzone-custom-content {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.dropzone-custom-title {
  margin-top: 0;
  color: #00b782;
}

.subtitle {
  color: #314b5f;
}
</style>