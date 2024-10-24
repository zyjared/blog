// import CardBar from '@src/components/Card/CardBar.vue'
// import Card from '@src/components/Card/index.vue'
// import ZyHome from '@src/components/Layout/Home.vue'
import LinkBar from '@src/components/LinkBar/index.vue'
import DefaultTheme from 'vitepress/theme'
import './styles/variables.css'
import './styles/custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // app.component('ZyHome', ZyHome)
    // app.component('Card', Card)
    // app.component('CardBar', CardBar)
    app.component('LinkBar', LinkBar)
  },
}
