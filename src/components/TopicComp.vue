<template>
  <div>
    {{ topic.Name }}
    {{topic.description}}
    <div>
      <ul id="List">
        <li v-for="messages in topic" :key="messages.id">
          {{messages.username}}
          {{messages.body}}
        </li>
      </ul>
    </div>

  </div>
</template>


<script>

export default {
  name: "TopicComp",
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