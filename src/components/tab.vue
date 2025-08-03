<template>
  <div>
    <!-- Tab Header -->
    <div class="flex border-b border-gray-200 space-x-2 mb-0">
      <button
        v-for="(tab, index) in tabs"
        :key="tab.slot"
        @click="activeTab = index"
        :class="[
          'lg:px-[15rem] md:px-[8rem] sm:px-[4rem] px-[5rem] py-2 text-sm font-medium border border-gray-300 rounded-t-md transition',
          activeTab === index
            ? underline
              ? 'bg-white text-blue-600 border-b-4 !border-black'
              : 'bg-white text-blue-600 shadow-sm border-b-0'
            : 'bg-gray-50 text-gray-500 hover:text-blue-600 hover:bg-gray-100',
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="border border-gray-300 bg-white p-6 rounded-b-md">
      <slot :name="tabs[activeTab].slot" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tabs: {
      type: Array,
      required: true,
    },

    underline: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>
