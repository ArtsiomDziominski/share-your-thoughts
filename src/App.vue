<template>
  <create-post @create="addPost"></create-post>
  <transition-group name="post-list">
    <div class="post" v-for="post in posts" :post="post" :key="post.id">
      <h2 class="post__title">{{ post.title }}</h2>
      <div class="post__img">
        <template v-if="post.isShowAllImg" :key="post.id">
          <template v-for="img in post.imgList">
            <img class="img" :src="img" :alt="post.title">
          </template>
        </template>
        <template v-else>
          <template v-for="img in post.imgList.slice(0,3)" :key="post.id">
            <img class="img" :src='img' :alt="post.title">
          </template>
        </template>
        <main-button
            class="post__more_img"
            @click="showAllListImg(post.id)"
            v-if="post.imgList.length > maxShowImgInPost"
        >{{ post.isShowAllImg ? '<<' : '>>' }}
        </main-button>
      </div>
      <p class="post__body">{{ post.body }}</p>
      <main-button
          class="post__delete"
          @click="deletePost(post.id)"
      >
        Удалить
      </main-button>
    </div>
  </transition-group>
</template>

<script>
import CreatePost from "@/components/CreatePost.vue";
import {MAX_SHOW_IMG_IN_POST, TEXT_1} from "@/components/const";

export default {
  components: {
    CreatePost,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Hello World',
          body: TEXT_1,
          imgList: ['src/assets/logo.svg', 'src/assets/img1.png', 'src/assets/img2.png', 'src/assets/img3.png', 'src/assets/img4.png'],
          isShowAllImg: false,
        }
      ],
      isOpenImg: false,
      maxShowImgInPost: MAX_SHOW_IMG_IN_POST,
    }
  },
  methods: {
    addPost(post) {
      this.posts.push(post)
      console.log(this.posts)
    },
    showAllListImg(id) {
      this.posts.forEach(post => {
        if (post.id === id && post.isShowAllImg) {
          post.isShowAllImg = false;
        } else if (post.id === id) {
          post.isShowAllImg = true;
        }
      })
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    }
  },
}

</script>

<style>
input {
  outline: none;
}

.post {
  width: 100%;
  padding: 30px;
  margin: 20px 0;
  border-radius: 20px;
  box-shadow: 2px 2px 10px #181818;
}

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

.post__delete {
  position: absolute;
  top: 15px;
  right: 15px;
}

.post-list {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all .5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
