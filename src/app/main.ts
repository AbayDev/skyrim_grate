import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/index.scss'

import App from './ui/App.vue'
import router from './providers/router'

const bootstrapApp = () => {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  app.mount('#app')
}

bootstrapApp()
