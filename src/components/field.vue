<template>
    <fieldset class="border p-4 mb-4">
        <legend class="text-xl">
          {{ text }}
        </legend>


       <slot></slot>
      </fieldset>
</template>

<script>
export default {
      props: {
    text: { type: String, default: "" }
  }


}
</script>

<style>

</style>