<template>
    <div class=" w-full lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px] mr-[30px] ml-[30px] z-[8]">


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
