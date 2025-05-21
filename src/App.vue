<script setup>
import { useMainStore } from '@/stores/main' // Ensure this path is correct for your project structure

const mainStore = useMainStore()
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <h1 class="text-3xl font-bold text-blue-500 mb-4">Hello {{ mainStore.name }}!</h1>
    <p class="text-xl mb-2">Count: {{ mainStore.count }}</p>
    <p class="text-xl mb-4">Double Count: {{ mainStore.doubleCount }}</p>
    <button @click="mainStore.increment()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Increment Count
    </button>
  </div>
</template>
