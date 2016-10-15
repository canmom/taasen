<template>
<div class="board">
  <svg width="600" height="600" viewBox="0 0 4 4">
    <tile v-for="tile in tiles" :x="tile.x" :y="tile.y" :up="tile.u" :r="tileRadius" :t="tile.t"></tile>
    <destination-overlay v-for="(dest,destLabel) in destinations" :x="dest.x" :y="dest.y" :up="dest.u" :r="tileRadius" v-on:move="movePiece(destLabel)"></destination-overlay>
    <piece v-for='(piece, pieceIndex) in pieces' :loc='piece.loc' :r='pieceRadius' :piece='piece.piece' :faction='piece.faction' :starting='piece.starting' :selected='piece.selected' v-on:select='beginMoving(pieceIndex)'></piece>
  </svg>
</div>
</template>

<script>
import Tile from './Tile'
import {tiles, tileRadius} from './Tiles'
import Piece from './Piece'
import DestinationOverlay from './DestinationOverlay'

export default {
  data: function () {
    return {
      tiles: tiles,
      pieces: [
        {faction: 'red', piece: 'thaum', loc: 'a1', starting: true, selected: false},
        {faction: 'red', piece: 'sciane', loc: 'a1', starting: true, selected: false},
        {faction: 'red', piece: 'paupil', loc: 'a1', starting: true, selected: false},
        {faction: 'green', piece: 'thaum', loc: 'a7', starting: true, selected: false},
        {faction: 'green', piece: 'sciane', loc: 'a7', starting: true, selected: false},
        {faction: 'green', piece: 'paupil', loc: 'a7', starting: true, selected: false},
        {faction: 'blue', piece: 'thaum', loc: 'd4', starting: true, selected: false},
        {faction: 'blue', piece: 'sciane', loc: 'd4', starting: true, selected: false},
        {faction: 'blue', piece: 'paupil', loc: 'd4', starting: true, selected: false}
      ],
      tileRadius: tileRadius,
      pieceRadius: 0.2 * tileRadius,
      destinations: {},
      moving: null,
      pushed: null,
      toMove: 'red'
    }
  },
  components: {
    Tile,
    Piece,
    DestinationOverlay
  },
  methods: {
    resetMoving: function () {
      if (typeof this.moving === 'number') {
        this.pieces[this.moving].selected = false
      }
      this.moving = null
      this.destinations = {}
    },
    movePiece: function (destination) {
      this.pieces[this.moving].loc = destination
      this.pieces[this.moving].starting = false
      this.resetMoving()
    },
    showDestinations: function (tileLabel) {
      for (let label of tiles[tileLabel].a) {
        var unoccupied = true
        for (let piece of this.pieces) {
          unoccupied = unoccupied && piece.loc !== label
        }
        if (unoccupied) this.destinations[label] = tiles[label]
      }
    },
    beginMoving: function (pieceIndex) {
      this.resetMoving()
      this.moving = pieceIndex
      var tileLabel = this.pieces[pieceIndex].loc
      this.pieces[pieceIndex].selected = true
      this.showDestinations(tileLabel)
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