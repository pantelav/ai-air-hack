<template>
  <div
    class="md:w-[600px] md:h-[500px] mx-auto p-3 flex flex-col justify-center items-center bg-blue-500/10 border-2 border-dashed rounded-lg border-blue-500 text-3xl text-primary transition-all cursor-pointer"
    :class="{ 'bg-blue-500/35': isOverDropZone }" ref="dropZoneRef" @click="selectFile">
    <p class="text-center">
      Выберите файл <br />
      или перетащите его сюда
    </p>
    <q-icon class="text-7xl" name="mdi-plus" />
    <input ref="fileInputRef" class="hidden" type="file" accept="video/*,.mkv" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDropZone } from '@vueuse/core'

const fileInputRef = ref<HTMLInputElement>()
const dropZoneRef = ref<HTMLDivElement>()

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  dataTypes: ['video/mpeg', 'video/mp4', 'video/avi', 'video/x-matroska'],
})

function selectFile () {
  fileInputRef.value?.click()
}

function onDrop (files: File[] | null) {
  console.log('drop')
}
</script>

<style scoped lang="scss"></style>
