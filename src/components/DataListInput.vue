<template>
  <div class="w-full">
    <input
      :list="resolvedListId"
      :placeholder="placeholder"
      class="border rounded-lg p-2 w-full"
      :value="modelValue"
      @input="onInput"
    />

    <datalist :id="resolvedListId">
      <option
        v-for="(opt, i) in normalizedOptions"
        :key="i"
        :value="opt.value"
      >
        {{ opt.label }}
      </option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: "DataListInput",
  props: {
    options: { type: Array, default: () => [] },
    placeholder: { type: String, default: "" },
    modelValue: { type: String, default: "" },
    listId: { type: String, default: "" },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      uid: "",
    };
  },
  computed: {
    resolvedListId() {
      return this.listId || this.uid;
    },
    normalizedOptions() {
      return this.options.map((o) =>
        typeof o === "string"
          ? { value: o, label: o }
          : { value: o?.value ?? "", label: o?.label ?? o?.value ?? "" }
      );
    },
  },
  created() {
    this.uid = "dl-" + Math.random().toString(36).slice(2, 9);
  },
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
