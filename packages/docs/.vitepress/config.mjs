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
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
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
