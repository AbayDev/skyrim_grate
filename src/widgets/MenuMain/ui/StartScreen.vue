<template>
  <div class="start-screen">
    <MenuNavigation :items="menuItems" />
  </div>
  <StartScreenIntro v-if="isIntroVisible" @animationend="onIntroAnimationEnd" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MenuNavigation } from '@/shared/ui'
import { useStartScreen } from '../composables/useStartScreen'
import StartScreenIntro from './StartScreenIntro.vue'

const isIntroVisible = ref(true)

const { menuItems, audioService } = useStartScreen()

const onIntroAnimationEnd = () => {
  isIntroVisible.value = false
}

onMounted(() => {
  audioService.value.start()
})
</script>

<style src="../styles/index.scss"></style>
