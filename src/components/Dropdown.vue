<template>
  <div class="relative inline-block text-left">
    <!-- Trigger Button -->
    <div @click="toggleDropdown">
      <slot name="trigger">
        <button :class="['text-white font-semibold px-4 py-2 rounded shadow', customclass]">
          {{ buttonText }}
        </button>
      </slot>
    </div>

    <!-- Dropdown Menu -->
    <div
      v-if="showDropdown"
      class="absolute mt-2 w-64 bg-white border rounded shadow-lg"
    >
      <slot name="content" />
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    buttonText: {
      type: String,
      default: 'Show Dropdown'
    },
    customclass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showDropdown: false
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    closeDropdownExternally() {
      this.showDropdown = false;
    }
  }
};
</script>
