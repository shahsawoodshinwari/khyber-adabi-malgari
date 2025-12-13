import DefaultTheme from 'vitepress/theme'
import Gallery from '../components/Gallery.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Gallery', Gallery)
  }
}
