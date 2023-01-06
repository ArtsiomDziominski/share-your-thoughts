<template>
  <input v-model="modelValue" @input="updateInput">
</template>

<script>
export default {
  name: "UserInfoInput",
  props: {
      modelValue: ''
  },
  methods: {
    updateInput() {
      this.$emit('update:modelValue', this.modelValue)
    }
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input {
  border: none;
  outline: none;
}
</style>