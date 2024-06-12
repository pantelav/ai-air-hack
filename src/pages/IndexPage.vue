<template>
  <q-page class="">
    <section>
      <h1 class="mb-3 text-3xl">Объекты</h1>
      <div class="pb-4 flex gap-7 flex-nowrap flex-shrink-0 overflow-x-auto">
        <object-card v-for="obj in tempObjects" :key="obj.objId" :obj-title="obj.objTitle" :obj-id="obj.objId" />
      </div>
    </section>

    <section class="flex flex-col lg:flex-row gap-5 justify-between">
      <div class="lg:max-w-[45%] h-[440px] flex flex-col flex-nowrap flex-grow">
        <h2 class="mb-4 text-xl text-primary">События</h2>
        <events-card class="flex-grow" />
      </div>

      <div class="lg:max-w-[50%] h-[440px] flex flex-grow shrink flex-col">
        <h2 class="mb-4 text-xl text-primary">Статистика</h2>
        <chart-card />
      </div>
    </section>

  </q-page>
</template>

<script setup lang="ts">
import ContentCard from 'components/app/ContentCard.vue'
import EventsCard from 'components/events/EventsCard.vue';
import ChartCard from 'components/charts/ChartCard.vue';
import VideoPlayer from 'components/app/VideoPlayer.vue';
import ObjectCard from 'components/app/ObjectCard.vue';
import { PropsType } from 'src/types/props';

const tempObjects: PropsType<typeof ObjectCard>[] = [
  { objId: '1', objTitle: 'Пулково' },
  { objId: '2', objTitle: 'Домодедово' },
  { objId: '3', objTitle: 'Шереметьево' },
  { objId: '4', objTitle: 'Внуково' },
]
</script>
