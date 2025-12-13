import { defineConfig } from 'vitepress'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/khyber-adabi-malgari/',

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/khyber-adabi-malgari/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/khyber-adabi-malgari/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/khyber-adabi-malgari/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/khyber-adabi-malgari/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/khyber-adabi-malgari/android-chrome-192x192.png' }]
  ],

  locales: {
    root: {
      lang: 'ps',
      dir: 'rtl',
      label: 'پښتو',
      title: 'خیبر ادبي ملګري',
      description: 'د خیبر د پښتو شاعرانو ادبي ټولنه',
      themeConfig: {
        logo: '/logo.jpg',
        nav: [
          { text: 'کور', link: '/' },
          { text: 'شاعري', link: '/poetry/' },
          { text: 'انځورونه', link: '/gallery/' }
        ],
        footer: {
          message: '© خیبر ادبي ملګري',
          copyright: 'ټول حقونه خوندي دي'
        },
      }
    },
    en: {
      lang: 'en',
      dir: 'ltr',
      label: 'English',
      title: 'Khyber Adabi Malgari',
      description: 'A literary community of Pashto poets from Khyber',
      themeConfig: {
        logo: '/logo.jpg',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Poetry', link: '/en/poetry/' },
          { text: 'Gallery', link: '/en/gallery/' }
        ],
        footer: {
          message: '© Khyber Adabi Malgari',
          copyright: 'All rights reserved'
        },
      }
    }
  },

  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate', // always update when new content is available
        base: '/khyber-adabi-malgari/',
        filename: 'site.webmanifest',
        manifest: {
          name: 'خیبر ادبي ملګري',
          short_name: 'Khyber Poets',
          description: 'د خیبر د پښتو شاعرانو ادبي ټولنه',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/khyber-adabi-malgari/',
          scope: '/khyber-adabi-malgari/',
          icons: [
            { src: '/khyber-adabi-malgari/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/khyber-adabi-malgari/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
            { src: '/khyber-adabi-malgari/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
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
