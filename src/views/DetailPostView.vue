<template>
  <router-link class="button-back" to="/">{{ '<<' }} Назад</router-link>
  <div class="post">
    <the-loader :is-loader="isLoader"></the-loader>
    <modal-create-and-edit
        v-if="stateModalWindowCreateOrEditPost"
        @click="toggleModalWindowCreateOrEditPost"
        v-model:post="post"
    >
      <main-button @click="editPost">Сохранить</main-button>
    </modal-create-and-edit>
    <h2>{{ post.title }}</h2>
    <p class="post__descriptions">{{ post.description }}</p>
    <author-date-post class="post__author-date" :post="post"></author-date-post>
    <div class="post__footer">
      <div class="post__button">
        <main-button class="button" v-if="isActiveButton" @click="toggleModalWindowCreateOrEditPost">
          Изменить
        </main-button>
        <main-button v-if="isActiveButton" @click="deletePost">Удалить</main-button>
      </div>
      <the-likes class="likes" :post="post"></the-likes>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {DELETE_POST, GET_POST, GET_USER, UPDATE_POST} from "@/const/const.request-server";
import Post from "@/modules/Post/component/Post.vue";
import MainButton from "@/UI/MainButton.vue";
import ModalCreateAndEdit from "@/modules/CreateAndEditPost/component/ModalCreateAndEdit.vue";
import TheLikes from "@/modules/Post/component/TheLikes.vue";
import {formatDate} from "@/helpers/format-date";
import AuthorDatePost from "@/modules/Post/component/AuthorDatePost.vue";
import TheLoader from "@/UI/TheLoader.vue";

export default {
  name: "DetailPostView",
  components: {TheLoader, AuthorDatePost, TheLikes, ModalCreateAndEdit, MainButton, Post},
  data() {
    return {
      post: {
        title: '',
        description: '',
        createdAt: '',
        updatedAt: '',
        _id: '',
        author: ''
      },
      isLoader: true,
      isActiveButton: false
    }
  },
  computed: {
    ...mapGetters('storeCreateOrEditPost', ['stateModalWindowCreateOrEditPost']),
    ...mapGetters('requestServer', ['requestServerPost', 'requestServerGet']),
  },
  async mounted() {
    const body = {id: this.$route.params.id}
    await this.requestServerPost(GET_POST, body)
        .then((post) => {
          this.post = post.data
          this.post.createdAt = formatDate(this.post.createdAt);
          this.post.updatedAt = formatDate(this.post.updatedAt);
          this.isLoader = false;
        })
    await this.requestServerGet(GET_USER)
        .then((user) => {
          this.isActiveButton = this.post.author === user.data.login;
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
            this.post.createdAt = formatDate(this.post.createdAt);
            this.post.updatedAt = formatDate(this.post.updatedAt);
          })
      this.toggleModalWindowCreateOrEditPost();
    },
    deletePost() {
      const bodyPost = {id: this.post._id};
      this.requestServerPost(DELETE_POST, bodyPost)
          .then(() => window.history.back())
    }
  }
}
</script>

<style scoped>
.button-back {
  margin: 20px 50px;
}

.post {
  width: 90%;
  padding: 20px 20px 40px 20px;
  position: relative;
  margin: auto;
  box-shadow: var(--box-shadow-post);
  border-radius: 10px;
}

.post__descriptions {
  word-wrap: break-word;
}

.button {
  margin-right: 10px;
}

.post__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.post__author-date {
  position: absolute;
  top: 25px;
  right: 10px;
}
</style>