import MoveList from '@/components/moves/MoveList.vue'
import { mountComponent } from '../../../helpers'

import data from '../../../mocks/MockPokemonGet.json'

describe('MoveList.vue', () => {
  let elm
  before(() => {
    elm = mountComponent(MoveList, {
      moveList: data.moves
    })
  })
  it('Deve Renderizar o componente corretamente', () => {
    expect(elm.$el.id).to.equal('move-list')
  })
  it('Deve transmitir o evento de golpe selecionado', function (done) {
    let move = elm.$el.querySelector('.move-item')
    elm.$events.$on('selectedMove', moveName => {
      expect(moveName).to.equal('razor-wind')
      done()
    })
    move.click()
  })
})
