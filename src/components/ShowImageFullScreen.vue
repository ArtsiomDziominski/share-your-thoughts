<template>
  <div class="wrapper" v-if="currentImage" @click="closeImageFullScreen">
    <img class="image" :src="currentImage" alt="image full screen">
    <img class="closeImage" src="src/assets/close.svg" @click.stop="closeImageFullScreen" alt="close">
    <button class="left_arrow" @click.stop="leftImage" @keyup.left="leftImage">
      <img class="arrow_reverse" src="src/assets/arrow.svg" alt="arrow left">
    </button>
    <button class="right_arrow" @click.stop="rightImage" @keyup.right="rightImage">
      <img src="src/assets/arrow.svg" alt="arrow right">
    </button>
  </div>
</template>

<script>
export default {
  name: "ImageFullScreen",
  data() {
    return {
      currentImage: ''
    }
  },
  computed: {},
  props: {
    imageFullScreen: {
      type: String,
      default: ''
    },
    imageList: {
      type: Array,
      default: []
    }
  },
  watch: {
    imageFullScreen(){
      this.currentImage = this.imageFullScreen;
    }
  },
  methods: {
    closeImageFullScreen() {
      this.currentImage = '';
      this.$emit('update:imageFullScreen', this.currentImage)
    },
    leftImage() {
      for (let i = 0; i < this.imageList.length; i++) {
        if (this.currentImage === this.imageList[i]) {
          this.currentImage = this.imageList[i - 1];
          break
        }
      }
    },
    rightImage() {
      for (let i = 0; i < this.imageList.length; i++) {
        if (this.currentImage === this.imageList[i]) {
          this.currentImage = this.imageList[i + 1];
          break
        }
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  background-color: var(--color-background-full-screen-image);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  max-width: 100vw;
  max-height: 100vh;
}

.closeImage {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--color-background-close-img);
  border-radius: 5px;
}

.closeImage:hover {
  background-color: var(--color-background-close-img-hover);
}

.left_arrow {
  position: absolute;
  left: 10px;
  background-color: var(--color-background-left-arrow-image);
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}

.left_arrow:hover {
  background-color: var(--color-background-left-arrow-image-hover);
}

.arrow_reverse {
  transform: rotate(180deg);
}

.right_arrow {
  position: absolute;
  right: 10px;
  background-color: var(--color-background-left-arrow-image);
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}

.right_arrow:hover {
  background-color: var(--color-background-left-arrow-image-hover);
}
</style>
