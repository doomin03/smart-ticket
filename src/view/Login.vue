<template>
<div class="container-login">
  <div class="login-form">
    <div class="c4B465C fw700 fs26 mt10">스마트티켓 발권 서비스</div>
    <div class="c4B465C fw700 fs13 mt30">이용문의: 숨비랩 0507-1407-1981</div>
    <div class="mt70 input-area">
      <div class="c4B465C fw400 fs13">Email or Username</div>
      <el-input class="h38 mt4"></el-input>
      <div class="row space-between mt16 w100p">
        <div class="c4B465C fw400 fs13 ">Password</div>
        <div class="c7367F0 fw400 fs13">Forgot Password?</div>
      </div>
      <el-input class="h38 mt4"></el-input>

      <el-checkbox class="fw400 c4B465C fs15">Remember Me</el-checkbox>
    </div>
    <button class="common_btn w100p mt-auto" @click="move">
      Sign in
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: "Login",
  mounted() {},
  methods: {
    move(){
      this.$router.push('/home');
    }
  }
}
</script>