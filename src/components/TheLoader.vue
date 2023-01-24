<template>
  <div class="wrapper-loader" v-if="isLoader">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  name: "TheLoader",
  props: {
    isLoader: false,
  }
}
</script>

<style scoped>
.wrapper-loader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
}
</style>