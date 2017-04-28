import Vue from 'vue'
import PokemonService from '@/domain/Pokemon/PokemonService'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'http://pokeapi.co/api/v2'
import data from '../mocks/MockPokemonList.json'

Vue.http.interceptors.unshift((request, next) => {
  next(request.respondWith(JSON.stringify(data), {
    status: 200,
    body: JSON.stringify(data)
  }))
})

describe('PokemonListService', () => {
  let service
  before(function () {
    service = new PokemonService(Vue.resource)
  })
  it('Pokémons deve ser um array', done => {
    service.listPokemons(0)
      .then(response => {
        expect(response.results).to.be.an('array')
        done()
      })
  })
  it('Objeto Pokémon deve conter um nome e url', function (done) {
    this.timeout(5000)
    service.listPokemons(0)
      .then(response => {
        let pokemon = response.results[0]
        expect(pokemon).to.have.property('name')
        expect(pokemon).to.have.property('url')
        done()
      })
  })
})
