import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '编程',
    items: [
      { text: '命令/快捷键', link: '/command/windows' },
      { text: 'Java', link: '/java/' },
      {
        text: 'Web',
        items: [
          { text: 'SVG', link: 'https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial' },
          { text: '微信小程序', link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/' },
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
