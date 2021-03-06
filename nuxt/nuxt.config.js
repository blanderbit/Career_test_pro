const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
require('dotenv').config()

module.exports = {
    mode: 'universal',
    debug: true,
    cssSourceMap: true,

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
        ],
        script:[
            {src:'https://www.googletagmanager.com/gtag/js?id=UA-55124523-5', async:true},
            {innerHTML:'window.dataLayer = window.dataLayer || [];\n' +
                    ' function gtag(){dataLayer.push(arguments);}\n' +
                    ' gtag(\'js\', new Date());\n' +
                    '\n' +
                    ' gtag(\'config\', \'UA-55124523-5\');'}
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
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
    ],
    // router: {
    //     middleware: ['redirect']
    // },
    axios: {
        baseURL: process.env.baseURL
    },
    lintOnSave: process.env.NODE_ENV !== 'production',

    build: {
        transpile: ['vuetify/lib','nuxt-vuex-localstorage'],
        plugins: [new VuetifyLoaderPlugin()],
        loaders: {
            stylus: {
                import: ['~assets/main.css'],
            }
        },
        // postcss: {
        //     // Add plugin names as key and arguments as value
        //     // Install them before as dependencies with npm or yarn
        //     plugins: {
        //         // Disable a plugin by passing false as value
        //         'postcss-url': false,
        //         'postcss-nested': {},
        //         'postcss-responsive-type': {},
        //         'postcss-hexrgba': {}
        //     },
        //     preset: {
        //         // Change the postcss-preset-env settings
        //         autoprefixer: true
        //             // grid: true
        //
        //     }
        // },
        postcss: {
            'postcss-cssnext': {
                browsers: ['last 2 versions', 'ie >= 9']
            },
            'autoprefixer':{
                browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
            },
        },
        vendor: ['aframe'],

        extend(config, ctx) {
        }
    }
};
