<template>
  <modal-dialog>
    <p class="dialog__title">Заголовок</p>
    <main-input
        class="dialog__title_input"
        maxlength="40"
        v-model="post.title"
    ></main-input>
<!--    <choose-files @create="addImages" :images="post.imageList"></choose-files>-->
    <p>Комментарий</p>
    <textarea
        name="comment"
        cols="40"
        rows="7"
        maxlength="255"
        v-model="post.description"
    ></textarea>
    <slot></slot>
  </modal-dialog>
</template>

<script>
import ChooseFiles from "@/modules/CreateAndEditPost/component/ChooseFiles.vue";

export default {
  name: "ModalCreateAndEdit",
  components: {ChooseFiles},
  props: {
    post: {
      type: Array,
      default: {
        title: '',
        description: '',
        imageList: []
      }
    }
  },
  methods: {
    addImages(image) {
      this.post.imageList = image
    }
  }
}
</script>

<style scoped>
.dialog__title {
  display: inline-block;
  margin: 0 10px 20px 0;
}

.dialog__title_input {
  width: 300px;
}

textarea {
  width: 100%;
}
</style>