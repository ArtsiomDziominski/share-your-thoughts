<template>
  <header>
    <login-avatar></login-avatar>
    <modal-login></modal-login>
    <modal-registration></modal-registration>
  </header>
</template>

<script>
import LoginAvatar from "@/modules/Header/components/LoginAvatar.vue";
import ModalLogin from "@/modules/LoginForm/components/ModalLogin.vue";
import ModalRegistration from "@/modules/RegistrationForm/components/ModalRegistration.vue";

export default {
  name: "HeaderSite",
  components: {ModalRegistration, ModalLogin, LoginAvatar},
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 40px;
}
</style>