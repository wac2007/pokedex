<script>
  import PokemonService from '@/domain/Pokemon/PokemonService'
  import MugenScroll from 'vue-mugen-scroll'
  import capitalize from '@/filters/capitalize'

  export default {
    name: 'pokemonList',
    components: {
      MugenScroll
    },
    filters: {
      capitalize: capitalize
    },
    data () {
      return {
        pokemons: [],
        nextUrl: '',
        offset: 0,
        selectedPokemon: '',
        loading: false
      }
    },
    methods: {
      list () {
        this.loading = true
        this.service.listPokemons(this.offset)
          .then(data => {
            if (data.results) {
              this.pokemons = this.pokemons.concat(data.results)
              this.offset += data.results.length
            }
            this.loading = false
            this.$emit('finishLoadingPokemons')
          })
      },
      selectPokemon (pokemonName) {
        this.$events.$emit('selectedPokemon', pokemonName)
        this.selectedPokemon = pokemonName
      }
    },
    created () {
      this.service = new PokemonService(this.$resource)
    }
  }
</script>

<template>
  <div id="pokemon-list" class="side-nav fixed" ref="scrollContainer">
    <div>
      <ul class="collection">
        <li class="collection-item">
          <input type="text" class="" placeholder="Search a Pokemon"/>
        </li>
        <li v-for="pokemon in pokemons" :class="{active: selectedPokemon == pokemon.name}" class="pokemon-item collection-item" @click="selectPokemon(pokemon.name)">
          {{ pokemon.name | capitalize }}
        </li>
      </ul>
      <mugen-scroll :handler="list" :should-handle="!loading" scroll-container="scrollContainer" :handleOnMount="true">
        loading...
      </mugen-scroll>
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
