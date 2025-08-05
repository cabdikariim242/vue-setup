<template>
    <div class="w-full lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px] mr-[30px] ml-[30px] z-[8]">


  <!-- start file uploader -->
   <BaseCard>
  <fieldset class="border p-4 mt-8">
  <legend class="text-xl">File Uploader</legend>
    <div class="p-6 space-y-4">
    <div class="space-y-2 flex flex-col">
    <FileUploader />
  </div>
    </div>
  </fieldset>
  <!-- file upload two -->
     <fieldset class="border p-4 mt-8">
  <legend class="text-xl">File Uploader</legend>
    <div class="p-6 space-y-4">
    <div class="space-y-2 flex flex-col">
    <FileUploader />
  </div>
    </div>
  </fieldset>

  </BaseCard>

</div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import FileUploader from "@/components/FileUploader.vue";

export default {
  components: {
    BaseCard,
    FileUploader
  },
  data() {
    return {
     
    };
  },
   
};
</script>
