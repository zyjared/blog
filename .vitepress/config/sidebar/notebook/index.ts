import type { DefaultTheme } from 'vitepress'
import { sidebarJavaApi, sidebarJavaLearn } from './sidebar-java'

export const sidebar: DefaultTheme.SidebarMulti = {
  '/notebook/java/learn/': sidebarJavaLearn(),
//   '/notebook/java/api/': sidebarJavaApi(),
}
