<template>
  <div
    class="w-full lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px] mr-[30px] ml-[30px] z-[8]"
  >
   
    <!-- start text area -->
    <base-card>
      <!-- text area 1 -->
      <fieldset class="border p-4 mb-4">
        <legend class="text-xl">Text Area Only</legend>

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
          <p class="mt-4 text-gray-700 dark:text-gray-100">
            Message Show: {{ messageTwo }}
          </p>
        </div>
      </fieldset>

      <!-- text area 3 -->
      <fieldset class="border p-4 mt-8">
        <legend class="text-xl">Text Area disabled</legend>

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
  </div>
</template>

<script>
import textArea from "@/components/textArea.vue";
import BaseCard from "@/components/BaseCard.vue";

export default {
  components: {
    textArea,
    BaseCard,
  },
  data() {
    return {
      message: "",
      messageTwo: "",
      messageThree: "",
      isDisabled: true,
    };
  },
};
</script>
