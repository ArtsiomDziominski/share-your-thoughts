<template>
  <p class="posts">
    <strong>Количество постов: </strong>
    <span> {{ posts.length }} </span>
    <button class="posts__button-show-posts">Показать посты</button>
    <posts-author
        class="posts__author"
        :posts="posts"
    ></posts-author>
  </p>
</template>

<script>
import PostsAuthor from "@/components/header/PostsAuthor.vue";

export default {
  name: "UserInfoPosts",
  components: {PostsAuthor},
  props: {
    posts: Array
  }
}
</script>

<style scoped>
.posts {
  position: relative;
}

.posts__button-show-posts {
  border: 0;
  background-color: rgba(255, 255, 255, 0.14);
  color: rgba(133, 142, 159, 0.53);
  cursor: pointer;
}

.posts__button-show-posts:hover {
  border: 0;
  background-color: rgba(255, 255, 255, 0.0);
  color: black;
  cursor: pointer;
}

.posts__button-show-posts:hover ~ .posts__author {
  display: block;
}

.posts__author {
  display: none;
  width: 100%;
  margin: -10px;
}

.posts__author:hover {
  display: block;
}
</style>