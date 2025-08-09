<template>
  <div
    class="w-full lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px] mr-[30px] ml-[30px] z-[8] 2xl:ml-[383px]  2xl:mr-[270px]">

    <!-- start Box  -->
    <BaseCard>
      <h1 class="text-xl font-bold">Select Option</h1>
      <div class="border-b border-dashed mt-4"></div>
      <p class="mt-4">The "Select Options" component allows you to create dropdown select elements with various options.
        This section covers how to use the component and provides examples of different select options.</p>
      <fieldset class="border p-4 mt-8">
        <legend class="text-xl"> Select option </legend>
        <div class="lg:flex lg:flex-row justify-between items-center flex-col">
          <!-- Same component, but styled differently using customClass -->
          <div class="w-full">
            <SelectBox customClass="p-8 rounded-lg" />
          </div>
          <div class="w-full">
            <SelectBox customClass="p-8 rounded-lg text-[12px]" />
          </div>
          <div class="w-full">
            <SelectBox customClass="p-8 rounded-lg text-[10px]" />
          </div>
        </div>

      </fieldset>
      <p class="mt-8">The "Select Options" component is a versatile tool for creating dropdown select elements with a
        wide range of options. You can use it to build various forms and user interfaces that require user selection
        from predefined choices. Customize the options and styles to match your project's requirements, and make the
        user experience smooth and efficient.</p>

      <!-- box two -->
      <fieldset class="border p-4 mt-8 ">
        <legend class="text-xl"> Select option for row </legend>
        <div class="lg:flex lg:flex-col justify-between items-center flex-col">
          <!-- Same component, but styled differently using customClass -->
          <div class="w-full">
            <SelectBox customClass="p-8 rounded-lg bg-red-200 mb-4" />
          </div>
          <div class="w-full">
            <SelectBox customClass="p-8 rounded-lg text-[12px] bg-blue-100 mb-4" />
          </div>
          <div class="w-full">
            <SelectBox customClass="p-8 rounded-lg text-[10px] bg-gray-700 mb-4" />
          </div>
        </div>

      </fieldset>
      <p class="mt-8">The "Select Options" component is a versatile tool for creating dropdown select elements with a
        wide range of options. You can use it to build various forms and user interfaces that require user selection
        from predefined choices. Customize the options and styles to match your project's requirements, and make the
        user experience smooth and efficient.</p>
    </BaseCard>

    <!-- end text area -->
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import SelectBox from "@/components/SelectBox.vue";

export default {
  components: {
    BaseCard,
    SelectBox
  },
  data() {
    return {
      customClass: "",


    };
  },
};
</script>
