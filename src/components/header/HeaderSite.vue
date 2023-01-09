<template>
  <header>
    <login-avatar></login-avatar>
    <modal-login></modal-login>
    <modal-registration></modal-registration>
  </header>
</template>

<script>
export default {
  name: "HeaderSite",
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