<template>
    <div class="post" v-for="post in allPosts">
      <h2 class="post__title">{{ post.title }}</h2>
      <p class="post__description">{{ post.description }}</p>
      <p class="post__updated">{{ post.updatedAt }}</p>
    </div>
</template>

<script>
import {mapGetters} from "vuex";


export default {
  name: "AllPosts",
  data() {
    return {
      allPosts: [{
        title: '',
        description: '',
        createdAt: '',
        updatedAt: ''
      }]
    }
  },
  computed: {
    ...mapGetters('storeAllPosts', ['requestAllPosts'])
  },
  mounted() {
    this.requestAllPosts
        .then((result) => {
          const posts = result.data
          posts.forEach((post, index) => {
            posts[index].description = post.description.length >= 100 ? post.description.slice(0, 100) + '...' : post.description;
            posts[index].updatedAt = post.updatedAt.split('T')[0];
          })
          this.allPosts = posts
        })
        .catch((err) => console.log(err))
  },
}
</script>

<style scoped>
.post {
  position: relative;
  padding: 20px 30px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.post:active {
  background-color: #ececec;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8) inset;
}

.post .post__updated {
  position: absolute;
  right: 10px;
  bottom: 0;
  font-size: 10px;
  color: var(--color-post-data-update);
}
</style>