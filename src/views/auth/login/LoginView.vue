<script setup>
import AuthLayout from '../AuthLayout.vue'
import HButton from '@/components/Button.vue';
</script>

<template>
  <AuthLayout>
    <div class="flex flex-col h-full items-center justify-center space-y-10">
      <div class="space-y-2">
        <h3 class="font-bold text-5xl">Welcome back</h3>
        <div class="flex text-xl space-x-2">
          <p class="text-[#878787]">Don't have an account?</p>
          <RouterLink to="/register" class="text-primary underline">Sign up</RouterLink>
        </div>
      </div>
      <form class="space-y-10 w-[489px]">
        <HButton text="Log in" class="w-full" />
      </form>
    </div>
  </AuthLayout>
</template>
