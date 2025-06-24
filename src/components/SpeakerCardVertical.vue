<template>
  <div class="flex flex-col items-center bg-white rounded-xl shadow p-6 text-center h-full">
    <img :src="avatar" alt="Avatar" class="w-40 h-40 rounded-full object-cover border-4 border-gray-200 mb-4" />
    <div class="font-bold text-lg text-gray-900 mb-1">{{ name }}</div>
    <div class="text-sm text-gray-500 mb-3">{{ position }}</div>
    <div class="italic text-gray-700">"{{ quote }}"</div>
  </div>
</template>

<script setup>
defineProps({
  avatar: String,
  name: String,
  position: String,
  quote: String,
});
</script>
