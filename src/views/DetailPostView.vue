<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <p class="post__descriptions">{{ post.description }}</p>
    <p class="post__created">created {{ post.createdAt }}</p>
    <p class="post__updated">updated {{ post.updatedAt }}</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {GET_POST} from "@/const/const.request-server";
import Post from "@/components/Post.vue";

export default {
  name: "DetailPostView",
  components: {Post},
  data() {
    return {
      post: {
        title: '',
        description: '',
        createdAt: '',
        updatedAt: '',
        _id: ''
      }
    }
  },
  computed: {
    ...mapGetters('requestServer', ['requestServerPost'])
  },
  mounted() {
    const body = {id: this.$route.params.id}
    this.requestServerPost(GET_POST, body)
        .then((post) => {
          this.post = post.data
          this.post.createdAt = this.post.createdAt.split('T')[0];
          this.post.updatedAt = this.post.updatedAt.split('T')[0];
        })
  },
  methods: {}
}
</script>

<style scoped>
.post {
  width: 90%;
  padding: 20px 20px 40px 20px;
  position: relative;
  margin: auto;
}

.post__descriptions {
  word-wrap: break-word;
}

.post__created {
  position: absolute;
  right: 20px;
  bottom: 15px;
  font-size: 10px;
}

.post__updated {
  position: absolute;
  right: 20px;
  bottom: 0;
  font-size: 10px;
}
</style>