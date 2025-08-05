<template>
  <label class="inline-flex items-center space-x-2 cursor-pointer select-none">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      class=" cursor-pointer form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
    />
    <span class=" text-gray-700 dark:text-gray-600 text-[15px]">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    modelValue: Boolean,
  },
};
</script>
