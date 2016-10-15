<template>
<div class="board">
  <svg width="600" height="600" viewBox="0 0 4 4">
    <tile v-for="tile in tiles" :x="tile.x" :y="tile.y" :up="tile.u" :r="tileRadius" :t="tile.t"></tile>
    <piece v-for='piece in pieces' :loc='piece.loc' :r='pieceRadius' :piece='piece.piece' :faction='piece.faction' :starting='piece.starting'></piece>
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
        {faction: 'red', piece: 'thaum', loc: 'a1', starting: true},
        {faction: 'red', piece: 'sciane', loc: 'a1', starting: true},
        {faction: 'red', piece: 'paupil', loc: 'a1', starting: true},
        {faction: 'green', piece: 'thaum', loc: 'a7', starting: true},
        {faction: 'green', piece: 'sciane', loc: 'a7', starting: true},
        {faction: 'green', piece: 'paupil', loc: 'a7', starting: true},
        {faction: 'blue', piece: 'thaum', loc: 'd4', starting: true},
        {faction: 'blue', piece: 'sciane', loc: 'd4', starting: true},
        {faction: 'blue', piece: 'paupil', loc: 'd4', starting: true}
      ],
      tileRadius: tileRadius,
      pieceRadius: 0.2 * tileRadius
    }
  },
  components: {
    Tile,
    Piece
  },
  methods: {
    movePiece: function (pieceIndex, destination) {
      this.pieces[pieceIndex].loc = destination
      this.pieces.starting = false
    }
  }
}
</script>

<style>
.board {
  margin: 0 auto;
  width: max-content;
}
</style>