<template>
  <UApp>
    <UAlert
    v-if="alert.display.value"
    :title="alert.message"
    :icon="alert.icon"
    :description="alert.description"
    @update:open="closeAlert"
    :close="{
      color: 'error',
      variant: 'outline',
    }"
    class="rounded-none"/>
    <navigation />
    <RouterView />
  </UApp>
</template>

<script setup>
import { ref } from 'vue';
import navigation from './components/navigation.vue';



const alert = {
  display: ref(true),
  message: 'Website still under development!',
  description: 'seriously trust me this isnt anything as to what it\'l look like, trust the process',
  icon: 'i-lucide-terminal',
}

function closeAlert() {
  alert.display.value = false
}

</script>