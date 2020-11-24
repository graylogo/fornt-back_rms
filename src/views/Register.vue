<template>
  <div class="register_warp">
    <div class="register_div">
      <div class="title"><span>用户注册</span></div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
        <el-form-item label="邮箱" prop="user">
          <el-input v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="passcheck">
          <el-input type="password" v-model="ruleForm.passcheck" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份" prop="type">
          <el-select v-model="ruleForm.type">
              <el-option label="普通用户" value="user"></el-option>
              <el-option label="管理员" value="root"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="go_register" style="float: right">
        <span>已经有账号？<router-link to="/login"><el-button type="text">去登陆！</el-button> </router-link> </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data(){
    const validateUser = (rule,value,callback)=>{
      if(value===''){
        return callback(new Error('用户名不能为空'))
      }else if(value.length<4|| value.length>8){
        return callback(new Error('用户名长度在4～12位之间！'))
      }else{
        callback()
      }
    }

    return {
      ruleForm: {
        user:'',
        pass:'',
        passcheck:'',
        type: 'user'
      },
      rules:{
        user: [
          {required: true, trigger: 'blur'},
          {validator: validateUser, trigger: 'blur'}
        ],
        pass: [
          {required: true, trigger: 'blur'}
        ],
        passcheck: [
          {required: true, trigger: 'blur'}
        ],
      }
    }
  },
  methods:{
    submitForm(name){
      this.$refs[name].validate(valid=>{
        if(valid){
          this.$router.push('/')
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
.register_warp {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/bg.jpg") no-repeat center center;
  background-size: 100% 100%;
}
.register_div{
  width: 400px;
  height: 400px;
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
</style>