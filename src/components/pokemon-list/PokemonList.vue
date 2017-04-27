<script>
  import PokemonService from '@/domain/Pokemon/PokemonService'
  import InfiniteLoading from 'vue-infinite-loading'

  export default {
    name: 'pokemonList',
    components: {
      InfiniteLoading
    },
    filters: {
      capitalize (text) {
        return text.charAt(0).toUpperCase() + text.slice(1)
      }
    },
    data () {
      return {
        pokemons: [],
        nextUrl: '',
        offset: 0,
        selectedPokemon: ''
      }
    },
    methods: {
      list () {
        this.service.list(this.offset).then(data => {
          this.pokemons = this.pokemons.concat(data.results)
          this.offset += data.results.length
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        })
      },
      selectPokemon (pokemonName) {
        this.$emit('pokemonSelected', pokemonName)
        this.selectedPokemon = pokemonName
      }
    },
    created () {
      this.service = new PokemonService(this.$resource)
    }
  }
</script>
<template>
  <div id="pokemon-list" class="side-nav fixed">
    <div>
      <ul class="collection">
        <li class="collection-item">
          <input type="text" class="" placeholder="Search a Pokemon"/>
        </li>
        <li v-for="pokemon in pokemons" :class="{active: selectedPokemon == pokemon.name}" class="collection-item" @click="selectPokemon(pokemon.name)">
          {{ pokemon.name | capitalize }}
        </li>
      </ul>
      <infinite-loading :on-infinite="list" ref="infiniteLoading"></infinite-loading>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .collection {
    margin: 0;
    .collection-item {
      cursor: pointer;
    }
  }
</style>
