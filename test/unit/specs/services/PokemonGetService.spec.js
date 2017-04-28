import Vue from 'vue'
import PokemonService from '@/domain/Pokemon/PokemonService'
import data from '../../mocks/MockPokemonGet.json'
import { mockData, removeMock } from '../../helpers'

describe('PokemonListService', () => {
  let serverResponse
  before(done => {
    mockData(data)
    let service = new PokemonService(Vue.resource)
    service.listPokemons(0, 'butterfree')
      .then(response => {
        serverResponse = response
        done()
      })
  })
  it('Pokémon deve ser um objeto', () => {
    expect(serverResponse).to.be.an('object')
  })
  it('Pokémon deve ter os campos name, height, weight, moves, sprites', () => {
    expect(serverResponse).to.have.property('name')
    expect(serverResponse).to.have.property('height')
    expect(serverResponse).to.have.property('weight')
    expect(serverResponse).to.have.property('moves')
    expect(serverResponse).to.have.property('sprites')
  })
  after(() => {
    removeMock()
  })
})
