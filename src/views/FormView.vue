<template>
    <div class="lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px] mr-[30px] ml-[30px] z-[8]">
      <p class="text-white mr-[80px] lg:flex md:hidden hidden"><strong>Text Area </strong>  . Explore the versatility of our Form Elements component for enhancing user interactions on your application.
</p>
<!-- start text area -->
    <base-card>
    <!-- text area 1 -->
    <fieldset class="border p-4 mb-4">
  <legend class="text-xl">Text Area Only </legend>

  <div class="p-6">
    <textArea
      v-model="message"
      label="Message"
      placeholder="Write something..."
      helper="Enter your thoughts or feedback."
    />
  </div>
  </fieldset>
    <!-- text area 2 -->
      <fieldset class="border p-4 mt-8">
  <legend class="text-xl">Text Area Has Message display</legend>

  <div class="p-6">
    <textArea
      v-model="messageTwo"
      label="Message"
      placeholder="Write something..."
      helper="Enter your thoughts or feedback."
    />
    <p class="mt-4 text-gray-700 dark:text-gray-900">Message Show: {{ messageTwo }}</p>
  </div>
  </fieldset>

    <!-- text area 3 -->
        <fieldset class="border p-4 mt-8">
  <legend class="text-xl">Text Area disabled </legend>

  <div class="p-6">
    <textArea
      label="MessageThree"
      placeholder="disbled Write something..."
      helper="Enter your thoughts or feedback."
      is-disabled="false" 
    />
  </div>
  </fieldset>
  </base-card>

  <!-- end text area -->

  <!-- start check box -->

  <BaseCard>
    <h2>Check Box</h2>
            <fieldset class="border p-4 mt-8">
  <legend class="text-xl">Check Box </legend>
<div class="p-6">
    <checkBox v-model="acceptTerms" >
      I agree to the <a href="#" class="text-blue-600 underline">Terms & Conditions</a>
    </checkBox>

    <p class="mt-4 text-sm text-black">
      Status:{{ acceptTerms ? '✔ Checked' : '✖ Not checked' }}
    </p>
  </div>
  </fieldset>

              <fieldset class="border p-4 mt-8">
  <legend class="text-xl">Group Of Check Box </legend>
    <div class="p-6 space-y-4">
    <div class="space-y-2 flex flex-col">
      <checkBox
        v-for="option in options"
        :key="option"
        :modelValue="selected.includes(option)"
        @update:modelValue="updateSelection($event, option)"
      >
        {{ option }}
      </checkBox>
    </div>

    <p class="mt-4 text-sm text-black">
      Selected: <span class="">{{ selected.join(', ') || 'None' }}</span>
    </p>
  </div>
  </fieldset>

  </BaseCard>
  <!-- end check box -->

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
import textArea from "@/components/textArea.vue";
import BaseCard from "@/components/BaseCard.vue";
import checkBox from "@/components/checkBox.vue";
import FileUploader from "@/components/FileUploader.vue";

export default {
  components: {
    textArea,
    BaseCard,
    checkBox,
    FileUploader,
  },
  data() {
    return {
      message: "",
       messageTwo: "",
         messageThree: "",
         isDisabled: true,
            acceptTerms: true,
                  options: ['Vue.js', 'React', 'Svelte', 'Angular'],
      selected: [],
    };
  },
    methods: {
    updateSelection(checked, value) {
      if (checked) {
        this.selected.push(value);
      } else {
        this.selected = this.selected.filter(item => item !== value);
      }
    }
  }
};
</script>
