
<template>
  <div class="flex bg-[#ecf0f5]">
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
      isopen: true,
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
