<template>
  <img
    ref="zoomImage"
    src="https://via.placeholder.com/400"
    alt="Zoomable"
    class="w-64 h-64 cursor-pointer"
  />

</template>

<script>
import ImageZoomView from '@/views/ImageZoomView.vue';
import mediumZoom from 'medium-zoom';

export default {
    components:{
        ImageZoomView
    },
  mounted() {
    mediumZoom(this.$refs.zoomImage, {
      background: '#000',
    });
  },
};
</script>
