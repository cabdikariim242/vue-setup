<template>
  <div
    class="flex gap-5 w-full lg:mt-[152px] md:mt-[102px] mt-[150px] lg:ml-[125px] md:ml-[150px] mr-[30px] ml-[30px] z-[8]"
  >
    <div class="w-full rounded-xl">
      <h1>
        <strong class="text-white">Regular Form</strong>

        <span class="text-[rgba(255,255,255,.8)]">
          • Unlock the potential of our Form component for creating user-friendly
          and interactive web forms effortlessly.
        </span>
      </h1>
      <BaseCard>
        <h1>basecar one</h1>
      </BaseCard>
    </div>
    <!-- second card -->

    <div
      class="w-60 mt-[40px] rounded-xl bg-white/10 backdrop-blur-sm shadow-lg p-3 flex flex-col text-white"
    >
      <a href="#one">one</a>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  components: { BaseCard },
  data() {
    return {};
  },
};
</script>
