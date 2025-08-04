<template>
  <div class="flex flex-col w-full">
    <label
      v-if="label"
      :for="id"
      class="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {{ label }}
    </label>
    <textarea
      :id="id"
      :name="name"
      :rows="rows"
      :placeholder="placeholder"
      v-model="localValue"
      @input="$emit('update:modelValue', localValue)"
      class="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
    ></textarea>
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
    name: String,
    id: {
      type: String,
      default: () =>
        `textarea-${Math.random().toString(36).substring(2, 10)}`,
    },
    rows: {
      type: Number,
      default: 4,
    },
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
