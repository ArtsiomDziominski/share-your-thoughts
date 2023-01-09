<template>
  <create-post @getAllPost="getAllPost"></create-post>
  <div class="post" v-for="post in allPosts" :key="post._id" @click="showPost(post._id)">
    <h2 class="post__title">{{ post.title }}</h2>
    <p class="post__description">{{ post.description }}</p>
    <p class="post__updated">{{ post.updatedAt }}</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import CreatePost from "@/components/CreatePost.vue";
import {GET_ALL_POSTS} from "@/const/const.request-server";

export default {
  name: "AllPosts",
  components: {CreatePost},
  data() {
    return {
      allPosts: [{
        _id: '',
        title: '',
        description: '',
        createdAt: '',
        updatedAt: ''
      }]
    }
  },
  computed: {
    ...mapGetters('requestServer', ['requestServerGet']),
  },
  mounted() {
    this.getAllPost();
  },
  methods: {
    showPost(id) {
      this.$router.push({path: '/detail/' + id});
    },
    async getAllPost() {
      await this.requestServerGet(GET_ALL_POSTS)
          .then((result) => {
            const posts = result.data;
            posts.forEach((post, index) => {
              posts[index].description = post.description.length >= 100 ? post.description.slice(0, 100) + '...' : post.description;
              posts[index].updatedAt = post.updatedAt.split('T')[0];
            })
            this.allPosts= [{
              _id: '',
              title: '',
              description: '',
              createdAt: '',
              updatedAt: ''
            }]
            this.allPosts = posts;
          })
          .catch((err) => console.log(err))
    }
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

.post .post__updated {
  position: absolute;
  right: 10px;
  bottom: 0;
  font-size: 10px;
  color: var(--color-post-data-update);
}
</style>