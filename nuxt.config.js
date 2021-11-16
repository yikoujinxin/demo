import webpack from 'webpack'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/preview.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/base'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/http'
  ],

  pwa: {
    icon: {
      fileName: 'icon.png'
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },
    extend(config, ctx){
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        _: 'lodash'
      })
    ]
  },
  ignore: 'pages/fetch.vue',
  ignoreOptions: {
    ignoreOptions: true
  },
  server: {
    host: '0.0.0.0',
    port: 8000
  },
  loading: '~/components/LoadingBar.vue',
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  router: {
    // linkActiveClass: 'my-custom-active-link',
    linkPrefetchedClass: 'nuxt-link-prefetched'
  }
}
