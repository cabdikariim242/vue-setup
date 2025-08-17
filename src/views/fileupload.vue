<template>
    <div
        class=" w-full lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px] mr-[30px] ml-[30px] z-[8] 2xl:ml-[385px]  2xl:mr-[270px]">


    <!-- start file uploader -->
    <BaseCard>
      <fieldset class="border p-4 mt-8">
        <legend class="text-xl">File Uploader</legend>
        <div class="p-6 space-y-4  dark:text-black">
          <div class="space-y-2 flex flex-col">
            <h2 class="mb-8 font-bold text-lg">Single File Upload</h2>
            <FileUpload :multiple="false" />
          </div>
        </div>
      </fieldset>
      <!-- file upload two -->
      <fieldset class="border p-4 mt-8">
        <legend class="text-xl">File Uploader</legend>
        <div class="p-6 space-y-4 dark:text-black">
          <div class="space-y-2 flex flex-col">
            <h2 class="my-6 font-bold text-lg">Multiple Files Upload</h2>
            <FileUpload :multiple="true" />
          </div>
        </div>
      </fieldset>
  </BaseCard>

  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import FileUpload from "@/components/FileUpload.vue";

export default {
  components: {
    BaseCard,
    FileUpload
  },
  data() {
    return {

    };
  },

};
</script>
