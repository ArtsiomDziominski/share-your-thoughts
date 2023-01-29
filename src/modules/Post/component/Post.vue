<template>
<!--  <show-image-->
<!--      v-model:image-full-screen="imageFullScreen"-->
<!--      :image-list="imageListFullScreen"-->
<!--  >-->
<!--  </show-image>-->
  <h2 class="post__title">{{ post.title }}</h2>
<!--  <div class="post__img">-->
<!--    <template v-for="img in isShowAllImages ? post.imageList:post?.imageList?.slice(0,3) || []">-->
<!--      <img class="img" :src="img" alt="image post" @click="displayImageFullScreen(img, post.imageList)">-->
<!--    </template>-->
<!--    <main-button-->
<!--        class="post__more_img"-->
<!--        @click="this.isShowAllImages = !this.isShowAllImages;"-->
<!--        v-if="post?.imageList?.length > maxShowImgInPost"-->
<!--    >{{ isShowAllImages ? '<<' : '>>' }}-->
<!--    </main-button>-->
<!--  </div>-->
  <p class="post__body">{{ post.body }}</p>
  <div class="post__button">
    <edit-post :post="post"></edit-post>
    <main-button @click="deletePost(post.id)">Удалить</main-button>
  </div>
</template>

<script>
import {MAX_SHOW_IMG_IN_POST} from "@/const/const";
import ShowImage from "@/modules/Post/component/ShowImageFullScreen.vue";
import EditPost from "@/modules/CreateAndEditPost/component/EditPost.vue";


export default {
  name: "Post",
  components: {
    EditPost,
    ShowImage,
  },
  data() {
    return {
      imageFullScreen: '',
      imageListFullScreen: [],
      isOpenImg: false,
      maxShowImgInPost: MAX_SHOW_IMG_IN_POST,
      isShowAllImages: false,
    }
  },
  props: {
    post: {
      type: Array,
      default: {}
    }

  },
  methods: {
    deletePost(id) {
      this.$emit('create', id)
    },
    displayImageFullScreen(image, imageList) {
      this.imageFullScreen = image;
      this.imageListFullScreen = imageList;
    }
  }
}
</script>

<style scoped>
.img {
  width: 100px;
  height: 100px;
  margin: 5px;
  cursor: pointer;
}

.post__img {
  display: flex;
  align-items: center;
}

.post__more_img {
  height: 60px;
}

.post__button {
  display: flex;
  position: absolute;
  top: 30px;
  right: 30px;
}

.post__button button {
  margin-left: 5px;
}
</style>