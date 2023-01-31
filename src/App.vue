<template>
  <header-site></header-site>
  <router-view></router-view>
  <default-loading></default-loading>
</template>

<script>
import HeaderSite from "@/modules/Header/components/HeaderSite.vue";
import DefaultLoading from "@/components/DefaultLoading.vue";

export default {
  components: {DefaultLoading, HeaderSite}
}
</script>

<style>

</style>
