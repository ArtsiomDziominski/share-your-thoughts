<template>
  <modal-dialog @click="showModal()">
    <login-input class="login">Login</login-input>
    <login-input-password class="registration-password"></login-input-password>
    <login-input-password class="registration-password"></login-input-password>
    <login-button class="registration-button" @click="showModal()">Регистрация</login-button>
  </modal-dialog>
</template>

<script>
export default {
  name: "ModalRegistration",
  props: {
    isShowDialogRegistration: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showModal() {
      this.$emit('update:isShowDialogRegistration', false);
    }
  }
}
</script>

<style scoped>
.login, .registration-password {
  margin: 20px 0;
}

.registration-button {
  margin: 20px 0 0 20px;
}
</style>