<script>
  import capitalize from '@/filters/capitalize'
  export default {
    name: 'moveList',
    props: ['moveList'],
    filters: {
      capitalize
    },
    data () {
      return {
        selectedMove: ''
      }
    },
    methods: {
      selectMove (moveName) {
        this.$events.$emit('selectedMove', moveName)
        this.selectedMove = moveName
      }
    },
    created () {
    }
  }
</script>
<template>
  <div id="move-list">
    <div class="card" v-if="moveList">
      <div class="card-content">
        <span class="card-title">Moves</span>
        <ul class="collection">
          <li class="collection-item move-item" v-for="move in moveList" 
            @click="selectMove(move.move.name)" 
            :class="{active: move.move.name === selectedMove}">
              {{ move.move.name | capitalize }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .card {
    .card-content {
      padding: 0;
      .card-title {
        padding: 14px 24px;
        margin-bottom: 0;
      }
    }
  }
  .collection {
    margin-top: 0;
    .collection-item {
      cursor: pointer;
      &.active {
        background-color: #EE6E73;
        color: #FFF;
      }
    }
  }
</style>
