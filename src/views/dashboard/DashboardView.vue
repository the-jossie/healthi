<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
import ConsultationCarousel from './ConsultationCarousel.vue'
import DoctorSearch from './DoctorSearch.vue'
import RecommendedDoctors from './RecommendedDoctors.vue'
import NearbyDoctors from './NearbyDoctors.vue'
</script>

<template>
  <Navbar />
  <section class="w-[80.3%] mx-auto space-y-10 py-7">
    <ConsultationCarousel />
    <DoctorSearch />
    <RecommendedDoctors />
    <NearbyDoctors />
  </section>
</template>
