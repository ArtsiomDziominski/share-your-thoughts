<template>
  <div class="input-group">
    <input required="" type="password" name="text" autocomplete="off" class="input" v-model="modelValue" @input="updateInput">
    <label class="user-label">
      Password
    </label>
  </div>
</template>

<script>
export default {
  name: "LoginInputPassword",
  data() {
    return{
      modelValue:''
    }
  },
  methods: {
    updateInput() {
      this.$emit('update:modelValue', this.modelValue)
    }
  }
}
</script>

<style scoped>
.input-group {
  position: relative;
}

.input {
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: #000000;
  transition: border 150ms cubic-bezier(0.4,0,0.2,1);
}

.user-label {
  position: absolute;
  left: 15px;
  color: #a2a2a2;
  pointer-events: none;
  transform: translateY(1rem);
  transition: 150ms cubic-bezier(0.4,0,0.2,1);
}

.input:focus, input:valid {
  outline: none;
  border: 1.5px solid #1a73e8;
}

.input:focus ~ label, input:valid ~ label {
  transform: translateY(-50%) scale(0.8);
  background-color: #ffffff;
  padding: 0 .2em;
  color: #2196f3;
}
</style>