<template>
  <main-button @click="dialogVisible = true">
    Редактировать
  </main-button>
  <modal-dialog class="edit__modal_dialog" v-model:show-dialog="dialogVisible">
    <label class="edite__title_label">Заголовок</label>
    <main-input class="edite__title" v-model="post.title" maxlength="40"></main-input>
    <div class="edite__image_list">
      <template v-for="image in post.imageList" :key="post.id">
        <img class="edite__image" :src="image" alt="image">
        <img class="edite__image_delete" src="src/assets/close.svg" @click="deleteImage(image)" alt="image close">
      </template>
    </div>
    <textarea
        class="edite__body"
        name="comment"
        cols="40"
        rows="7"
        maxlength="255"
        v-model="post.body"
    ></textarea>
  </modal-dialog>
</template>

<script>
import ModalDialog from "@/components/UI/ModalDialog.vue";

export default {
  name: "EditePost",
  components: {ModalDialog},
  data() {
    return {
      dialogVisible: false,
    }
  },
  props: {
    post: {
      type: Array,
      default: []
    }
  },
  methods: {
    deleteImage(imageCurrent) {
      this.post.imageList = this.post.imageList.filter(image => image !== imageCurrent);
    }
  }
}
</script>

<style scoped>
.edite__title_label {
  margin: 0 10px 20px 0;
}

.edite__title {
  width: 300px;
  margin-bottom: 20px;
}

.edite__image_list {
  display: flex;
  position: relative;
}

.edite__image_list .edite__image {
  position: relative;
  width: 70px;
  height: 70px;
}

.edite__image_list .edite__image_delete {
  width: 15px;
  height: 15px;
  background-color: var(--color-background-close-img);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  top: 5px;
  right: 20px;
}

.edite__image_delete:hover {
  background-color: var(--color-background-close-img-hover);
}

.edite__body {
  width: 100%;
  margin-top: 30px;
}
</style>