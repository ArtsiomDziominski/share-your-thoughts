<template>
  <div class="select">
    <input type="file" class="select__file" @change="selectFile($event)" multiple accept="image/*">
    <div class="select__img" id="img" v-for="img in images">
      <img
          class="img"
          :src='img'
          alt="select file"
      >
      <img
          class="select__img_close"
          src="src/assets/close.svg"
          @click="deleteImg(img)"
          alt="close image"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectFile",
  props: {
    images: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      selectedFile: null,
      maxLengthImg: false
    }
  },
  methods: {
    selectFile(event) {
      this.maxLengthImg = false;
      this.selectedFile = event.target.files;

      for (let i = 0; i < this.selectedFile.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(this.selectedFile[i]);
        reader.onload = (ev) => {
          this.images.push(ev.target.result);
        }
      }
    },
    deleteImg(selectImg) {
      const indexImage = this.images.indexOf(selectImg);
      this.images.splice(indexImage, 1);
    }
  }
}
</script>

<style scoped>
.select__file {
  margin: 0 0 10px 0;
  display: block;
}

.select__img {
  position: relative;
  display: inline-block;
  margin: 0 5px 10px 0;
  border: 1px solid var(--color-border-img-colorless);
}

.select__img:hover {
  border: 1px solid var(--color-border-img);
}

.img {
  width: 50px;
  height: 50px;
}

.select__img_close {
  display: none;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  cursor: pointer;
  position: absolute;
  right: 3px;
  top: 3px;
}

.select__img:hover .select__img_close {
  display: flex;
  background-color: var(--color-background-close-img);
}

.select__img:hover .select__img_close:hover {
  background-color: var(--color-background-close-img-hover);
}
</style>
