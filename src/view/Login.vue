<template>
<div class="container-login">
  <div class="login-form">
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
      this.$router.push('/');
    }
  }
}
</script>