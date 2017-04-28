import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://pokeapi.co/api/v2'
import VueEvents from 'vue-events'
Vue.use(VueEvents)

module.exports = {
  // Helper to mount component
  mountComponent: (Component, propsData) => {
    const Ctor = Vue.extend(Component)
    return new Ctor({ propsData: propsData }).$mount()
  },

  mockData: data => {
    Vue.http.interceptors.unshift((request, next) => {
      next(request.respondWith(JSON.stringify(data), {
        status: 200,
        body: JSON.stringify(data)
      }))
    })
  },

  removeMock: () => {
    Vue.http.interceptors.shift()
  }
}
