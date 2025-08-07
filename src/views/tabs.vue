<template>

      <div class="z-[8] space-y-10  mt-[140px] lg:ml-[130px] md:ml-[130px] ml-[10px] lg:mr-[100px] md:mr-[100px] mr-[10px] 2xl:ml-[360px]  2xl:mr-[270px]">
      <h1 class="text-2xl font-semibold text-white mb-4">Basic Tabs</h1>
    

      <Tab :tabs="tabsList1">
        <template #tab1>
          <p class="text-gray-700 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </template>

        <template #tab2>
          <p class="text-gray-700 leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).        </p>
        </template>
      </Tab>


      <Tab :tabs="tabsList2">
        <template #tab1>
          <h1 class="text-2xl font-semibold text-black mb-4">Boxed Tab</h1>
          <p class="text-gray-700 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </template>

        <template #tab2>
            <h1 class="text-2xl font-semibold text-black mb-4">Boxed Tab</h1>
          <p class="text-gray-700 leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).        </p>
        </template>
      </Tab>

      <Tab :tabs="tabsList3"  :underline="true">
        <template #tab1>
          <h1 class="text-2xl font-semibold text-black mb-4">Link Tab</h1>
          <p class="text-gray-700 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </template>

        <template #tab2>
                  <h1 class="text-2xl font-semibold text-black mb-4">Link Tab</h1>
          <p class="text-gray-700 leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).        </p>
        </template>
      </Tab>


    
    </div>




  

    
  </template>

  <script>
  import BaseCard from '@/components/BaseCard.vue';
  import Tab from '@/components/tab.vue'

  export default {
    name: "TabsView",
    components: {
      Tab,BaseCard
    },
    data() {
      return {
        tabsList1: [
          { label: "Example Tab 1", slot: "tab1" },
          { label: "Example Tab 2", slot: "tab2" }
        ],
        tabsList2: [
          { label: "Example Tab 1", slot: "tab1" },
          { label: "Example Tab 2", slot: "tab2" }
        ],
        tabsList3: [
          { label: "Example Tab 1", slot: "tab1" },
          { label: "Example Tab 2", slot: "tab2" }
        ],

        
      }
    }
  }
  </script>









  <!-- <template>
   <div
    class="flex flex-col mt-[502px] md:ml-[150px] ml-[10px] lg:ml-[450px] z-[8] lg:mr-[150px] md:mr-[150px] mr-[10px]"
  >
    Label
    <label class="block mb-2 font-medium">
      {{ label }}
    </label>

    Input field
    <input
      type="text"
      v-model="selectedDateTime"
      placeholder="Select date and time"
      readonly
      class="w-full p-2 border rounded cursor-pointer"
      @focus="showPicker = true"
    />

    Date Picker
    <div
      v-if="showPicker"
      class="absolute mt-[60px] md:ml-[150px] ml-[10px] lg:ml-[20px]  lg:mr-[150px] md:mr-[150px] mr-[10px] bg-white border rounded shadow p-4 z-10"
    >
      Month & Year
      <div class="flex justify-between items-center mb-3">
        <button @click="prevMonth">◀</button>
        <span>{{ monthNames[currentMonth] }} {{ currentYear }}</span>
        <button @click="nextMonth">▶</button>
      </div>

      Days
      <div class="grid grid-cols-7 text-center font-bold">
        <div v-for="day in days" :key="day">{{ day }}</div>
      </div>

      Dates
      <div class="grid grid-cols-7 text-center">
        <div
          v-for="(date, index) in dates"
          :key="index"
          @click="selectDate(date)"
          class="p-1 cursor-pointer rounded hover:bg-blue-100"
          :class="{'bg-blue-500 text-white': date === selectedDay}"
        >
          {{ date }}
        </div>
      </div>

      Time Selection
      <div class="flex justify-between mt-4">
        <input type="number" v-model="hour" min="0" max="23" class="w-16 border rounded p-1 text-center" />
        <input type="number" v-model="minute" min="0" max="59" class="w-16 border rounded p-1 text-center" />
        <button @click="confirmDate" class="bg-blue-500 text-white px-3 rounded">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label"],
  data() {
    return {
      showPicker: false,
      selectedDateTime: "",
      selectedDay: null,
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      monthNames: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]
    };
  },
  computed: {
    dates() {
      const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      const dates = [];

      // Empty slots before the first day
      for (let i = 0; i < firstDay; i++) {
        dates.push("");
      }

      // Dates of the month
      for (let i = 1; i <= daysInMonth; i++) {
        dates.push(i);
      }

      return dates;
    }
  },
  methods: {
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    selectDate(day) {
      if (!day) return;
      this.selectedDay = day;
    },
    confirmDate() {
      if (!this.selectedDay) return;
      this.selectedDateTime = `${this.currentYear}-${this.currentMonth + 1}-${this.selectedDay} ${this.hour}:${this.minute}`;
      this.showPicker = false;
    }
  }
};
</script>

<style scoped>
/* Just a little styling for beginners */
</style> -->
