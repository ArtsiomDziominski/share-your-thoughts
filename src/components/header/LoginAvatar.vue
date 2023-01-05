<template>
  <button @click="checkUserLogin">
    <img src="src/assets/account-avatar.svg" alt="avatar">
  </button>
  <modal-login></modal-login>
  <modal-info-user :user="user"></modal-info-user>
</template>

<script>
import ModalLogin from "@/components/header/ModalLogin.vue";
import {mapActions, mapGetters} from "vuex";
import ModalInfoUser from "@/components/header/ModalInfoUser.vue";
import {TOKEN} from "@/const/const";

export default {
  name: "LoginAvatar",
  components: {ModalInfoUser, ModalLogin},
  data() {
    return {
      user: {
        login: '',
        posts: [],
        phone: '',
        mail: '',
      }
    }
  },
  computed: {
    ...mapGetters('storeInfoUser', ['getUserInfo']),
  },
  methods: {
    ...mapActions('loginUser', ['toggleModalWindowLogin']),
    ...mapActions('storeInfoUser', ['toggleModalWindowInfoUser']),
    checkUserLogin() {
      const token = localStorage.getItem(TOKEN);
      this.getUserInfo(token)
          .then((userInfo) => {
            this.user = userInfo.data;
            this.toggleModalWindowInfoUser();
          })
          .catch(() => this.toggleModalWindowLogin())

    }
  }
}
</script>

<style scoped>
button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 10px black;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
}

img {
  width: 20px;
  height: 20px;
}
</style>