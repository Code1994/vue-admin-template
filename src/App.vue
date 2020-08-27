<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$success('App created')
    console.log('App created')
  }
}
</script>
