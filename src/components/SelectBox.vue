<template>
  <div :class="customClass">
    <select
      class="block w-full p-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="en">English</option>
      <option value="so">Somali</option>
      <option value="ar">Arabic</option>
      <option value="fr">French</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectBox',
  props: {
    customClass: {
      type: String,
      default: ''
    }
  },
  data() {
  }
};
</script>
