import PokemonList from '@/components/pokemon-list/PokemonList.vue'
import { mountComponent } from '../../helpers'

describe('PokemonList.vue', () => {
  it('Deve Renderizar o componente corretamente', () => {
    let vm = mountComponent(PokemonList, {})
    expect(vm.$el.id).to.equal('pokemon-list')
  })
})
