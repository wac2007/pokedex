import Vue from 'vue'
import router from '@/router'

describe('Home.vue', () => {
  it('Deve Renderizar e trazer o componente correto', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      router: router,
      render: h => h('router-view')
    })
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Pokontest')
  })
})
