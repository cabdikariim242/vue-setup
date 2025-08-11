<template>
  <div
    class="lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[450px] md:ml-[150px] mr-[30px] ml-[30px] z-[8] 2xl:ml-[360px] 2xl:mr-[270px]"
  >
    <BaseCard>
      <field text="this is field set and legend">
        
        <label class="grid gap-1">
          <span>Telefoon</span>
          <input class="border rounded-lg p-2" name="phone" />
        </label>

        <label class="grid gap-1">
          <span>Email</span>
          <input type="email" class="border rounded-lg p-2" name="email" />
        </label>

        <label class="grid gap-1">
          <button
            type="button"
            class="text-lg text-white bg-blue-400 border-2 rounded-lg px-4 py-2"
          >
            Submit
          </button>
        </label>
      </field>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import field from "@/components/field.vue";
export default {
      components: { field, BaseCard },

    data(){

        return{
            text: ''
        }
    }
  
};
</script>

<style></style>
