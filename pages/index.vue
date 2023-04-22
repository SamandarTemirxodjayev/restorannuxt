<template lang="html">
  <GetStarted/>
</template>

<script>
import Vue from 'vue'
import GetStarted from '../components/GetStarted.vue'

export default Vue.extend({
  name: 'IndexPage',
  head: {
    meta:[
      {
        lava: "b1f7ACYa39esRoylVLZI4tcvhF0mNWrwTq2xuHg8EPDdOBjK"
      }
    ]
  }, 
  components: {
    GetStarted
  }
})