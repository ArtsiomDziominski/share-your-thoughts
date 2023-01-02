<template>
  <modal-dialog v-if="stateModalWindowRegistration" @click="toggleModalWindowRegistration">
    <login-input class="login" v-model="params.login">Login</login-input>
    <login-input-password class="registration-password"></login-input-password>
    <login-input-password class="registration-password"></login-input-password>
    <login-button class="registration-button" @click="registrationNewUser">Регистрация</login-button>
  </modal-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";
import {URL} from "@/components/const";

export default {
  name: "ModalRegistration",
  data() {
    return {
      params: {
        login: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters('storeMenuLoginRegistration', [
      'stateModalWindowRegistration'
    ])
  },
  methods: {
    ...mapActions('storeMenuLoginRegistration', [
      'toggleModalWindowRegistration',
    ]),
    async registrationNewUser() {
      axios.post(URL, {
        title: this.params.login,
        description: 'this.params.password'
      }, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
          .then(function (response) {
          })
          .catch(function (error) {
          })
      this.params.login = '';
      this.params.password = '';
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