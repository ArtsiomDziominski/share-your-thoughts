<template>
  <input :value="modelValue" @input="updateInput">
</template>

<script>
export default {
  name: "MainInput",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
input {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  outline: none;
}

input:focus {
  border-bottom-color: var(--input-border-bottom-color);
}
</style>