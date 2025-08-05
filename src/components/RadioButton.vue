<template>
  <label class="radio-label">
    <input
      type="radio"
      :name="name"
      :value="value"
      v-model="model"
      class="hidden peer"
    />
    <span
      class="radio-custom peer-checked:ring-4 peer-checked:ring-blue-500 peer-checked:border-blue-500"
    ></span>
    {{ label }}
  </label>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    name: String,
    label: String,
    value: String,
    modelValue: String
  },
  emits: ["update:modelValue"],
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      }
    }
  }
};
</script>

<style scoped>
.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 6px;
}

/* Radio Circle Base */
.radio-custom {
  width: 18px;
  height: 18px;
  border: 2px solid #333;
  border-radius: 50%;
  display: inline-block;
  transition: all 0.2s ease-in-out;
}
</style>
