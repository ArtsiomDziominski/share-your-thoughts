<template>
  <main-button class="create_post" @click="dialogVisible = true">Создать пост</main-button>
  <modal-dialog v-model:show-dialog="dialogVisible">
    <p class="dialog__title">Заголовок</p>
    <input
        class="dialog__title_input"
        maxlength="40"
        v-model="post.title"
    >
    <select-file @create="transferIngList"></select-file>
    <p>Комментарий</p>
    <textarea
        name="comment"
        cols="40"
        rows="7"
        maxlength="255"
        v-model="post.body"
    ></textarea>
    <main-button @click="createPost">Создать</main-button>
  </modal-dialog>
</template>

<script>
import SelectFile from "@/components/SelectFile.vue";

export default {
  name: "CreatePost",
  components: {SelectFile},
  data() {
    return {
      dialogVisible: false,
      post: {
        id: '',
        title: '',
        body: '',
        imgList: []
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
    transferIngList(img) {
      this.post.imgList = img
      console.log(img)
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

.dialog__title {
  display: inline-block;
  margin: 0 10px 20px 0;
}

.dialog__title_input {
  width: 300px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
}

textarea {
  width: 100%;
}
</style>
