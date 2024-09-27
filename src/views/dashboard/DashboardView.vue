<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
import ConsultationCarousel from './ConsultationCarousel.vue'
import DoctorSearch from './DoctorSearch.vue'
</script>

<template>
  <Navbar />
  <section class="px-36 py-7">
    <ConsultationCarousel />
    <DoctorSearch />
  </section>
</template>
