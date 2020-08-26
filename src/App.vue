<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import test from '@/api/baseList'
export default {
  name: 'App',
  created() {
    this.getCommissionStatusList()
  },
  methods: {
    getCommissionStatusList() {
      return test.getCommissionStatusList().then().catch()
    }
  }
}
</script>
