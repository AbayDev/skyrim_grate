import { AudioService } from '@/shared/lib'
import type { MenuNavigationItem } from '@/shared/ui'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const createAudio = () => {
  const audioService = ref(new AudioService())
  audioService.value.setAudioName('dragonborn')
  if (audioService.value.audio) {
    audioService.value.audio.loop = true
  }
  return audioService
}

export const useStartScreenStore = defineStore('start-screen', () => {
  const menuItems = ref<MenuNavigationItem[]>([
    { name: 'Продолжить' },
    { name: 'Новая игра' },
    { name: 'Загрузить' },
    { name: 'Настройки' },
    { name: 'Моды' },
    { name: 'Выход' },
  ])

  const audioService = createAudio()

  return {
    menuItems,
    audioService,
  }
})
