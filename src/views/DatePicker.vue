<template>
  <div
    class="w-full flex flex-col md:flex-row gap-10 mt-[240px] lg:mt-[220px] lg:ml-[130px] md:ml-[100px] ml-[10px] lg:mr-[170px] md:mr-[50px] mr-[10px] z-[8] 2xl:ml-[360px] 2xl:mr-[270px]"
  >
    <!-- Datepicker 1 -->
    <div
      ref="dp1"
      class="bg-green-900 shadow-lg rounded-lg p-4 w-full"
      :class="show1 ? 'h-[520px]' : 'h-[120px]'"
    >
      <div class="flex w-full flex-col gap-4 justify-center relative">
        <label class="text-white dark:text-[#fff]" for="date1"
          >Pick Date & Time</label
        >

        <input
          class="border focus:outline-none focus:ring p-3 py-1 placeholder:text-[#ac9b3d]"
          type="text"
          placeholder="pick date & time"
          v-model="selectedDate1"
          @focus="show1 = true"
          readonly
        />

        <div v-if="show1" class="bg-white border rounded mt-2 p-4 z-10">
          <!-- Month + Year Selectors -->
          <div class="flex gap-3 mb-3">
            <select class="p-2 border rounded" v-model="selectedMonth1">
              <option v-for="monthName in monthNames" :key="monthName">
                {{ monthName }}
              </option>
            </select>
            <select class="p-2 border rounded" v-model="selectedYear1">
              <option v-for="year in years" :key="year">{{ year }}</option>
            </select>
          </div>

          <!-- Calendar -->
          <div class="grid grid-cols-7 text-center font-bold mb-2">
            <div v-for="day in weekDays" :key="day">{{ day }}</div>
          </div>
          <div class="grid grid-cols-7 text-center mb-3">
            <div v-for="n in firstDayOfMonth1" :key="'empty1' + n"></div>
            <div
              v-for="day in daysInMonth1"
              :key="'day1' + day"
              class="p-2 cursor-pointer rounded hover:bg-blue-200"
              :class="{ 'bg-blue-500 text-white': selectedDay1 === day }"
              @click="selectedDay1 = day"
            >
              {{ day }}
            </div>
          </div>

          <!-- Time -->
          <div class="flex items-center gap-3 mb-3">
            <label class="font-semibold">Time:</label>
            <select class="p-2 border rounded" v-model.number="selectedHour1">
              <option v-for="h in hours" :key="'h1' + h" :value="h">
                {{ pad(h) }}
              </option>
            </select>
            <span>:</span>
            <select class="p-2 border rounded" v-model.number="selectedMinute1">
              <option v-for="m in minutes" :key="'m1' + m" :value="m">
                {{ pad(m) }}
              </option>
            </select>
          </div>

          <div class="flex justify-end gap-2">
            <button class="px-3 py-2 border rounded" @click="reset1">
              Clear
            </button>
            <button
              class="px-3 py-2 bg-blue-600 text-white rounded"
              :disabled="!selectedDay1"
              @click="apply1"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Datepicker 2 -->
    <div
      ref="dp2"
      class="bg-blue-900 shadow-lg rounded-lg p-4 w-full"
      :class="show2 ? 'h-[520px]' : 'h-[120px]'"
    >
      <div class="flex w-full flex-col gap-4 justify-center relative">
        <label class="text-white" for="date2">Pick Date & Time</label>

        <input
          class="border focus:outline-none focus:ring p-3 py-1 placeholder:text-[#ac9b3d]"
          type="text"
          placeholder="pick date & time"
          v-model="selectedDate2"
          @focus="show2 = true"
          readonly
        />

        <div v-if="show2" class="bg-white border rounded mt-2 p-4 z-10">
          <!-- Month + Year Selectors -->
          <div class="flex gap-3 mb-3">
            <select class="p-2 border rounded" v-model="selectedMonth2">
              <option v-for="monthName in monthNames" :key="monthName">
                {{ monthName }}
              </option>
            </select>
            <select class="p-2 border rounded" v-model="selectedYear2">
              <option v-for="year in years" :key="year">{{ year }}</option>
            </select>
          </div>

          <!-- Calendar -->
          <div class="grid grid-cols-7 text-center font-bold mb-2">
            <div v-for="day in weekDays" :key="day">{{ day }}</div>
          </div>
          <div class="grid grid-cols-7 text-center mb-3">
            <div v-for="n in firstDayOfMonth2" :key="'empty2' + n"></div>
            <div
              v-for="day in daysInMonth2"
              :key="'day2' + day"
              class="p-2 cursor-pointer rounded hover:bg-green-200"
              :class="{ 'bg-green-500 text-white': selectedDay2 === day }"
              @click="selectedDay2 = day"
            >
              {{ day }}
            </div>
          </div>

          <!-- Time -->
          <div class="flex items-center gap-3 mb-3">
            <label class="font-semibold">Time:</label>
            <select class="p-2 border rounded" v-model.number="selectedHour2">
              <option v-for="h in hours" :key="'h2' + h" :value="h">
                {{ pad(h) }}
              </option>
            </select>
            <span>:</span>
            <select class="p-2 border rounded" v-model.number="selectedMinute2">
              <option v-for="m in minutes" :key="'m2' + m" :value="m">
                {{ pad(m) }}
              </option>
            </select>
          </div>

          <div class="flex justify-end gap-2">
            <button class="px-3 py-2 border rounded" @click="reset2">
              Clear
            </button>
            <button
              class="px-3 py-2 bg-green-600 text-white rounded"
              :disabled="!selectedDay2"
              @click="apply2"
            >
              Apply
            </button>
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
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      hours: Array.from({ length: 24 }, (_, i) => i), // 00..23
      minutes: Array.from({ length: 60 }, (_, i) => i), // 00..59

      // Datepicker 1 state
      show1: false,
      selectedDate1: "",
      selectedMonth1: "January",
      selectedDay1: null,
      selectedYear1: new Date().getFullYear(),
      selectedHour1: 0,
      selectedMinute1: 0,

      // Datepicker 2 state
      show2: false,
      selectedDate2: "",
      selectedMonth2: "January",
      selectedDay2: null,
      selectedYear2: new Date().getFullYear(),
      selectedHour2: 0,
      selectedMinute2: 0,
    };
  },
  computed: {
    // Datepicker 1
    monthIndex1() {
      return this.monthNames.indexOf(this.selectedMonth1);
    },
    daysInMonth1() {
      return new Date(this.selectedYear1, this.monthIndex1 + 1, 0).getDate();
    },
    firstDayOfMonth1() {
      return new Date(this.selectedYear1, this.monthIndex1, 1).getDay();
    },

    // Datepicker 2
    monthIndex2() {
      return this.monthNames.indexOf(this.selectedMonth2);
    },
    daysInMonth2() {
      return new Date(this.selectedYear2, this.monthIndex2 + 1, 0).getDate();
    },
    firstDayOfMonth2() {
      return new Date(this.selectedYear2, this.monthIndex2, 1).getDay();
    },
  },
  methods: {
    pad(n) {
      return String(n).padStart(2, "0");
    },

    apply1() {
      if (!this.selectedDay1) return;
      const y = this.selectedYear1;
      const m = this.pad(this.monthIndex1 + 1);
      const d = this.pad(this.selectedDay1);
      const hh = this.pad(this.selectedHour1);
      const mm = this.pad(this.selectedMinute1);
      this.selectedDate1 = `${y}-${m}-${d} ${hh}:${mm}`;
      this.show1 = false;
    },
    apply2() {
      if (!this.selectedDay2) return;
      const y = this.selectedYear2;
      const m = this.pad(this.monthIndex2 + 1);
      const d = this.pad(this.selectedDay2);
      const hh = this.pad(this.selectedHour2);
      const mm = this.pad(this.selectedMinute2);
      this.selectedDate2 = `${y}-${m}-${d} ${hh}:${mm}`;
      this.show2 = false;
    },

    reset1() {
      this.selectedDay1 = null;
      this.selectedHour1 = 0;
      this.selectedMinute1 = 0;
      this.selectedDate1 = "";
    },
    reset2() {
      this.selectedDay2 = null;
      this.selectedHour2 = 0;
      this.selectedMinute2 = 0;
      this.selectedDate2 = "";
    },

    pad(n) {
      return String(n).padStart(2, "0");
    },

    setDefault(which) {
      const now = new Date();
      const y = now.getFullYear();
      const mIdx = now.getMonth(); // 0..11
      const d = now.getDate();
      const hh = now.getHours();
      const mm = now.getMinutes();

      if (which === 1) {
        this.selectedYear1 = y;
        this.selectedMonth1 = this.monthNames[mIdx];
        this.selectedDay1 = d;
        if ("selectedHour1" in this) this.selectedHour1 = hh;
        if ("selectedMinute1" in this) this.selectedMinute1 = mm;

        // Haddii aad rabto DATE + TIME:
        this.selectedDate1 = `${y}-${this.pad(mIdx + 1)}-${this.pad(d)}${
          "selectedHour1" in this ? ` ${this.pad(hh)}:${this.pad(mm)}` : ""
        }`;

        // Haddii aad rabto DATE kaliya, isticmaal tan halkii:
        // this.selectedDate1 = `${y}-${this.pad(mIdx+1)}-${this.pad(d)}`;
      }

      if (which === 2) {
        this.selectedYear2 = y;
        this.selectedMonth2 = this.monthNames[mIdx];
        this.selectedDay2 = d;
        if ("selectedHour2" in this) this.selectedHour2 = hh;
        if ("selectedMinute2" in this) this.selectedMinute2 = mm;

        this.selectedDate2 = `${y}-${this.pad(mIdx + 1)}-${this.pad(d)}${
          "selectedHour2" in this ? ` ${this.pad(hh)}:${this.pad(mm)}` : ""
        }`;
        // Ama DATE kaliya:
        // this.selectedDate2 = `${y}-${this.pad(mIdx+1)}-${this.pad(d)}`;
      }
    },

    // Close on outside click
    handleClickOutside(e) {
      if (this.show1 && this.$refs.dp1 && !this.$refs.dp1.contains(e.target)) {
        this.show1 = false;
      }
      if (this.show2 && this.$refs.dp2 && !this.$refs.dp2.contains(e.target)) {
        this.show2 = false;
      }
    },
    // Close on Escape
    handleEsc(e) {
      if (e.key === "Escape") {
        this.show1 = false;
        this.show2 = false;
      }
    },
  },
  mounted() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const startYear = 2000;
    const endYear = currentYear + 20;
    for (let y = startYear; y <= endYear; y++) {
      this.years.push(y);
    }
    // default the time pickers to current time
    this.selectedHour1 = now.getHours();
    this.selectedMinute1 = now.getMinutes();
    this.selectedHour2 = now.getHours();
    this.selectedMinute2 = now.getMinutes();

    // listeners
    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("keydown", this.handleEsc);
  },
  beforeUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener("keydown", this.handleEsc);
  },
};
</script>
