<template>
  <main-button @click="dialogVisible = true">
    Редактировать
  </main-button>
  <modal-create-and-edit v-if="dialogVisible" v-model:post="post" @click="dialogVisible = false">
  </modal-create-and-edit>
</template>

<script>
import ChooseFiles from "@/components/ChooseFiles.vue";
import ModalCreateAndEdit from "@/components/ModalCreateAndEdit.vue";

export default {
  name: "EditPost",
  components: {ModalCreateAndEdit, ChooseFiles},
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