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
    <div class="row">
      <div class="col s12">
        <h1>Pokontest</h1>
        <hr/>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m7">
        <pokemon-view/>
      </div>
    </div>
  </div>
</template>

<style>
  .text-center {
    text-align: center;
  }
</style>
