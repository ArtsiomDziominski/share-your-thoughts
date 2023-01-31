<script>
import {onMounted} from "vue";
import {getAllPost} from "@/hooks/get-all-posts";
import {getCurrentUser} from "@/hooks/get-current-user";
import {useStore} from "vuex";

export default {
  name: "DefaultLoading",
  setup() {
    const store = useStore();

    onMounted(async () => {
      const post = await getAllPost();
      const user = await getCurrentUser()

      await store.dispatch('storeUser/setUserInfo', user);
      await store.dispatch('storeAllPosts/updateAllPosts', post);
      await store.dispatch('storeUser/toggleActiveUser', true);
    })
  }
}
</script>
