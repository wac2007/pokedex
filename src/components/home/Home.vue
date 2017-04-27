<script>
import PokemonList from '../pokemon-list/PokemonList.vue'
export default {
  name: 'home',
  components: {
    PokemonList
  }
}
</script>

<template>
  <div id="home">
    <div class="columns">
      <div class="column auto text-center">
        <h1>Pokontest</h1>
      </div>
    </div>
    <pokemon-list/>
  </div>
</template>

<style>
  .text-center {
    text-align: center;
  }
</style>
