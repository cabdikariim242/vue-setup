<template>
  <div class="lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px]  mr-[30px] ml-[30px] z-[8]">


    <div  class="bg-white shadow-[0_8px_10px_rgba(0,0,0,0.8)] mb-20 w-full rounded-lg">
         
         <h1 class="p-2 font-bold">Basic Dropdown</h1>
            <p class="p-2">Dropdown menus are a fundamental user interface component that allows users to choose from a list of options in a collapsible format. This section covers the creation and usage of basic dropdowns in your web applications using the `Menu` component.</p>

          <Dropdown ref="dropdownOne" class="p-4">
        <!-- Trigger -->
        <template #trigger>
            <button class="bg-[#0f0f67] text-white font-semibold px-4 py-2 rounded shadow">
            Show Dropdown
          </button>
        </template>

        <!-- Content -->
        <template #content>
          <div class="p-4 z-10">
            <ul class="space-y-2">
              <li
                class="flex items-center gap-2 text-sm hover:bg-gray-100 text-gray-700 cursor-pointer transition rounded"
              @click="handleItemClick('NewDropDown')"

              >
              <h1>NewDropDown</h1>
              </li>
              <li
                class="flex items-center gap-2 text-sm hover:bg-gray-100 text-gray-700 cursor-pointer transition rounded relative"
                  @click="handleItemClick('DeleteDropDown')"

              >
                 <h1>DeleteDropDown</h1>

              </li>
             
            </ul>
          </div>
        </template>
      </Dropdown>
    </div>

       

    <div class="bg-white shadow-[0_8px_10px_rgba(0,0,0,0.8)] w-full rounded-lg mt-[30px]">
        <h1 class="p-2 font-bold">Header & Footer Dropdown</h1>
         <p class="p-2">Dropdown menus often require additional elements such as headers and footers to provide context or additional information. This section covers how to create dropdowns with both headers and footers using the `Menu` component.</p>
          

        <Dropdown ref="dropdownTwo" class="p-4">
        <!-- Trigger -->
        <template #trigger>
         
         <button class="bg-[#0f0f67] text-white font-semibold px-4 py-2 rounded shadow">
            Show Dropdown
          </button>
        </template>

        <!-- Content -->
        <template #content>
          <div class="p-4">
            <p class="text-sm text-gray-500 mb-2">Export Options</p>
            <ul class="space-y-2">
              <li
                class="flex items-center gap-2 text-sm hover:bg-gray-100 text-gray-700 cursor-pointer transition rounded"
                @click="handleItemClick('English')"
              >
                <span>📈</span><span>English</span>
              </li>
              <li
                class="flex items-center gap-2 text-sm hover:bg-gray-100 text-gray-700 cursor-pointer transition rounded relative"
                @click="handleItemClick('Indonesia')"
              >
                <span>🧊</span><span>Indonesia</span>
                <span class="absolute right-0 text-xs text-white bg-red-600 rounded-full px-2">10</span>
              </li>
             
            </ul>
          </div>
        </template>

        <!-- Footer -->
        <template #footer>
          <div class="flex justify-between p-4 pt-2">
            <button class="bg-[#0f0f67] text-white text-sm px-4 py-1.5 rounded  focus:outline-none focus:ring">Settings</button>
            <button class="bg-gray-200 text-gray-500 text-sm px-4 py-1.5 rounded  focus:outline-none focus:ring">
              View Profile
            </button>
          </div>
        </template>
      </Dropdown>

    </div>



    <div class="bg-white shadow-[0_8px_10px_rgba(0,0,0,0.8)] w-full rounded-lg mt-[30px] ">
        <h1 class="p-2 font-bold">Icon Dropdown</h1>
         <p class="p-2">Icon dropdowns can add visual cues and improve user experience when selecting options. This section covers how to create dropdowns with icons using the `Menu` component.</p>
     <Dropdown ref="dropdown3" class="p-4">
      <!-- Trigger -->
      <template #trigger>
         
         <button class="bg-[#0f0f67] text-white font-semibold px-4 py-2 rounded shadow">
          Show Dropdown
        </button>
      </template>

      <!-- Content -->
      <template #content>
        <div class="py-2 z-10">
          <ul class="space-y-1">
            <li
              @click="handleItemClick('New DropDown')"
              class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer transition rounded"
            >
              <i class="fas fa-pen w-4 h-4 text-gray-500"></i>
              <span>New DropDown</span>
            </li>
            <li
              @click="handleItemClick('Delete DropDown')"
              class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer transition rounded"
            >
              <i class="fas fa-trash w-4 h-4 text-gray-500"></i>
              <span>Delete DropDown</span>
            </li>
          </ul>
        </div>
      </template>
    </Dropdown>

    </div>

  



        <div class="bg-white shadow-[0_8px_10px_rgba(0,0,0,0.8)] w-full rounded-lg mt-[30px]">
         <h1 class="p-2 font-bold">Dropdown with Close Button</h1>
         <p class="p-2">Dropdowns with close buttons are a user-friendly way to provide options while allowing users to dismiss the dropdown when needed. This section covers how to create dropdowns with a close button using the `Menu` component.</p>
        <Dropdown ref="filterDropdown" class="p-4">
      <!-- Trigger -->
      <template #trigger>
        <button class="bg-[#0f0f67] text-white font-semibold px-4 py-2 rounded shadow  focus:outline-none flex items-center gap-2">
          Filter Dropdown
          <i class="fas fa-chevron-down text-xs"></i>
        </button>
      </template>

      <!-- Content -->
      <template #content>
        <div class="p-4 w-72">
          <div class="mb-3 z-10">
            <label class="block text-sm text-gray-700 mb-1">From</label>
            <input
              v-model="form.from"
              type="email"
              placeholder="example@gmail.com"
              class="w-[210px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 text-sm"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm text-gray-700 mb-1">To</label>
            <input
              v-model="form.to"
              type="email"
              placeholder="example@gmail.com"
              class="w-[210px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 text-sm"
            />
          </div>
          <div class="flex justify-start gap-20">
            <button
              
              class="bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded hover:bg-gray-200"
               @click="handleItemClick('Close')"

              >
              Close
            </button>
            <button
              @click="searchFilter"
              class="bg-[#0f0f67] text-white text-sm px-4 py-2 rounded hover:bg-blue-900 focus:ring focus:border-blue-300 "
            >
              Search
            </button>
          </div>
        </div>
      </template>
    </Dropdown>




    </div>




        <div class="bg-white shadow-[0_8px_10px_rgba(0,0,0,0.8)] w-full rounded-lg mt-[100px]">
         <h1 class="p-2 font-bold">Scrolled Dropdown</h1>
         <p class="p-2">Scrolled dropdowns are useful when you have a long list of options to display in a dropdown menu. By limiting the height of the dropdown and enabling scrolling, you can provide a more compact and user-friendly interface. This section covers how to create scrolled dropdowns using the `Menu` component.</p>
        <Dropdown ref="ScrolledDropdown" class="p-4">
      <!-- Trigger -->
      <template #trigger>
        <button class="bg-[#0f0f67] text-white font-semibold px-4 py-2 rounded shadow  focus:outline-none flex items-center gap-2">
          Scrolled Dropdown
        </button>
      </template>

      <!-- Content -->
     <template #content>
       <div class="max-h-48 overflow-y-auto px-2 py-2">
    <button
      v-for="(month, index) in months"
      :key="index"
      class="w-full text-left px-4 py-2 text-sm text-gray-800 rounded hover:bg-gray-100 transition"
      @click="handleItemClick(month)"
    >
      {{ month }}
    </button>
  </div>
        
      </template>
    </Dropdown>

    </div>







      <div class="bg-white shadow-[0_8px_10px_rgba(0,0,0,0.8)] w-full rounded-lg mt-[90px]">
        <h1 class="p-2 font-bold">Header & Icon Dropdown</h1>
         <p class="p-2">Header and icon dropdowns are a great way to categorize and visually enhance your dropdown menus. This section covers how to create dropdowns with headers and icons using the `Menu` component.</p>
     <Dropdown ref="HeaderIcon" class="p-4">
      <!-- Trigger -->
      <template #trigger>
         
         <button class="bg-[#0f0f67] text-white font-semibold px-4 py-2 rounded shadow">
          Show Dropdown
        </button>
      </template>

      <!-- Content -->
      <template #content>
         <div class="p-4 w-48">
    <p class="text-sm font-semibold text-blue-800 mb-2">Export Tools</p>
    <ul class="space-y-2 text-sm text-gray-700">
      <li
        class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition"
        @click="handleItemClick('print')"
      >
        <i class="fas fa-print w-4"></i>
        <span>Print</span>
      </li>
      <li
        class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition"
        @click="handleItemClick('excel')"
      >
        <i class="fas fa-file-excel w-4 text-green-600"></i>
        <span>Excel</span>
      </li>
      <li
        class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition"
        @click="handleItemClick('csv')"
      >
        <i class="fas fa-file-alt w-4 text-blue-600"></i>
        <span>CSV</span>
      </li>
      <li
        class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition"
        @click="handleItemClick('pdf')"
      >
        <i class="fas fa-file-pdf w-4 text-red-600"></i>
        <span>PDF</span>
      </li>
    </ul>
  </div>
      </template>
    </Dropdown>

    </div>


    </div>
  
    

</template>

<script>
import Dropdown from '@/components/Dropdown.vue'
import BaseCard from '@/components/BaseCard.vue'

export default {
  components: {
    Dropdown,
    BaseCard,
  },

  data(){
    return{

         form: {
        from: '',
        to: ''
      },

      months: [
        "January", "February", "March", "April", "May", "June", "July"
      ],
    }
  },
  methods: {
    handleItemClick(value) {
      console.log('You selected:', value)
       this.$refs.dropdownOne?.closeDropdownExternally?.();
      this.$refs.dropdownTwo?.closeDropdownExternally?.();
      this.$refs.dropdown3?.closeDropdownExternally?.();
      this.$refs.filterDropdown?.closeDropdownExternally?.();
      this.$refs.ScrolledDropdown?.closeDropdownExternally?.();
      this.$refs.HeaderIcon?.closeDropdownExternally?.();
    }
  }
}
</script>
