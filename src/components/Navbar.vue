<script setup lang="ts">
import HButton from './Button.vue'
import Logo from './icons/Logo.vue'
</script>

<template>
  <nav class="flex items-center justify-between p-6">
    <Logo />
    <ul class="flex items-center space-x-7">
      <li><RouterLink to="/" class="font-medium opacity-50 p-2">Go Pro</RouterLink></li>
      <li><RouterLink to="/login" class="font-medium text-primary p-2">Login</RouterLink></li>

      <li>
        <RouterLink to="/register" class="bg-primary text-white py-3 px-16 rounded-md">Register</RouterLink>
      </li>
    </ul>
  </nav>
</template>
