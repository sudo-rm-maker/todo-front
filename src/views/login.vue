<template>
  <div class="login-container">
    <div class="login-header">
      <!-- todo logo, like pornhub logo, design it by self-->
      <img :src="todoLogo">
    </div>
    <div class="login-panel">
      <div class="left-half">
        <img :src="leftPanelImg" class="left-panel-img">
      </div>
      <div class="right-half">
        <p>登录</p>
        <div class="input-info">
          <input type="text" placeholder="email" v-if="toRegister" v-model="email">
          <input type="text" placeholder="username" v-model="username">
          <input type="password" placeholder="password" v-model="password">
          <input type="password" placeholder="repeat password" v-if="toRegister" v-model="repeatPassword">
          <span v-if="toRegister" @click="changePanel">已有账号，去登录</span>
          <span v-else @click="changePanel">没有账号，去注册</span>
          <button v-if="toRegister">注册</button>
          <button v-else @click="login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { domain, apiPaths, AxiosInst } from '../router/api'

export default {
  name: 'login',
  data () {
    return {
      leftPanelImg: require('../assets/images/office-mac.jpg'),
      todoLogo: require('../assets/logo.png'),
      toRegister: false,
      email: '',
      password: '',
      repeatPassword: '',
      username: ''
    }
  },
  methods: {
    changePanel () {
      this.toRegister = !this.toRegister
    },
    login () {
      AxiosInst.post(domain + apiPaths.loginPath, { username: this.username, password: this.password }).then(
        res => {
          console.log(res.data)
          if (res.data.code === 200) {
            console.log('to /')
            this.$router.push('/')
            return
          }
          // need add a component for tips, now only console.log(err)
          console.log(res.data)
        }
      )
    },
    register () {
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: rgb(246, 247, 251);
  .login-header {
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    img{
      width: 50px;
      height: 50px;
      margin-left: 30px;
      justify-content: flex-start;
    }
  }
  .login-panel{
    display: flex;
    flex: 1;
    margin: 150px 300px;
    background-color: rgb(246, 247, 251);
    .left-half {
      flex: 0 0 55%;
      .left-panel-img {
        width: 100%;
        height: 100%;
      }
    }
    .right-half {
      display: flex;
      flex-direction: column;
      background-color: white;
      width: 350px;
      padding-top: 70px;
      p {
        font-size: 25px;
        font-weight: bold;
      }
      .input-info {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin: 0 40px;

        span {
          color: rgb(91, 183, 239);
          border-bottom: 1px solid rgb(217, 217, 217);
          cursor: pointer;
          font-size: 10px;
          margin-top: 20px;
          justify-content: flex-end;
          width: fit-content;
        }
        input{
          border: none;
          border-bottom: 1px solid rgb(217, 217, 217);
          outline-style: none;
          margin-top: 25px;
          height: 25px;
          font-size: 18px;
          width: 100%;
        }
        input:focus{
          border-bottom: 1px solid rgb(91, 183, 239);
        }
        input::-webkit-input-placeholder{
          font-size: 15px;
          color: rgb(217, 217, 217);
        }
        button{
          margin-top: 35px;
          background-color: rgb(91, 182, 239);
          border: none;
          border-radius: 5px;
          height: 35px;
          width: 100%;
          outline-style: none;
          color: white;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
