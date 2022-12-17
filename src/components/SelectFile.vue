<template>
  <div class="select">
    <input type="file" class="select__file" @change="selectFile($event)" multiple accept="image/*">
    <p class="max_length_img" v-if="maxLengthImg">Максимально можно добавить 8 картинок</p>
    <div class="select__img" id="img" v-for="img in imgList">
      <img class="img" :src='img' alt="select file">
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
        console.log(this.imgList)
        this.$emit('create', this.imgList);
      }
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
  display: inline-block;
  margin: 0 5px 10px 0;
  border: 1px solid rgba(0, 0, 0, 0.29);
}

.max_length_img {
  color: red;
  font-size: 12px;
}

.img {
  width: 50px;
  height: 50px;
}
</style>
