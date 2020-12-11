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
          @click="swapPage(link.page)"
      >
        {{ link.link }}
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

  methods: {
    swapPage(page){
      this.$router.push('/'+page)
    },
  },

  data: () => ({
    links: [
      {link: 'Home', page: ''},
      {link: 'Forum', page: ''},
    ]
  }),
}
</script>

<style scoped>

</style>