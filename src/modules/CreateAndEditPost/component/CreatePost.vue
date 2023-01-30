<template>
  <main-button class="create_post" @click="toggleModalWindowCreateOrEditPost">Создать пост</main-button>
  <modal-create-and-edit
      v-if="stateModalWindowCreateOrEditPost"
      @click="toggleModalWindowCreateOrEditPost"
      v-model:post="post"
  >
    <main-button v-on:click="createPost">Создать</main-button>
  </modal-create-and-edit>
</template>

<script>
import ModalCreateAndEdit from "@/modules/CreateAndEditPost/component/ModalCreateAndEdit.vue";
import {mapActions, mapGetters} from "vuex";
import {CREATE_POST} from "@/const/const.request-server";

export default {
  name: "CreatePost",
  components: {ModalCreateAndEdit},
  data() {
    return {
      dialogVisible: false,
      post: {
        title: '',
        description: '',
        imageList: []
      },
    }
  },
  computed: {
    ...mapGetters('storeCreateOrEditPost', ['stateModalWindowCreateOrEditPost']),
  },
  methods: {
    ...mapActions('storeCreateOrEditPost', ['toggleModalWindowCreateOrEditPost']),
    createPost() {
      const bodyPost = {
        title: this.post.title,
        description: this.post.description,
      };
      this.requestServerPost(CREATE_POST, bodyPost)
          .then(() => this.$emit('getAllPost'));
      this.post = {
        title: '',
        description: '',
        imgList: []
      }
      this.toggleModalWindowCreateOrEditPost();
    },
    addImages(images) {
      this.post.imageList = images;
    }
  }
}
</script>

<style scoped>
.create_post {
  width: 100%;
}
</style>
