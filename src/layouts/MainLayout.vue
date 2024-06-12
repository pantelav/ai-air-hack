<template>
  <q-layout view="lHh Lpr lFf">
    <TheHeader />
    <q-page-container class="container mx-auto my-6">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import TheHeader from 'src/components/header/TheHeader.vue'
</script>
