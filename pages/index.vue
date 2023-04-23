<template lang="html">
  <GetStarted/>
</template>

<script>
import Vue from 'vue'
import GetStarted from '../components/GetStarted.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    GetStarted
  }
})