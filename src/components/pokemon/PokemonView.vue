<script>
  import PokemonService from '@/domain/Pokemon/PokemonService'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
  import capitalize from '@/filters/capitalize'
  import divide from '@/filters/divide'
  import MoveList from '../moves/MoveList.vue'

  export default {
    name: 'pokemonView',
    components: {
      ClipLoader,
      MoveList
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
          .catch(err => {
            console.log('Error loading pokemon - Pokemon View', err)
          })
      },
      getImage (id) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/${id}.png`
      },
      imageNotFound (event) {
        // Fallback for image not found
        let el = event.target
        el.onerror = null
        el.src = '/static/not-found.jpg'
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
    <!-- Pokémon Loading -->
      <div class="card" v-if="loading">
        <div class="card-stacked">
          <div class="card-content">
            <clip-loader :loading="loading" color="red" size="3em" />
          </div>
        </div>
      </div>
      <!-- End Pokémon Loading -->
      <!-- Pokémon Status -->
      <div class="card" v-if="!loading && !pokemon">
        <div class="card-stacked">
          <div class="card-content">
            <h2>No Pokémon Selected</h2>
          </div>
        </div>
      </div>
      <!-- End Pokémon Status -->
      <!-- View Pokémon -->
      <div class="card horizontal" v-if="!loading && pokemon">
        <div class="card-image">
          <img :src="getImage(pokemon.id)" @error="imageNotFound($event)">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <span class="card-title">{{ pokemon.name | capitalize }}</span>
            <p><b>Weight:</b> {{ pokemon.weight | divide }} kg</p>
            <p><b>Height:</b> {{ pokemon.height | divide }} m</p>
          </div>
        </div>
      </div>
      <!-- End View Pokémon -->
      <move-list v-if="pokemon && !loading" :moveList="pokemon.moves"/>
    </div>
</template>
