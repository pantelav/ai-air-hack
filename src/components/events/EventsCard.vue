<template>
  <ContentCard class="overflow-y-auto relative">
    <div class="flex justify-between items-center">
      <q-btn flat icon="mdi-tune-variant" title="Фильтр" label="Фильтр" no-caps class="text-gray-600">
        <q-menu>
          <q-list>
            <q-item>
              <q-checkbox v-model="filter.drone" label="Дроны" />
            </q-item>
            <q-item>
              <q-checkbox v-model="filter.bird" label="Птицы" />
            </q-item>
            <q-item>
              <q-checkbox v-model="filter.plane" label="Самолеты" />
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn flat icon="mdi-airplane" title="Аэропорты" label="Аэропорты" no-caps class="text-gray-600"
        v-if="$route.name === 'home'">
        <q-menu>
          <q-list>
            <q-item v-for="item in airportList" :key="item">
              <q-checkbox v-model="filter.airports" :val="item" :label="item" />
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <EventMessage v-for="event in filteredEvents" :key="event.id" :id="event.id" :type="event.type"
      :time="event.time" />
  </ContentCard>
</template>

<script setup lang='ts'>
import ContentCard from 'components/app/ContentCard.vue';
import EventMessage from 'components/events/EventMessage.vue';
import { PropsType } from 'src/types/props';
import { computed, reactive } from 'vue';

const airportList = ['Пулково', 'Внуково', 'Шереметьево', 'Домодедово']

const filter = reactive({
  drone: true,
  bird: true,
  plane: true,
  airports: Array.from(airportList)
})

const events: PropsType<typeof EventMessage>[] = []

for (let i = 0; i < 30; i++) {
  const objArr = ['drone', 'bird', 'plane']
  const currentObj = objArr[Math.floor(Math.random() * 3)]
  let obj = { type: currentObj as 'drone' | 'bird' | 'plane', time: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)}`, id: i }
  events.push(obj)
}

const filteredEvents = computed(() => {
  return events.filter(item => filter[item.type])
})

</script>

<style scoped lang='scss'></style>
