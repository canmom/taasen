<template>
<div class="game">
  <move-indicator :faction="toMove" :pushed="toBePushed"></move-indicator>
  <svg class="board" viewBox="0 0 4 3.5">
    <tile v-for="tile in tiles" :x="tile.x" :y="tile.y" :up="tile.u" :r="tileRadius" :t="tile.t"></tile>
    <destination-overlay v-for="(dest,destLabel) in destinations" :x="dest.x" :y="dest.y" :up="dest.u" :r="tileRadius" v-on:move="movePiece(destLabel)"></destination-overlay>
    <piece v-for='(piece, pieceIndex) in pieces' :loc='piece.loc' :r='pieceRadius' :piece='piece.piece' :faction='piece.faction' :starting='piece.starting' :state='piece.state' v-on:select='beginMoving(pieceIndex)'></piece>
  </svg>
</div>
</template>

<script>
import Tile from './Tile'
import {tiles, tileRadius} from './Tiles'
import Piece from './Piece'
import DestinationOverlay from './DestinationOverlay'
import MoveIndicator from './MoveIndicator'

class GamePiece {
  constructor (faction, piece) {
    this.faction = faction
    this.piece = piece
    this.loc = {red: 'a1', green: 'a7', blue: 'd4'}[faction]
    this.starting = true
    this.state = 'selectable'
  }
}

export default {
  data: function () {
    var pieces = [];

    ['red', 'green', 'blue'].map(function (faction) {
      ['thaum', 'sciane', 'paupil'].map(function (piece) {
        pieces.push(new GamePiece(faction, piece))
      })
    })

    return {
      tiles: tiles,
      pieces: pieces,
      tileRadius: tileRadius,
      pieceRadius: 0.2 * tileRadius,
      destinations: {},
      moving: null,
      pushed: new Set(),
      toMove: 'red',
      toBePushed: null
    }
  },
  components: {
    Tile,
    Piece,
    DestinationOverlay,
    MoveIndicator
  },
  methods: {
    opposingSide: function () {
      return this.toMove === 'red' ? 'green' : 'red'
    },
    resetMoving: function () {
      this.moving = null
      this.destinations = {}
    },
    nextTurn: function () {
      var opposing = this.toMove
      this.toMove = this.opposingSide()
      for (var piece of this.pieces) {
        if (piece.faction === opposing) {
          piece.state = 'nonselectable'
        } else {
          piece.state = 'selectable'
        }
      }
    },
    setUpPush: function () {
      this.toBePushed = this.opposingSide()
    },
    movePiece: function (destination) {
      this.pieces[this.moving].loc = destination
      this.pieces[this.moving].starting = false

      this.getPushed(destination)
      this.resetMoving()
      if (this.pushed.size !== 0) {
        this.setUpPush()
      } else {
        this.nextTurn()
      }
    },
    showDestinations: function (tileLabel) {
      for (var label of tiles[tileLabel].a) {
        var unoccupied = true
        for (var piece of this.pieces) {
          unoccupied = unoccupied && piece.loc !== label
        }
        if (unoccupied) this.destinations[label] = tiles[label]
      }
    },
    beginMoving: function (pieceIndex) {
      this.resetMoving()
      if (this.pieces[pieceIndex].faction === this.toMove || this.pieces[pieceIndex].faction === 'blue') {
        this.moving = pieceIndex
        this.pieces[pieceIndex].state = 'selected'
        this.showDestinations(this.pieces[pieceIndex].loc)
      }
    },
    getPushed: function (destination) {
      this.pushed.clear()

      var movingPiece = this.pieces[this.moving]
      var pushedPieceType = {thaum: 'sciane', sciane: 'paupil', paupil: 'thaum'}[movingPiece.piece]

      for (var label of tiles[destination].p || tiles[destination].a) {
        for (var piece of this.pieces) {
          if (piece.loc === label && piece.piece === pushedPieceType && piece.faction !== movingPiece.faction) {
            this.pushed.add([label, piece])
          }
        }
      }
    }
  }
}
</script>

<style>
.game {
  width: 100%;
}
.board {
  width: 45%;
  height: 39.375%;
  margin: 0 auto;
  display: block;
}
</style>