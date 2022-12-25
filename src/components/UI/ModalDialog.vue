<template>
  <div class="dialog" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalDialog",
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:showDialog', false)
    }
  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  display: flex;
}

.dialog__content {
  margin: auto;
  background-color: white;
  border-radius: 12px;
  padding: 30px;
}
</style>
