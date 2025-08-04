  <template>
    <div class="lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px] mr-[30px] ml-[30px] z-[8]">
      <p class="text-white mr-[80px] lg:flex md:hidden hidden"><strong>Buttons</strong> . Explore the versatility of our Buttons component for enhancing user interactions on your application.
</p>


  


    </div>





    
  

  </template>

  <script>
  import AppButton  from '@/components/AppButton.vue'
  import BaseCard  from '@/components/BaseCard.vue'

  export default {
    components:
    {AppButton, BaseCard},
    data(){
      return{
        title:'',
        customClass:'',
        disabled:false,
        }
    }

    

  };
  </script>