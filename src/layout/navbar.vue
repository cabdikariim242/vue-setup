<template>
  <div class="navbar">
    <div
      class="absolute top-0 left-0 right-0 h-[300px]"
      :class="[
        'transition-colors duration-300',
        isScrollingUp ? 'bg-[rgb(27,75,118)]' : 'bg-[#ecf0f5] dark:bg-[#1b1b1b]',
      ]"
    >
      <div
        :class="[
          'transition-colors duration-300',
          isScrollingUp
            ? 'bg-[#1b4b76]'
            : 'bg-[#051662] px-3 transition-all duration-300',
        ]"
        class="flex z-[9] justify-between items-center fixed top-5 lg:left-[135px] left-[5px] md:left-[115px] right-5 rounded-lg h-[60px] 2xl:ml-[250px] 2xl:mr-[250px]"
      >
        <div class="flex lg:hidden md:hidden sm:hidden">
          <i
            @click="$emit('toggle-this', !isopen)"
            class="fa-solid fa-bars text-[25px] text-white dark:text-black p-[28px]"
          ></i>
        </div>

        <div class="container-1 ml-3 hidden lg:flex md:flex z-10">
          <router-link
            to="/"
            class="mr-1 text-[#eff1f1] dark:text-white font-light"
          >
            App
            <i
              class="fa-solid fa-greater-than text-[8px] ml-1 text-[#6387a1] dark:text-white"
            ></i>
          </router-link>
          <router-link
            to="/buttons"
            class="mr-1 text-[#eff1f1] dark:text-white font-light"
          >
            Dashboards
            <i
              class="fa-solid fa-greater-than text-[8px] ml-1 text-[#6387a1] dark:text-white"
            ></i>
          </router-link>
          <router-link
            to="/TableViews"
            class="mr-1 text-[#6387a1] dark:text-white font-light"
          >
            Analytics
          </router-link>
        </div>

        <div
          class="container-2 items-center w-[320px] px-4 py-2 rounded-lg bg-white/20 hidden lg:flex"
        >
          <i
            class="fa-solid fa-magnifying-glass text-white/60 dark:text-white text-[15px] mr-2"
          ></i>
          <input
            class="flex-1 bg-transparent outline-none border-none text-white text-[15px] dark:text-white placeholder-white dark:placeholder-white font-serif"
            type="text"
            placeholder="Quick search..."
          />
          <span
            class="ml-2 text-white/60 font-public-sans dark:text-white select-none text-[15px]"
            >⌘K</span
          >
        </div>

        <div class="container-3 flex items-center gap-6">
          <DarkModeToggle />
          <button
            @click="toggleFullscreen"
            class="px-4 py-2 text-white rounded   items-center gap-2"
          >
            <i
              :class="
                isFullscreen
                  ? 'fa-solid fa-minimize dark:text-black text-[18px]'
                  : 'fa-solid fa-expand dark:text-black text-[18px]'
              "
            ></i>
          </button>
          <i
            class="fa-solid fa-bell text-[#d1cccc] dark:text-black text-[18px] cursor-pointer"
              :class="{ 'animate-spin': isAnimating }" 
            @click="handleNotificationClick"
          ></i>
          <img
            src="../assets/yiksi.png"
            alt="Profile"
            class="mr-4 w-10 h-10 rounded-full border-4 border-[#2d527c] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeToggle from '@/components/DarkModeToggle.vue';

export default {
  props: ['isopen'],
  components: {
    DarkModeToggle,
  },
  data() {
    return {
      isAnimating: false,
      isDark: true,
      isScrollingUp: true,
      isFullscreen: false,
      lastScrollY: window.scrollY,
    };
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isScrollingUp = currentScrollY < this.lastScrollY;
      this.lastScrollY = currentScrollY;
    },

     handleNotificationClick() {
    this.isAnimating = true;
    // Remove animation class after 500ms (depends on animation duration)
    setTimeout(() => {
      this.isAnimating = false;
    }, 300);
  },

    async toggleFullscreen() {
      try {
        if (!document.fullscreenElement) {
          await document.documentElement.requestFullscreen();
        } else {
          await document.exitFullscreen();
        }
        
      } catch (err) {
        console.error('Fullscreen toggle error:', err);
      }
    },
    onFullScreenChange() {
      this.isFullscreen = !!document.fullscreenElement;
    },
    toggleDarkMode() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('fullscreenchange', this.onFullScreenChange);
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      this.isDark = true;
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('fullscreenchange', this.onFullScreenChange);
  },
};
</script>

<style scoped></style>
