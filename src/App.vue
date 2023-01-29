<template>
  <header-site></header-site>
  <router-view></router-view>
</template>

<script>
import HeaderSite from "@/modules/Header/components/HeaderSite.vue";

export default {
  components: {
    HeaderSite,
  }
}
</script>

<style>

</style>
