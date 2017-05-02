import Vue from 'vue'
import PokemonService from '@/domain/Pokemon/PokemonService'
import data from '../../mocks/MockPokemonList.json'
import { mockData, removeMock } from '../../helpers'

describe('PokemonListService', () => {
  let serverResponse
  let service
  before(done => {
    localStorage.clear()
    mockData(data)
    service = new PokemonService(Vue.resource)
    service.listPokemons(0)
      .then(response => {
        serverResponse = response
        done()
      })
  })
  it('Pokémons deve ser um array', () => {
    expect(serverResponse).to.be.an('array')
  })
  it('Deve retornar 3 Pokémons', () => {
    expect(serverResponse.length).to.equal(3)
  })
  it('Objeto Pokémon deve conter um nome e url', () => {
    let pokemon = serverResponse[0]
    expect(pokemon).to.have.property('name')
    expect(pokemon).to.have.property('url')
  })
  it('Deve filtrar a lista de Pokémons', done => {
    service.listPokemons(0, 'bulba')
      .then(response => {
        expect(response.length).to.equal(1)
        done()
      })
  })
  after(() => {
    localStorage.clear()
    removeMock()
  })
})
