<template>
  <div class="select">
    <label class="select__file_label" id="choose-files">
      <img src="../../../assets/images/add_photo_alternate.svg" alt="Choose files">
      Choose a Pictures
      <input
          type="file"
          class="select__file"
          for="choose-files"
          @change="selectFile($event)"
          multiple
          accept="image/*"
      >
    </label>
    <p class="select__file_max_error" v-if="maxLengthImages">Максимально 8 картинок</p>
    <div class="select__img" id="img" v-for="img in images">
      <img
          class="img"
          :src='img'
          alt="select file"
      >
      <img
          class="select__img_close"
          src="../../../assets/images/close.svg"
          @click="deleteImg(img)"
          alt="close image"
      >
    </div>
  </div>
</template>

<script>
import {MAX_IMAGES} from "@/const/const";

export default {
  name: "ChooseFiles",
  props: {
    images: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      selectedFile: null,
      maxLengthImages: false
    }
  },
  methods: {
    selectFile(event) {
      this.maxLengthImages = false;
      this.selectedFile = event.target.files;

      for (let i = 0; i < this.selectedFile.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(this.selectedFile[i]);
        reader.onload = (ev) => {
          this.images.length < MAX_IMAGES ? this.images.push(ev.target.result) : this.maxLengthImages = true;
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

.select__file_label {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px 0;
  padding: 10px;
  border: 1px solid var(--color-background-choose-files-border);
  background-color: var(--color-background-choose-files);
  border-radius: 5px;
  position: relative;
}

.select__file_label img {
  width: 20px;
  margin-right: 10px;
}

.select__file_label input[type="file"] {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.select__file_label:hover {
  background-color: var(--color-background-choose-files-border-hover);
}

.select__file_max_error {
  color: var(--color-attention);
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
