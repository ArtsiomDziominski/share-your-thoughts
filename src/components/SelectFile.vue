<template>
  <div class="select">
    <input type="file" class="select__file" @change="selectFile($event)" multiple accept="image/*">
    <p class="max_length_img" v-if="maxLengthImg">Максимально можно добавить 8 картинок</p>
    <div class="select__img" id="img" v-for="img in imgList">
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
  data() {
    return {
      selectedFile: null,
      imgList: [],
      maxLengthImg: false
    }
  },
  methods: {
    selectFile(event) {
      this.maxLengthImg = false;
      this.selectedFile = event.target.files;

      if (this.selectedFile.length >= 9) {
        this.maxLengthImg = true
      } else {
        for (let i = 0; i < this.selectedFile.length; i++) {
          const reader = new FileReader();
          reader.readAsDataURL(this.selectedFile[i]);
          reader.onload = (ev) => {
            this.imgList.push(ev.target.result);
          }
        }
        this.$emit('create', this.imgList);
      }
    },
    deleteImg(selectImg) {
      this.imgList = this.imgList.filter(img => img !== selectImg);
      this.$emit('create', this.imgList);
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
  border: 1px solid var(--color-border-img);
}

.max_length_img {
  color: var(--color-attention);
  font-size: 12px;
}

.img {
  width: 50px;
  height: 50px;
}

.select__img_close {
  width: 12px;
  height: 12px;
  background-color: var(--color-background-close-img);
  border-radius: 3px;
  cursor: pointer;
  position: absolute;
  right: 3px;
  top: 3px;
}

.select__img_close:hover {
  background-color: var(--color-background-close-img-hover);
}
</style>
