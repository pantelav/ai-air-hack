<template>
  <div class="object-card w-[500px] h-[175px] rounded-lg">
    <div class="card-container w-full min-w-[230px] h-full p-8 flex flex-col justify-center rounded-lg ">
      <p class="card-title pb-5 text-2xl font-semibold text-white z-10">{{ objTitle }}</p>
      <q-btn icon="mdi-chevron-right" label="Смотреть" no-caps color="primary" class="self-start"
        @click="$router.push(`object/${objId}`)" />
    </div>
  </div>
</template>

<script setup lang='ts'>
defineProps<{ objId: string, objTitle: string }>()
</script>

<style scoped lang='scss'>
$imgUrl: "https://s0.rbk.ru/v6_top_pics/media/img/4/00/754409584776004.jpg";

.object-card {
  background-image: url($imgUrl);
  background-repeat: no-repeat;
  background-size: cover;
}

.card-container {
  backdrop-filter: blur(2px);
}

.card-title {
  text-shadow: 2px 2px 2px #474747;
}
</style>
