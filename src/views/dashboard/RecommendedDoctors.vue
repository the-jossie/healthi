<script setup lang="ts">
import { DOCTORS } from './config.ts'
import RecommendenDoctorCard from './RecommendedDoctorCard.vue'

</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-5">
      <h3 class="font-semibold text-[#232323] text-2xl">Recommended Doctors</h3>
      <button class="flex items-center space-x-[6px]">
        <p class="font-bold text-primary text-sm">View All</p>
        <img src="@/assets/caret-right.svg" class="mt-[2px]" />
      </button>
    </div>

    <ul class="grid grid-cols-3 gap-4">
      <li v-for="(doctor, index) in DOCTORS" :key="index">
        <RecommendenDoctorCard :doctor="doctor" />
      </li>
    </ul>
  </div>
</template>
