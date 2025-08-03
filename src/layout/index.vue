.<template>
  <div class="flex justify-between flex-col gap-[20px]">
    <div class="flex gap-32 justify-between ">
       <sidebar :isopen="isopen"  @toggle-this="toggle"/>
       <navbar  :isopen="isopen" @toggle-this="toggle"/>
        
    </div>
    <div class="">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from './sidebar.vue'
import navbar from './navbar.vue'
export default {
  components: { sidebar,navbar },
  data(){
    return{
       isopen:true
    }
   
  },
  methods:{
    toggle(){
      this.isopen = !this.isopen
    }
  }

}
</script>

<style>

</style>