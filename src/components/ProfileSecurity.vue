<template>
  <div>
    <v-card>
      <v-col>
        <h3>Email address</h3>
        <p>Modify your email address</p>
      </v-col>
      <v-col>
        <v-btn
            rounded
            @click="swaphidden('M1')"
        >Modify</v-btn>
        <div id="M1" hidden>
          <v-text-field
              v-model="mail"
              label="Enter Email Address"
              hint="Enter a valid email address"
              :rules="[checkmail(mail)]"
          ></v-text-field>
          <v-btn
              elevation="2"
              color="primary"
              @click="validMail"
          >Validate</v-btn>
        </div>
      </v-col>
    </v-card>
    <v-card>
      <v-col>
        <h3>Phone Number</h3>
        <p>Modify your phone number (or add if you haven't already add one)</p>
      </v-col>
      <v-col>
        <v-btn
            rounded
            @click="swaphidden('M2')"
        >Modify</v-btn>
        <div id="M2" hidden>
          <v-text-field
            v-model="phone"
            label="Enter your phone number"
          ></v-text-field>
          <v-btn
              elevation="2"
              color="primary"
              @click="validPhone"
          >Validate</v-btn>
        </div>
      </v-col>
    </v-card>
    <v-card>
      <v-col>
        <h3>Password</h3>
        <p>Modify your email address</p>
      </v-col>
      <v-col>
        <v-btn
            rounded
            @click="swaphidden('M3')"
        >Modify</v-btn>
        <div id="M3" hidden>
          <v-text-field
              v-model="currentPassword"
              label="Enter your current password"
              hint=""
              :append-icon="check.valuePass ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (check.valuePass = !check.valuePass)"
              :type="check.valuePass ? 'password' : 'text'"
          ></v-text-field>
          <v-text-field
              v-model="newPassword"
              label="Enter new password"
              hint="Min. 8 characters with at least one lowercase, one uppercase and a number."
              :append-icon="check.valuePass2 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (check.valuePass2 = !check.valuePass2)"
              :type="check.valuePass2 ? 'password' : 'text'"
              :rules="[checkpassword(newPassword)]"
          ></v-text-field>
          <v-text-field
              v-model="newPassword2"
              label="Confirm new password"
              hint="Enter same new password"
              :append-icon="check.valuePass3 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (check.valuePass3 = !check.valuePass3)"
              :type="check.valuePass3 ? 'password' : 'text'"
              :rules="[checkconfirmPassword(newPassword2)]"
          ></v-text-field>
          <v-btn
              elevation="2"
              color="primary"
              @click="validPassword"
          >Validate</v-btn>
        </div>
      </v-col>
    </v-card>
    <v-card>
      <v-col>
        <h3>Delete your account</h3>
        <p>Delete all your data (does not delete chat exchanges)</p>
      </v-col>
      <v-col>
        <v-btn rounded color="error" @click="deleteAccount">Delete</v-btn>
      </v-col>
    </v-card>
  </div>
</template>

<script>
export default {
name: "ProfileSecurity",

  methods: {
    deleteAccount(){
      return true
    },
    validMail(){
      if (this.check.mailCheck === true){
        this.swaphidden('M1')
        return true
      }else{
        return false
      }
    },
    validPhone(){
      this.swaphidden('M2')
      return true
    },
    validPassword(){
      if (this.check.passCheck === true){
        this.swaphidden('M3')
        return true
      }else{
        return false
      }
    },
    checkpassword(value){
      const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
      return pattern.test(value)
    },
    checkconfirmPassword(value){
      if (value === this.password){
        this.check.passCheck = true
        return true
      }else{
        this.check.passCheck = false
        return false
      }
    },
    checkmail(value){
      const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+[\w-]{1,5}$/i;
      this.check.mailCheck = pattern.test(value)
      return pattern.test(value)
    },
    swaphidden(id){
      if (id === 'M1'){
        if (this.check.hide1 === true){
          document.getElementById(id).style.display='block'
          this.check.hide1 = false
        }else {
          document.getElementById(id).style.display='none'
          this.check.hide1 = true
        }
      }else if (id === 'M2'){
        if (this.check.hide2 === true){
          document.getElementById(id).style.display='block'
          this.check.hide2 = false
        }else {
          document.getElementById(id).style.display='none'
          this.check.hide2 = true
        }
      }else if (id === 'M3'){
        if (this.check.hide3 === true){
          document.getElementById(id).style.display='block'
          this.check.hide3 = false
        }else {
          document.getElementById(id).style.display='none'
          this.check.hide3 = true
        }
      }
    },
  },

  data () {
    return {
      currentPassword: '',
      newPassword: '',
      newPassword2: '',
      phone: '',
      mail: '',
      check: {
        passCheck: false,
        mailCheck: false,
        valuePass: true,
        valuePass2: true,
        valuePass3: true,
        hide1: true,
        hide2: true,
        hide3: true,
      },
    }
  }
}
</script>

<style scoped>
@import "globalCSS.css";
</style>