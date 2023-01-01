<template>
  <modal-dialog v-if="stateModalWindowRegistration" @click="toggleModalWindowRegistration">
    <login-input class="login">Login</login-input>
    <login-input-password class="registration-password"></login-input-password>
    <login-input-password class="registration-password"></login-input-password>
    <login-button class="registration-button" @click="toggleModalWindowRegistration">Регистрация</login-button>
  </modal-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ModalRegistration",
  computed: {
    ...mapGetters('storeMenuLoginRegistration', [
      'stateModalWindowRegistration'
    ])
  },
  methods: {
    ...mapActions('storeMenuLoginRegistration', [
      'toggleModalWindowRegistration',
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