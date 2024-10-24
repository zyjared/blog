import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '笔记',
    items: [
      { text: '命令/快捷键', link: '/notebook/command/windows' },
      { text: 'Java', link: '/notebook/java/' },
      { text: '微信小程序', link: '/notebook/miniprogram/' },
      {
        text: '链接',
        items: [
          { text: 'SVG', link: 'https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial' },
        ],
      },
    ],
  },
//   {
//     text: '便签',
//     items: [
//     ],
//   },
]
