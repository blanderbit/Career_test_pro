const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
require('dotenv').config()

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: 'Career Test Pro',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'dwedwed'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Montserrat:400, 500,600,800'
            },
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    /*
    ** Global CSS
    */
    css: [
        // '~/assets/style/app.styl',
        '~assets/main.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/vuetify',
        // '@/plugins/axios'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        ['nuxt-vuex-localstorage', {
            mode: 'debug',
            localStorage: ['localStorage']
        }],
        ["cookie-universal-nuxt"],
        ['vue-warehouse/nuxt',
            {
                vuex: true,
                // plugins: [
                //     'store/plugins/expire',
                //     'store/plugins/defaults'
                // ],
                // storages: [
                //     'store/storages/localStorage',
                //     'store/storages/cookieStorage'
                // ]
            }
        ],
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        // baseURL: 'https://id.hubculture.com',
        baseURL: process.env.baseURL
    },
    lintOnSave: process.env.NODE_ENV !== 'production',
    /*
    ** Build configuration
    */
    build: {
        transpile: ['vuetify/lib','nuxt-vuex-localstorage'],
        plugins: [new VuetifyLoaderPlugin()],
        loaders: {
            stylus: {
                import: ['~assets/main.css'],
            }
        },
        vendor: ['aframe'],
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}