import Vue from 'vue'
import router from '@/router'

describe('Home.vue', () => {
  it('Deve Renderizar e trazer o componente correto', () => {
    const elm = new Vue({
      el: document.createElement('div'),
      router: router,
      render: h => h('router-view')
    })
    expect(elm.$el.id).to.equal('home')
  })
})
