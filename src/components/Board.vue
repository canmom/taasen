<template>
<div class="game">
  <move-indicator :faction="toMove" :pushed="toBePushed" :moving="moving" :crushed="crushed"></move-indicator>
  <svg class="board" viewBox="0 0 4 3.5">
    <tile
      v-for="tile in tiles"
      :x="tile.x"
      :y="tile.y"
      :up="tile.u"
      :r="tileRadius"
      :t="tile.t">
      </tile>
    <pushed-overlay
      v-for="pushedPiece in [...pushed.values()]"
      :x="tiles[pushedPiece.loc].x"
      :y="tiles[pushedPiece.loc].y"
      :up="tiles[pushedPiece.loc].u"
      :r="tileRadius">
      </pushed-overlay>
    <destination-overlay
      v-for="(dest,destLabel) in destinations"
      :x="dest.x"
      :y="dest.y"
      :up="dest.u"
      :r="tileRadius"
      v-on:move="movePiece(destLabel)">
      </destination-overlay>
    <piece
      v-for='piece in pieces'
      :loc='piece.loc'
      :r='pieceRadius'
      :piece='piece.piece'
      :faction='piece.faction'
      :starting='piece.starting'
      :state='piece.state'
      v-on:select='beginMoving(piece)'>
      </piece>
  </svg>
</div>
</template>

<script>
import Tile from './Tile'
import {tiles, tileRadius} from './Tiles'
import Piece from './Piece'
import DestinationOverlay from './DestinationOverlay'
import PushedOverlay from './PushedOverlay'
import MoveIndicator from './MoveIndicator'

class GamePiece {
  constructor (faction, piece) {
    this.faction = faction
    this.piece = piece
    this.loc = {red: 'a1', green: 'a7', blue: 'd4'}[faction]
    this.starting = true
    this.state = faction !== 'green' ? 'selectable' : 'nonselectable'
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
      toBePushed: null,
      crushed: [],
      pushedPreviousTurn: null,
      bluePieceMovedPreviousTurn: null
    }
  },
  components: {
    Tile,
    Piece,
    DestinationOverlay,
    PushedOverlay,
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
        if (piece.faction === opposing || piece === this.pushedPreviousTurn || piece === this.bluePieceMovedPreviousTurn) {
          piece.state = 'nonselectable'
        } else {
          piece.state = 'selectable'
        }
      }
    },
    getPushed: function (destination) {
      this.pushed.clear()

      var pushedPieceType = {thaum: 'sciane', sciane: 'paupil', paupil: 'thaum'}[this.moving.piece]

      for (var label of tiles[destination].p || tiles[destination].a) {
        for (var piece of this.pieces) {
          if (piece.loc === label && piece.piece === pushedPieceType && piece.faction !== this.toMove && piece.faction !== this.moving.faction) {
            this.pushed.add(piece)
          }
        }
      }
    },
    setUpPush: function () {
      this.toBePushed = this.opposingSide()
      for (var piece of this.pieces) {
        if (this.pushed.has(piece)) {
          piece.state = 'pushed'
        } else {
          piece.state = 'nonselectable'
        }
      }
    },
    movePiece: function (destination) {
      // called when a player chooses a destination to which to move a piece
      this.moving.loc = destination
      this.moving.starting = false
      this.pushedPreviousTurn = null

      if (this.toBePushed) { // if we are moving to resolve a push
        this.pushed.clear()
        this.pushedPreviousTurn = this.moving
        this.toBePushed = null
      } else {
        if (this.moving.faction === 'blue') {
          this.bluePieceMovedPreviousTurn = this.moving
        } else {
          this.bluePieceMovedPreviousTurn = null
        }
        this.getPushed(destination)
      }

      this.resetMoving()

      if (this.pushed.size !== 0) {
        this.setUpPush()
        if (this.pushed.size === 1) {
          this.beginMoving(this.pushed.values().next().value) // if there is only one entry in the set of pushed pieces, begin moving it right away
        }
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
    crushPiece: function (piece) {
      this.crushed.push(piece)
      this.pieces.splice(this.pieces.indexOf(piece), 1) // delete the piece from the pieces array
      this.pushed.clear()
      this.toBePushed = null
      this.resetMoving()
      this.nextTurn()
    },
    beginMoving: function (piece) {
      // called when a player clicks on a piece
      if (piece.state === 'pushed' || piece.state === 'selectable') {
        this.resetMoving()
        this.moving = piece
        piece.state = 'selected'
        this.showDestinations(piece.loc)
      } else if (piece.state === 'selected' && !this.toBePushed) {
        this.resetMoving()
        piece.state = 'selectable'
      }

      if (this.toBePushed && Object.keys(this.destinations).length === 0) {
        this.crushPiece(piece)
      }
    }
  }
}
</script>

<style>
.game {
  max-width: 90vmin;
  max-height: 90vmax;
  width: 100%;
  position: fixed; /* Necessary to make this a Containing Block and allow fixed positioning relative to it.*/
}
.board {
  display: block;
  max-height: 100%;
}
</style>
