<template>
  <div
    ref="root"
    class="relative font-sans"
    :class="[{ 'opacity-60 pointer-events-none': disabled }]"
    @keydown.stop.prevent="onKeydown"
  >
    <!-- Control -->
    <div
      class="min-h-10 w-full select-none cursor-pointer rounded-xl border border-gray-300 bg-white px-2.5 py-1.5 pr-10 flex items-center gap-2 flex-wrap focus:outline-none focus:ring-4 focus:ring-indigo-200"
      role="combobox"
      :aria-expanded="isOpen ? 'true' : 'false'"
      :aria-disabled="disabled ? 'true' : 'false'"
      tabindex="0"
      @click="toggleOpen"
    >
      <!-- Multiple: tags -->
      <template v-if="multiple">
        <span
          v-for="tag in selectedDisplay"
          :key="tag.valueKey + '-tag'"
          class="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 text-sm px-2 py-0.5"
        >
          {{ tag.label }}
          <button
            type="button"
            class="leading-none text-indigo-700/80 hover:text-indigo-900"
            @click.stop="removeTag(tag)"
          >
            ×
          </button>
        </span>
        <span v-if="!hasValue" class="text-gray-400">{{ placeholder }}</span>
      </template>

      <!-- Single -->
      <span v-else class="text-gray-900">
        <span v-if="selectedDisplay[0]">{{ selectedDisplay[0].label }}</span>
        <span v-else class="text-gray-400">{{ placeholder }}</span>
      </span>

      <!-- Clear -->
      <button
        v-if="clearable && !disabled && hasValue"
        class="absolute right-8 top-1/2 -translate-y-1/2 text-lg leading-none text-gray-400 hover:text-gray-600"
        type="button"
        aria-label="Clear"
        @click.stop="clearSelection"
      >
        ×
      </button>

      <!-- Caret -->
      <span class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">▾</span>
    </div>

    <!-- Dropdown -->
    <div v-if="isOpen" class="absolute left-0 right-0 z-20 mt-1 rounded-xl border border-gray-200 bg-white shadow-xl">
      <!-- Search -->
      <div class="p-2 border-b border-gray-100">
        <input
          ref="searchInput"
          type="text"
          v-model="search"
          class="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-4 focus:ring-indigo-100"
          :placeholder="searchPlaceholder"
          @keydown.stop
        />
      </div>

      <ul class="max-h-60 overflow-auto py-1" role="listbox">
        <li
          v-for="(opt, idx) in filteredOptions"
          :key="opt.valueKey"
          role="option"
          :aria-selected="isSelected(opt) ? 'true' : 'false'"
          @mouseenter="highlightedIndex = idx"
          @mousedown.prevent="onOptionClick(opt)"
          class="flex items-center justify-between px-3 py-2 cursor-pointer"
          :class="[
            isSelected(opt) ? 'font-semibold text-gray-900' : 'text-gray-800',
            highlightedIndex === idx ? 'bg-indigo-50' : '',
            opt.disabled ? 'text-gray-400 cursor-not-allowed' : ''
          ]"
        >
          <span>{{ opt.label }}</span>
          <span v-if="isSelected(opt)" class="ml-2">✓</span>
        </li>

        <li v-if="filteredOptions.length === 0" class="px-3 py-2 text-gray-500">
          {{ noResultsText }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSelectSearch",
  props: {
    modelValue: { type: [String, Number, Object, Array, Boolean, null], default: null },
    options: { type: Array, required: true },  // ['A'] ama [{label, value, disabled?}]
    optionLabel: { type: String, default: "label" },
    optionValue: { type: String, default: "value" },
    placeholder: { type: String, default: "Please select" },
    searchPlaceholder: { type: String, default: "Search..." },
    multiple: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true },
    noResultsText: { type: String, default: "No results" }
  },
  emits: ["update:modelValue", "change", "open", "close", "search"],

  data() {
    return {
      isOpen: false,
      search: "",
      highlightedIndex: 0
    };
  },

  computed: {
    normalized() {
      return this.options.map((o) => {
        if (["string", "number", "boolean"].includes(typeof o)) {
          return { label: String(o), valueKey: String(o), disabled: false, _raw: o };
        }
        const label = o?.[this.optionLabel];
        const value = o?.[this.optionValue];
        return {
          label: String(label ?? ""),
          valueKey: String(value ?? ""),
          disabled: !!o?.disabled,
          _raw: o
        };
      });
    },

    filteredOptions() {
      const q = this.search.trim().toLowerCase();
      const out = q ? this.normalized.filter(o => o.label.toLowerCase().includes(q)) : this.normalized.slice();
      if (this.highlightedIndex >= out.length) this.highlightedIndex = out.length - 1;
      if (this.highlightedIndex < 0) this.highlightedIndex = 0;
      this.$emit("search", q);
      return out;
    },

    selectedValueKeys() {
      if (this.multiple) {
        const arr = Array.isArray(this.modelValue) ? this.modelValue : [];
        return new Set(arr.map(v => String(this.toValueKey(v))));
      } else {
        return new Set(
          this.modelValue == null || this.modelValue === "" ? [] : [String(this.toValueKey(this.modelValue))]
        );
      }
    },

    selectedDisplay() {
      return this.normalized.filter(opt => this.isSelected(opt));
    },

    hasValue() {
      return this.selectedDisplay.length > 0;
    }
  },

  methods: {
    // map model value -> key
    toValueKey(val) {
      if (val && typeof val === "object" && this.optionValue in val) return String(val[this.optionValue]);
      return String(val);
    },
    // key -> original value
    fromValueKey(key) {
      const m = this.normalized.find(o => o.valueKey === String(key));
      if (!m) return null;
      const first = this.options[0];
      const usingObjects = first && typeof first === "object";
      return usingObjects ? m._raw[this.optionValue] : m._raw;
    },

    isSelected(opt) {
      return this.selectedValueKeys.has(opt.valueKey);
    },

    open() {
      if (this.disabled) return;
      this.isOpen = true;
      this.$emit("open");
      this.$nextTick(() => {
        this.$refs.searchInput && this.$refs.searchInput.focus();
      });
    },
    close() {
      this.isOpen = false;
      this.$emit("close");
      this.search = "";
      this.highlightedIndex = 0;
    },
    toggleOpen() {
      this.isOpen ? this.close() : this.open();
    },

    commitSingle(opt) {
      if (opt.disabled) return;
      const v = this.fromValueKey(opt.valueKey);
      this.$emit("update:modelValue", v);
      this.$emit("change", v);
      this.close();
    },
    commitMultiple(opt) {
      if (opt.disabled) return;
      const current = Array.isArray(this.modelValue) ? this.modelValue.slice() : [];
      const key = opt.valueKey;
      const idx = current.findIndex(v => String(this.toValueKey(v)) === key);
      if (idx >= 0) current.splice(idx, 1);
      else current.push(this.fromValueKey(key));
      this.$emit("update:modelValue", current);
      this.$emit("change", current);
    },
    onOptionClick(opt) {
      this.multiple ? this.commitMultiple(opt) : this.commitSingle(opt);
    },
    removeTag(tag) {
      if (!this.multiple) return;
      const current = Array.isArray(this.modelValue) ? this.modelValue.slice() : [];
      const next = current.filter(v => String(this.toValueKey(v)) !== tag.valueKey);
      this.$emit("update:modelValue", next);
      this.$emit("change", next);
    },
    clearSelection() {
      this.$emit("update:modelValue", this.multiple ? [] : null);
      this.$emit("change", this.multiple ? [] : null);
    },

    onKeydown(e) {
      if (this.disabled) return;
      const len = this.filteredOptions.length;

      if (e.key === "Enter") {
        if (!this.isOpen) return this.open();
        if (!len) return;
        const opt = this.filteredOptions[this.highlightedIndex];
        if (opt) this.multiple ? this.commitMultiple(opt) : this.commitSingle(opt);
      } else if (e.key === "ArrowDown") {
        if (!this.isOpen) this.open();
        this.highlightedIndex = (this.highlightedIndex + 1) % Math.max(len, 1);
      } else if (e.key === "ArrowUp") {
        if (!this.isOpen) this.open();
        this.highlightedIndex = (this.highlightedIndex - 1 + Math.max(len, 1)) % Math.max(len, 1);
      } else if (e.key === "Escape") {
        if (this.isOpen) this.close();
      } else if (e.key === "Backspace" && this.multiple && !this.search && this.hasValue) {
        const last = this.selectedDisplay[this.selectedDisplay.length - 1];
        if (last) this.removeTag(last);
      }
    },

    onDocClick(ev) {
      const root = this.$refs.root;
      if (root && !root.contains(ev.target)) this.close();
    }
  },

  mounted() {
    document.addEventListener("mousedown", this.onDocClick);
  },
  beforeUnmount() {
    document.removeEventListener("mousedown", this.onDocClick);
  }
};
</script>
