import { defineConfig } from 'vitepress'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  lang: 'ps',
  title: 'خیبر ادبي ملګري',
  description: 'د خیبر د پښتو شاعرانو ادبي ټولنه',

  base: '/khyber-adabi-malgari/',

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],

  themeConfig: {
    logo: '/logo.jpg',

    nav: [
      { text: 'کور', link: '/' },
      { text: 'شاعري', link: '/poetry/' },
      { text: 'English', link: '/en/' }
    ],

    footer: {
      message: '© خیبر ادبي ملګري',
      copyright: 'ټول حقونه خوندي دي'
    },
  },

  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate', // always update when new content is available
        manifest: {
          name: 'خیبر ادبي ملګري',
          short_name: 'Khyber Poets',
          description: 'د خیبر د پښتو شاعرانو ادبي ټولنه',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '.',
          icons: [
            { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
            { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,png,jpg,ico,svg,webmanifest}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: { cacheName: 'google-fonts-stylesheets' }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: { cacheName: 'google-fonts-webfonts' }
            }
          ]
        }
      })
    ]
  },
})
