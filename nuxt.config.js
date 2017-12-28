module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'My iTunes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: 'This is an i-tunes search build with Vue.js Axios Vuetify  and Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  plugins: ['~plugins/vuetify.js'],
  css:     ['~assets/app.styl'],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
     vendor:['axios','vuetify'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
    
     }
    }
  }

