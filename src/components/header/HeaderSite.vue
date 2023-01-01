<template>
  <header>
    <login-avatar></login-avatar>
    <modal-login></modal-login>
    <modal-registration></modal-registration>
  </header>
</template>

<script>
import ModalLogin from "@/components/header/ModalLogin.vue";

export default {
  name: "HeaderSite",
  components: {ModalLogin},
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: flex-end;

}

login-avatar {

}
</style>