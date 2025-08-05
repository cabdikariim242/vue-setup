<template>
  <div
    class="flex gap-5 w-full lg:mt-[100px] md:mt-[102px] mt-[150px] lg:ml-[125px] md:ml-[150px] mr-[30px] ml-[30px] z-[8]"
  >
    <div class="mr-60">
      <!-- first div /card -->
      <div class="w-full rounded-xl">
        <h1>
          <strong class="text-white">Regular Form</strong>
          <span class="text-[rgba(255,255,255,.8)]">
            • Unlock the potential of our Form component for creating
            user-friendly and interactive web forms effortlessly.
          </span>
        </h1>
        <BaseCard id="one">
          <h1
            class="pb-4 mb-4 font-bold text-[#476569] border-b border-gray-500 border-dashed"
          >
            input
          </h1>
          <p class="text-[#476569] mb-4">
            Input fields are a fundamental part of web forms and allow users to
            provide information or interact with your application. This section
            covers how to use input components in your web application and
            provides examples of different input styles.
          </p>
          <p class="text-[#64748b]">Example code / preview</p>
          <div class="border border-gray-300 rounded-md p-3 mt-4">
            <!-- first input -->
            <div>
              <Label
                label="Input text"
                :labelClass="'text-[#4b586c] font-[400]'"
                id="text"
                :required="false"
              />
              <Input
                title="Input text"
                type="text"
                :customClass="'w-full pl-3 p-1 my-3 rounded pl-1 focus:outline-none focus:ring border border-gray-300 text-[#4b586c] '"
              />
            </div>
            <!-- second input  -->
            <div>
              <Label
                label="Rounded"
                :labelClass="'text-[#4b586c]  font-[400]  mt-5'"
                id="text"
                :required="false"
              />
              <Input
                title="Rounded"
                type="text"
                :customClass="'w-full pl-3 rounded-3xl py-1  mt-2 rounded pl-1 my-3 focus:outline-none focus:ring border border-gray-300 text-[#4b586c] '"
              />
            </div>
            <!-- third input -->
            <div>
              <Label
                label="With Help"
                :labelClass="'text-[#4b586c] font-[400] mb-5 mt-5'"
                id="text"
                :required="false"
              />
              <Input
                title="With Help"
                type="text"
                :customClass="'w-full pl-3 p-1 rounded pl-1 my-3 focus:outline-none focus:ring border border-gray-300 text-[#4b586c] '"
              />
              <p class="text-[14px] text-[#476569] mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <!-- forth input -->
            <div>
              <Label
                label="Password"
                :labelClass="'text-[#4b586c] font-[400] mb-5 mt-5'"
                id="Password"
                :required="false"
              />
              <Input
                title="Password"
                type="Password"
                :customClass="'w-full pl-3 p-1 rounded pl-1 my-3 focus:outline-none focus:ring border border-gray-300 text-[#4b586c] '"
              />
            </div>
            <!-- fivth input -->
            <div>
              <Label
                label="Disabled"
                :labelClass="'text-[#4b586c] font-[400] mb-5 mt-5'"
                id="text"
                :required="false"
              />
              <Input
                :disabled="true"
                title="Disabled"
                type="text"
                :customClass="'w-full cursor-not-allowed pl-3 p-1 rounded pl-1 my-3 focus:outline-none focus:ring border border-gray-300 text-[#4b586c] bg-[#f1f5f9]'"
              />
            </div>
          </div>
          <p class="mt-3 text-[#475569]">
            By using the `Input` component and customizing its attributes, you
            can create versatile input fields that meet your application's
            requirements and provide a seamless user experience. Be sure to
            choose the appropriate input type and validation rules based on your
            specific use case.
          </p>
        </BaseCard>
      </div>
      <!-- second div /card -->
      <div class="w-full rounded-xl">
        <BaseCard id="two">
          <h1
            class="pb-4 mb-4 font-bold text-[#476569] border-b border-gray-500 border-dashed"
          >
            Input Sizing
          </h1>
          <p class="text-[#476569] mb-4">
            Input sizing is an important aspect of user interface design. It
            allows you to control the dimensions of input fields to ensure they
            fit well within your application's layout. This section covers how
            to adjust the size of input components and provides examples of
            different sizing options.
          </p>
          <p class="text-[#64748b]">Example code / preview</p>
          <div class="border border-gray-300 rounded-md p-3 mt-4">
            <!-- first input -->
            <div>
              <Input
                title=".form-control-lg"
                type="text"
                :customClass="'w-full pl-3 p-1 my-3 text-[20px] font-[500] rounded pl-2  focus:outline-none focus:ring border border-gray-300 text-[#4b586c] '"
              />
            </div>
            <!-- second input  -->
            <div>
              <Input
                title="Default Input "
                type="text"
                :customClass="'w-full pl-3 py-1  mt-2 rounded pl-1 my-3 focus:outline-none focus:ring border border-gray-300 text-[#4b586c] '"
              />
            </div>
            <!-- third input -->
            <div>
              <Input
                title=".form-control-sm"
                type="text"
                :customClass="'w-full pl-3 text-[14px] p-1 rounded pl-1 my-3 focus:outline-none focus:ring border border-gray-300 text-[#4b586c] '"
              />
            </div>
          </div>
          <p class="text-[14px] text-[#476569] mt-3">
            Controlling the size of input components is essential for achieving
            a visually appealing and user-friendly design. By using the `Input`
            component and specifying the desired size, you can ensure that input
            fields match your application's layout and styling requirements.
            Experiment with different sizes to find the one that best fits your
            design goals and provides an optimal user experience.
          </p>
        </BaseCard>
      </div>
      <!-- third div /card -->

      <div class="w-full rounded-xl">
        <BaseCard id="three">
          <h1
            class="pb-4 mb-4 font-bold text-[#476569] border-b border-gray-500 border-dashed"
          >
            Input Groups
          </h1>
          <p class="text-[#476569] mb-4">
            Input groups are a useful UI element for combining form inputs with
            additional text or icons. They are often used to create visually
            integrated and contextually relevant input fields. This section
            covers how to create input groups using the `InputGroup` component
            and provides examples of various input group configurations.
          </p>
          <p class="text-[#64748b]">Example code / preview</p>
          <div class="border border-gray-300 rounded-md p-3 mt-4">
            <!-- first input -->
            <div class="flex items-center">
              
              <Input
                title="@"
                :disabled="true"
                type="text"
                :customClass="'w-10 h-[34px] mr-[-1px] text-center  font-bold border border-gray-300 bg-[#f1f5f9] '"
              />
              <Input
                title=".form-control-lg"
                type="text"
                :customClass="'w-full pl-3 p-1 my-3  font-[500] rounded pl-2  focus:outline-none focus:ring border border-gray-300 text-[#4b586c] '"
              />
            </div>
             <!-- second input  -->
            <div class="flex items-center">
              <Input
                title="Price"
                type="text"
                :customClass="'w-full pl-3 p-1 my-3  font-[500] rounded pl-2  focus:outline-none focus:ring border border-gray-300 text-[#4b586c] '"
              />
              <Input
                title=".00"
                :disabled="true"
                type="text"
                :customClass="'w-10 h-[34px] ml-[-1px] text-center  font-bold border border-gray-300 bg-[#f1f5f9] '"
              />
            </div>
            <!-- third input -->
            <div class="flex items-center">
              <Input
                title="@"
                :disabled="true"
                type="text"
                :customClass="'w-10 h-[34px] mr-[-1px] text-center  font-bold border border-gray-300 bg-[#f1f5f9] '"
              />
              <Input
                title="Price"
                type="text"
                :customClass="'w-full pl-3 p-1 my-3  font-[500] rounded pl-2  focus:outline-none focus:ring-4  border border-gray-300 text-[#4b586c] '"
              />
              <Input
                title=".00"
                :disabled="true"
                type="text"
                :customClass="'w-10 h-[34px] ml-[-1px] text-center  font-bold border border-gray-300 bg-[#f1f5f9] '"
              />
            </div>
           
            
            
          </div>
          <p class="text-[14px] text-[#476569] mt-3">
            Input groups are a versatile tool for enhancing the usability and
            visual appeal of your forms. Whether you need to add icons, labels,
            or supplementary text to your input fields, the `InputGroup`
            component allows you to create cohesive and informative input
            groups. Experiment with different configurations to find the best
            way to present your form elements and improve the user experience.
          </p>
        </BaseCard>
      </div>
    </div>

    <!-- second card -->

    <div
      :class="[
        'transition-colors duration-300',
        isScrollingUp
          ? 'bg-[#e7eaee23] text-white top-[9.5rem]'
          : 'bg-gray-300 top-[7rem] transtiton-all duration-300 text-[#929daa]',
          z
      ]"
      class="fixed w-[15rem] mr-5 right-0 h-60 rounded-xl shadow-lg p-3 flex flex-col"
    >
      <a href="#one" class="px-3 font-bold text-[16px]">input</a>
      <a href="#two" class="p-3 font-bold text-[16px]">input Sizing</a>
      <a href="#three" class="p-3 font-bold text-[16px]">Input Groups</a>
    </div>
  </div>
  <input-comp />
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import Input from "@/components/input-comp.vue";
import Label from "@/components/labelComp.vue";

export default {
  components: { BaseCard, Input, Label },
  data() {
    return {
      customClass: "",
      Name: "",
      SecondName: "",
      password: "",
      email: "",
      title: "",
      modelValue: "",
      type: null,
      labelClass: "",
      id: "",
      required: true,
      label: "",
      disabled: false,
      isScrollingUp: true,
      lastScrollY: window.scrollY,
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
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

class="fixed w-[15rem] mr-5 top-[9.5rem] right-0 h-60 rounded-xl bg-white/10
lg:bg-fuchsia-500 shadow-lg p-3 flex flex-col text-white"
