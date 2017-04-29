<script>
  import PokemonService from '@/domain/Pokemon/PokemonService'
  import MugenScroll from 'vue-mugen-scroll'
  import capitalize from '@/filters/capitalize'
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

  export default {
    name: 'pokemonList',
    components: {
      MugenScroll,
      PulseLoader
    },
    filters: {
      capitalize
    },
    data () {
      return {
        pokemons: [],
        nextUrl: '',
        offset: 0,
        selectedPokemon: '',
        loading: false,
        searchName: ''
      }
    },
    methods: {
      list () {
        this.loading = true
        this.service.listPokemons(this.offset, this.searchName)
          .then(pokemons => {
            if (pokemons) {
              this.pokemons = this.pokemons.concat(pokemons)
              this.offset += pokemons.length
            }
            this.loading = false
            this.$emit('finishLoadingPokemons')
          })
      },
      refreshList () {
        this.pokemons = []
        this.offset = 0
        this.list()
      },
      selectPokemon (pokemonName) {
        this.$events.$emit('selectedPokemon', pokemonName)
        this.selectedPokemon = pokemonName
      }
    },
    created () {
      this.service = new PokemonService(this.$resource)
      this.refreshList()
    }
  }
</script>

<template>
  <div id="pokemon-list" class="side-nav fixed" ref="scrollContainer">
    <div>
      <ul class="collection">
        <li class="collection-item">
          <input type="text" name="searchName" placeholder="Search a Pokemon" v-model="searchName" @input="refreshList"/>
        </li>
        <li v-for="pokemon in pokemons" :class="{active: selectedPokemon == pokemon.name}" class="pokemon-item collection-item" @click="selectPokemon(pokemon.name)">
          {{ pokemon.name | capitalize }}
        </li>
      </ul>
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
