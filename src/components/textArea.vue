<template>
  <div class="flex flex-col w-full">
    <label v-if="label" class="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300 ">
      {{ label }}
    </label>
    <textarea :disabled="isDisabled" :class="CustomClass" :name="name" :placeholder="placeholder" v-model="localValue"
      @input="$emit('update:modelValue', localValue)"
      class="  p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-500 dark:text-white dark:border-gray-600"></textarea>
    <p v-if="helper" class="mt-1 text-xs text-gray-500 dark:text-gray-400">
      {{ helper }}
    </p>
  </div>
</template>

<script>
export default {
  name: "textarea",
  props: {
    modelValue: String,
    label: String,
    placeholder: String,
    helper: String,
    isDisabled: Boolean,
    name: String,
    CustomClass: String,
  },
  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
};
</script>
