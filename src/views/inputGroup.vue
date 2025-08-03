    <template>
    <div class="mt-[230px] lg:ml-[150px] md:ml-[150px] mr-4 ml-[5px] z-[9]  " >
      
     
     <inputWrapper v-model="modelValue" :customClass="'border '" :labelClass="''" :required="true" id="text" type="text" title="this not " label="this is label" />
     
     
      </div>
      
    </template>

    <script>  
    import inputWrapper  from '@/components/inputWrapper.vue'


    export default {
      components:
      {inputWrapper},
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
      }
    }

        
    </script>