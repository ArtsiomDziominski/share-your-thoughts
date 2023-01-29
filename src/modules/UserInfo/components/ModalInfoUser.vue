<template>
  <modal-dialog v-if="stateModalWindowInfoUser" @click="toggleModalWindowInfoUser" class="user-info">
    <p><strong>Login:</strong> {{ user.login }}</p>
    <user-info-posts :posts="user.posts"></user-info-posts>
    <p>
      <strong>Телефон:</strong>
      <user-info-input type="number" class="input" v-model:model-value="user.phone"></user-info-input>
    </p>
    <p>
      <strong>Почта:</strong>
      <user-info-input type="text" class="input" v-model="user.mail"></user-info-input>
    </p>
    <main-button class="user-info__button" @click="updateUserInfo">Сохранить</main-button>
    <main-button class="user-info__button" @click="exitProfile">Выход</main-button>
  </modal-dialog>
</template>

<script>
import ModalDialog from "@/UI/ModalDialog.vue";
import {mapActions, mapGetters} from "vuex";
import LoginButton from "@/UI/registrationAndLogin/LoginButton.vue";
import UserInfoInput from "@/UI/UserInfoInput.vue";
import {TOKEN} from "@/const/const";
import PostsAuthor from "@/modules/UserInfo/components/PostsAuthor.vue";
import UserInfoPosts from "@/modules/UserInfo/components/UserInfoPosts.vue";

export default {
  name: "ModalInfoUser",
  components: {
    UserInfoPosts,
    UserInfoInput,
    LoginButton,
    ModalDialog,
    PostsAuthor
  },
  props: {
    user: {
      login: '',
      posts: [],
      phone: '',
      mail: '',
    },
  },
  computed: {
    ...mapGetters('storeUser', ['stateModalWindowInfoUser', 'requestUpdateUserInfo']),
  },
  methods: {
    ...mapActions('storeUser', ['toggleModalWindowInfoUser', 'toggleActiveUser']),
    updateUserInfo() {
      this.requestUpdateUserInfo(this.user.mail, this.user.phone);
      this.toggleModalWindowInfoUser();
    },
    exitProfile() {
      localStorage.removeItem(TOKEN);
      this.toggleActiveUser(false);
      this.toggleModalWindowInfoUser();
    },
  }
}
</script>

<style scoped>
p {
  margin: 30px 15px;
}

.input {
  margin-left: 5px;
}

.user-info__button {
  margin: 0 15px;
}






</style>