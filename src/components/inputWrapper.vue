so i wannna be able to change the colors of theinput 
  <template>
    <div>

      <!-- card one -->
     <baseCard>
    
       <div class="flex lg:flex-row md:flex-row  flex-col gap-4 b w-full ">
   <div class="flex flex-col w-full ">
     <Label label="Name" :labelClass="'text-blue-600 mb-5 mt-5'" id="text" :required="true"/>
     
      <Input
      title="Name"
      type="Name"
      v-model="text"
      :customClass="'p-4 focus:outline-none focus:ring border '"
      />
</div>

      <div class="flex flex-col  w-full  ">
        <Label label="Second Name" :labelClass="'text-blue-600 mb-5 mt-5'" id="text" :required="false"/>
     
      <Input
      title="Second Name"
      type="text"
      v-model="SecondName"
      :customClass="'p-4 focus:outline-none focus:ring border'"
      />

      </div>
      <div class="flex flex-col ">
        <Label label="Email" :labelClass="'text-blue-600 mb-5 mt-5'" id="text" :required="false"/>
     
      <Input
      title="Email"
      type="email"
      v-model="email"
      :customClass="'p-4 focus:outline-none focus:ring border'"
      />
      <p>{{ email }}</p>

      </div>
     
     
      <div class="flex flex-col ">
         <Label label="password" :labelClass="'text-blue-600 mb-5 mt-5'" id="text" :required="true"/>
     
      <Input
      title="password"
      type="password"
      v-model="password"
      :customClass="'p-4 focus:outline-none focus:ring border '"
      />
      <p>{{ password }}</p>
      </div>
    </div>
    
    
    </baseCard>
    
    <!-- card two -->


   <BaseCard class="">
   <div class="flex lg:flex-row md:flex-row flex-col gap-4 b w-full">
   <div class="flex flex-col w-full ">
     <Label label="Name" :labelClass="'text-green-600 mb-5 mt-5'" id="text" :required="true"/>
     
      <Input
      title="Name"
      type="Name"
      
      :customClass="'p-4 focus:outline-none focus:ring border bg-pink-200'"
      />
</div>

      <div class="flex flex-col  w-full  ">
        <Label label="Second Name" :labelClass="'text-green-600 mb-5 mt-5'" id="text" :required="false"/>
     
      <Input
      title="Second Name"
      type="text"
      
      :customClass="'p-4 focus:outline-none focus:ring border bg-pink-200'"
      />

      </div>
      <div class="flex flex-col ">
        <Label label="Email" :labelClass="'text-green-600 mb-5 mt-5'" id="text" :required="false"/>
     
      <Input
      title="Email"
      type="email"
      
      :customClass="'p-4 focus:outline-none focus:ring border bg-pink-200'"
      />

      </div>
     
     
      <div class="flex flex-col ">
         <Label label="password" :labelClass="'text-green-600 mb-5 mt-5'" id="text" :required="true"/>
     
      <Input
      title="password"
      type="password"
      
      :customClass="'p-4 focus:outline-none focus:ring border text-red-800 bg-pink-200'"
      />
      </div>
    </div>

  </BaseCard>

<!-- card three -->


   <BaseCard class="">
   <div class="flex lg:flex-row md:flex-row flex-col gap-4 b w-full">
   <div class="flex flex-col w-full ">
     <Label label="Name" :labelClass="'text-[#62a1c6] mb-5 mt-5'" id="text" :required="true"/>
     
      <Input
      title="Name"
      type="Name"
      :customClass="'p-4 focus:outline-none focus:ring border bg-[#d3e5ec]'"
      />
</div>

      <div class="flex flex-col  w-full  ">
        <Label label="Second Name" :labelClass="'text-[#62a1c6] mb-5 mt-5'" id="text" :required="false"/>
     
      <Input
      title="Second Name"
      type="text"
      :customClass="'p-4 focus:outline-none focus:ring border bg-[#d3e5ec]'"
      />

      </div>
      <div class="flex flex-col ">
        <Label label="Email" :labelClass="'text-[#62a1c6] mb-5 mt-5'" id="text" :required="false"/>
     
      <Input
      title="Email"
      type="email"
      :customClass="'p-4 focus:outline-none focus:ring border bg-[#d3e5ec]'"
      />

      </div>
     
     
      <div class="flex flex-col ">
         <Label label="password" :labelClass="'text-[#62a1c6] mb-5 mt-5'" id="text" :required="true"/>
     
      <Input
      title="password"
      type="password"
      :customClass="'p-4 focus:outline-none focus:ring border text-red-800 bg-[#d3e5ec]'"
      />
      </div>
    </div>

  </BaseCard>


    </div>

    
      
  </template>

  <script>
  import Input  from '../components/input-comp.vue'
    import Label  from './labelComp.vue'
    import BaseCard  from '../components/BaseCard.vue'


  export default {
    components:
    {Input,Label, BaseCard},
    data(){
      return{
        customClass:'',
        Name:'',
        SecondName:'',
        password:'',
        email:'',
        title: '',
        modelValue: '',
        type: null,
        labelClass:'',
        id:'',
        required:true,
        label:''


      }
    },
    emits: ['update:modelValue'],
  }

      
  </script>