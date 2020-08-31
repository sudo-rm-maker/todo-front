<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <input type="text" placeholder="输入用户名" v-model="Username">
      <input type="password" placeholder="密码" v-model="Password">
      <button @click="login">提交</button>
      <button @click="logout">注销</button>
    </div>
    <router-view/>
  </div>
</template>

<script >
import Axios from 'axios'
export default {
  data () {
    return {
      Username: '',
      Password: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    login () {
      Axios.post('http://localhost:8888/spi/v1/login', { username: this.Username, password: this.Password }).then((res) => {
        if (res.data.code === 401) {
          console.log('unauthorized')
          return
        }
        console.log(res)
      })
    },
    getData () {
      Axios.defaults.withCredentials = true
      Axios.get('http://localhost:8888/api/v1/index').then(res => {
        if (res.data.code === 401) {
          console.log('unauthorized')
          return
        }
        console.log('login success')
      })
    },
    logout () {
      Axios.post('http://localhost:8888/api/v1/logout').then((res) => {
        if (res.data.code === 401) {
          console.log('unauthorized')
          return
        }
        console.log(res)
      })
    }
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
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
