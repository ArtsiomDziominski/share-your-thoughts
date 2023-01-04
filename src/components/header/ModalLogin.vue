<template>
  <modal-dialog v-if="stateModalWindowLogin" @click="loginUser">
    <form v-on:submit.prevent="loginUser()">
      <login-input class="login">Login</login-input>
      <login-input-password class="login-password"></login-input-password>
      <a class="registration-button" @click="clickRegistration()">Регистрация</a>
      <login-button class="login-button">Войти</login-button>
    </form>
  </modal-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ModalLogin",
  data() {
    return {
      params: {
        login: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters('storeMenuLoginRegistration', ['stateModalWindowLogin']),
    ...mapGetters('loginUser', ['requestLoginUser']),
  },
  methods: {
    ...mapActions('storeMenuLoginRegistration', [
      'toggleModalWindowLogin',
      'toggleModalWindowRegistration',
    ]),
    clickRegistration() {
      this.toggleModalWindowRegistration();
      this.toggleModalWindowLogin();
    },
    async loginUser() {
      await this.requestLoginUser(this.params)
          .then(res => console.log(res))
      await this.toggleModalWindowLogin();
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