import { appDescription } from './constants'

export default defineAppConfig({
  head: {
    viewport: 'width=device-width,initial-scale=1',
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    ],
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: appDescription },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
      { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
    ],
  },

  ui: {
    colors: {
      primary: 'blue',
      secondary: 'green',
      neutral: 'slate',
    },
  },
})
