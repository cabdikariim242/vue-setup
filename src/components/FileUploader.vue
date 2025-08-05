<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow">
    <h2 class="text-lg font-bold mb-4">Upload File (.jpg, .png, .pdf)</h2>

    <input
      type="file"
      @change="onFileSelect"
      accept=".jpg,.jpeg,.png,.pdf"
      class="block w-full text-sm text-gray-700
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-50 file:text-blue-700
        hover:file:bg-blue-100  file:cursor-pointer"
    />

    <div v-if="file" class="mt-4 space-y-2">
      <p><strong>Name:</strong> {{ file.name }}</p>
      <p><strong>Type:</strong> {{ file.type }}</p>
      <p><strong>Size:</strong> {{ (file.size / 1024).toFixed(2) }} KB</p>

      <img
        v-if="isImage"
        :src="preview"
        alt="Preview"
        class="mt-2 rounded border max-h-64 w-full object-contain"
      />

      <p v-else class="text-sm text-red-600">PDF preview not available.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileUploader',
  data() {
    return {
      file: null,
      preview: null,
    }
  },
  computed: {
    isImage() {
      return this.file && this.file.type.startsWith('image/')
    }
  },
  methods: {
    onFileSelect(event) {
      const selected = event.target.files[0]
      if (!selected) return

      this.file = selected

      if (this.isImage) {
        this.preview = URL.createObjectURL(selected)
      } else {
        this.preview = null
      }
    }
  }
}
</script>
