import Vue from 'vue'
import PokemonService from '@/domain/Pokemon/PokemonService'
import data from '../../mocks/MockPokemonGet.json'
import { mockData, removeMock } from '../../helpers'

describe('PokemonGetService', () => {
  let serverResponse
  let service
  before(done => {
    localStorage.clear()
    mockData(data)
    service = new PokemonService(Vue.resource)
    service.getPokemon('butterfree')
      .then(response => {
        serverResponse = response
        done()
      })
  })
  it('Pokémon deve ser um objeto', () => {
    expect(serverResponse).to.be.an('object')
  })
  it('Pokémon deve ter os campos name, height, weight, moves, id', () => {
    expect(serverResponse).to.have.property('name')
    expect(serverResponse).to.have.property('height')
    expect(serverResponse).to.have.property('weight')
    expect(serverResponse).to.have.property('moves')
    expect(serverResponse).to.have.property('id')
  })
  after(() => {
    removeMock()
  })
})
