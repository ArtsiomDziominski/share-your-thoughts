<template>
  <modal-dialog v-if="STATE_MODAL_WINDOW_LOGIN" @click="TOGGLE_MODAL_WINDOW_LOGIN">
    <login-input class="login">Login</login-input>
    <login-input-password class="login-password"></login-input-password>
    <a class="registration-button" @click="clickRegistration()">Регистрация</a>
    <login-button class="login-button" @click="TOGGLE_MODAL_WINDOW_LOGIN">Войти</login-button>
  </modal-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ModalLogin",
  computed: {
    ...mapGetters([
      'STATE_MODAL_WINDOW_LOGIN'
    ])
  },
  methods: {
    ...mapActions([
      'TOGGLE_MODAL_WINDOW_REGISTRATION',
      'TOGGLE_MODAL_WINDOW_LOGIN',
    ]),
    clickRegistration() {
      this.TOGGLE_MODAL_WINDOW_REGISTRATION();
      this.TOGGLE_MODAL_WINDOW_LOGIN();
    }
  }
}
</script>

<style scoped>
.login, .login-password {
  margin: 20px 0;
}

.login-button {
  margin: 20px 0 0 20px;
}

.registration-button {
  cursor: pointer;
}

.registration-button:hover {
  color: #215cf3;
}

.registration-button:active {
  color: rgb(19, 36, 180);
}
</style>