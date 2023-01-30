<template>
  <main-button @click="dialogVisible = true">
    Редактировать
  </main-button>
  <modal-create-and-edit v-if="dialogVisible" v-model:post="post" @click="dialogVisible = false">
  </modal-create-and-edit>
</template>

<script>
import ModalCreateAndEdit from "@/modules/CreateAndEditPost/component/ModalCreateAndEdit.vue";

export default {
  name: "EditPost",
  components: {ModalCreateAndEdit},
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
}
</script>

<style scoped>

</style>