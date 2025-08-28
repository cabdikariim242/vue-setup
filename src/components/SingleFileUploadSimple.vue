<template>
  <div>
    <!-- Dooro hal fayl -->
    <input type="file" :accept="accept" @change="onPick" />

    <!-- Muujinta magaca faylka -->
    <p v-if="file"><strong>{{ file.name }}</strong> ({{ (file.size/1024/1024).toFixed(2) }} MB)</p>

    <!-- Badhamo fudud -->
    <button @click="upload" :disabled="!file || uploading">
      {{ uploading ? 'Uploading…' : 'Upload' }}
    </button>

    <!-- Fariin khalad -->
    <p v-if="error" style="color:#b91c1c">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/*
  Sharaxaad (Somali):
  - accept: nooca faylasha la oggol yahay (tusaale "image/*,.pdf")
  - endpoint: URL-ka aad u dirtid faylka
  - maxSizeMB: xaddiga ugu badan ee faylka
*/
const props = defineProps({
  accept: { type: String, default: '' },
  endpoint: { type: String, default: '/api/upload' },
  maxSizeMB: { type: Number, default: 10 }
})

const file = ref(null)
const error = ref('')
const uploading = ref(false)

function onPick (e) {
  const f = e.target.files?.[0]
  error.value = ''
  if (!f) return
  // Hubi cabbirka faylka
  if (f.size > props.maxSizeMB * 1024 * 1024) {
    error.value = `Faylka wuu ka weyn yahay ${props.maxSizeMB}MB`
    return
  }
  file.value = f
}

async function upload () {
  if (!file.value || uploading.value) return
  uploading.value = true
  error.value = ''
  try {
    const form = new FormData()
    form.append('file', file.value) // magaca "file" wuxuu ku xiranyahay backend-kaaga
    const res = await fetch(props.endpoint, { method: 'POST', body: form })
    if (!res.ok) throw new Error('Upload failed')
    // guul: nadiifi faylka
    file.value = null
  } catch (e) {
    error.value = e.message || 'Upload error'
  } finally {
    uploading.value = false
  }
}
</script>
