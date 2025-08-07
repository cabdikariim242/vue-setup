<template>
  <div class="z-10 relative">
    <div
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :class="[
        toggle || hover ? 'w-[300px] overflow-y-hidden hover:overflow-y-auto hover:overflow-auto ' : 'w-[80px]',
        'hidden  lg:flex md:flex flex-col bg-[#fefefe] dark:bg-[#0f0f0f]  opacity-95  group fixed bottom-3 top-0 left-3 transition-all duration-300 mr-10 mt-5 rounded-lg',
      ]"
      style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6)"
    >
      <!-- all icons are here -->
      <div class="flex justify-between items-center">
        <div class="flex">
          <i
            class="fa-brands fa-stackpath text-[35px] text-[#206c93] pl-6 pr-3 pt-3 text-5 transition-transform duration-50 rounded-full group-hover:rotate-[360deg]"
          ></i>
          <p
            v-if="!toggle"
            class="mt-5 group-hover:flex hidden text-[#465569] ml-[20px] font-[500] dark:text-white"
          >
            ECHO
          </p>
          <p v-if="toggle" class="mt-5 text-[#465569] ml-[20px] font-[500] dark:text-white">
            ECHO
          </p>
        </div>
        <div class="mr-2 ml-4">
          <i
            @click="togglesidebar"
            class="fa-solid fa-arrow-right transition-transform duration-5 group-hover:rotate-[180deg] text-[#fff] dark:text-[#0f0f0f]  group-hover:text-[gray]"
          ></i>
        </div>
      </div>

      <div class="ml-8">
        <p
          v-if="!toggle"
          class="mt-5 group-hover:flex hidden text-[#c6d0e0] text-[15px] font-[500]"
        >
          COMPONENTS
        </p>
        <p
          v-if="!toggle"
          class="mt-5 group-hover:hidden flex text-[#8d98aa] font-[500]"
        >
          ...
        </p>
        <p v-if="toggle" class="mt-5 text-[#c6d0e0] text-[15px] font-[500]">
          COMPONENTS
        </p>
      </div>

      <!-- content -->
      <router-link
        :to="{ name: 'buttons' }"
        class="mx-2 rounded-lg mt-5 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-floppy-disk text-[20px] text-[#4b93b1] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] dark:text-white"
          >
            BUTTONS
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] dark:text-white">
            BUTTONS
          </p>
        </div>
      </router-link>

      <router-link
        :to="{ name: 'inputGroup' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i
            class="fa-regular fa-keyboard text-[20px] text-[#4b93b1] dark:text-white"
          ></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] dark:text-white"
          >
            INPUTGROUPS
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] dark:text-white">
            INPUTGROUPS
          </p>
        </div>
      </router-link>

      <router-link
        :to="{ name: 'alert' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-triangle-exclamation text-[20px] text-[#4b93b1] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] dark:text-white"
          >
            ALERT
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] dark:text-white">
            ALERT
          </p>
        </div>
      </router-link>

      <div class="w-full">
        <router-link
        :to="{ name: 'Dropdown' }"
        class="flex mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]" @click="showrouter = !showrouter">
         <div class="ml-5 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-brands fa-elementor text-[#4b93b1] text-[20px] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] dark:text-white"
          >
            FORM ELEMENTS
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] dark:text-white">
            FORM ELEMENTS
          </p>
          <i  v-if="!toggle" class="fa-solid fa-chevron-down text-[#465569] group-hover:flex text-[15px] hidden  dark:text-white"></i>
          <i  v-if="toggle" class="fa-solid fa-chevron-down text-[#465569] text-[15px] dark:text-white"></i>
        </div>
          
         </router-link>


        <div v-if="showrouter" class="border-2 m-5 mr-2 border-[#e2e8f0]">
          <router-link 
        :to="{ name: 'Dropdown' }"
        exact-active-class="dropdown-active"
        class="rounded-lg  hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class=" gap-3 m-3 flex justify-start items-center">
          <i class="fa-solid fa-circle-down text-[#4b93b1] text-[18px] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] link-text dark:text-white "
          >
            Dropdown
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] link-text dark:text-white ">
            Dropdown
          </p>
        </div>
      </router-link>

          <router-link 
        :to="{ name: 'RadioButton' }"
        exact-active-class="dropdown-active"
        class="rounded-lg  hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class=" gap-3 mx-3 mt-5 flex justify-start items-center">
          <i class="far fa-circle  text-[#4b93b1] text-[20px] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] link-text  dark:text-white"
          >
            RadioButton
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] link-text dark:text-white ">
            RadioButton
          </p>
        </div>
      </router-link>

          <router-link
        :to="{ name: 'TextArea' }"
        exact-active-class="dropdown-active"
        class="mx-2 rounded-lg hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class=" gap-3 mx-3 flex justify-start items-center">
          <i class="fa-regular fa-comment text-[20px]  text-[#4b93b1] dark:text-white "></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] link-text dark:text-white "
          >
            TextArea
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] link-text dark:text-white ">
            TextArea
          </p>
        </div>
      </router-link>



          <router-link
        :to="{ name: 'CheckBox' }"
        exact-active-class="dropdown-active"
        class="mx-2 rounded-lg hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class=" gap-3 mx-3 flex justify-start items-center">
          <i class="far fa-square text-[20px]  text-[#4b93b1] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] link-text dark:text-white "
          >
            CheckBox
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] link-text dark:text-white ">
            CheckBox
          </p>
        </div>
      </router-link>

           <router-link
        :to="{ name: 'fileupload' }"
        exact-active-class="dropdown-active"
        class="mx-2 rounded-lg hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class=" gap-3 mx-3 flex justify-start items-center">
          <i class="fa-solid fa-upload text-[20px]  text-[#4b93b1] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] link-text dark:text-white "
          >
            fileupload
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] link-text dark:text-white">
            fileupload
          </p>
        </div>
      </router-link>



         <router-link
        :to="{ name: 'SelectBox' }"
        exact-active-class="dropdown-active"
        class="mx-2 rounded-lg hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class=" gap-3 mx-3 flex justify-start items-center">
          <i class="fa-solid fa-chevron-down text-[20px]  text-[#4b93b1] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] link-text dark:text-white"
          >
            SelectBox
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] link-text dark:text-white">
            SelectBox
          </p>
        </div>
      </router-link>

        </div>
      </div>

      <router-link
        :to="{ name: 'tabs' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-table-columns text-[20px] text-[#4b93b1] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] dark:text-white"
          >
            TABS
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] dark:text-white">
            TABS
          </p>
        </div>
      </router-link>

      <router-link
        :to="{ name: 'AccordionView' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-chevron-down text-[#4b93b1] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] dark:text-white"
          >
            Accordion
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] dark:text-white">
            Accordion
          </p>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'TableViews' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-table text-[#4b93b1] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] dark:text-white"
          >
            TableViews
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] dark:text-white">
            TableViews
          </p>
        </div>
      </router-link>

      <router-link
        :to="{ name: 'DatePicker' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-calendar text-[#4b93b1] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] dark:text-white"
          >
            DatePicker
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] dark:text-white">
            DatePicker
          </p>
        </div>
      </router-link>

      <router-link
        :to="{ name: 'ImageZoomView' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-magnifying-glass-minus text-[#4b93b1] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] dark:text-white"
          >
            ImageZoomView
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] dark:text-white">
            ImageZoomView
          </p>
        </div>
      </router-link>

      <router-link
        :to="{ name: 'RegularForm' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
         <i class="fa-regular fa-clipboard text-[#4b93b1] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] dark:text-white"
          >
            RegularForm
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] dark:text-white">
            RegularForm
          </p>
        </div>
      </router-link>

      

      
    </div>

    <!-- halakan waxa ka bilaabanaya mobile sidebar -->
    <div
      v-if="isopen"
      class="w-[300px] overflow-y-hidden hover:overflow-auto flex lg:hidden md:hidden flex-col dark:bg-[#121212] bg-[#f3f5f8] group fixed bottom-0 top-0 left-0 transition-all duration-300"
      style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6)"
    >
      <!-- all icons are here -->
      <div class="flex justify-between items-center">
        <div class="flex">
          <i
            class="fa-brands fa-stackpath text-[#206c93] text-[35px] pl-6 pr-3 pt-3 text-5 rounded-full"
          ></i>
          <p class="mt-5 text-[#465569] font-[500] ml-[20px] dark:text-white">ECHO</p>
        </div>
        <div class="mr-2">
          <i
            @click="$emit('toggle-this', !isopen)"
            class="fa-solid fa-xmark text-[20px] text-[#4b93b1] pr-4 mt-2 p-1 flex lg:hidden md:hidden"
          ></i>
        </div>
      </div>

      <div class="ml-8">
        <p class="mt-5 text-[#c6d0e0] text-[15px] font-[500]">COMPONENTS</p>
      </div>

      <!-- content -->
      <router-link
        :to="{ name: 'buttons' }"
        class="mx-2 rounded-lg mt-5 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-floppy-disk text-[18px] text-[#4b93b1] dark:text-white"></i>
          <p class="text-[15px] text-[#465569] font-[500] dark:text-white">BUTTONS</p>
        </div>
      </router-link>

      <router-link
        :to="{ name: 'inputGroup' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i
            class="fa-regular fa-keyboard text-[20px] text-[#4b93b1] dark:text-white"
          ></i>
          <p class="text-[15px] text-[#465569] font-[500] dark:text-white">INPUTGROUPS</p>
        </div>
      </router-link>

      <router-link
        :to="{ name: 'alert' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-triangle-exclamation text-[20px] text-[#4b93b1] dark:text-white"></i>
          <p class="text-[15px] text-[#465569] font-[500] dark:text-white">ALERT</p>
        </div>
      </router-link>

      <div class="w-full">
        <router-link
        :to="{ name: 'Dropdown' }"
        class="flex mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]" @click="showrouter = !showrouter">
         <div class="ml-5 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-brands fa-elementor text-[#4b93b1] text-[20px] dark:text-white"></i>
          <p
           
            class=" text-[15px] text-[#465569] font-[500] dark:text-white"
          >
            FORM ELEMENTS
          </p>
          
          
          <i class="fa-solid fa-chevron-down text-[#465569] text-[15px] dark:text-white "></i>
        </div>
          
         </router-link>


        <div v-if="showrouter" class="border-2 m-5 mr-2 border-[#e2e8f0]">
            <router-link
        :to="{ name: 'Dropdown' }"
        exact-active-class="dropdown-active"
        class="mx-2 rounded-lg hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class=" gap-3 mx-3 flex justify-start items-center">
          <i class="fa-solid fa-circle-down text-[18px]  text-[#4b93b1] dark:text-white "></i>
          <p
            
            class=" text-[15px]  text-[#465569] font-[500] link-text dark:text-white"
          >
            Dropdown
          </p>
          
        </div>
      </router-link>

          <router-link
        :to="{ name: 'RadioButton' }"
        exact-active-class="dropdown-active"
        class="mx-2 rounded-lg hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class=" gap-3 mx-3 flex justify-start items-center">
          <i class="far fa-circle text-[18px]  text-[#4b93b1] dark:text-white "></i>
          <p
            
            class=" text-[15px]  text-[#465569] font-[500] link-text  dark:text-white"
          >
            RadioButton
          </p>
          
        </div>
      </router-link>

        <router-link
        :to="{ name: 'TextArea' }"
        exact-active-class="dropdown-active"
        class="mx-2 rounded-lg hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class=" gap-3 mx-3 flex justify-start items-center">
          <i class="fa-regular fa-comment text-[18px]  text-[#4b93b1] dark:text-white "></i>
          <p
            
            class=" text-[15px]  text-[#465569] font-[500] link-text dark:text-white "
          >
            TextArea
          </p>
          
        </div>
      </router-link>



        <router-link
        :to="{ name: 'CheckBox' }"
        exact-active-class="dropdown-active"
        class="mx-2 rounded-lg hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class=" gap-3 mx-3 flex justify-start items-center">
          <i class="far fa-square text-[18px]  text-[#4b93b1] dark:text-white "></i>
          <p
            
            class=" text-[15px]  text-[#465569] font-[500] link-text dark:text-white "
          >
            CheckBox
          </p>
          
        </div>
      </router-link>


        <router-link
        :to="{ name: 'fileupload' }"
        exact-active-class="dropdown-active"
        class="mx-2 rounded-lg hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class=" gap-3 mx-3 flex justify-start items-center">
          <i class="fa-solid fa-upload text-[18px]  text-[#4b93b1] dark:text-white "></i>
          <p
            
            class=" text-[15px]  text-[#465569] font-[500] link-text dark:text-white "
          >
            fileupload
          </p>
          
        </div>
      </router-link>



        <router-link
        :to="{ name: 'SelectBox' }"
        exact-active-class="dropdown-active"
        class="mx-2 rounded-lg hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class=" gap-3 mx-3 flex justify-start items-center">
          <i class="fa-solid fa-chevron-down text-[18px]  text-[#4b93b1] dark:text-white"></i>
          <p
            
            class=" text-[15px]  text-[#465569] font-[500] link-text dark:text-white"
          >
            SelectBox
          </p>
          
        </div>
      </router-link>




          
        </div>
      </div>

      <router-link
        :to="{ name: 'tabs' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-table-columns text-[20px] text-[#4b93b1] dark:text-white"></i>
          <p class="text-[15px] text-[#465569] font-[500] dark:text-white">TABS</p>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'TableViews' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-table text-[#4b93b1] dark:text-white"></i>
          <p class="text-[15px] text-[#465569] font-[500] dark:text-white">Table</p>
        </div>
      </router-link>

      <router-link
        :to="{ name: 'AccordionView' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-chevron-down text-[#4b93b1] dark:text-white"></i>
          <p class="text-[15px] text-[#465569] font-[500] dark:text-white">Accordion</p>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'DatePicker' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-calendar text-[#4b93b1] dark:text-white"></i>
          <p class="text-[15px] text-[#465569] font-[500] dark:text-white">DatePicker</p>
        </div>
      </router-link>

      <router-link
        :to="{ name: 'ImageZoomView' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-magnifying-glass-minus text-[#4b93b1] dark:text-white"></i>
          <p class="text-[15px] text-[#465569] font-[500] dark:text-white">ImageZoomView</p>
        </div>
      </router-link>

      <router-link
        :to="{ name: 'RegularForm' }"
        class="mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-regular fa-clipboard text-[#4b93b1] dark:text-white"></i>
          <p class="text-[15px] text-[#465569] font-[500] dark:text-white">RegularForm</p>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  props: ["isopen"],

  data() {
    return {
      toggle: false,
      hover: false,
      showrouter: false,
    };
  },

  methods: {
    togglesidebar() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
}
/* in src/assets/tailwind.css or a global CSS file */
.dropdown-active .link-text {
  color: #0f0f0f;
}

.dark .dropdown-active .link-text {
  color: #fff;
}


</style>
