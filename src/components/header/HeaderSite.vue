<template>
  <header>
    <login-avatar></login-avatar>
    <modal-registration v-if="isShowDialogRegistration"></modal-registration>
  </header>
</template>

<script>
export default {
  name: "HeaderSite",
  data() {
    return {
      isShowDialogRegistration: true
    }
  },
  methods: {
    showModalRegistration() {
      this.isShowDialogRegistration = true;
    }
  }
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