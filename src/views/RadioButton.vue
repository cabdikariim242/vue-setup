<template>
  <div
    class="lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px] mr-[30px] ml-[30px] z-[8] 2xl:ml-[360px]  2xl:mr-[270px]"
  >
    <div
      class="bg-white dark:bg-[#0f0f0f] dark:text-white shadow-[0_8px_10px_rgba(0,0,0,0.8)] w-full rounded-lg mt-[90px]"
    >
      <h1 class="p-2 font-bold">Vertical Radio Button</h1>
      <p class="p-2">
        The "Radio" component is a fundamental input element that allows users
        to make a single selection from a list of options. It is commonly used
        in forms and questionnaires where users need to choose one option among
        several.
      </p>

      <fieldset class="border border-1 border-blue-900 p-6 mb-4">
        <legend class="text-xl">Vertical Radio Button</legend>
        <div>
          <RadioButton
            name="paymentVertical"
            label="Chris Evans"
            value="Chris Evans"
            v-model="selectedVertical"
            :customclass="'w-[18px] h-[18px] rounded-full inline-block transition-all duration-200 ease-in-out'"
          />

          <RadioButton
            name="paymentVertical"
            label="Liam Neeson"
            value="Liam Neeson"
            v-model="selectedVertical"
            :customclass="'w-[18px] h-[18px] rounded-full inline-block transition-all duration-200 ease-in-out'"

          />
          <RadioButton
            name="paymentVertical"
            label="Daniel Craig"
            value="Daniel Craig"
            v-model="selectedVertical"
            :customclass="'w-[18px] h-[18px] rounded-full inline-block transition-all duration-200 ease-in-out'"

          />
          <RadioButton
            name="paymentVertical"
            label="Samafale"
            value="Samafale"
            v-model="selectedVertical"
            :disabled="true"
            :customclass="'cursor-not-allowed w-[18px] h-[18px] rounded-full inline-block transition-all duration-200 ease-in-out'"

          />



          <h1 class="pt-3 font-bold">Horizontal Radio Button</h1>

          <div class="flex gap-4 pt-2">
            <RadioButton
              name="paymentHorizontal"
              label="Chris Evans"
              value="Chris Evans"
              v-model="selectedHorizontal"
              :customclass="'w-[18px] h-[18px] rounded-full inline-block transition-all duration-200 ease-in-out'"

            />

             <RadioButton
            name="paymentHorizontal"
            label="Liam Neeson"
            value="Liam Neeson"
            v-model="selectedHorizontal"
            :customclass="'w-[18px] h-[18px] rounded-full inline-block transition-all duration-200 ease-in-out'"

          />


           <RadioButton
            name="paymentHorizontal"
            label="Daniel Craig"
            value="Daniel Craig"
            v-model="selectedHorizontal"
            :customclass="'w-[18px] h-[18px] rounded-full inline-block transition-all duration-200 ease-in-out'"

          />
           <RadioButton
            name="paymentHorizontal"
            label="Samafale"
            value="Samafale"
            v-model="selectedHorizontal"
            :disabled="true"
            :customclass="'cursor-not-allowed w-[18px] h-[18px] rounded-full inline-block transition-all duration-200 ease-in-out'"
          />

          
          </div>
          <p class="p-2">
        The "Radio" component is a fundamental input element that allows users
        to make a single selection from a list of options. It is commonly used
        in forms and questionnaires where users need to choose one option among
        several.
      </p>
        </div>
      </fieldset>
    </div>

    <!-- <p>Selected Payment: {{ selectedPayment }}</p> -->
  </div>
</template>

<script>
import RadioButton from "@/components/RadioButton.vue";

export default {
  components: { RadioButton },
  data() {
    return {
      selectedVertical: "Chris Evans",  
      selectedHorizontal: "Chris Evans"
    };
  },
};
</script>
