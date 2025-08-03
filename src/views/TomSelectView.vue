<!-- src/views/TomSelectView.vue -->
<template>
  <div
    class="flex flex-col w-full p-6 mt-[322px] md:ml-[150px] ml-[10px] lg:ml-[150px] z-[8] lg:mr-[150px] md:mr-[150px] mr-[10px]">
    <BaseCard class=" bg-white rounded-2xl shadow-lg">
        <h1 class="text-2xl mt-4 ml-8 ">DIFERENT ATOM SELECTORS</h1>
        <hr class="mt-[20px] mb-4">
        <h2 class="px-4 mb-4 text-xl">Examples of tom selector</h2>
        <p class="px-5"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad incidunt inventore aliquam dignissimos. Deleniti repellat praesentium ad ratione enim aperiam!</p>
    <div class="p-10">
      <h2 class="text-lg font-bold mb-2">1. Basic Select</h2>
      <h2 class="mb-4">Converts a standard HTML select element into a modern, searchable dropdown.</h2>
      <select id="basic" class="tom-select w-full">
        <option value="">Choose fruit</option>
        <option>Apple</option>
        <option>Banana</option>
        <option>Mango</option>
      </select>
    </div>

    <div class="p-10">
      <h2 class="text-lg font-bold mb-2">2. Multi Select</h2>
      <h3 class="mb-4">Allows selecting multiple options and optionally creating new tags dynamically.</h3>
      <select id="multi" multiple class="tom-select w-full" placeholder="choose multiple">
        <option>HTML</option>
        <option>CSS</option>
        <option>JavaScript</option>
        <option>Tailwind Css</option>
        <option>Vue js</option>
        <option>Php</option>
        <option>laravel</option>
        <option>Node js</option>
        
      </select>
    </div>

    <div class="p-10">
      <h2 class="text-lg font-bold mb-2">3. Tagging Select</h2>
      <h3 class="mb-4">Lets users type and add new items not originally listed in the options.</h3>
      <select id="tag" multiple class="tom-select w-full"></select>
    </div>

    <div class="p-10">
      <h2 class="text-lg font-bold mb-2">4. Ajax Select</h2>
      <h3 class="mb-4">Loads options from a remote API or server as the user types in the input field.</h3>
      <select id="ajax" class="tom-select w-full" placeholder="loading"></select>
    </div>

    <div class="p-10">
      <h2 class="text-lg font-bold mb-2">5. Disabled Options</h2>
      <h3 class="mb-4">Supports categorized options using group headers inside the dropdown.</h3>
      <select id="disabled" class="tom-select w-full mb-8">
        <option value="1">Enabled</option>
        <option value="2" disabled>Disabled</option>
        <option value="3" enabled>Mouse</option>
        <option value="3">Ma Dooran Kartid</option>
        <option value="3" enabled>Waa dooran kartaa</option>
      </select>
    </div>
    </BaseCard>
  </div>
</template>

<script>
import TomSelect from 'tom-select'
import 'tom-select/dist/css/tom-select.css'
import BaseCard from '@/components/BaseCard.vue'

export default {
  mounted() {
    new TomSelect('#basic')
    new TomSelect('#multi', { plugins: ['remove_button'] })
    new TomSelect('#tag', {
      plugins: ['remove_button'],
      create: true,
      persist: false,
      placeholder: "Add tags..."
    })
     new TomSelect('#ajax', {
      valueField: 'id',        // key laga dhigo value-ga option-ka
      labelField: 'name',      // waxa user-ku arko
      searchField: 'name',     // goorta la raadinayo

      load: function(query, callback) {
        if (!query.length) return callback()  // haddii query empty yahay
        fetch(`https://jsonplaceholder.typicode.com/users?q=${encodeURIComponent(query)}`)
          .then(res => res.json())
          .then(json => callback(json))
          .catch(() => callback())
      }
    })
    new TomSelect('#disabled')
  }
}
</script>
