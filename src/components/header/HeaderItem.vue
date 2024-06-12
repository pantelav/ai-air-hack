<template>
  <RouterLink :to class="h-full px-2 flex items-center gap-2 text-lg hover:bg-slate-400/50 transition-colors">
    <q-icon :name="icon" class="text-2xl" />
    <p class="hidden sm:!block">{{ title }}</p>
  </RouterLink>
</template>

<script setup lang='ts'>
interface IProps {
  title: string
  icon: string
  to: string
}

defineProps<IProps>()
</script>

<style scoped lang='scss'></style>
