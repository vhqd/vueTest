<template>
  <div>
    <van-button type="default" @click="showFun()">默认按钮</van-button>
    <p>我是首页</p>
  </div>
</template>

<script>
import services from '../service/index.js'
export default {
  data() {
    return {
      active: 0,
      show: false
    };
  },
  mounted() {
    services.testAxios().then((res)=>{
      if(res.status === 200){
        console.log(res);
        console.log(res.data.links);
      }
    })
  },
  methods: {
    showFun() {
        this.$router.push('/detail')
    }
  }
};
</script>

<style scoped>
</style>
