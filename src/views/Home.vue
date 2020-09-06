<template>
  <div class="home">
    <div class="home-header">
      <img :src="logo">
      <div class="user-info" @click="rotateDir = !rotateDir">
        <div class="dropdown">
          <span class="username">用户</span>
          <transition name="slide-fade">
            <div class="dropdown-content" v-if="rotateDir">
              <span>个人信息</span>
              <span>注销登录</span>
            </div>
          </transition>
        </div>
        <img :src="downIcon" :class="[rotateDir?'dir-icon180':'dir-icon0']">
      </div>
    </div>
    <div class="home-body">
      <!-- user detail information -->
      todo
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { AxiosInst, domain, apiPaths } from '../router/api'

export default {
  name: 'Home',
  data () {
    return {
      logo: require('../assets/logo.png'),
      downIcon: require('../assets/images/down.png'),
      rotateDir: false
    }
  },
  created () {
    // set user information, use vuex
    AxiosInst.get(domain + apiPaths.authPath).then(res => {
      this.$store.commit('setUsername', res.data.username)
      this.$store.commit('setEmail', res.data.email)
      this.$store.commit('setUserID', res.data.userID)
      console.log(res.data)
    })
  },
  methods: {
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex: 1;
  flex-direction: column;
  .home-header {
    display: flex;
    padding: 0 50px;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(217, 217, 217);
    img {
      width: 50px;
      height: 50px;
      user-select: none;
    }

    .user-info {
      display: flex;
      width: 200px;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border: 1px solid rgb(217, 217, 217);
      border-radius: 5px;
      img {
        width: 10px;
        height: 10px;
        margin-left: 8px;
      }
      .dir-icon180{
        transform-origin: center;
        transform: rotate(180deg);
        transition: transform 0.5s;
      }
      .dir-icon0 {
        transform-origin: center;
        transform: rotate(0deg);
        transition: transform 0.5s;
      }
      .dropdown {
        position: relative;
        display: inline-block;
        .username {
          text-overflow: ellipsis;
          width: 150px !important;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-left: 1px solid white;
        }
        .dropdown-content {
          position: absolute;
          display: flex;
          flex-direction: column;
          width: 180px;
          margin-top: 12px;
          background-color: white;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          span {
            margin: 5px 20px;
            height: 25px;
            border-bottom: 1px solid rgb(217, 217, 217);
            font-size: 15px;
            text-align: start;
          }
        }
      }
    }
  }
  .home-body{
    background-color:white;
  }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
