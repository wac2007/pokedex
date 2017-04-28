import Vue from 'vue'
import PokemonService from '@/domain/Pokemon/PokemonService'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'http://pokeapi.co/api/v2'
import data from '../../mocks/MockPokemonGet.json'
import { mockData, removeMock } from '../../helpers'

describe('PokemonListService', () => {
  let service
  before(function () {
    service = new PokemonService(Vue.resource)
    mockData(data)
  })
  it('Pokémons deve ser um array', done => {
    service.listPokemons(0, 'butterfree')
      .then(response => {
        console.log('resposta get', response)
        // expect(response.results).to.be.an('array')
        done()
      })
  })
  after(() => {
    removeMock()
  })
  // it('Objeto Pokémon deve conter um nome e url', function (done) {
  //   this.timeout(5000)
  //   service.listPokemons(0)
  //     .then(response => {
  //       let pokemon = response.results[0]
  //       expect(pokemon).to.have.property('name')
  //       expect(pokemon).to.have.property('url')
  //       done()
  //     })
  // })
})
