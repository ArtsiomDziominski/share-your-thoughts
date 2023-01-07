<template>
  <header-site></header-site>
  <router-view></router-view>
</template>

<script>
import HeaderSite from "@/components/header/HeaderSite.vue";

export default {
  components: {
    HeaderSite,
  }
}
</script>

<style scoped>
.post {
  padding: 30px;
  margin: 20px 0;
  border-radius: 20px;
  box-shadow: 2px 2px 10px #181818;
  position: relative;
}

.post-list {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all .5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
