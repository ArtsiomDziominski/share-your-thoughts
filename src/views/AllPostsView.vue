<template>
  <create-post></create-post>
  <all-posts></all-posts>
</template>

<script>
import CreatePost from "@/modules/CreateAndEditPost/component/CreatePost.vue";
import AllPosts from "@/modules/AllPosts/components/AllPosts.vue";

export default {
  name: "AllPostsView",
  components: {AllPosts, CreatePost},
}
</script>

<style scoped>
</style>