<template>
  <create-post v-if="stateActiveUser" @getAllPost="getAllPost"></create-post>
  <div class="wrapper-loader" v-if="isLoader">
    <span class="loader"></span>
  </div>
  <div class="post" v-for="post in allPosts" :key="post._id" @click="showPost(post._id)">
    <h2 class="post__title">{{ post.title }}</h2>
    <p class="post__description">{{ post.description }}</p>
    <author-date-post class="post__author-data" :post="post"></author-date-post>
    <the-likes @click.stop :post="post"></the-likes>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CreatePost from "@/components/CreatePost.vue";
import {GET_ALL_POSTS, GET_USER} from "@/const/const.request-server";
import {TOKEN} from "@/const/const";
import TheLikes from "@/components/TheLikes.vue";
import AuthorDatePost from "@/components/AuthorDatePost.vue";
import {formatDate} from "@/helpers/format-date";

export default {
  name: "AllPosts",
  components: {AuthorDatePost, TheLikes, CreatePost},
  data() {
    return {
      allPosts: [],
      isLoader: true,
    }
  },
  computed: {
    ...mapGetters('requestServer', ['requestServerGet']),
    ...mapGetters('storeUser', ['stateActiveUser']),
  },
  mounted() {
    this.getAllPost();
    const token = localStorage.getItem(TOKEN)
    if (token) this.requestServerGet(GET_USER)
        .then((user) => {
          this.setUserInfo(user.data);
          this.toggleActiveUser(true);
        })
        .catch((err) => console.log(err.response.data))
  },
  methods: {
    ...mapActions('storeUser', ['toggleActiveUser', 'setUserInfo']),
    showPost(id) {
      this.$router.push({path: '/detail/' + id});
    },
    async getAllPost() {
      await this.requestServerGet(GET_ALL_POSTS)
          .then((result) => {
            const posts = result.data;
            posts.forEach((post, index) => {
              posts[index].description = post.description.length >= 100 ? post.description.slice(0, 100) + '...' : post.description;
              posts[index].createdAt = formatDate(posts[index].createdAt);
              posts[index].updatedAt = formatDate(posts[index].updatedAt);
            })
            this.allPosts = [{
              _id: '',
              title: '',
              description: '',
              createdAt: '',
              updatedAt: ''
            }]
            this.allPosts = posts.reverse();
          })
          .catch((err) => console.log(err))
          .finally(() => this.isLoader = false)
    }
  }
}
</script>

<style scoped>
.wrapper-loader {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

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