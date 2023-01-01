<template>
  <header>
    <create-post></create-post>
    <login-avatar></login-avatar>
    <modal-login></modal-login>
    <modal-registration></modal-registration>
  </header>
</template>

<script>
import ModalLogin from "@/components/header/ModalLogin.vue";
import CreatePost from "@/components/CreatePost.vue";

export default {
  name: "HeaderSite",
  components: {CreatePost, ModalLogin},
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}
</style>