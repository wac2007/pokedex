<script>
  import PokemonService from '@/domain/Pokemon/PokemonService'
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  import capitalize from '@/filters/capitalize'
  import divide from '@/filters/divide'

  export default {
    name: 'pokemonView',
    components: {
      PulseLoader
    },
    filters: {
      capitalize,
      divide
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
      },
      getImage (id) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/${id}.png`
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
    <div>
      <div class="row">
        <div class="col s12 m7">
          <div class="card" v-if="!loading && !pokemon">
            <div class="card-stacked">
              <div class="card-content">
                <h2>No Pokémon Selected</h2>
              </div>
            </div>
          </div>
          <div class="card horizontal" v-if="!loading && pokemon">
            <div class="card-image">
              <img :src="getImage(pokemon.id)">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <span class="card-title">{{ pokemon.name | capitalize }}</span>
                <p><b>Weight:</b> {{ pokemon.weight | divide }} kg</p>
                <p><b>Height:</b> {{ pokemon.height | divide }} m</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
