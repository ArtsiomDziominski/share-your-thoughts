<template>
  <the-loader :is-loader="!allPosts.length"></the-loader>
  <div class="post" v-for="post in allPosts" :key="post._id" @click="showPost(post._id)">
    <h2 class="post__title">{{ post.title }}</h2>
    <p class="post__description">{{ post.description }}</p>
    <author-date-post class="post__author-data" :post="post"></author-date-post>
    <the-likes @click.stop :post="post"></the-likes>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import AuthorDatePost from "@/modules/Post/component/AuthorDatePost.vue";
import TheLikes from "@/modules/Post/component/TheLikes.vue";

export default {
  name: "AllPosts",
  components: {TheLikes, AuthorDatePost},
  setup() {
    const store = useStore();
    const router = useRouter()

    const allPosts = computed(()=> store.state.storeAllPosts.allPosts);

    const showPost = id => {
      router.push({path: '/detail/' + id});
    }

    return {showPost, allPosts}
  }
}
</script>

<style scoped>
.post {
  position: relative;
  padding: 20px 30px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: var(--box-shadow-post);
  cursor: pointer;
}

.post:active {
  background-color: #ececec;
  box-shadow: var(--box-shadow-post-active);
}

.post__author-data {
  position: absolute;
  bottom: 25px;
  right: 10px;
}
</style>