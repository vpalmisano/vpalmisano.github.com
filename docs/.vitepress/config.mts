import { defineConfig } from 'vitepress'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  title: 'Vittorio Palmisano',
  description:
    'PhD | Software Engineer',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',

  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    plugins: [
      vuetify({
        autoImport: true,
        styles: false,
      }),
    ],
  },

  head: [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'ThSxsq29m7VaM_rkS-ecnYxorsAfwLhHncyeCZI2m1Y',
      },
    ],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-05SF29M4QB',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-05SF29M4QB');`,
    ],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Curriculum Vitae', link: '/cv' },
      { text: 'Articles', link: '/articles/' },
      { text: 'Projects', link: '/projects/' },
    ],

    socialLinks: [],

    search: {
      provider: 'local',
    },

    editLink: {
      pattern:
        'https://github.com/vpalmisano/vpalmisano.github.com/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      copyright: 'Copyright © Vittorio Palmisano',
    },
  },
})
