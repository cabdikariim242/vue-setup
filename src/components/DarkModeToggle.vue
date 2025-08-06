<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-full transition"
    aria-label="Toggle Dark Mode"
  >
    <span v-if="isDark">
        <i class="fa-regular fa-moon text-[20px] text-[#0e0d0d]"></i>
    </span>
    <span v-else>
        <i class="fas fa-sun text-[20px] text-[#d6d1d1]"></i>
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDark: localStorage.theme === 'dark'
    }
  },
  mounted() {
    document.documentElement.classList.toggle('dark', this.isDark)
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark
      localStorage.theme = this.isDark ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', this.isDark)
    }
  }
}
</script>
