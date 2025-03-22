<template>
  <div class="menu-navigation">
    <template v-for="item in items" :key="item.name">
      <router-link v-if="item.link" class="menu-navigation__item" :to="item.link">
        {{ item.name }}
      </router-link>
      <button v-else class="menu-navigation__item" @click="callCommand(item)">
        {{ item.name }}
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { MenuNavigationItem } from '../model'

type Props = {
  items: MenuNavigationItem[]
}

defineProps<Props>()

const callCommand = (item: MenuNavigationItem) => {
  item.command?.()
}
</script>

<style src="../styles/index.scss"></style>
