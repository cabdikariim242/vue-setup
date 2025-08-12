<template>
  <div class="flex flex-row gap-1 w-full">
    <!-- Label -->
    <label v-if="label" class="text-sm font-medium text-gray-700 dark:text-gray-300">
      {{ label }}
    </label>

    <!-- Select Box -->
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :disabled="disabled"
      class="rounded-lg border border-gray-300 dark:border-gray-600 
             bg-white dark:bg-gray-800 px-3 py-2 text-sm 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
    >
      <option value="" disabled selected hidden>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TomSelect",
  props: {
    modelValue: String,
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "Select an option",
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    disabledTwo:{
      type: Boolean,
      default:true
    }
  },
};
</script>
