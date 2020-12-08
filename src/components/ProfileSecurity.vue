<template>
  <div>
    <v-card>
      <v-col>
        <h3>Email address</h3>
        <p>Modify your email address</p>
      </v-col>
      <v-col>
        <v-btn rounded>Modify</v-btn>
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
name: "ProfileSecurity"
}
</script>

<style scoped>
@import "globalCSS.css";
</style>