<template>
  <div>
    <img :src="imgUrl" width="150px" height="150px" />
    <p class="text-center">Камера {{ title }}</p>
  </div>
</template>

<script setup lang='ts'>
defineProps<{ title: string }>()

const imgUrl = 'https://34travel.me/media/upload/images/2019/september/airport-how/aircraft-airplane-airport-2026324.jpg'
</script>

<style scoped lang='scss'></style>
