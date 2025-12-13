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
          { text: 'انځورونه', link: '/gallery/' },
          { text: 'کمیټه', link: '/team' }
        ],
        socialLinks: [
          { icon: 'facebook', link: 'https://www.facebook.com/khyberadabimalgari/' },
          { icon: 'whatsapp', link: 'https://wa.me/' },
          { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05 6.33 6.33 0 0 0 0 12.66 6.34 6.34 0 0 0 6.33-6.33V6.69h4.5z"/></svg>' }, link: 'https://www.tiktok.com/' }
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
          { text: 'Gallery', link: '/en/gallery/' },
          { text: 'Committee', link: '/en/team' }
        ],
        socialLinks: [
          { icon: 'facebook', link: 'https://www.facebook.com/khyberadabimalgari/' },
          { icon: 'whatsapp', link: 'https://wa.me/' },
          { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05 6.33 6.33 0 0 0 0 12.66 6.34 6.34 0 0 0 6.33-6.33V6.69h4.5z"/></svg>' }, link: 'https://www.tiktok.com/' }
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
