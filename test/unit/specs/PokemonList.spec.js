import Vue from 'vue'
import PokemonList from '@/components/pokemon-list/PokemonList.vue'
import VueResource from 'vue-resource'
import { mountComponent } from '../helpers'

Vue.use(VueResource)
Vue.http.options.root = 'http://pokeapi.co/api/v2'
import data from '../mocks/MockPokemonList.json'

// Interceptor
Vue.http.interceptors.unshift((request, next) => {
  next(request.respondWith(JSON.stringify(data), {
    status: 200,
    body: JSON.stringify(data)
  }))
})

describe('PokemonList.vue', () => {
  it('Deve Renderizar o componente corretamente', () => {
    let vm = mountComponent(PokemonList, {})
    expect(vm.$el.id).to.equal('pokemon-list')
  })
})
