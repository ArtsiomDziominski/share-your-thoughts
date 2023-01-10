<template>
  <modal-dialog v-if="stateModalWindowLogin" @click="hideModal">
    <form v-on:submit.prevent>
      <login-input class="login" v-model="user.login">Login</login-input>
      <login-input-password class="login-password" v-model="user.password"></login-input-password>
      <p class="error">{{ errorMessage }}</p>
      <a class="registration-button" @click="clickRegistration()">Регистрация</a>
      <login-button class="login-button" @click="loginUser()">Войти</login-button>
    </form>
  </modal-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {TOKEN} from "@/const/const";

export default {
  name: "ModalLogin",
  data() {
    return {
      user: {
        login: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters('loginUser', ['requestLoginUser', 'stateModalWindowLogin']),
  },
  methods: {
    ...mapActions('storeRegistration', ['toggleModalWindowRegistration']),
    ...mapActions('loginUser', ['toggleModalWindowLogin']),
    ...mapActions('storeUser', ['toggleActiveUser']),
    clickRegistration() {
      this.toggleModalWindowRegistration();
      this.toggleModalWindowLogin();
    },
    loginUser() {
      this.errorMessage = '';
      this.requestLoginUser(this.user)
          .then(resultServer => {
            const token = resultServer.data.jwt;
            localStorage.setItem(TOKEN, token);
            this.toggleActiveUser(true);
            this.toggleModalWindowLogin();
          })
          .catch((err) => this.errorMessage = err.response.data)
    },
    hideModal() {
      this.toggleModalWindowLogin();
      this.errorMessage = '';
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

.error {
  color: var(--color-attention);
}

.registration-button:hover {
  color: #215cf3;
}

.registration-button:active {
  color: rgb(19, 36, 180);
}
</style>