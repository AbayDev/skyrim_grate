import { storeToRefs } from 'pinia'
import { useSettingsStore } from '../store'

export const useSettings = () => {
  const store = useSettingsStore()
  return storeToRefs(store)
}
