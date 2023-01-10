<template>
  <modal-dialog v-if="stateModalWindowInfoUser" @click="toggleModalWindowInfoUser">
    <p><strong>Login:</strong> {{ user.login }}</p>
    <p><strong>Посты:</strong> {{ user.posts }}</p>
    <p>
      <strong>Телефон:</strong>
      <user-info-input type="number" class="input" v-model:model-value="user.phone"></user-info-input>
    </p>
    <p>
      <strong>Почта:</strong>
      <user-info-input type="text" class="input" v-model="user.mail"></user-info-input>
    </p>
    <main-button class="button-save" @click="updateUserInfo">Сохранить</main-button>
    <main-button class="button-save" @click="exitProfile">Выход</main-button>
  </modal-dialog>
</template>

<script>
import ModalDialog from "@/components/UI/ModalDialog.vue";
import {mapActions, mapGetters} from "vuex";
import LoginButton from "@/components/UI/header/LoginButton.vue";
import UserInfoInput from "@/components/UI/userInfo/UserInfoInput.vue";
import {TOKEN} from "@/const/const";

export default {
  name: "ModalInfoUser",
  components: {
    UserInfoInput,
    LoginButton,
    ModalDialog,
  },
  props: {
    user: {
      login: '',
      posts: [],
      phone: '',
      mail: '',
    }
  },
  computed: {
    ...mapGetters('storeUser', ['stateModalWindowInfoUser', 'requestUpdateUserInfo', 'stateActiveUser']),
  },
  methods: {
    ...mapActions('storeUser', ['toggleModalWindowInfoUser']),
    updateUserInfo() {
      this.requestUpdateUserInfo(this.user.mail, this.user.phone);
      this.toggleModalWindowInfoUser();
    },
    exitProfile() {
      localStorage.removeItem(TOKEN);
      this.stateActiveUser(false)
    }
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

.button-save {
  margin: 0 15px;
}
</style>