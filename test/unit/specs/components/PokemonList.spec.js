import PokemonList from '@/components/pokemon-list/PokemonList.vue'
import { mountComponent, mockData, removeMock } from '../../helpers'

import data from '../../mocks/MockPokemonList.json'

describe('PokemonList.vue', () => {
  let elm

  before(done => {
    mockData(data)
    elm = mountComponent(PokemonList, {})
    done()
  })
  it('Deve Renderizar o componente corretamente', () => {
    expect(elm.$el.id).to.equal('pokemon-list')
  })
  it('Deve transmitir o evento de fim do carregamento', done => {
    elm.$on('finishLoadingPokemons', () => {
      done()
    })
  })
  it('Deve transmitir o evento de pokémon selecionado', done => {
    let pokemon = elm.$el.querySelector('.pokemon-item')
    elm.$events.$on('selectedPokemon', pokemonName => {
      expect(pokemonName).to.equal('bulbasaur')
      done()
    })
    pokemon.click()
  })
  after(() => {
    removeMock()
  })
})
