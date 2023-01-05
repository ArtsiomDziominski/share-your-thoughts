<template>
  <modal-dialog v-if="stateModalWindowRegistration" @click="toggleModalWindowRegistration">
    <form v-on:submit.prevent>
      <login-input class="login" v-model="UserCandidate.login">Login</login-input>
      <login-input-password class="registration-password" v-model="UserCandidate.password"></login-input-password>
      <login-input-password class="registration-password" v-model="passwordControl"></login-input-password>
      <login-button class="registration-button" @click="createNewUser">Регистрация</login-button>
      <p class="error">{{ errorMessage }}</p>
    </form>
  </modal-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {PASSWORD_NOT_MATCH} from "@/const/message";

export default {
  name: "ModalRegistration",
  data() {
    return {
      UserCandidate: {
        login: '',
        password: ''
      },
      passwordControl: '',
      errorMessage: '',
      messageServer: '',
    }
  },
  computed: {
    ...mapGetters('storeRegistration', ['stateModalWindowRegistration']),
    ...mapGetters('requestServer', ['requestCreateUser']),
  },
  methods: {
    ...mapActions('storeRegistration', ['toggleModalWindowRegistration']),
    createNewUser() {
      this.errorMessage = '';
      this.UserCandidate.password === this.passwordControl ?
          this.requestCreateUser(this.UserCandidate)
              .then((result) => {
                this.messageServer = result.data;
                this.toggleModalWindowRegistration();
              })
              .catch((err) => {
                this.errorMessage = err.response.data;
              }) :
          this.errorMessage = PASSWORD_NOT_MATCH;
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