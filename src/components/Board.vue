<template>
<div class="board">
  <svg width="600" height="600" viewBox="0 0 4 4">
    <tile v-for="tile in tiles" :x="tile.x" :y="tile.y" :up="tile.u" :r="tileRadius" :t="tile.t"></tile>
    <piece :x="tiles['a3'].x" :y="tiles['a3'].y" :r="pieceRadius" piece="thaum" faction="green"></piece>
    <piece :x="tiles['a4'].x" :y="tiles['a4'].y" :r="pieceRadius" piece="paupil" faction="blue"></piece>
    <piece :x="tiles['a5'].x" :y="tiles['a5'].y" :r="pieceRadius" piece="sciane" faction="red"></piece>
  </svg>
</div>
</template>

<script>
import Tile from './Tile'
import {tiles, tileRadius} from './Tiles'
import Piece from './Piece'

export default {
  data: function () {
    return {
      tiles: tiles,
      pieces: [
        {faction: 'red', piece: 'thaum', loc: 'a1'},
        {faction: 'red', piece: 'sciane', loc: 'a1'},
        {faction: 'red', piece: 'paupil', loc: 'a1'},
        {faction: 'green', piece: 'thaum', loc: 'a7'},
        {faction: 'green', piece: 'sciane', loc: 'a7'},
        {faction: 'green', piece: 'paupil', loc: 'a7'},
        {faction: 'blue', piece: 'thaum', loc: 'd4'},
        {faction: 'blue', piece: 'sciane', loc: 'd4'},
        {faction: 'blue', piece: 'paupil', loc: 'd4'}
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