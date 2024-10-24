import type { Icon } from '../Icon/types'

export interface Post {
  title: string
  url: string
  date?: {
    time: number
    string: string
  }
  description?: string | undefined
  image?: string
}

export interface MenuNavItem {
  icon: Icon
  link: string
  ariaLabel?: string
}

export interface ProfileProps {
  avatar: string
  bio?: string
  details?: {
    dt: string
    dd: string | string[]
  }[]
}
