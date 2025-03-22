<template>
  <div class="start-screen-intro" :class="blockClass()" @animationend="onBlockAnimationEnd">
    <h1 class="start-screen-intro__text" @animationend="onTextAnimationEnd">SKYRIM GRADE</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Emits = {
  (e: 'animationend'): void
}

const emit = defineEmits<Emits>()

const textAnimationEnd = ref(false)

const blockClass = () => {
  return {
    'start-screen-intro_hidden': textAnimationEnd.value,
  }
}

const onTextAnimationEnd = () => {
  textAnimationEnd.value = true
}

const onBlockAnimationEnd = (event: AnimationEvent) => {
  const target = event.target as HTMLElement
  if (!target.classList.contains('start-screen-intro')) {
    return
  }

  emit('animationend')
}
</script>

<style src="../styles/start-screen-intro.scss"></style>
