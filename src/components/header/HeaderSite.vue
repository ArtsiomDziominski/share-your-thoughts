<template>
  <header>
    <login-avatar></login-avatar>
  </header>
</template>

<script>
import LoginAvatar from "@/components/header/LoginAvatar.vue";

export default {
  name: "HeaderSite",
  components: {LoginAvatar}
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