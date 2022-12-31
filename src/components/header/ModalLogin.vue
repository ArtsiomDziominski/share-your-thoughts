<template>
  <modal-dialog @click="closeModalLogin">
    <login-input class="login">Login</login-input>
    <login-input-password class="login"></login-input-password>
    <a @click="toggleModalWindowRegistration">Регистрация</a>
    <login-button class="login-button" @click="closeModalLogin">Войти</login-button>
  </modal-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ModalLogin",
  props: {
    isShowDialogLogin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'STATE_MODAL_WINDOW_REGISTRATION'
    ])
  },
  methods: {
    ...mapActions([
      'TOGGLE_MODAL_WINDOW_REGISTRATION'
    ]),
    toggleModalWindowRegistration() {
      this.TOGGLE_MODAL_WINDOW_REGISTRATION();
    },
    closeModalLogin() {
      this.$emit('update:isShowDialogLogin', false);
    },
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