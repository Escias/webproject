<template>
  <div>
    <v-card>
      <v-col>
        <h3>Email address</h3>
        <p>Modify your email address</p>
      </v-col>
      <v-col>
        <v-dialog
            v-model="dialog"
            scrollable
            max-width="400px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                rounded
                v-bind="attrs"
                v-on="on"
            >
              Modify
            </v-btn>
          </template>
          <v-card>
            <v-text-field
                v-model="currentPassword"
                label="Enter your current password"
                hint=""
                :append-icon="valuePass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (valuePass = !valuePass)"
                :type="valuePass ? 'password' : 'text'"
                :rules="[rules.password(currentPassword)]"
            ></v-text-field>
            <v-text-field
                v-model="newPassword"
                label="Enter new password"
                hint="Min. 8 characters with at least one lowercase, one uppercase and a number."
                :append-icon="valuePass2 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (valuePass2 = !valuePass2)"
                :type="valuePass2 ? 'password' : 'text'"
                :rules="[rules.password(newPassword)]"
            ></v-text-field>
            <v-text-field
                v-model="newPassword2"
                label="Confirm new password"
                hint="Enter same new password"
                :append-icon="valuePass3 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (valuePass3 = !valuePass3)"
                :type="valuePass3 ? 'password' : 'text'"
                :rules="[rules.password(newPassword2)]"
            ></v-text-field>
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
      </v-col>
    </v-card>
    <v-card>
      <v-col>
        <h3>Phone Number</h3>
        <p>Modify your phone number (or add if you haven't already add one)</p>
      </v-col>
      <v-col>
        <v-btn rounded>Modify</v-btn>
      </v-col>
    </v-card>
    <v-card>
      <v-col>
        <h3>Password</h3>
        <p>Modify your email address</p>
      </v-col>
      <v-col>
        <v-btn rounded>Modify</v-btn>
      </v-col>
    </v-card>
    <v-card>
      <v-col>
        <h3>Delete your account</h3>
        <p>Delete all your data (does not delete chat exchanges)</p>
      </v-col>
      <v-col>
        <v-btn rounded color="error">Delete</v-btn>
      </v-col>
    </v-card>
  </div>
</template>

<script>
export default {
name: "ProfileSecurity",

  data () {
    return {
      currentPassword: '',
      newPassword: '',
      newPassword2: '',
      valuePass: true,
      valuePass2: true,
      valuePass3: true,
      rules: {
        mail: value => {
          const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+[\w-]{1,5}$/i;
          this.check.mailCheck = pattern.test(value)
          return pattern.test(value)
        },
        password: value => {
          const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
          return pattern.test(value)
        },
      }
    }
  }
}
</script>

<style scoped>
@import "globalCSS.css";
</style>