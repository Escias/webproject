<template>
  <v-row no-gutters class="profile">
    <v-col>
      <v-card
          elevation="3"
          shaped
          height="790px"
      >
        <v-container
            fill-height
            fluid
        >
          <v-col>
            <v-flex offset-md-3 xs6>
              <h3 class="display-error" id="E1"></h3>
              <v-text-field
                  v-model="mail"
                  label="Enter your email address"
                  hint="Enter your email address"
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  label="Enter your password"
                  hint="Enter your password"
                  :append-icon="valuePass ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="() => (valuePass = !valuePass)"
                  :type="valuePass ? 'password' : 'text'"
              ></v-text-field>
              <v-btn
                  rounded
                  color="primary"
              >Connect</v-btn>
            </v-flex>
          </v-col>
        </v-container>
      </v-card>
    </v-col>
  </v-row>

  <!--<v-flex offset-md-3 xs6>
    <h3 class="display-error" id="E1"></h3>
    <v-text-field
        v-model="mail"
        label="Enter your email address"
        hint="Enter your email address"
    ></v-text-field>
    <v-text-field
        v-model="password"
        label="Enter your password"
        hint="Enter your password"
        :append-icon="valuePass ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="() => (valuePass = !valuePass)"
        :type="valuePass ? 'password' : 'text'"
    ></v-text-field>
    <v-btn
        rounded
        color="primary"
    >Connect</v-btn>
  </v-flex>-->
</template>

<script>
export default {
  name: "SignIn",

  methods:{
    prevbtn(){
      if (this.e1 === 1){
        this.createUser()
        this.$router.push('/')
      }else{
        this.e1--
      }
    },
    nextbtn()
    {
      this.display()
      if (this.e1 === 3) {
        this.createUser()
        this.$router.push('/')
      } else if (this.e1 === 1) {
        if (this.check.userCheck === true && this.check.mailCheck === true && this.check.passCheck === true) {
          this.e1++
        } else {
          document.getElementById('E1').innerHTML = "Complete all fields"
        }
      } else if (this.e1 === 2) {
        if (this.firstname.length !== 0 && this.lastname.length !== 0 && this.sex !== '') {
          this.e1++
        }
      }
    },

    createUser() {
      const params = {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
        email: this.mail,
        sexual_orientation: "Straight",
        gender: this.sex,
        birthday: this.date,
      }
      this.$store.dispatch("userApi/createUser", params)
    }
  },

  data () {
    return {
      valuePass: true,
      alignment: 'center',
      justify: 'center',
      mail: '',
      password: '',
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
.profile{
  margin: 1%;
}
.display-error{
  color: red;
}
</style>