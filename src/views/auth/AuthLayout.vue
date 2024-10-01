<script setup>
import Logo from '@/components/icons/Logo.vue'
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden">
    <div class="relative h-full bg-[#869CA3] w-1/2">
      <Logo theme="light" height="88" width="246" class="mx-auto mt-20 text-white" />

      <img src="@/assets/auth-bg.png" class="absolute bottom-0 left-0" />
    </div>
    <div class="h-full w-1/2">
      <slot></slot>
    </div>
  </div>
</template>
