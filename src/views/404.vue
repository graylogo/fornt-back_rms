<template>
  <div class="warp">
<!--   <el-image src="./assets/404.gif" fit="fill"></el-image>-->
    <img src="../assets/404.gif" alt="" class="pic_bg">
    <div class="back_button">
   <router-link to="/"><el-button type="danger" size="medium">返回首页</el-button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFind"
}
</script>

<style scoped >
  .warp{
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .pic_bg{
    width: 100%;
    height: 100%;
  }
  a{
    text-decoration: none;

  }
  el-button{
    color: #fff!important;
  }
  .back_button{
    position: absolute;
    top: 10%;
  }
</style>