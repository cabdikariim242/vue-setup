<template>
    <div
        class=" w-full lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px] mr-[30px] ml-[30px] z-[8] 2xl:ml-[385px]  2xl:mr-[270px]">


    <!-- start check box -->

    <BaseCard>
      <h2>Check Box</h2>
      <fieldset class="border p-4 mt-8">
        <legend class="text-xl">Check Box </legend>
        <div class="p-6">
          <checkBox v-model="acceptTerms">
            I agree to the <a href="#" class="text-blue-600 underline">Terms & Conditions</a>
          </checkBox>

          <p class="mt-4 text-sm text-black dark:text-white">
            Status:{{ acceptTerms ? '✔ Checked' : '✖ Not checked' }}
          </p>
        </div>
      </fieldset>

      <fieldset class="border p-4 mt-8">
        <legend class="text-xl">Group Of Check Box One</legend>
        <div class="p-6 space-y-4">
          <div class="space-y-2 flex flex-col">
            <checkBox v-for="option in options" :key="option" :modelValue="selectedGroupOne.includes(option)"
              @update:modelValue="updateSelectionGroupOne($event, option)">
              {{ option }}
            </checkBox>
          </div>
          <p class="mt-4 text-sm text-black dark:text-white">
            Selected One: <span>{{ selectedGroupOne.join(', ') || 'None' }}</span>
          </p>
        </div>
      </fieldset>

      <fieldset class="border p-4 mt-8">
        <legend class="text-xl">Group Of Check Box Two</legend>
        <div class="p-6 items-center">
          <div class="space-y-2 flex flex-row gap-5 items-center">
            <checkBox v-for="option in options" :key="option" :modelValue="selectedGroupTwo.includes(option)"
              @update:modelValue="updateSelectionGroupTwo($event, option)">
              {{ option }}
            </checkBox>
          </div>
          <p class="mt-4 text-sm text-black dark:text-white">
            Selected Two: <span>{{ selectedGroupTwo.join(', ') || 'None' }}</span>
          </p>
        </div>
      </fieldset>

      <fieldset class="border p-4 mt-8">
        <legend class="text-xl">Group Of Check Box Three (Checked Disabled)</legend>
        <div class="p-6 space-y-4">
          <div class="space-y-2 gap-4 flex flex-row">
            <checkBox v-for="option in options" :key="option" :modelValue="selectedGroupThree.includes(option)"
              :disabled="selectedGroupThree.includes(option)"
              @update:modelValue="updateSelectionGroupThree($event, option)">
              {{ option }}
            </checkBox>
          </div>
          <p class="mt-4 text-sm text-black dark:text-white">
            Selected Three: <span>{{ selectedGroupThree.join(', ') || 'None' }}</span>
          </p>
        </div>
      </fieldset>
    </BaseCard>
    <!-- end check box -->


  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import checkBox from "@/components/checkBox.vue";

export default {
  components: {
    BaseCard,
    checkBox
    ,
  },
  data() {
    return {

      acceptTerms: true,
      options: ['Vue.js', 'React', 'Svelte', 'Angular'],
      selectedGroupOne: [],
      selectedGroupTwo: [],
      selectedGroupThree: [],
      disabled: true
    };
  },
  methods: {
    updateSelectionGroupOne(isChecked, option) {
      if (isChecked) {
        if (!this.selectedGroupOne.includes(option)) {
          this.selectedGroupOne.push(option);
        }
      } else {
        this.selectedGroupOne = this.selectedGroupOne.filter(item => item !== option);
      }
    },
    updateSelectionGroupTwo(isChecked, option) {
      if (isChecked) {
        if (!this.selectedGroupTwo.includes(option)) {
          this.selectedGroupTwo.push(option);
        }
      } else {
        this.selectedGroupTwo = this.selectedGroupTwo.filter(item => item !== option);
      }
    },
    updateSelectionGroupThree(isChecked, option) {
      if (isChecked) {
        if (!this.selectedGroupThree.includes(option)) {
          this.selectedGroupThree.push(option);
        }
      } else {
        this.selectedGroupThree = this.selectedGroupThree.filter(item => item !== option);
      }
    },
  }

};
</script>
