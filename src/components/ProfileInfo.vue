<template>
  <div>
      <v-col

          :justify="justify"
      >
          <div class="profile">
            <v-avatar size="128">
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
        <h1>Username</h1>
        <h2>Firstname Lastname</h2>
        <br/>

        <div class="profile">
          <v-col md="3">
            <p><v-icon>mdi-map-marker</v-icon> City</p>
          </v-col>
          <v-col md="6">
            <v-btn
                elevation="2"
                @click="swaphidden('E1')"
            >
              Edit
            </v-btn>
          </v-col>
        </div>
        <div id="E1" hidden>
          <v-text-field
              v-model="city"
              label="Enter City"
          ></v-text-field>
          <v-btn
              elevation="2"
              color="primary"
              @click="validCity"
          >Validate</v-btn>
        </div>
        <br/>

        <div class="profile">
          <v-col md="3">
            <p><v-icon>mdi-comment-minus</v-icon> Quote - I'm stupid</p>
          </v-col>
          <v-col md="6">
            <v-btn
              elevation="2"
              @click="swaphidden('E2')"
            >
              Edit
            </v-btn>
          </v-col>
        </div>
        <div id="E2" hidden>
          <v-text-field
              v-model="comment"
              label="Enter comment"
          ></v-text-field>
          <v-btn
              elevation="2"
              color="primary"
              @click="validComment"
          >Validate</v-btn>
        </div>
        <br/>

        <div class="profile">
          <v-col md="3">
            <p><v-icon>mdi-gender-male-female</v-icon> Gender : Male</p>
          </v-col>
          <v-col md="6">
            <v-btn
                elevation="2"
                @click="swaphidden('E3')"
            >
              Edit
            </v-btn>
          </v-col>
        </div>
        <div id="E3" hidden>
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
          <v-btn
              elevation="2"
              color="primary"
              @click="validGender"
          >Validate</v-btn>
        </div>
        <br/>

        <div class="profile">
          <v-col md="3">
            <p><v-icon>mdi-gender-transgender</v-icon> Sexual orientation : Pansexual</p>
          </v-col>
          <v-col md="6">
            <v-btn
                elevation="2"
                @click="swaphidden('E4')"
            >
              Edit
            </v-btn>
          </v-col>
        </div>
        <div  id="E4" hidden>
          <v-col cols="5">
            <v-combobox
                label="pick your sexual orientation"
                :items="sexual"
                hide-selected
                chips
                deletable-chips
                v-model="sexorient"
            ></v-combobox>
          </v-col>
          <v-btn
              elevation="2"
              color="primary"
              @click="validSexual"
          >Validate</v-btn>
        </div>
        <br/>

        <div class="profile">
          <v-col md="3">
            <p><v-icon>mdi-cake-variant</v-icon> 2000-01-01</p>
          </v-col>
          <v-col md="6">
            <v-btn
                elevation="2"
                @click="swaphidden('E5')"
            >
              Edit
            </v-btn>
          </v-col>
        </div>
        <div id="E5" hidden>
          <v-date-picker
              ref="picker"
              v-model="date"
              :max="new Date().toISOString().substr(0,10)"
              min="1900-01-01"
              @input="menu = false"
              :rules="[checkname(date)]"
          ></v-date-picker>
          <v-btn
              elevation="2"
              color="primary"
              @click="validDate"
          >Validate</v-btn>
        </div>
      </v-col>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: "ProfileInfo",

  components: {
    vueDropzone: vue2Dropzone,
  },

  methods: {
    validDate(){
      if (this.date !== ''){
        this.swaphidden('E5')
        return true
      }else{
        return false
      }
    },
    validSexual(){
      if (this.sexorient !== ''){
        this.swaphidden('E4')
        return true
      }else{
        return false
      }
    },
    validGender(){
      if (this.sex !== ''){
        this.swaphidden('E3')
        return true
      }else{
        return false
      }
    },
    validComment(){
      this.swaphidden('E2')
      return true
    },
    validCity(){
      if (this.city !== ''){
        this.swaphidden('E1')
        return true
      }else{
        return false
      }
    },
    checkusername(){
      if (this.username.length>=3 && this.username.length<=15 && this.username.match(/[a-z]/i)){
        this.check.userCheck = true
        return true
      }else{
        return false
      }
    },
    checkname(value){
      return value !== '';
    },
    swaphidden(id){
      if (id === 'E1'){
        if (this.check.hide1 === true){
          document.getElementById(id).style.display='block'
          this.check.hide1 = false
        }else {
          document.getElementById(id).style.display='none'
          this.check.hide1 = true
        }
      }else if (id === 'E2'){
        if (this.check.hide2 === true){
          document.getElementById(id).style.display='block'
          this.check.hide2 = false
        }else {
          document.getElementById(id).style.display='none'
          this.check.hide2 = true
        }
      }else if (id === 'E3'){
        if (this.check.hide3 === true){
          document.getElementById(id).style.display='block'
          this.check.hide3 = false
        }else {
          document.getElementById(id).style.display='none'
          this.check.hide3 = true
        }
      }else if (id === 'E4'){
        if (this.check.hide4 === true){
          document.getElementById(id).style.display='block'
          this.check.hide4 = false
        }else {
          document.getElementById(id).style.display='none'
          this.check.hide4 = true
        }
      }
      else if (id === 'E5'){
        if (this.check.hide5 === true){
          document.getElementById(id).style.display='block'
          this.check.hide5 = false
        }else {
          document.getElementById(id).style.display='none'
          this.check.hide5 = true
        }
      }
    },
  },

  data () {
    return {
      username: '',
      city: '',
      comment: '',
      sex: '',
      sexorient: '',
      date: '',
      dropzoneOptions: {
        maxFiles: 1,
        url: 'https://httpbin.org/post',
        thumbnailHeight: 150,
        thumbnailWidth: 150,
        maxFilesize: 5,
        addRemoveLinks: true,
      },
      alignment: 'center',
      justify: 'center',
      dialog: false,
      sexual: [
        'Asexual',
        'Bisexual',
        'Heterosexual',
        'Homosexual',
        'Androphilia',
        'Gynephilia',
        'Bi-curious',
        'Gray asexual',
        'Non-heterosexual',
        'Pansexual',
        'Queer',
      ],
      check: {
        hide1: true,
        hide2: true,
        hide3: true,
        hide4: true,
        hide5: true,
      },
    }
  },
}
</script>

<style scoped>
@import "globalCSS.css";
.profile{
  display: flex;
  align-items: center;
}
</style>