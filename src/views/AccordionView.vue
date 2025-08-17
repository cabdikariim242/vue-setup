<template>
    <div
        class=" w-full lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px] mr-[30px] ml-[30px] z-[8] 2xl:ml-[385px]  2xl:mr-[270px]">
      <p class="text-white mr-[80px] lg:flex md:hidden hidden"><strong>Accordion</strong>   .  Explore our accordion component, effortless content organization and presentation!</p>

     <BaseCard>
  <div class="space-y-4">
    <h1 class="font-bold ml-[10px]">Basic Accordion</h1>
    <Accordion title="Essentials: Working with SSL Certificates, Private Keys OpenSSL Essentials: Working with SSL Certificates, Private Keys OpenSSL">
      <p class="dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
      </p>
    </Accordion>

    <Accordion title="Essentials: Working with SSL Certificates, Private Keys OpenSSL Essentials: Working with SSL Certificates, Private Keys OpenSSL">
      <p class="dark:text-white">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...      </p>
    </Accordion>
  </div>

  </BaseCard>




   <BaseCard>
  <div class="space-y-4">
    <h1 class="font-bold ml-[10px]">Boxed Accordion</h1>
    <Accordion title="Essentials: Working with SSL Certificates, Private Keys OpenSSL Essentials: Working with SSL Certificates, Private Keys OpenSSL" :bordered="true">
      <p class="dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
      </p>
    </Accordion>

    <Accordion title="Essentials: Working with SSL Certificates, Private Keys OpenSSL Essentials: Working with SSL Certificates, Private Keys OpenSSL" :bordered="true">
      <p class="dark:text-white">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic eligendi est
        repellendus cum modi velit ducimus corporis commodi sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit...      </p>
    </Accordion>
  </div>

  </BaseCard>
   </div>
</template>

<script>
import Accordion from '@/components/acordian.vue'
  import BaseCard  from '@/components/BaseCard.vue'

export default {
  name: "AccordionView",
  components: {
    Accordion,
    BaseCard,
  },
};
</script>
