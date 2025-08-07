<template>
  <div class=" w-full flex flex-col md:flex-row gap-10 mt-[240px] lg:mt-[220px] lg:ml-[130px] md:ml-[100px] ml-[10px] lg:mr-[170px] md:mr-[50px] mr-[10px] z-[8] 2xl:ml-[360px]  2xl:mr-[270px]">
    
    <!-- Datepicker 1 -->
          <div class="bg-green-900 shadow-lg rounded-lg p-4 w-full"
           :class="show1 ? 'h-[440px]' : 'h-[120px]'"
          >

        <div class="flex w-full flex-col gap-4 justify-center relative">
        <label class="text-white dark:text-[#fff]" for="date1">Pick Date</label>

        <input
          class="border focus:outline-none focus:ring p-3 py-1 placeholder:text-[#ac9b3d]"
          type="text"
          placeholder="pick date"
          v-model="selectedDate1"
          @focus="show1 = true"
          readonly
        />

        <div v-if="show1" class="bg-white  border rounded mt-2 p-4 z-10">
          <!-- Month + Year Selectors -->
          <div class="flex gap-3 mb-3">
            <select class="p-2 border rounded" v-model="selectedMonth1">
              <option v-for="monthName in monthNames" :key="monthName">{{ monthName }}</option>
            </select>
            <select class="p-2 border rounded" v-model="selectedYear1">
              <option v-for="year in years" :key="year">{{ year }}</option>
            </select>
          </div>

          <!-- Calendar -->
          <div class="grid grid-cols-7 text-center font-bold mb-2">
            <div v-for="day in weekDays" :key="day">{{ day }}</div>
          </div>
          <div class="grid grid-cols-7 text-center">
            <div v-for="n in firstDayOfMonth1" :key="'empty1'+n"></div>
            <div
              v-for="day in daysInMonth1"
              :key="'day1'+day"
              class="p-2 cursor-pointer rounded hover:bg-blue-200"
              :class="{'bg-blue-500 text-white': selectedDay1 === day}"
              @click="selectDay1(day)"
            >
              {{ day }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Datepicker 2 -->
     <div class="bg-blue-900 shadow-lg rounded-lg p-4 w-full"
      :class="show2 ? 'h-[440px]' : 'h-[120px]'"
     >

       <div class="flex w-full flex-col gap-4 justify-center relative">
        <label class="text-white" for="date2">Pick Date</label>

        <input
          class="border focus:outline-none focus:ring p-3 py-1 placeholder:text-[#ac9b3d]"
          type="text"
          placeholder="pick date"
          v-model="selectedDate2"
          @focus="show2 = true"
          readonly
        />

        <div v-if="show2" class="bg-white border rounded mt-2 p-4 z-10">
          <!-- Month + Year Selectors -->
          <div class="flex gap-3 mb-3">
            <select class="p-2 border rounded" v-model="selectedMonth2">
              <option v-for="monthName in monthNames" :key="monthName">{{ monthName }}</option>
            </select>
            <select class="p-2 border rounded" v-model="selectedYear2">
              <option v-for="year in years" :key="year">{{ year }}</option>
            </select>
          </div>

          <!-- Calendar -->
          <div class="grid grid-cols-7 text-center font-bold mb-2">
            <div v-for="day in weekDays" :key="day">{{ day }}</div>
          </div>
          <div class="grid grid-cols-7 text-center">
            <div v-for="n in firstDayOfMonth2" :key="'empty2'+n"></div>
            <div
              v-for="day in daysInMonth2"
              :key="'day2'+day"
              class="p-2 cursor-pointer rounded hover:bg-green-200"
              :class="{'bg-green-500 text-white': selectedDay2 === day}"
              @click="selectDay2(day)"
            >
              {{ day }}
            </div>
          </div>
        </div>
      </div>
     </div>
     

  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  components: { BaseCard },
  data() {
    return {
      years: [],
      monthNames: [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
      ],
      weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

      // Datepicker 1 state
      show1: false,
      selectedDate1: "",
      selectedMonth1: "January",
      selectedDay1: null,
      selectedYear1: new Date().getFullYear(),

      // Datepicker 2 state
      show2: false,
      selectedDate2: "",
      selectedMonth2: "January",
      selectedDay2: null,
      selectedYear2: new Date().getFullYear(),
    };
  },
  computed: {
    // Datepicker 1
    monthIndex1() { return this.monthNames.indexOf(this.selectedMonth1); },
    daysInMonth1() { return new Date(this.selectedYear1, this.monthIndex1 + 1, 0).getDate(); },
    firstDayOfMonth1() { return new Date(this.selectedYear1, this.monthIndex1, 1).getDay(); },

    // Datepicker 2
    monthIndex2() { return this.monthNames.indexOf(this.selectedMonth2); },
    daysInMonth2() { return new Date(this.selectedYear2, this.monthIndex2 + 1, 0).getDate(); },
    firstDayOfMonth2() { return new Date(this.selectedYear2, this.monthIndex2, 1).getDay(); }
  },
  methods: {
    selectDay1(day) {
      this.selectedDay1 = day;
      this.selectedDate1 = `${this.selectedYear1}-${this.monthIndex1 + 1}-${day}`;
      this.show1 = false;
    },
    selectDay2(day) {
      this.selectedDay2 = day;
      this.selectedDate2 = `${this.selectedYear2}-${this.monthIndex2 + 1}-${day}`;
      this.show2 = false;
    }
  },
  mounted() {
    const currentYear = new Date().getFullYear();
    const startYear = 2000;
    const endYear = currentYear + 20;
    for (let y = startYear; y <= endYear; y++) {
      this.years.push(y);
    }
  }
};
</script>
