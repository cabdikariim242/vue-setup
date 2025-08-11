<template>
<div
    class="lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[450px] md:ml-[150px] mr-[30px] ml-[30px] z-[8] 2xl:ml-[360px] 2xl:mr-[270px]"
  >
  <BaseCard>
      <h1 class="text-xl font-semibold">DataList</h1>

    <label class="grid gap-1">
      <span>Browser</span>
      <DataListInput
        v-model="browser"
        :options="browserList"
        placeholder="Dooro browser"
      />
    </label>
    <p>Doorashada: <strong>{{ browser }}</strong></p>

    <label class="grid gap-1">
      <span>Magaalo</span>
      <DataListInput
        v-model="city"
        :options="cityList"
        placeholder="Dooro magaalo"
      />
    </label>
    <p>Magaalada: <strong>{{ city }}</strong></p>
    </BaseCard>
  </div>

</template>

<script>
import DataListInput from "@/components/DataListInput.vue";
import BaseCard from "@/components/BaseCard.vue";


export default {
  name: "MyForm",
  components: { DataListInput, BaseCard },
  data() {
    return {
      browser: "",
      browserList: ["Edge", "Firefox", "Chrome", "Opera", "Safari"],
      city: "",
      cityList: [
        { label: "Muqdisho", value: "Mogadishu" },
        { label: "Hargeysa", value: "Hargeisa" },
        "Kismayo",
        "Bosaso",
      ],
    };
  },
};
</script>
