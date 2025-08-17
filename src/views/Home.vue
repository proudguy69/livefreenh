<template>
  <div class="flex flex-col items-center bg-white">
    <!-- Hero Section-->
    <div class="w-[100vw] h-[30vh] relative">
      <img src="../assets/hero_image.png" alt="" class="w-full h-full max-md:h-[30vh]">
      <span class="absolute top-0 w-full h-full flex items-center justify-center">
        <span class="flex flex-col items-center gap-4 max-md:gap-2">
          <h1 class="text-5xl font-bold max-md:text-2xl">New Hampshire Discord</h1>
          <p class="text-xl max-md:text-sm">Connecting Manchester & NH Communities</p>
          <UButton class="text-white bg-nhgreen-700" to="https://discord.gg/livefreenh">Join Discord</UButton>
        </span>
      </span>
    </div>
    <!-- Page Content-->
    <discordserver class="mt-8 w-1/2 h-84 max-md:w-[85vw]" />

    <div class="w-full h-128 bg-nhgreen-700 mt-8">
      content will exists here!
    </div>

    <!-- Footer-->
    <div class="bg-gray-300 w-[100vw] h-12 fixed top-[95vh] text-black flex items-center p-4">
      Footer Placeholder
    </div>
  </div>
  
</template>

<script setup>
import discordserver from '@/components/discordserver.vue';
</script>