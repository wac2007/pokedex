import Vue from 'vue'

module.exports = {
  // Helper to mount component
  mountComponent: function (Component, propsData) {
    const Ctor = Vue.extend(Component)
    return new Ctor({ propsData: propsData }).$mount()
  }
}
