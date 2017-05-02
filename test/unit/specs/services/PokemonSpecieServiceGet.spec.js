import Vue from 'vue'
import PokemonSpecieService from '@/domain/PokemonSpecie/PokemonSpecieService'
import data from '../../mocks/MockSpeciesGet.json'
import { mockData, removeMock } from '../../helpers'

describe('PokemonSpecieServiceGet', () => {
  let serverResponse
  let service
  before(done => {
    localStorage.clear()
    mockData(data)
    service = new PokemonSpecieService(Vue.resource)
    service.getPokemonSpecie('bulbasaur')
      .then(response => {
        serverResponse = response
        done()
      })
  })
  it('Pokémon deve ser um objeto', () => {
    expect(serverResponse).to.be.an('object')
  })
  it('Pokémon deve ter o campo flavor_text_entries', () => {
    expect(serverResponse).to.have.property('flavor_text_entries')
  })
  after(() => {
    localStorage.clear()
    removeMock()
  })
})
