import type { DefaultTheme } from 'vitepress'
import { sidebar as notebook } from './notebook'

export const sidebar: DefaultTheme.SidebarMulti = {
  ...notebook,
}
