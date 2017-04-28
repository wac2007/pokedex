import Vue from 'vue'

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
