<template>
<svg width="600" height="600" viewBox="0 0 100 100">
  <tile :x="tileCentre.x" :y="tileCentre.y" :up="+1" :r="radius"></tile>
</svg>
</template>

<script>
import Tile from './Tile'

export default {
  data: function () {
    return {
      tileCentre: { x: 50, y: 50 },
      radius: 30
    }
  },
  components: {
    Tile
  }
}
</script>