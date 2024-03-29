// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'materialize-css/dist/css/materialize.css'

Vue.use(VueResource)
Vue.http.options.root = 'https://pokeapi.co/api/v2'

Vue.config.productionTip = false

import VueEvents from 'vue-events'
Vue.use(VueEvents)

import VueFire from 'vuefire'
Vue.use(VueFire)

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
