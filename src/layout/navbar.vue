<template>
  <div class="navbar">
    <div
      class="absolute top-0 left-0 right-0 h-[300px] z-9"
      :class="[
        'transition-colors duration-300',
        isScrollingUp ? 'bg-[#1b4b76]' : 'bg-white',
      ]"
    >
      <div
        :class="[
           'transition-colors duration-300',
          isScrollingUp
            ? 'bg-[#1b4b76]'
            : 'bg-[#051662] px-3 transtiton-all duration-300',
        ]"
        class="flex z-[9] justify-between items-center fixed top-5 lg:left-[115px] left-[5px] md:left-[115px] right-5 rounded-lg h-[60px]"
      >
        

    <div class="flex lg:hidden md:hidden sm:hidden">
        <i @click="$emit('toggle-this', !isopen)" class="fa-solid fa-bars text-[25px] text-white p-[28px]"></i>

        <i class="fa-solid fa-magnifying-glass mt-8 text-white text-[18px]"></i>

    </div>


        <div class="container-1 ml-3 hidden lg:flex md:flex z-10">
          <router-link to="/" class="mr-1 text-[#eff1f1] font-light">
            App
            <i
              class="fa-solid fa-greater-than text-[8px] ml-1 text-[#6387a1]"
            ></i>
          </router-link>
          <router-link to="/" class="mr-1 text-[#eff1f1] font-light">
            Dashboards
            <i
              class="fa-solid fa-greater-than text-[8px] ml-1 text-[#6387a1]"
            ></i>
          </router-link>
          <router-link to="/" class="mr-1 text-[#6387a1] font-light">
            Analytics
          </router-link>
        </div>

        <div
          class="container-2  items-center w-[320px] px-4 py-2 rounded-lg bg-white/20 hidden lg:flex md:flex: sm:flex"
        >
          <!-- Icon -->
          <i
            class="fa-solid fa-magnifying-glass text-white/60 text-[15px] mr-2"
          ></i>
          <!-- Input -->
          <input
            class="flex-1 bg-transparent outline-none border-none text-white text-[15px] placeholder-white font-serif"
            type="text"
            placeholder="Quick search..."
          />
          <!-- Shortcut -->
          <span
            class="ml-2 text-white/60 font-public-sans select-none text-[15px]"
            >⌘K</span
          >
          
        </div>

       

        <div class="container-3 flex items-center gap-6">
          <i class="fa-solid fa-grip text-[#d1cccc] text-[18px]"></i>
          <i class="fa-solid fa-expand text-[#d1cccc] text-[18px]"></i>
          <i class="fa-solid fa-bell text-[#d1cccc] text-[18px]"></i>
          <!-- Profile avatar -->
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
export default {
    props: ['isopen'],


  data() {
    return {
      isScrollingUp: true,
      lastScrollY: window.scrollY,

    };
  },


  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isScrollingUp = currentScrollY < this.lastScrollY;
      this.lastScrollY = currentScrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  
   
};
</script>

<style></style>
