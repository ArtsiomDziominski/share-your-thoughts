<template>
  <modal-dialog @click="showModal()">
    <login-input class="login">Login</login-input>
    <login-input-password class="login"></login-input-password>
    <a @click="showModal()">Регистрация</a>
    <login-button class="login-button" @click="showModal()">Войти</login-button>
  </modal-dialog>
</template>

<script>
import LoginInput from "@/components/UI/LoginInput.vue";
import LoginInputPassword from "@/components/UI/header/LoginInputPassword.vue";
import LoginButton from "@/components/UI/header/LoginButton.vue";

export default {
  name: "ModalLogin",
  components: {LoginButton, LoginInputPassword, LoginInput},
  props: {
    isShowDialogLogin: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showModal() {
      this.$emit('update:isShowDialogLogin', false);
    }
  }
}
</script>

<style scoped>
.login {
  margin: 20px 0;
}

.login-button {
  margin: 20px 0 0 20px;
}
</style>