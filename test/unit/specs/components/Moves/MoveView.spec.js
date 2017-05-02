import MoveView from '@/components/moves/MoveView.vue'
import { mountComponent, mockData, removeMock } from '../../../helpers'

import data from '../../../mocks/MockMoveGet.json'

describe('PokemonMove.vue', () => {
  let elm
  before(() => {
    localStorage.clear()
    mockData(data)
    elm = mountComponent(MoveView, {})
  })
  it('Deve Renderizar o componente corretamente', () => {
    expect(elm.$el.id).to.equal('move-view')
  })
  it('Deve carregar o ataque corretamente', done => {
    let moveName = 'razor-wind'
    elm.$on('moveLoaded', () => {
      expect(elm.move.name).to.equal(moveName)
      done()
    })
    elm.getMoveInfo(moveName)
  })
  after(() => {
    removeMock()
  })
})
