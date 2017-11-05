<template>
<div class="game">
  <move-indicator :faction="toMove" :pushed="toBePushed" :moving="moving" :crushed="crushed"></move-indicator>
  <svg class="board" viewBox="0 0 4 3.5">
    <tile
      v-for="tile in tiles"
      :x="tile.x()"
      :y="tile.y()"
      :up="tile.up()"
      :r="tileRadius"
      :key="tile.id()"
      :t="tile.terrain()">
      </tile>
    <pushed-overlay
      v-for="pushedPiece in Array.from(pushed.values())"
      :x="getTile(pushedPiece.loc).x()"
      :y="getTile(pushedPiece.loc).y()"
      :up="getTile(pushedPiece.loc).up()"
      :key="getTile(pushedPiece.loc).id()"
      :r="tileRadius">
      </pushed-overlay>
    <destination-overlay
      v-for="dest in destinations"
      :x="dest.x()"
      :y="dest.y()"
      :up="dest.up()"
      :r="tileRadius"
      :key="dest.id()"
      v-on:move="movePiece(dest.id())">
      </destination-overlay>
    <piece
      v-for='piece in pieces'
      :loc='piece.loc'
      :r='pieceRadius'
      :piece='piece.piece'
      :faction='piece.faction'
      :starting='piece.starting'
      :state='piece.state'
      :key='piece.id'
      v-on:select='beginMoving(piece)'>
      </piece>
  </svg>
</div>
</template>

<script>
import Tile from './Tile'
import {tiles, tileRadius, getTile} from './Tiles'
import Piece from './Piece'
import DestinationOverlay from './DestinationOverlay'
import PushedOverlay from './PushedOverlay'
import MoveIndicator from './MoveIndicator'

class GamePiece {
  constructor (faction, piece) {
    this.faction = faction
    this.piece = piece
    this.id = faction + piece
    this.loc = {red: 'a1', green: 'a7', blue: 'd4'}[faction]
    this.starting = true
    this.state = faction !== 'green' ? 'selectable' : 'nonselectable'
  }

  destinations (pieces) {
    return getTile(this.loc)
      .adjacent()
      .filter((tileLabel) => getTile(tileLabel).unoccupied(pieces))
      .map(label => getTile(label))
  }
}

function generateBoard () {
  const pieces = [];

  ['red', 'green', 'blue'].map(function (faction) {
    ['thaum', 'sciane', 'paupil'].map(function (piece) {
      pieces.push(new GamePiece(faction, piece))
    })
  })

  return {
    tiles,
    pieces,
    tileRadius,
    pieceRadius: 0.2 * tileRadius,
    destinations: [],
    moving: null,
    pushed: new Set(),
    toMove: 'red',
    toBePushed: null,
    crushed: [],
    pushedPreviousTurn: null,
    bluePieceMovedPreviousTurn: null
  }
}

export default {
  data: generateBoard,
  components: {
    Tile,
    Piece,
    DestinationOverlay,
    PushedOverlay,
    MoveIndicator
  },
  methods: {
    opposingSide () {
      return this.toMove === 'red' ? 'green' : 'red'
    },
    resetMoving () {
      this.moving = null
      this.destinations = []
    },
    determineSelectable (opposing) {
      for (const piece of this.pieces) {
        if (piece.faction === opposing || piece === this.pushedPreviousTurn || piece === this.bluePieceMovedPreviousTurn) {
          piece.state = 'nonselectable'
        } else {
          piece.state = 'selectable'
        }
      }
    },
    nextTurn () {
      const opposing = this.toMove
      this.toMove = this.opposingSide()
      if (this.checkDefeat()) {
        this.declareVictory(this.opposingSide())
      } else {
        this.determineSelectable(opposing)
      }
    },
    getPushed (destination) {
      this.pushed.clear()

      const pushedPieceType = {thaum: 'sciane', sciane: 'paupil', paupil: 'thaum'}[this.moving.piece]

      for (const label of getTile(destination).pushes()) {
        for (const piece of this.pieces) {
          if (piece.loc === label && piece.piece === pushedPieceType && piece.faction !== this.toMove && piece.faction !== this.moving.faction) {
            this.pushed.add(piece)
          }
        }
      }
    },
    setUpPush () {
      this.toBePushed = this.opposingSide()
      for (const piece of this.pieces) {
        if (this.pushed.has(piece)) {
          piece.state = 'pushed'
        } else {
          piece.state = 'nonselectable'
        }
      }
    },
    resolvePush () {
      this.pushed.clear()
      this.pushedPreviousTurn = this.moving
      this.toBePushed = null
    },
    movePiece (destination) {
      // called when a player chooses a destination to which to move a piece
      this.moving.loc = destination
      this.moving.starting = false
      this.pushedPreviousTurn = null

      if (this.toBePushed) { // if we are moving to resolve a push
        this.resolvePush()
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
    crushPiece (piece) {
      this.crushed.push(piece)
      this.pieces.splice(this.pieces.indexOf(piece), 1) // delete the piece from the pieces array
      this.pushed.clear()
      this.toBePushed = null
      this.resetMoving()
      this.nextTurn()
    },
    beginMoving (piece) {
      // called when a player clicks on a piece
      if (piece.state === 'pushed' || piece.state === 'selectable') {
        this.resetMoving()
        this.determineSelectable(this.opposingSide())
        this.moving = piece
        piece.state = 'selected'
        this.destinations = piece.destinations(this.pieces)
      } else if (piece.state === 'selected' && !this.toBePushed) {
        this.resetMoving()
        piece.state = 'selectable'
      }

      if (this.toBePushed && this.destinations.length === 0) {
        this.crushPiece(piece)
      }
    },
    checkDefeat () {
      return this.factionHasNoPieces(this.toMove)
    },
    factionHasNoPieces (faction) {
      return !this.pieces.find((piece) => { return piece.faction === faction })
    },
    declareVictory (faction) {
      this.$emit('victory', { winner: faction })
    },
    resetBoard (faction) {
      Object.assign(this.$data, generateBoard())
    },
    getTile
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
