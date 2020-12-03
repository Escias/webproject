<template>
  <v-footer
      color="black"
      padless
  >
    <v-row
        justify="center"
        no-gutters
    >
      <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
          class="grey darken-4 py-4 text-center white--text"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>ComploMeet</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>


<script>
export default {
  name: "Footer",

  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Forum',
      'Contact Us',
    ],
  }),
}
</script>

<style scoped>

</style>