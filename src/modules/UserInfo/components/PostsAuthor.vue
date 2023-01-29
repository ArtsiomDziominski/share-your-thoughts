<template>
  <div class="wrapper-post">
    <div class="post" v-for="post in posts" :key="post._id">
      <span class="post__title" @click="showPost(post._id)">{{ post.title }}</span>
      <span class="post__likes">Likes: {{ post.usersLiked.length }}</span>
    </div>
  </div>
</template>

<script>
import ModalDialog from "@/UI/ModalDialog.vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";


export default {
  name: "PostsAuthor",
  components: {ModalDialog},
  props: {
    posts: Array
  },
  setup() {
    const router = useRouter();
    const store = useStore()
    const showPost = postId => {
      store.dispatch("storeUser/toggleModalWindowInfoUser");
      router.push({path: '/detail/' + postId});
    }
    return {showPost}
  }
}
</script>

<style scoped>
.wrapper-post {
  position: absolute;
  top: 0;
  max-height: 400px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}

.post {
  position: relative;
  display: flex;
  flex-direction: row;
}

.post__title {
  position: relative;
  cursor: pointer;
}

.post__title:hover {
  text-decoration: underline;
}

.post__likes {
  display: none;
  position: absolute;
  top: -5px;
  left: -80px;
  background-color: white;
  padding: 5px;
  box-shadow: 0 0 10px black;
  border-radius: 5px;
}

.post__title:hover + .post__likes {
  display: inline-block;
}
</style>