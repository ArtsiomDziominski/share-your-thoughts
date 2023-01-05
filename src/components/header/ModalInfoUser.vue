<template>
  <modal-dialog v-if="stateModalWindowInfoUser" @click="toggleModalWindowInfoUser">
    <p><strong>Login:</strong> {{ user.login }}</p>
    <p><strong>Посты:</strong> {{ user.posts }}</p>
    <p><strong>Телефон:</strong> {{ user.phone }}</p>
    <p><strong>Почта:</strong> {{ user.mail }}</p>
  </modal-dialog>
</template>

<script>
import ModalDialog from "@/components/UI/ModalDialog.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ModalInfoUser",
  components: {ModalDialog},
  computed: {
    ...mapGetters('storeInfoUser', ['stateModalWindowInfoUser']),
  },
  props: {
    user: {
      login: '',
      posts: [],
      phone: '',
      mail: '',
    }
  },
  methods: {
    ...mapActions('storeInfoUser', ['toggleModalWindowInfoUser']),
  }
}
</script>

<style scoped>
p {
  margin: 30px 15px;
}
</style>