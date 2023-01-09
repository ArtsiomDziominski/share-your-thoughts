<template>
  <div class="post">
    <modal-create-and-edit
        v-if="stateModalWindowCreateOrEditPost"
        @click="toggleModalWindowCreateOrEditPost"
        v-model:post="post"
    >
      <main-button @click="editPost">Сохранить</main-button>
    </modal-create-and-edit>
    <h2>{{ post.title }}</h2>
    <p class="post__descriptions">{{ post.description }}</p>
    <p class="post__created">created {{ post.createdAt }}</p>
    <p class="post__updated">updated {{ post.updatedAt }}</p>
    <main-button class="button" @click="toggleModalWindowCreateOrEditPost">Изменить</main-button>
    <main-button @click="deletePost">Удалить</main-button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {DELETE_POST, GET_POST, UPDATE_POST} from "@/const/const.request-server";
import Post from "@/components/Post.vue";
import MainButton from "@/components/UI/MainButton.vue";
import ModalCreateAndEdit from "@/components/ModalCreateAndEdit.vue";

export default {
  name: "DetailPostView",
  components: {ModalCreateAndEdit, MainButton, Post},
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
    ...mapGetters('storeCreateOrEditPost', ['stateModalWindowCreateOrEditPost']),
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
  methods: {
    ...mapActions('storeCreateOrEditPost', ['toggleModalWindowCreateOrEditPost']),
    async editPost() {
      const bodyPost = {id: this.post._id, title: this.post.title, description: this.post.description};
      await this.requestServerPost(UPDATE_POST, bodyPost);
      await this.requestServerPost(GET_POST, {id: bodyPost.id})
          .then((post) => {
            this.post = post.data
            this.post.createdAt = this.post.createdAt.split('T')[0];
            this.post.updatedAt = this.post.updatedAt.split('T')[0];
          })
      this.toggleModalWindowCreateOrEditPost();
    },
    deletePost() {
      const bodyPost = {id: this.post._id};
      this.requestServerPost(DELETE_POST, bodyPost)
          .then(()=> window.history.back())
    }
  }
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

.button {
  margin-right: 10px;
}
</style>