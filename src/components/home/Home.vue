<script>
import PokemonList from '../pokemon/PokemonList.vue'
import PokemonView from '../pokemon/PokemonView.vue'
export default {
  name: 'home',
  components: {
    PokemonList,
    PokemonView
  }
}
</script>

<template>
  <div id="home">
    <pokemon-list/>
    <div class="container">
      <div class="columns">
        <div class="column auto text-center">
          <h1>Pokontest</h1>
        </div>
      </div>
      <pokemon-view/>
    </div>
  </div>
</template>

<style>
  .text-center {
    text-align: center;
  }
</style>
