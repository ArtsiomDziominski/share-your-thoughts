<template>
  <button @click="isShowDialogLogin=true">
    <img src="src/assets/account-avatar.svg" alt="avatar">
  </button>
  <modal-login v-if="isShowDialogLogin" v-model:is-show-dialog-login="isShowDialogLogin"></modal-login>
</template>

<script>
import ModalLogin from "@/components/header/ModalLogin.vue";

export default {
  name: "LoginAvatar",
  components: {ModalLogin},
  data() {
    return {
      isShowDialogLogin: false,
    }
  }
}
</script>

<style scoped>
button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 10px black;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
}

img {
  width: 20px;
  height: 20px;
}
</style>