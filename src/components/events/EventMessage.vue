<template>
  <div class="py-2 px-4 flex justify-between items-center cursor-pointer hover:bg-slate-200 transition-colors" @click="goToTime">
    <div class="flex items-center gap-4">
      <q-icon :name="messages[props.type].icon" :color="messages[props.type].color" size="1.8em" />
      <p><b>{{ props.time }}</b></p>
      <p>{{ messages[props.type].text }}</p>
    </div>
    <div class="font-semibold" v-if="$route.name === 'home'">
      Пулково
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useEventBus } from '@vueuse/core';
interface IProps {
  type: 'bird' | 'plane' | 'drone'
  time: string,
  id: string | number
}
const props = defineProps<IProps>()

const bus = useEventBus<string>('time')

const messages = {
  bird: {
    icon: 'mdi-bird',
    text: 'Обнаружена птица',
    color: 'info'
  },
  drone: {
    icon: 'mdi-quadcopter',
    text: 'Обнаружен дрон',
    color: 'negative'
  },
  plane: {
    icon: 'mdi-airplane',
    text: 'Обнаружен самолет',
    color: 'positive'
  },
}

function goToTime() {
  bus.emit('time', props.time)
}
</script>

<style></style>
