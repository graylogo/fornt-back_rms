<template>
  <div class="login_warp">
<div class="login_session">
  <div class="title"><span>系统登陆</span></div>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
    <el-form-item label="用户名" prop="email">
      <el-input v-model="ruleForm.email"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
    <div class="go_register">
      <span>还没有账号？<router-link to="/register"><el-button type="text">去注册</el-button> </router-link> </span>
    </div>
</div>
  </div>
</template>

<script>
export default {
name: "login",
  data(){
  const validateUser = (rule,value,callback)=>{
    if(value===''){
      return callback(new Error('用户名不能为空'))
    }else if(value.length<4|| value.length>20){
      return callback(new Error('用户名长度在4～12位之间！'))
    }else{
      callback()
    }
    }

  return {
    ruleForm: {
      email:'',
      password:'',
    },
    rules:{
      user: [
        {required: true, trigger: 'blur'},
        {validator: validateUser, trigger: 'blur'}
      ],
      password: [
        {required: true, trigger: 'blur'}
      ],
    }
  }
  },
  methods:{
    submitForm(name){
      this.$refs[name].validate(valid=>{
        if(valid) {
          // this.$router.push('/login')
          this.axios.post('/api/users/login',this.ruleForm).then(res=>{
            console.log(res.data)
          })
        }else{
          console.log('提交失败');
          return false;
        }
      })
    },
    resetForm(name){
      this.$refs[name].resetField();
    }
  }
}
</script>

<style scoped>
.login_warp {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/bg.jpg") no-repeat center center;
  background-size: 100% 100%;
}
.login_session{
  width: 400px;
  height: 300px;
  border: #ccc 1px solid;
  border-radius: 2px;
  padding: 40px;
  padding-left: 10px;
  background-color: #fff;
}
.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
}
.ruleForm{
  margin-top: 30px;
}
.go_register{
  float: right;
}
</style>