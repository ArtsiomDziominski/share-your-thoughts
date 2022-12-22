<template>
  <create-post @create="addPost"></create-post>
  <transition-group name="post-list">
    <div class="post" v-for="post in posts" :post="post" :key="post.id">
      <post
          :post="post"
          @create="deletePost"
      >
      </post>
    </div>
  </transition-group>
</template>

<script>
import CreatePost from "@/components/CreatePost.vue";
import {TEXT_1} from "@/components/const";
import Post from "@/components/Post.vue";

export default {
  components: {
    Post,
    CreatePost,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Hello World',
          body: TEXT_1,
          imageList: ['src/assets/logo.svg', 'src/assets/img1.png', 'src/assets/img2.png', 'src/assets/img3.png', 'src/assets/img4.png'],
        }
      ],
    }
  },
  methods: {
    addPost(post) {
      this.posts.push(post)
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
  },
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
