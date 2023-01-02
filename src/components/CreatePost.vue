<template>
  <main-button class="create_post" @click="toggleModalWindowCreateOrEditPost">Создать пост</main-button>
  <modal-create-and-edit
      v-if="stateModalWindowCreateOrEditPost"
      @click="toggleModalWindowCreateOrEditPost"
  >
    <main-button @click="createPost">Создать</main-button>
  </modal-create-and-edit>
</template>

<script>
import ModalCreateAndEdit from "@/components/ModalCreateAndEdit.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CreatePost",
  components: {ModalCreateAndEdit},
  data() {
    return {
      dialogVisible: false,
      post: {
        id: '',
        title: '',
        body: '',
        imageList: []
      },
    }
  },
  computed: {
    ...mapGetters('storeCreateOrEditPost', [
      'stateModalWindowCreateOrEditPost'
    ]),
  },
  methods: {
    ...mapActions('storeCreateOrEditPost', [
      'toggleModalWindowCreateOrEditPost'
    ]),
    createPost() {
      this.post.id = Date.now();
      this.post = {
        title: '',
        body: '',
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

</style>
