<template>
  <modal-dialog v-if="stateModalWindowRegistration" @click="toggleModalWindowRegistration">
    <login-input class="login" v-model="params.login">Login</login-input>
    <login-input-password class="registration-password" v-model="params.password"></login-input-password>
    <login-input-password class="registration-password" v-model="passwordControl"></login-input-password>
    <login-button class="registration-button" @click="regUser">Регистрация</login-button>
    <template v-for="error in errorMessage">
      <p class="error">{{ error.path }} обязателен</p>
    </template>
    <p class="error">{{ error }}</p>
  </modal-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {ERROR_VALID_LOGIN_PASSWORD, LOGIN_REPEAT} from "@/const/message";

export default {
  name: "ModalRegistration",
  data() {
    return {
      params: {
        login: '',
        password: ''
      },
      passwordControl: '',
      errorMessage: [],
      error: '',
    }
  },
  computed: {
    ...mapGetters('storeMenuLoginRegistration', ['stateModalWindowRegistration']),
    ...mapGetters('requestServer', ['requestCreateUser']),
    ...mapGetters('registration', ['checkValidLoginPassword', 'checkUserRepeat']),
  },
  methods: {
    ...mapActions('storeMenuLoginRegistration', [
      'toggleModalWindowRegistration',
    ]),
    async checkUserLoginRepeat() {
      await this.checkUserRepeat(this.params.login)
          .then(() => {
            this.createNewUser();
          })
          .catch(() => {
            this.error = LOGIN_REPEAT;
          })
    },
    regUser() {
      this.errorMessage = [];
      this.error = '';
      this.checkValidLoginPassword(this.params, this.passwordControl) ?
          this.checkUserLoginRepeat() :
          this.error = ERROR_VALID_LOGIN_PASSWORD;
    },
    async createNewUser() {
      this.requestCreateUser(this.params)
          .then(() => {
            this.toggleModalWindowRegistration();
          })
          .catch((e) => {
            const error = JSON.parse(e.request.response)
            this.errorMessage = error.errors
          })
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

.error {
  color: var(--color-attention);
}
</style>