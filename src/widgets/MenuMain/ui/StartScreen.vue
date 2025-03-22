<template>
  <div class="start-screen">
    <MenuNavigation :items="menuItems" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MenuNavigation, type MenuNavigationItem } from '@/shared/ui'

const menuItems = ref<MenuNavigationItem[]>([
  { name: 'Продолжить' },
  { name: 'Новая игра' },
  { name: 'Загрузить' },
  { name: 'Настройки' },
  { name: 'Моды' },
  { name: 'Выход' },
])
</script>

<style src="../styles/index.scss"></style>
