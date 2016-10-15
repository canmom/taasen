<template>
<div class="board">
  <svg width="600" height="600" viewBox="0 0 4 4">
    <tile v-for="tile in tiles" :x="tile.x" :y="tile.y" :up="tile.u" :r="tileRadius" :t="tile.t"></tile>
    <piece :x="tiles[1].x" :y="tiles[1].y" :r="pieceRadius" piece="thaum" faction="red"></piece>
  </svg>
</div>
</template>

<script>
import Tile from './Tile'
import Piece from './Piece'

export default {
  data: function () {
    var tileRadius = 1 / Math.sqrt(3)
    var bX = 0.5           // x baseline
    var bY = 3.3           // y baseline
    var sX = 1             // x step
    var sY = -tileRadius * 1.5 // y step

    return {
      tiles: [
        {x: bX, y: bY, u: 1, t: 'void'},
        {x: bX + sX, y: bY, u: 1, t: 'desert2'},
        {x: bX + 2 * sX, y: bY, u: 1, t: 'desert2'},
        {x: bX + 3 * sX, y: bY, u: 1, t: 'void'},
        {x: bX + 0.5 * sX, y: bY + sY / 3, u: -1, t: 'desert1'},
        {x: bX + 1.5 * sX, y: bY + sY / 3, u: -1, t: 'grass'},
        {x: bX + 2.5 * sX, y: bY + sY / 3, u: -1, t: 'desert1'},
        {x: bX + 0.5 * sX, y: bY + sY, u: 1, t: 'desert2'},
        {x: bX + 1.5 * sX, y: bY + sY, u: 1, t: 'sea'},
        {x: bX + 2.5 * sX, y: bY + sY, u: 1, t: 'desert2'},
        {x: bX + sX, y: bY + 4 * sY / 3, u: -1, t: 'grass'},
        {x: bX + 2 * sX, y: bY + 4 * sY / 3, u: -1, t: 'grass'},
        {x: bX + sX, y: bY + 2 * sY, u: 1, t: 'desert2'},
        {x: bX + 2 * sX, y: bY + 2 * sY, u: 1, t: 'desert2'},
        {x: bX + 1.5 * sX, y: bY + 7 * sY / 3, u: -1, t: 'desert1'},
        {x: bX + 1.5 * sX, y: bY + 3 * sY, u: 1, t: 'void'}
      ],
      tileRadius: tileRadius,
      pieceRadius: 0.2 * tileRadius
    }
  },
  components: {
    Tile,
    Piece
  }
}
</script>

<style>
.board {
  margin: 0 auto;
  width: max-content;
}
</style>