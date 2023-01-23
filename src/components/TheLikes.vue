<template>
  <div class="likes">
    <svg
        class="likes__up"
        :class="{ 'like-active': isLike }"
        @click="addLike"
        xmlns="http://www.w3.org/2000/svg"
        width="20px" height="20px"
        viewBox="0 0 20 20">
      <g id="surface1">
        <path
            d="M 14.917969 17.5 L 5.667969 17.5 L 5.667969 6.832031 L 11.457031 0.832031 L 12.269531 1.480469 C 12.355469 1.546875 12.417969 1.644531 12.457031 1.769531 C 12.5 1.894531 12.519531 2.046875 12.519531 2.230469 L 12.519531 2.4375 L 11.582031 6.832031 L 17.8125 6.832031 C 18.144531 6.832031 18.4375 6.957031 18.6875 7.207031 C 18.9375 7.457031 19.0625 7.75 19.0625 8.082031 L 19.0625 9.792969 C 19.0625 9.890625 19.074219 9.988281 19.09375 10.09375 C 19.113281 10.199219 19.105469 10.296875 19.0625 10.394531 L 16.4375 16.4375 C 16.3125 16.730469 16.109375 16.980469 15.824219 17.1875 C 15.539062 17.394531 15.234375 17.5 14.917969 17.5 Z M 6.917969 16.25 L 15.1875 16.25 L 17.8125 10.019531 L 17.8125 8.082031 L 10.042969 8.082031 L 11.144531 2.894531 L 6.917969 7.355469 Z M 6.917969 7.355469 L 6.917969 16.25 Z M 5.667969 6.832031 L 5.667969 8.082031 L 2.894531 8.082031 L 2.894531 16.25 L 5.667969 16.25 L 5.667969 17.5 L 1.644531 17.5 L 1.644531 6.832031 Z M 5.667969 6.832031 "/>
      </g>
    </svg>
    <div class="users-liked" v-if="post.usersLiked?.length">
      <p class="users-liked__users" v-for="userLiked in post.usersLiked" :key="userLiked">{{ userLiked }}</p>
    </div>
    <p class="likes__likes-length">{{ post.usersLiked?.length }}</p>
  </div>
</template>

<script>
import {requestServerPost} from "@/hooks/request-server";
import {ADD_LIKE_POST} from "@/const/const.request-server";
import {mapGetters} from "vuex";

export default {
  name: "TheLikes",
  props: {
    post: {
      _id: String,
      usersLiked: Array
    }
  },
  computed: {
    ...mapGetters('storeUser', ['getUserInfo']),
  },
  setup(props) {
    let isLike = false;

    async function addLike() {
      const post = props.post;
      const bodyPost = {id: post._id};
      await requestServerPost(ADD_LIKE_POST, bodyPost)
          .then(resultPost => post.usersLiked = resultPost.data.usersLiked)
    }

    return {isLike, addLike}
  }
}
</script>

<style scoped>

.likes {
  display: flex;
  align-items: center;
  position: relative;
  width: 50px;
}

.likes svg {
  fill: #d7d7d7;
  margin-right: 10px;
  cursor: pointer;
}

.likes svg:hover {
  fill: #9d9d9d;
}

.likes svg:active {
  fill: black;
}

.users-liked {
  display: none;
  position: absolute;
  bottom: 50px;
  left: -30px;
  background-color: white;
  padding: 5px;
  box-shadow: 2px 2px 10px black;
  border-radius: 5px;
}

.likes:hover .users-liked {
  display: flex;
}

.users-liked .users-liked__users {
  margin: 0 5px 0 0;
}


.likes__likes-length:hover
</style>