<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script >

export default {
  data () {
    return {
      Username: '',
      Password: ''
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
}
</style>
