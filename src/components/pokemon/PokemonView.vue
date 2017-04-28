<script>
  import PokemonService from '@/domain/Pokemon/PokemonService'
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

  export default {
    name: 'pokemonView',
    components: {
      PulseLoader
    },
    data () {
      return {
        pokemon: null,
        loading: false
      }
    },
    methods: {
      getPokemon (pokemonName) {
        this.loading = true
        this.service.getPokemon(pokemonName)
          .then(data => {
            this.pokemon = data || null
            this.loading = false
            this.$emit('pokemonLoaded')
          })
      }
    },
    created () {
      this.$events.$on('selectedPokemon', pokemonName => this.getPokemon(pokemonName))
      this.service = new PokemonService(this.$resource)
    }
  }
</script>
<template>
  <div id="pokemon-view">
    <pulse-loader :loading="loading" color="red" size="20px"></pulse-loader>
    <h2 v-if="!loading && !pokemon">No Pokémon Selected</h2>
    <div v-if="!loading && pokemon">
      <h2>{{ pokemon.name }}</h2>
    </div>
  </div>
</template>
