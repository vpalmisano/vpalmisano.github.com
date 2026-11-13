import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import { createVuetify } from 'vuetify'
import { VIcon } from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import AuthorHome from './AuthorHome.vue'
import GitHubLink from './GitHubLink.vue'
import CookieConsentInit from './CookieConsentInit.vue'
import './custom.css'

const vuetify = createVuetify({
  components: { VIcon },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(CookieConsentInit),
    })
  },
  enhanceApp({ app }) {
    app.use(vuetify)
    app.component('author', AuthorHome)
    app.component('GitHubLink', GitHubLink)
  },
} satisfies Theme

