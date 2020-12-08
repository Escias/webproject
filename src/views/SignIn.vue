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

  methods: {
    connect(){
      console.log(this.mail)
      console.log(this.password)
      /*if (...){
        document.getElementById('E1').innerHTML="incorrect mail or password"
      }*/
    },
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