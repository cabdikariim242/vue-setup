<!-- src/views/TomSelectView.vue -->
<template>
    <div
        class=" w-full lg:mt-[202px] md:mt-[102px] mt-[170px] lg:ml-[150px] md:ml-[150px] mr-[30px] ml-[30px] z-[8] 2xl:ml-[385px]  2xl:mr-[270px]">
        <BaseCard>
            <h1 class="text-2xl mt-4 ml-8 text-gray-900 dark:text-gray-100">DIFERENT ATOM SELECTORS</h1>
            <hr class="mt-[20px] mb-4 border-gray-300 dark:border-gray-600">
            <h2 class="px-4 mb-4 text-xl text-gray-800 dark:text-gray-200">Examples of tom selector</h2>
            <p class="px-5 text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad incidunt inventore aliquam dignissimos.
                Deleniti repellat praesentium ad ratione enim aperiam!
            </p>

            <div class="p-10">
                <h2 class="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">1. Basic Select</h2>
                <h2 class="mb-4 text-gray-700 dark:text-gray-300">Converts a standard HTML select element into a modern,
                    searchable dropdown.</h2>
                <select id="basic" class="tom-select w-full">
                    <option value="">Choose fruit</option>
                    <option>Apple</option>
                    <option>Banana</option>
                    <option>Mango</option>
                </select>
            </div>

            <div class="p-10">
                <h2 class="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">2. Multi Select</h2>
                <h3 class="mb-4 text-gray-700 dark:text-gray-300">Allows selecting multiple options and optionally
                    creating new tags dynamically.</h3>
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
                <h2 class="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">3. Tagging Select</h2>
                <h3 class="mb-4 text-gray-700 dark:text-gray-300">Lets users type and add new items not originally
                    listed in the options.</h3>
                <select id="tag" multiple class="tom-select w-full"></select>
            </div>

            <div class="p-10">
                <h2 class="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">4. Disabled Options</h2>
                <h3 class="mb-4 text-gray-700 dark:text-gray-300">Supports categorized options using group headers
                    inside the dropdown.</h3>
                <select id="disabled" class="tom-select w-full mb-8">
                    <option value="1">Enabled</option>
                    <option value="2" disabled>Disabled</option>
                    <option value="3" enabled>Mouse</option>
                    <option value="3">Ma Dooran Kartid</option>
                    <option value="3" enabled>Waa dooran kartaa</option>
                </select>
            </div>

                     <div class="p-10">
                <h2 class="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">5. Disabled Select</h2>
                <h2 class="mb-4 text-gray-700 dark:text-gray-300">Converts a standard HTML select element into a modern,
                    searchable dropdown.</h2>
                <select id="disabledTwo" disabled  class=" tom-select w-full">
                    <option value="">this input is disabled</option>
                    <option>Apple</option>
                    <option>Banana</option>
                    <option>Mango</option>
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
    components: {
        BaseCard
    },
    mounted() {
        new TomSelect('#basic')
        new TomSelect('#multi', { plugins: ['remove_button'] })
        new TomSelect('#tag', {
            plugins: ['remove_button'],
            create: true,
            persist: false,
            placeholder: "Add tags..."
        }),
        new TomSelect('#disabled')
        new TomSelect('#disabledTwo')
    }
}
</script>
