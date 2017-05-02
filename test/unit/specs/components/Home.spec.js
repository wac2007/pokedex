import Vue from 'vue'
import router from '@/router'
import { mockData, removeMock } from '../../helpers'
import data from '../../mocks/MockPokemonList.json'

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

describe('Home.vue', () => {
  before(() => {
    localStorage.clear()
    mockData(data)
  })
  it('Deve Renderizar e trazer o componente Home', () => {
    const elm = new Vue({
      el: document.createElement('div'),
      router: router,
      render: h => h('router-view')
    })
    expect(elm.$el.id).to.equal('home')
  })
  after(() => {
    removeMock()
  })
})
