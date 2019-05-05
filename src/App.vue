<template>
  <div id="app">
    <transition :name="transitionName">
      <!-- <keep-alive :include="keepAlive"> -->
      <keep-alive>
        <router-view class="Router" :style="{transition: 'all '+transitionTime+'s ease'}"></router-view>
      </keep-alive>
    </transition>

    <van-tabbar v-model="active" v-if="tabbarShow">
      <van-tabbar-item icon="home-o" @click="toHome()">主页</van-tabbar-item>
      <van-tabbar-item icon="search" dot @click="toSearch()">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5" @click="toFriend()">朋友</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20" @click="toMe()">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
      transitionTime:0.377,//Tabbar切换页面时不使用动画
      /* keepAlive: "home", //需要缓存的页面 例如首页 */
      transitionName: "slide-right" //初始过渡动画方向
    };
  },
  methods: {
    toHome() {
      this.$router.replace({ path: "/home" });
    },
    toSearch() {
      this.$router.replace({ path: "/search" });
    },
    toFriend() {
      this.$router.replace({ path: "/friend" });
    },
    toMe() {
      this.$router.replace({ path: "/me" });
    },
    /**
     * 避免切换Tabbar之后，如果执行刷新页面active会初始为0
     * 导致在其他页面Tabbar都是选中第一项的问题
     */
    initRefresh() {
      let thisPath = this.$route.path;
      let tabbarPath = this.$store.getters.getTabbarPath;
      let thisIndex = tabbarPath.indexOf(thisPath);
      if (thisIndex >= 0) {
        if (thisIndex == 0 || thisIndex == 1) {
          this.active = 0;
        } else {
          this.active = thisIndex - 1;
        }
      }
    }
  },
  mounted() {
    this.initRefresh();
  },
  watch: {
    $route(to, from) {
      this.initRefresh();

      //判断是否显示tabbar
      if (
        to.path == "/" ||
        to.path == "/index" ||
        to.path == "/home" ||
        to.path == "/search" ||
        to.path == "/friend" ||
        to.path == "/me"
      ) {
        this.$store.commit("updateTabbarShow", true);
        this.transitionTime = 0
      } else {
        this.$store.commit("updateTabbarShow", false);
         this.transitionTime = 0.377
      }

      // 切换动画
      let isBack = this.$router.isBack; // 监听路由变化时的状态为前进还是后退
      console.log(this.$router);
      
      if (isBack) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
      this.$router.isBack = false;
    }
  },
  computed: {
    tabbarShow() {
      return this.$store.getters.getTabbarShow;
    }
  }
};
</script>

<style scoped lang='scss'>
#app {
  .Router {
    position: absolute;
    width: 100%;
   /*  transition: all 0.377s ease; */
    will-change: transform;
    top: 0;
    backface-visibility: hidden;
    perspective: 1000;
    padding-bottom: 1rem;
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}
</style>
