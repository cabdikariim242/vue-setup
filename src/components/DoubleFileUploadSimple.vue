<template>
  <div>
    <!-- Laba input, mid walba hal fayl -->
    <label>
      File A:
      <input type="file" :accept="acceptA" @change="(e)=>pick(0,e)" />
    </label>

    <label>
      File B:
      <input type="file" :accept="acceptB || acceptA" @change="(e)=>pick(1,e)" />
    </label>

    <!-- Magacyada faylasha -->
    <ul>
      <li v-if="files[0]"><strong>A:</strong> {{ files[0].name }}</li>
      <li v-if="files[1]"><strong>B:</strong> {{ files[1].name }}</li>
    </ul>

    <button @click="upload" :disabled="!ready || uploading">
      {{ uploading ? 'Uploading…' : 'Upload both' }}
    </button>

    <p v-if="error" style="color:#b91c1c">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/*
  Sharaxaad:
  - Component-kan wuxuu rabaa LABA fayl (A iyo B).
  - Haddii mid ka maqan yahay, badhanka waa xirmayaa.
*/
const props = defineProps({
  endpoint: { type: String, default: '/api/upload-pair' },
  acceptA: { type: String, default: '' },  // tusaale: "application/pdf"
  acceptB: { type: String, default: '' },  // tusaale: "image/*"
  maxSizeMB: { type: Number, default: 20 }
})

const files = ref([null, null])
const error = ref('')
const uploading = ref(false)
const ready = computed(() => !!files.value[0] && !!files.value[1])

function pick (idx, e) {
  const f = e.target.files?.[0]
  error.value = ''
  if (!f) return
  if (f.size > props.maxSizeMB * 1024 * 1024) {
    error.value = `Faylka ${idx===0?'A':'B'} wuu ka weyn yahay ${props.maxSizeMB}MB`
    return
  }
  files.value[idx] = f
}

async function upload () {
  if (!ready.value || uploading.value) return
  uploading.value = true
  error.value = ''
  try {
    const form = new FormData()
    form.append('fileA', files.value[0])
    form.append('fileB', files.value[1])

    const res = await fetch(props.endpoint, { method: 'POST', body: form })
    if (!res.ok) throw new Error('Upload failed')

    // guul
    files.value = [null, null]
  } catch (e) {
    error.value = e.message || 'Upload error'
  } finally {
    uploading.value = false
  }
}
</script>
