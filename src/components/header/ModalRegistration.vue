<template>
  <modal-dialog v-if="STATE_MODAL_WINDOW_REGISTRATION" @click="TOGGLE_MODAL_WINDOW_REGISTRATION">
    <login-input class="login">Login</login-input>
    <login-input-password class="registration-password"></login-input-password>
    <login-input-password class="registration-password"></login-input-password>
    <login-button class="registration-button" @click="TOGGLE_MODAL_WINDOW_REGISTRATION">Регистрация</login-button>
  </modal-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ModalRegistration",
  computed: {
    ...mapGetters([
      'STATE_MODAL_WINDOW_REGISTRATION'
    ])
  },
  methods: {
    ...mapActions([
      'TOGGLE_MODAL_WINDOW_REGISTRATION'
    ]),
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