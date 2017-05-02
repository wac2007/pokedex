import PokemonView from '@/components/pokemon/PokemonView.vue'
import { mountComponent, mockData, removeMock } from '../../../helpers'

import data from '../../../mocks/MockPokemonGet.json'
import dataSpecie from '../../../mocks/MockSpeciesGet.json'

describe('PokemonView.vue - Pokemon', () => {
  let elm
  before(() => {
    localStorage.clear()
    mockData(data)
    elm = mountComponent(PokemonView, {})
  })
  it('Deve Renderizar o componente corretamente', () => {
    expect(elm.$el.id).to.equal('pokemon-view')
  })
  it('Deve carregar o Pokémon corretamente', done => {
    let pokemonName = 'bulbasaur'
    elm.$on('pokemonLoaded', () => {
      expect(elm.pokemon.name).to.equal(pokemonName)
      done()
    })
    elm.getPokemon(pokemonName)
  })
  after(() => {
    removeMock()
  })
})
