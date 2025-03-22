import { defineStore } from 'pinia'
import type { Settings } from '../type'
import { ref } from 'vue'

const getDefaulSettings = (): Settings => {
  return {
    audio: {
      volume: 0.1,
    },
  }
}

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref<Settings>(getDefaulSettings())

  return {
    settings,
  }
})
