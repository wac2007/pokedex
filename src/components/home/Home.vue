<script>
  import PokemonList from '../pokemon/PokemonList.vue'
  import PokemonView from '../pokemon/PokemonView.vue'
  import MoveView from '../moves/MoveView.vue'
  import CommentList from '../comment/CommentList.vue'

  export default {
    name: 'home',
    components: {
      PokemonList,
      PokemonView,
      MoveView,
      CommentList
    }
  }
</script>

<template>
  <div id="home">
    <pokemon-list/>
    <div class="row">
      <div class="col s12 text-center">
        <img alt="Pokédex" src="/static/pokedex_logo.png" />
      </div>
    </div>
    <div class="row">
      <div class="col s12 m7">
        <pokemon-view/>
      </div>
      <div class="col s12 m5">
        <move-view/>
      </div>
      <div class="col s12 m5">
        <comment-list/>
      </div>
    </div>
  </div>
</template>

<style>
  .text-center {
    text-align: center;
  }
</style>
