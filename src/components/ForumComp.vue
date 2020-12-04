<template>
<div>
  Forum List:
  <div>
    <ul id="List">
      <li v-for="topic in Topics" :key="topic.id">
        <v-btn
            block
            color="accent"
            large
            x-large
            text
            :to="{path: 'forum/'+topic.id}"
        >{{ topic.name }}</v-btn>
        {{topic.description}}
      </li>
    </ul>
  </div>

</div>
</template>


<script>

export default {
  name: "Home",
  components: {
  },
  data () {
    return {
      alignment: 'center',
      justify: 'center'
    }
  },
}
</script>

<style scoped>

</style>