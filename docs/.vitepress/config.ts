import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ps',
  title: 'خیبر ادبي ملګري',
  description: 'د خیبر د پښتو شاعرانو ادبي ټولنه',

  themeConfig: {
    nav: [
      { text: 'کور', link: '/' },
      { text: 'شاعري', link: '/poetry/' },
      { text: 'English', link: '/en/' }
    ],

    footer: {
      message: '© خیبر ادبي ملګري',
      copyright: 'ټول حقونه خوندي دي'
    }
  }
})
