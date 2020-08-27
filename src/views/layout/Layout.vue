<template>
  <div style="height: 100%;">
    <div class="top-bar">
      <img
        class="logo"
        src="https://www.bankdo.com/static/img/logo.b61baf.png"
        alt="logo"
        @click="handleReset">
      <div class="system">
        <span @click="handleJump('inner')">inner</span>
        <span @click="handleJump('mis')">mis</span>
      </div>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar">
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">LogOut</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 系统切换核心 -->
    <iframe v-if="jump" :src="src" frameborder="0" style="width: 100%; height: calc(100vh - 48px);" />
    <div v-else :class="classObj" class="app-wrapper">
      <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
      <sidebar class="sidebar-container"/>
      <div class="main-container">
        <navbar/>
        <app-main/>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapMutations } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  data() {
    return {
      jump: false,
      src: ''
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    },
    // 切换系统
    handleJump(value) {
      this.jump = true
      switch (value) {
        case 'inner':
          this.src = 'http://jsgoshu.cn/test/'
          break
        case 'mis':
          this.src = 'http://uat-mis.easybank.com.cn/'
          break
      }
    },
    handleReset() {
      this.jump = false
      this.src = ''
      this.$router.push({ name: 'Dashboard' })
    },
    logout() {
      this.SET_TOKEN('')
      this.$router.push({
        name: 'Login'
      })
      // this.$store.dispatch('LogOut').then(() => {
      //   location.reload() // 为了重新实例化vue-router对象 避免bug
      // })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .top-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 48px;
    padding-right: 80px;
    // background-color: skyblue;
    .logo {
      position: fixed;
      top: 0;
      left: 0;
      width: 200px;
      height: 48px;
      cursor: pointer;
    }
    .system {
      span {
        margin-left: 10px;
        cursor: pointer;
      }
    }
    .avatar-container {
      height: 48px;
      display: inline-block;
      position: absolute;
      right: 35px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        line-height: initial;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: calc(100vh - 48px);
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
