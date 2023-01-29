<template>
  <button @click="checkUserLogin">
    <img v-if="stateActiveUser" src="../../../assets/images/account-avatar.svg" alt="avatar">
    <img v-if="!stateActiveUser" src="../../../assets/images/input.svg" alt="input">
  </button>
  <modal-login></modal-login>
  <modal-info-user :user="user"></modal-info-user>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ModalInfoUser from "@/modules/UserInfo/components/ModalInfoUser.vue";
import ModalLogin from "@/modules/LoginForm/components/ModalLogin.vue";

export default {
  name: "LoginAvatar",
  components: {ModalLogin, ModalInfoUser},
  data() {
    return {
      user: {
        login: '',
        posts: [],
        phone: '',
        mail: '',
      },
    }
  },
  computed: {
    ...mapGetters('storeUser', ['getUserInfo', 'stateActiveUser']),
    ...mapGetters('storeAllPosts', ['getAllPosts']),
  },
  methods: {
    ...mapActions('loginUser', ['toggleModalWindowLogin']),
    ...mapActions('storeUser', ['toggleModalWindowInfoUser']),
    checkUserLogin() {
      this.getUserInfo()
          .then((userInfo) => {
            this.user = userInfo.data;
            this.user.posts = [];
            this.getAllPosts.forEach((post)=> {if (post.author === this.user.login) {this.user.posts.push(post)}});
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