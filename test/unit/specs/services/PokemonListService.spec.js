import Vue from 'vue'
import PokemonService from '@/domain/Pokemon/PokemonService'
import data from '../../mocks/MockPokemonList.json'
import { mockData, removeMock } from '../../helpers'

describe('PokemonListService', () => {
  let serverResponse
  before(done => {
    mockData(data)
    let service = new PokemonService(Vue.resource)
    service.listPokemons(0)
      .then(response => {
        serverResponse = response
        done()
      })
  })
  it('Pokémons deve ser um array', () => {
    expect(serverResponse.results).to.be.an('array')
  })
  it('Objeto Pokémon deve conter um nome e url', () => {
    let pokemon = serverResponse.results[0]
    expect(pokemon).to.have.property('name')
    expect(pokemon).to.have.property('url')
  })
  after(() => {
    removeMock()
  })
})
