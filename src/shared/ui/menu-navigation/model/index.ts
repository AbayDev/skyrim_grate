import type { RouteRecordRaw } from 'vue-router'

export type MenuNavigationItem = {
  /**
   * наименование меню
   */
  name: string
  /**
   * Функция вызывается при клике
   */
  command?: CallableFunction
  /**
   * Ссылка
   */
  link?: RouteRecordRaw
}
