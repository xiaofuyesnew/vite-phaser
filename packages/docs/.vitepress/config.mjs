import { defineConfig } from 'vitepress'
import mkcert from 'vite-plugin-mkcert'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePhaser",
  description: "Phaser game development with Vite",
  vite: {
    plugins: [
      mkcert()
    ]
  },
  locales: {
      root: {
        label: 'English',
        lang: 'en-US',
      },
      zh: {
        label: '简体中文',
        lang: 'zh-CN',
        themeConfig: {
          nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/markdown-examples' }
          ],

          sidebar: [
            {
              text: '指南',
              items: [
                { text: '快速开始', link: '/markdown-examples' },
                { text: 'Runtime API Examples', link: '/api-examples' }
              ]
            }
          ],

          socialLinks: [
            { icon: 'github', link: 'https://github.com/xiaofuyesnew/vite-phaser' }
          ]
        }
      }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaofuyesnew/vite-phaser' }
    ]
  }
})
