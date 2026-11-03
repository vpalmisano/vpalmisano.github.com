import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { createVuetify } from 'vuetify'
import { VIcon } from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import AuthorHome from './AuthorHome.vue'
import GitHubLink from './GitHubLink.vue'
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
  enhanceApp({ app }) {
    app.use(vuetify)
    app.component('author', AuthorHome)
    app.component('GitHubLink', GitHubLink)
  },
} satisfies Theme

