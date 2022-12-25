<template>
  <modal-dialog>
    <p class="dialog__title">Заголовок</p>
    <main-input
        class="dialog__title_input"
        maxlength="40"
        v-model="post.title"
    ></main-input>
    <select-file @create="addImages" :images="post.imageList"></select-file>
    <p>Комментарий</p>
    <textarea
        name="comment"
        cols="40"
        rows="7"
        maxlength="255"
        v-model="post.body"
    ></textarea>
    <slot></slot>
  </modal-dialog>
</template>

<script>
import SelectFile from "@/components/SelectFile.vue";

export default {
  name: "ModalCreateAndEdit",
  components: {SelectFile},
  props: {
    post: {
      type: Array,
      default: []
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