<template>
  <q-header elevated>
    <div class="h-14 container mx-auto flex justify-between items-center">
      <RouterLink to="/">
        <img src="/logo.png" alt="logo" class="h-10 my-2">
      </RouterLink>

      <div class="h-full">
        <nav class="h-full flex gap-2">
          <HeaderItem v-for="link in navLinks" :to="link.to" :title="link.title" :icon="link.icon" :key="link.title" />
        </nav>
      </div>
    </div>
  </q-header>
</template>

<script setup lang='ts'>
import HeaderItem from 'src/components/header/HeaderItem.vue'
import type { PropsType } from 'src/types/props';
const navLinks: PropsType<typeof HeaderItem>[] = [
  { title: 'Главная', icon: 'mdi-home-outline', to: '/' },
  { title: 'Объекты', icon: 'mdi-airplane', to: '/' },
  { title: 'Камеры', icon: 'mdi-cctv', to: '/' },
]
</script>

<style scoped lang='scss'></style>
