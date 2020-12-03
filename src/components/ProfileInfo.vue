<template>
  <v-card
      elevation="3"
      shaped
  >
    <v-avatar>
      <img src="@/assets/alien.png" alt="">
    </v-avatar>
    <h3>Username</h3>
    <p>Firstname Lastname</p>
    <p><v-icon>mdi-map-marker</v-icon> City</p>
    <p>Quote - I'm stupid</p>
    <p>2000-01-01</p>
    <v-btn
        elevation="1"
        tile
        small
    >
      Edit Profile
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "ProfileInfo"
}
</script>

<style scoped>

</style>