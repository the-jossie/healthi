<script lang="ts">
import { defineComponent } from 'vue'
import type { Doctor } from '@/utils/types.ts'
import HButton from '@/components/Button.vue'

export default defineComponent({
  name: 'RecommendedDoctorCard',
  props: {
    doctor: {
      type: Object as () => Doctor,
      required: true
    }
  },
  components: {
    HButton
  }
})
</script>

<template>
  <div class="rounded-2xl bg-white p-5 space-y-4 border-[#E5E5E5] border">
    <div class="flex items-center space-x-4 pb-4 border-b">
      <img :src="doctor.image" alt="Doctor's Image" class="w-14 h-14 rounded-full" />
      <div class="">
        <p class="text-lg">{{ doctor.name }}</p>
        <div class="flex items-center space-x-2 text-[#7A7D84] text-sm !mb-2">
          <p class="border-r-2 border-[#7A7D84] pr-2">{{ doctor.title }}</p>
          <p>{{ doctor.yearsOfExperience }} years experience</p>
        </div>
        <span class="text-xs rounded-full px-2 py-1 text-primary bg-[#EBFFFA]">{{
          doctor.specialization
        }}</span>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex items-start space-x-2 w-1/2 pr-4 border-r">
        <img src="@/assets/clock.svg" alt="Clock Image" />
        <div class="space-y-1">
          <ul className="flex items-center">
            <li
              v-for="(day, index) in doctor.availability.days"
              :key="index"
              class="text-sm font-medium text-[#232323]"
            >
              {{ day }}
              <span v-if="index < doctor.availability.days.length - 1">,</span>
            </li>
          </ul>
          <p class="text-xs text-[#7A7D84]">
            {{ doctor.availability.startTime }}-{{ doctor.availability.endTime }}
          </p>
        </div>
      </div>
      <div class="flex items-start space-x-2 w-1/2 pl-4">
        <img src="@/assets/coins.svg" alt="Coins Image" />
        <div class="space-y-1">
          <p class="text-[#232323]">${{ doctor.minPrice }}</p>
          <p class="text-xs text-[#7A7D84]">Starting</p>
        </div>
      </div>
    </div>
    <HButton text="Book an appointment" class="w-full" />
  </div>
</template>
