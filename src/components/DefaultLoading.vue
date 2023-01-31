<template>
</template>

<script>
import {onMounted} from "vue";
import {useStore} from "vuex";
import {getAllPost} from "@/helpers/get-all-posts";
import {getUser} from "@/helpers/get-user";
import {TOKEN} from "@/const/const";

export default {
  name: "DefaultLoading",
  setup() {
    const store = useStore();

    onMounted(async () => {
      const post = await getAllPost();
      const user = await getUser()
      const token = localStorage.getItem(TOKEN)

      await store.dispatch('storeUser/setUserInfo', user);
      await store.dispatch('storeUser/setUserToken', token);
      await store.dispatch('storeAllPosts/updateAllPosts', post);
      await store.dispatch('storeUser/toggleActiveUser', true);
    })
  }
}
</script>
