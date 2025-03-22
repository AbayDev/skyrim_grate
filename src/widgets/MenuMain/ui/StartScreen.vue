<template>
  <div class="start-screen">
    <MenuNavigation :items="menuItems" />
  </div>
</template>

<script setup lang="ts">
import { MenuNavigation } from '@/shared/ui'
import { useStartScreen } from '../composables/useStartScreen'
import { onMounted } from 'vue'

const { menuItems, audioService } = useStartScreen()

onMounted(() => {
  audioService.value.start()
})
</script>

<style src="../styles/index.scss"></style>
