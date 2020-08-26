<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import test from '@/api/baseList'
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  created() {
    this.getCommissionStatusList()
    this.SET_TOKEN('sasgasga')
  },
  methods: {
    ...mapMutations('app', ['SET_TOKEN']),
    getCommissionStatusList() {
      return test.getCommissionStatusList().then().catch()
    }
  }
}
</script>
