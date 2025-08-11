<template>
  <label class="radio-label"

  >
  
    <input
      type="radio"
      :name="name"
      :value="value"
       v-model="model"
      class="hidden peer"
      :disabled="disabled"
      :class="customclass"
      
    />

    <span
      :class="[
        customclass,
        'peer-checked:ring-4 peer-checked:ring-blue-500 peer-checked:border-blue-500 border-2 border-black dark:border-white'
      ]"
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
    modelValue: [
      String, Number, Boolean

    ],
    disabled: Boolean,
    customclass: {
      type: String,
      default: ''
    }
  },

    emits: ["update:modelValue"],
  computed: {
     model: {
      get() { return this.modelValue; },
      set(v) { this.$emit("update:modelValue", v); }
    }
  }
  
};
</script>

<style scoped>
.radio-label {
  display: flex;
  align-items: center;
  gap: 6px;
}



</style>
