<template>
  <q-page>
    <h1 class="text-2xl font-semibold">Аэропорт ...</h1>

    <h2>Камера 1</h2>
    <section class="lg:h-[70vh] lg:grid lg:grid-cols-[1.5fr_0.5fr] gap-4">
      <video-player class="max-lg:h-[70vh] max-lg:mb-5" />
      <events-card class="lg:h-full max-lg:h-[300px]" />
    </section>

    <section>
      <h2 class="mb-3 text-primary text-xl">Камеры</h2>
      <content-card class="flex gap-5 overflow-x-auto flex-nowrap">
        <camera-card v-for="i in 10" :key="i" :title="`${i}`" class="flex-shrink-0" />
      </content-card>
    </section>

    <section class="flex flex-col lg:flex-row gap-5 justify-between">
      <div class="lg:max-w-[45%] h-[440px] flex flex-col flex-nowrap flex-grow">
        <h2 class="mb-4 text-xl text-primary">События на объекте</h2>
        <events-card class="flex-grow" />
      </div>

      <div class="lg:max-w-[50%] h-[440px] flex flex-grow shrink flex-col">
        <h2 class="mb-4 text-xl text-primary">Статистика по объекту</h2>
        <chart-card />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import EventsCard from 'components/events/EventsCard.vue'
import CameraCard from 'components/app/CameraCard.vue'
import ContentCard from 'components/app/ContentCard.vue'
import VideoPlayer from 'components/app/VideoPlayer.vue'
import ChartCard from 'components/charts/ChartCard.vue'
</script>

<style scoped lang="scss"></style>
