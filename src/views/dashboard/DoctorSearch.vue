<script setup lang="ts">
import HButton from '../../components/Button.vue'
</script>

<template>
  <div
    class="rounded-lg py-3 px-5 shadow-xl flex items-center space-x-5 w-max mx-auto -translate-y-8 bg-white text-[#7A7D84] text-sm"
  >
    <div class="flex items-center space-x-1 border-r">
      <img src="@/assets/search.svg" class="h-4" />
      <input placeholder="Find doctors" class="outline-none w-48" />
    </div>
    <div class="flex items-center space-x-1">
      <img src="@/assets/location.svg" class="h-4" />
      <input placeholder="Location" class="outline-none w-20" />
    </div>
    <HButton text="Search" class="w-36" />
  </div>
</template>
