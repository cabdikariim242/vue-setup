
<template>
  <div class="flex bg-[#ecf0f5] w-full dark:bg-[#1b1b1b] ">
    <sidebar :isopen="isopen" @toggle-this="toggle" />
    <navbar :isopen="isopen" @toggle-this="toggle" />
    <router-view></router-view>
  </div>
</template>

<script>
import sidebar from "./sidebar.vue";
import navbar from "./navbar.vue";
export default {
  components: { sidebar, navbar },
  data() {
    return {
      isopen: false,
    };
  },
  methods: {
    toggle() {
      this.isopen = !this.isopen;
    },
  },
};
</script>

<style></style>
