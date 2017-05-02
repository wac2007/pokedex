<script>
  import MoveService from '@/domain/Move/MoveService'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
  import capitalize from '@/filters/capitalize'
  import interpolation from '@/filters/interpolation'
  
  export default {
    name: 'moveView',
    data () {
      return {
        move: null,
        loading: false
      }
    },
    components: {
      ClipLoader
    },
    filters: {
      capitalize,
      interpolation
    },
    methods: {
      getMoveInfo (moveName) {
        this.loading = true
        this.service.getMove(moveName)
          .then(moveInfo => {
            this.move = moveInfo || null
            this.loading = false
            console.log(moveInfo)
            this.$emit('moveLoaded')
          })
      }
    },
    created () {
      this.$events.$on('selectedMove', moveName => this.getMoveInfo(moveName))
      this.service = new MoveService(this.$resource)
    }
  }
</script>
<template>
  <div id="move-info">
    <div class="card">
      <div class="card-content">
        <span class="card-title">Move Info</span>
        <div v-if="loading">
          Loading Move Info 
          <clip-loader :loading="loading" color="red" size="2em" />
        </div>
        <div v-if="!move && !loading">
          <span>No Move Selected</span>
        </div>
        <div v-if="move">
          <span class="card-subtitle">{{ move.name | capitalize }}</span>
          <ul>
            <li>Damage Type: {{ move.damage_class.name | capitalize }}</li>
            <li>Accuracy: {{ move.accuracy }}</li>
            <li>Power: {{ move.power }}</li>
            <li>Description: {{ move.effect_entries[0].effect | interpolation({ effect_chance: move.effect_chance}) }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .v-spinner {
    margin-top: 20px;
  }
</style>
