import Vue from 'vue'
import PokemonList from '@/components/pokemon-list/PokemonList.vue'

describe('PokemonList.vue', () => {
  it('Deve Renderizar o componente corretamente', () => {
    const vm = new Vue(PokemonList).$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Pokémon List')
  })
  it('Deve popular o array de Pokemons', () => {
    const vm = new Vue(PokemonList)
    spyOn(vm, "list")
    vm.$mount()
    expect(vm.list).toHaveBeenCalled();
  })
})

describe('PokemonListService', () => {

})
