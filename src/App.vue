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

<style>

</style>
