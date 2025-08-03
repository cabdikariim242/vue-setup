<template>
   <div
    class="flex flex-col justify-between lg:flex-row md:flex-row  absolute lg:top-[150px] md:top-[150px] top-[110px] left-0 right-0   lg:ml-[125px] md:ml-[125px] ml-4 mr-[20px] "
      
      >
      <h2 
      class="text-white text-lg mb-2 bg font-semibold"
      
      >Project Statistic</h2>


      <div  :class="[
        'transition-colors duration-300',
        isScrollingUp ? 'flex' : 'hidden',
      ]"
      class=" relative gap-6 bg-white/10 backdrop-blur-md rounded-lg flex w-max p-1 "
      
      >

   <button
      v-for="option in options"
      :key="option"
      @click="selected = option"
      :class="[
        'px-4 py-1.5 text-sm font-semibold rounded-md transition-all duration-200',
        selected === option
          ? 'bg-white/20 text-white shadow-inner'
          : 'text-white hover:bg-white/10'
      ]"
    >
      {{ option }}
    </button>
         
       
      
  </div>


  </div>


<div class="bg-white z-0 mt-[200px] lg:ml-[110px] md:ml-[110px] ml-[10px] flex lg:flex-row  md:flex-wrap flex-wrap sm:flex-wrap gap-2 p-4  rounded-lg">
  <!-- Card 1 -->
  <div class="bg-gradient-to-br from-[#1e3a8a] to-[#312e81] text-white rounded-xl p-4 shadow-md relative lg:w-[280px] md:w-[280px] w-[450px] ">
    <div class="absolute top-2 right-2 text-white text-sm opacity-70">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-[60px] lg:mb-4 md:mb-4" >
      <i class="fa-solid fa-database text-white text-lg"></i>
    </div>
    <div class="flex items-center gap-4">
  <div class="text-2xl font-semibold">247,220</div>
  <div class="text-sm flex items-center gap-1">
    <span class="bg-white/20 px-2 py-0.5 rounded-full text-xs text-white font-semibold">
      12% <i class="fa-solid fa-arrow-up"></i>
    </span>
  </div>
</div>
    <p class="mt-2 text-sm opacity-90">Customer Engagement</p>
  </div>

  <!-- Card 2 -->
  <div class="bg-white rounded-xl p-4 shadow-md relative border text-gray-800 lg:w-[280px] md:w-[280px] w-[450px] ">
    <div class="absolute top-2 right-2 text-gray-400 text-sm">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-[60px] lg:mb-4 md:mb-4">
      <i class="fa-solid fa-box text-purple-600 text-lg"></i>
    </div>
    <div class="flex items-center gap-4">
<div class="text-2xl font-semibold">124,625</div>
    <div class="text-sm mt-1 flex items-center gap-1">
      <span class="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-semibold">3% <i class="fa-solid fa-arrow-down"></i></span>
    </div>
    </div>
    
    <p class="mt-2 text-sm text-gray-600">Lead Generation</p>
  </div>

  <!-- Card 3 -->
  <div class="bg-white rounded-xl p-4 shadow-md relative border text-gray-800 lg:w-[280px] md:w-[280px] w-[450px] ">
    <div class="absolute top-2 right-2 text-gray-400 text-sm">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    <div class="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mb-[60px] lg:mb-4 md:mb-4">
      <i class="fa-solid fa-cube text-cyan-600 text-lg"></i>
    </div>
    <div class="flex items-center gap-4">
<div class="text-2xl font-semibold">749,220</div>
    <div class="text-sm mt-1 flex items-center gap-1">
      <span class="bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full text-xs font-semibold">4% <i class="fa-solid fa-arrow-up"></i></span>
    </div>
    </div>
    
    <p class="mt-2 text-sm text-gray-600">Support Tickets</p>
  </div>

  <!-- Card 4 -->
  <div class="bg-white rounded-xl p-4 shadow-md relative border text-gray-800 lg:w-[250px] md:w-[260px] w-[450px] ">
    <div class="absolute top-2 right-2 text-gray-400 text-sm">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    
    <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-[60px] lg:mb-4 md:mb-4">
      <i class="fa-solid fa-box-archive text-purple-600 text-lg"></i>
    </div>
    <div class="flex items-center gap-4">
   <div class="text-2xl font-semibold">273,235</div>
    <div class="text-sm mt-1 flex items-center gap-1">
      <span class="bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full text-xs font-semibold">9% <i class="fa-solid fa-arrow-up"></i></span>
    </div>
    </div>
    
    <p class="mt-2 text-sm text-gray-600">Pipeline Management</p>
  </div>

  <!-- Add New Card -->
  <div class="bg-white border-dashed border-2 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gray-50 cursor-pointer lg:w-[70px] md:w-[60px] w-[460px] lg:mt-0 md-mt-0 mt-[20px]">
    <i class="fa-solid fa-plus text-2xl"></i>
  </div>
</div>




 <!-- duplicate -->


    <div
    :class="[
      'transition-colors duration-300',
      isScrollingUp ? 'lg:top-0' : 'lg:top-[-20px]',
    ]"
    class="top-0 left-0 right-0 h-[280px] lg:mt-[420px] md:mt-[550px] mt-[1150px] mb-[50px] ml-[10px] lg:ml-[116px] md:ml-[130px]  lg:mr-[600px] md:mr-[450px] mr-[10px] bg-white text-gray-800 rounded-xl shadow-lg p-6 absolute overflow-hidden border"
  >
    <!-- Header -->
    <div class="flex items-center gap-4 mb-4">
      <div class="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center">
        <i class="fa-solid fa-copy text-gray-400"></i>
      </div>
      <div>
        <h2 class="text-lg font-semibold">36k Products Shipped</h2>
        <p class="text-sm text-gray-500">Across 14 warehouses</p>
      </div>
      <div class="ml-auto">
        <i class="fa-solid fa-ellipsis-vertical text-gray-400"></i>

      </div>
    </div>

    <!-- Chart Placeholder -->
    <div class="w-full h-[100px]">
      <!-- Replace this with your actual chart component (e.g., Chart.js, ApexCharts, etc) -->
      <canvas id="chartShipped"></canvas>
    </div>

    <!-- Legend -->
    <div class="flex justify-center gap-6 mt-4 text-sm text-gray-600">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#1e3a8a]"></span>
        <span>Total Shipped</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#cbd5e1]"></span>
        <span>Warehouses</span>
      </div>
    </div>
  </div>


  <!-- duplicate 2 -->
    <div
    :class="[
      'transition-colors duration-300',
      isScrollingUp ? 'lg:top-0' : 'lg:top-[-20px]',
    ]"
    class="lg:top-0 md:top-0 top-[250px] left-0 right-0 h-[280px] mt-[1250px] lg:mt-[420px] md:mt-[550px] ml-[10px] lg:ml-[760px] md:ml-[500px] mr-[10px] bg-white text-gray-800 rounded-xl shadow-lg p-6 absolute overflow-hidden border"
  >
    <!-- Header -->
    <div class="flex items-center gap-4 mb-4">
      <div class="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center">
       <i class="fa-solid fa-bolt"></i>
      </div>
      <div>
        <h2 class="text-lg font-semibold">3.7k Orders Processed</h2>
        <p class="text-sm text-gray-500">Across 9 regions</p>
      </div>
      <div class="ml-auto">
        <i class="fa-solid fa-ellipsis-vertical text-gray-400"></i>
      </div>
    </div>

    <!-- Chart Placeholder -->
    <div class="w-full h-[100px]">
      <!-- Replace this with your actual chart component (e.g., Chart.js, ApexCharts, etc) -->
      <canvas id="chartOrdersProcessed"></canvas>
    </div>

    <!-- Legend -->
    <div class="flex justify-center gap-6 mt-4 text-sm text-gray-600">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#1e3a8a]"></span>
        <span>Order Volume</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#cf0707]"></span>
        <span>Coverage Area</span>
      </div>
    </div>
  </div>
  

</template>

<script>
  import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  ArcElement
} from 'chart.js';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  ArcElement
);


Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler);


export default {
  name: 'HomeView',
  components: {
    
  },


  data(){
    return{
      dateFilter: 'custom',
      isScrollingUp: true,
      lastScrollY: window.scrollY,
       options: ['Daily', 'Monthly', 'Yearly'],
      selected: 'Daily',
    };
  },
    methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isScrollingUp = currentScrollY < this.lastScrollY;
      this.lastScrollY = currentScrollY;
    },
  },


  mounted() {
  window.addEventListener("scroll", this.handleScroll);

  const chartConfigs = [
    {
      id: "chartSold",
      label1: "Products Sold",
      data1: [-100, 2000, -3900, -9400, 9500, -7600, 9700],
      color1: "#1e3a8a",
      label2: "Store Locations",
      data2: [10, 20, 30, 25, 40, 35, 50],
      color2: "#cbd5e1"
    },
    {
      id: "chartShipped",
      label1: "Total Shipped",
      data1: [-500, 3900, -9400, 9600, -5700, 580, -900],
      color1: "#2dd4bf",
      label2: "Warehouses",
      data2: [8, 15, 20, 18, 25, 30, 35],
      color2: "#cbd5e1"
    },
    {
      id: "chartRevenue",
      label1: "Revenue",
      data1: [150, 250, 400, 550, 700, 900, 1000],
      color1: "#16a34a",
      label2: "Expenses",
      data2: [50, 100, 200, 300, 400, 500, 600],
      color2: "#fca5a5"
    },
    {
      id: "chartReturns",
      label1: "Returns",
      data1: [10, 30, 25, 40, 50, 35, 20],
      color1: "#f59e0b",
      label2: "Complaints",
      data2: [2, 5, 3, 6, 7, 4, 1],
      color2: "#fcd34d"
    }
  ];

  chartConfigs.forEach(({ id, label1, data1, color1, label2, data2, color2 }) => {
    const ctx = document.getElementById(id);
    if (!ctx) return;

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: label1,
            data: data1,
            borderColor: color1,
            backgroundColor: color1 + "20",
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
          },
          {
            label: label2,
            data: data2,
            borderColor: color2,
            backgroundColor: color2 + "20",
            fill: true,
            borderDash: [5, 5],
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  });

  // chartOrdersProcessed – Doughnut (Semi-circle)
  const doughnutCtx = document.getElementById("chartOrdersProcessed");
  if (doughnutCtx) {
    new Chart(doughnutCtx, {
      type: "doughnut",
      data: {
        labels: ["Order Volume", "Coverage Area"],
        datasets: [
          {
            data: [80, 20],
            backgroundColor: ["#64748b", "#f87171"],
            borderWidth: 0
          }
        ]
      },
      options: {
        rotation: -90,
        circumference: 180,
        cutout: "70%",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}

  
}
</script>

