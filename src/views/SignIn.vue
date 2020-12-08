<template>
  <div id="bg">
    <v-container
        fill-height
        fluid
    >
      <v-col
          md="10"
          :align="alignment"
          :justify="justify"
      >
        <v-card
            elevation="5"
            shaped
            style="z-index: 90"
        >
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
        </v-card>
      </v-col>
    </v-container>
  </div>
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
</script>

<style scoped>
#bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('../assets/bg.png') no-repeat center center;
  background-size: cover;
  transform: scale(1.1);
  z-index: 0;
}
.display-error{
  color: red;
}
</style>