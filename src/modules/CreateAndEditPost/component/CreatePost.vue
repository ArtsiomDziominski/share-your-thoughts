<template>
  <main-button class="create_post" @click="showDialogWindowCreatePost">Создать пост</main-button>
  <modal-create-and-edit
      v-if="isActiveDialogCreateEdit"
      @click="showDialogWindowCreatePost"
      v-model:post="post"
  >
    <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
    <main-button @click="createPost" :disabled="isButton">
      <span v-if="!isButton">Создать</span>
      <span v-else>Загрузка...</span>
    </main-button>
  </modal-create-and-edit>
</template>

<script>


import {useStore} from "vuex";
import {computed, ref} from "vue";
import {requestServerPost} from "@/api/request-server";
import {getAllPost} from "@/helpers/get-all-posts";
import {CREATE_POST} from "@/const/const.request-server";
import ModalCreateAndEdit from "@/modules/CreateAndEditPost/component/ModalCreateAndEdit.vue";
import {ERROR_SAVE_POST} from "@/const/message";


export default {
  name: "CreatePost",
  components: {ModalCreateAndEdit},
  setup() {
    const store = useStore()
    let isActiveDialogCreateEdit = false;
    let isButton = ref(false);
    let errorMessage = ref('');
    const post = {
      title: '',
      description: '',
    }

    const successfullyPost = async () => {
      const allPosts = await getAllPost();
      await store.dispatch('storeAllPosts/updateAllPosts', allPosts);
      await store.dispatch('storeCreateOrEditPost/toggleModalWindowCreateOrEditPost');
      isButton.value = false
      post.title = '';
      post.description = '';
    }

    const unSuccessfullyPost = () => {
      errorMessage.value = ERROR_SAVE_POST;
      isButton.value = false;
    }

    async function createPost() {
      isButton.value = true;
      requestServerPost(CREATE_POST, post)
          .then(
              () => successfullyPost(),
              () => unSuccessfullyPost()
          );

    }

    function showDialogWindowCreatePost() {
      store.dispatch('storeCreateOrEditPost/toggleModalWindowCreateOrEditPost');
    }

    isActiveDialogCreateEdit = computed(() => store.state.storeCreateOrEditPost.isActiveDialogCreateEdit);

    return {post, isActiveDialogCreateEdit, isButton, errorMessage, createPost, showDialogWindowCreatePost}
  }
}
</script>

<style scoped>
.create_post {
  width: 100%;
}

.error {
  display: block;
  color: var(--color-attention);
}
</style>
