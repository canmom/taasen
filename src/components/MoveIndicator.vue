<template>
<div id="indicator">
  <p>
    <faction-triangle :faction="faction"></faction-triangle>
    <strong>{{faction}}</strong> <span v-if="pushed === null">to move</span><span v-else>just moved</span>
  </p>
  <p id="pushedindicator" v-if="pushed !== null">
    <faction-triangle :faction="pushed"></faction-triangle>
    <strong>{{pushed}}</strong> <span v-if="moving !==null">to choose where pushed piece goes</span><span v-else>will be pushed</span>
  </p>
  <p id="choosepushedindicator" v-if="pushed !== null && moving === null">
    <faction-triangle :faction="faction"></faction-triangle>
    <strong>{{faction}}</strong> to choose which piece to push
  </p>
  <div id="crushedindicator" v-if="crushed.length">
    <h2>crushed pieces:</h2>
    <svg viewBox="0 0 8 1">
      <piece v-for="(piece, index) in crushed" :key="piece.id" :loc="{x:0.5+index*1.02,y:0.5}" :r="0.35" :piece="piece.piece" :faction="piece.faction" :starting="0" state="selectable"></piece>
    </svg>
  </div>
</div>
</template>

<script>
import FactionTriangle from './FactionTriangle'
import Piece from './Piece'

export default {
  props: {
    faction: {
      validator: (value) => { return ['red', 'green'].includes(value) }
    },
    pushed: {
      validator (value) {
        return (value) => { return ['red', 'green', null].includes(value) }
      }
    },
    moving: null,
    crushed: null
  },
  components: {
    FactionTriangle,
    Piece
  }
}
</script>

<style>
#indicator {
  width: max-content;
  position: absolute;
  left: 48vmin;
  top: 3.2vmin;
  transform-origin: top left;
}
#indicator p {
  margin: 0;
}
#indicator svg {
  display: inline-block;
  margin-bottom: -0.72em;
  margin-right: 0.2em;
  width: 2em;
}
p#pushedindicator {
  margin-top: 0.2em;
  margin-left: 1em;
}
p#choosepushedindicator {
  margin-top: 0.2em;
  margin-left: 2em;
}
#crushedindicator {
  position: absolute;
  width: max-content;
  top: 5.8em;
  left: 3.4em;
}
#crushedindicator h2 {
  font-size: 1em;
  font-weight: normal;
  font-style: italic;
  margin: 0;
}
#crushedindicator svg {
  margin-top: 0.2em;
  margin-left: 1em;
  width: 12em;
}
</style>
