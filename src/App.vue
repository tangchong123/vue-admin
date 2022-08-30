<template>
  <div id="app">
    <span>主页面</span>
    <!-- <Login></Login> -->
    <router-view></router-view>
  </div>
</template>
<script>
import Login from "./views/Login/index.vue"
export default {
  components:{
    Login
  }
}
</script>
<style lang="scss">

</style>
