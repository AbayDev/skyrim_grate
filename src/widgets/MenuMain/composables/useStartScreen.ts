import { storeToRefs } from 'pinia'
import { useStartScreenStore } from '../store'

export const useStartScreen = () => {
  const store = useStartScreenStore()

  return storeToRefs(store)
}
