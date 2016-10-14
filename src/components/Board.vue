<template>
<svg width="600" height="600" viewBox="0 0 4 4">
  <tile v-for="tile in positions" :x="tile.x" :y="tile.y" :up="+1" :r="radius"></tile>
</svg>
</template>

<script>
import Tile from './Tile'

export default {
  data: function () {
    return {
      positions: [{x: 0.5, y: 3}, {x: 1.5, y: 3}, {x: 2.5, y: 3}, {x: 3.5, y: 3}],
      radius: 1 / Math.sqrt(3)
    }
  },
  components: {
    Tile
  }
}
</script>