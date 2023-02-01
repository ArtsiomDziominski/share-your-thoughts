<template>
  <button :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'main-button',
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
  }
}
</script>

<style scoped>
button {
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
}

button:hover {
  background-color: #fafafa;
}

button:active {
  background-color: #b6b6b6;
  cursor: pointer;
}
</style>
