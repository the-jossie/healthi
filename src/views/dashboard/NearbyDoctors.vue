<script setup lang="ts"></script>

<template>
  <div>
    <div class="flex items-center justify-between mb-5">
      <h3 class="font-semibold text-[#232323] text-2xl">Nearby Doctors</h3>
    </div>

    <div class="flex flex-col items-center justify-center space-y-4 border rounded-lg p-6">
      <img src="@/assets/location.svg" alt="Location Icon" class="w-10 h-10" />
      <p class="text-sm">Please enable your location, so we can find nearby doctors <button class="text-primary font-medium underline">Enable Now</button></p>
    </div>
  </div>
</template>
