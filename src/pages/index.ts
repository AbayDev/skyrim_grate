import type { RouteRecordRaw } from 'vue-router'

export const pages: RouteRecordRaw[] = [
  {
    name: 'ScreenStart',
    path: '/screen-start',
    component: () => import('./start-screen-page/StartScreenPage.vue'),
  },
]
