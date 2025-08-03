<template>
      <div
    class="flex flex-col w-full p-6 mt-[322px] md:ml-[150px] ml-[10px] lg:ml-[150px] z-[8] lg:mr-[150px] md:mr-[150px] mr-[10px]">
    <BaseCard class=" bg-white rounded-2xl shadow-lg">
        <h1 class="text-left text-2xl mt-4 mb-4 ml-4">Zoom Images</h1>
        <hr>
        <h4 class="text-xl m-6">Image zoom lets users view pictures in greater detail by hovering or tapping. This feature enhances clarity, highlights fine elements, and improves engagement—ideal for product images, galleries, or art. It ensures a seamless, interactive, and professional viewing experience.</h4>

    <p class="text-2xl mt-4 ml-6">
      Zoom in on images with precision and clarity using our built-in image zoom feature.
      Whether you're viewing product details or artwork, every pixel comes to life when you hover or tap.
    </p>

    <p class="text-2xl mt-4 ml-6">
      Our image zoom allows users to explore visuals in high resolution effortlessly.
      Just hover over the image or pinch on mobile to get a closer look without losing quality.
    </p>
      <div class="overflow-hidden w-64 h-64 cursor-zoom-in mt-4 mb-4" @click="toggleZoom">
    <img
      :class="zoomed ? 'scale-150' : 'scale-90'"
      src="../assets/pexels.png"
      alt="Zoomable"
      class="transition-transform duration-500 object-cover w-full h-full  ml-6"
    />
    </div>

    <p class="text-2xl mt-4 ml-6">
      Give your users the power to inspect images like never before.
      With smooth zoom transitions and responsive design, every detail is easy to explore and navigate.
    </p>

    <p class="text-2xl mt-4 ml-6 mb-6">
      Enhance user experience by adding interactive zoom capabilities to your images.
      It’s perfect for showcasing fine textures, small text, or intricate designs.
    </p>

  </BaseCard>
  <!-- next two -->

    <BaseCard class=" bg-white rounded-2xl shadow-lg mt-14">
        <h1 class="text-left text-2xl mt-4 mb-4 ml-4">Image Full Screen</h1>
        <hr>
        <h4 class="text-xl m-6">Image zoom lets users view pictures in greater detail by hovering or tapping. This feature enhances clarity, highlights fine elements, and improves engagement—ideal for product images, galleries, or art. It ensures a seamless, interactive, and professional viewing experience.</h4>

    <p class="text-2xl mt-4 ml-6">
      Zoom in on images with precision and clarity using our built-in image zoom feature.
      Whether you're viewing product details or artwork, every pixel comes to life when you hover or tap.
    </p>

    <p class="text-2xl mt-4 ml-6">
      Our image zoom allows users to explore visuals in high resolution effortlessly.
      Just hover over the image or pinch on mobile to get a closer look without losing quality.
    </p>
<div>
    <!-- Thumbnail -->
    <img
      :src="imageSrc"
      @click="openZoom"
      class="cursor-zoom-in w-64 h-64 object-cover-center rounded ml-6 mt-4 mb-4"
      alt="Zoomable image"
    />

    <!-- Fullscreen Zoom Modal -->
    <div
      v-if="isZoomed"
      class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      @click="closeZoom"
    >
      <img
        :src="imageSrc"
        class="max-w-full max-h-full transition-transform duration-300 transform scale-100"
        alt="Zoomed image"
      />
      <button
        class="absolute top-4 right-4 text-white text-3xl"
        @click.stop="closeZoom"
      >
        &times;
      </button>
    </div>
  </div>

    <p class="text-2xl mt-4 ml-6">
      Give your users the power to inspect images like never before.
      With smooth zoom transitions and responsive design, every detail is easy to explore and navigate.
    </p>

    <p class="text-2xl mt-4 ml-6 mb-8">
      Enhance user experience by adding interactive zoom capabilities to your images.
      It’s perfect for showcasing fine textures, small text, or intricate designs.
    </p>

  </BaseCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoomed: false,
      isZoomed: false,
      imageSrc: require('@/assets/pexels.png'),
    };
  },
  methods: {
    toggleZoom() {
      this.zoomed = !this.zoomed;
    },
    openZoom() {
      this.isZoomed = true;
    },
    closeZoom() {
      this.isZoomed = false;
    },
  },
};
</script>
