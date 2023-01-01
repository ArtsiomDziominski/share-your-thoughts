<template>
  <main-button class="create_post" @click="TOGGLE_MODAL_WINDOW_CREATE_EDIT_POST">Создать пост</main-button>
  <modal-create-and-edit
      v-if="STATE_MODAL_WINDOW_CREATE_EDIT_POST"
      @click="TOGGLE_MODAL_WINDOW_CREATE_EDIT_POST"
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
  methods: {
    ...mapGetters([
        'STATE_MODAL_WINDOW_CREATE_EDIT_POST'
    ]),
    ...mapActions([
        'TOGGLE_MODAL_WINDOW_CREATE_EDIT_POST'
    ]),
    createPost() {
      this.post.id = Date.now();
      this.post = {
        title: '',
        body: '',
        imgList: []
      }
      this.TOGGLE_MODAL_WINDOW_CREATE_EDIT_POST();
    },
    addImages(images) {
      this.post.imageList = images;
    }
  }
}
</script>

<style scoped>
.create_post {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}
</style>
