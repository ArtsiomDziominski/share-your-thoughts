<template>
  <main-button class="create_post" @click="dialogVisible = true">Создать пост</main-button>
  <modal-create-and-edit
      v-if="dialogVisible"
      v-model:post="post"
      @click="dialogVisible = false"
  >
    <main-button @click="createPost">Создать</main-button>
  </modal-create-and-edit>
</template>

<script>
import ModalCreateAndEdit from "@/components/ModalCreateAndEdit.vue";

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
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
        imgList: []
      }
      this.dialogVisible=false;
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
