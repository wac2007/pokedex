import CommentList from '@/components/comment/CommentList.vue'
import { mountComponent } from '../../../helpers'
import Vue from 'vue'

import VueFire from 'vuefire'
Vue.use(VueFire)

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

describe('CommentList.vue', () => {
  it('Deve Renderizar o componente corretamente', () => {
    let elm = mountComponent(CommentList, {})
    expect(elm.$el.id).to.equal('comment-list')
  })
})
