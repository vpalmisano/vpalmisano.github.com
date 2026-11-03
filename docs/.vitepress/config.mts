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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vpalmisano' },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/vpalmisano/',
      },
      { icon: 'medium', link: 'https://medium.com/@vpalmisano' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.1-2.83 7.436 5.763 5.528 7.91-1.18 9.023-4.516.19-.57.291-.858.8-.858.51 0 .61.288.8.857 1.112 3.337 3.178 9.995 9.023 4.517 4.438-5.148.96-6.748-2.95-7.437-.139-.016-.277-.034-.415-.056.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>',
        },
        link: 'https://bsky.app/profile/vpalmisano.bsky.social',
      },
    ],

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
