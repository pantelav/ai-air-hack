<template>
  <ContentCard>
    <Line :data="chartData" :options="chartOptions" />
  </ContentCard>
</template>

<script setup lang='ts'>
import ContentCard from 'components/app/ContentCard.vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, ChartData
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const chartData: ChartData<'line', number[]> = {
  labels: ['January', 'February', 'March'],
  datasets: [
    { data: [1, 2, 1], label: 'Самолеты', borderColor: 'green', tension: 0.2 },
    { data: [2, 3, 1], label: 'Дроны', borderColor: 'red', tension: 0.2 },
    { data: [0, 2, 2], label: 'Птицы', borderColor: 'cyan', tension: 0.2 },
  ]
}
const chartOptions = {
  responsive: true
}
</script>

<style scoped lang='scss'></style>
