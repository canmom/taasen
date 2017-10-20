<template>
<div id="indicator">
  <p>
    <svg viewBox="0 0 1 1">
      <triangle :x="x" :y="y" :r="rOuter" :up="u" :style='style'></triangle>
      <triangle :x="x" :y="y" :r="rInner" :up="u" :style='styleInner'></triangle>
    </svg>
    <strong>{{faction}}</strong> <span v-if="pushed === null">to move</span><span v-else>just moved</span>
  </p>
  <p id="pushedindicator" v-if="pushed !== null">
    <svg viewBox="0 0 1 1">
      <triangle :x="x" :y="y" :r="rOuter" :up="u" :style='stylePushed'></triangle>
      <triangle :x="x" :y="y" :r="rInner" :up="u" :style='stylePushedInner'></triangle>
    </svg>
    <strong>{{pushed}}</strong> <span v-if="moving !==null">to choose where pushed piece goes</span><span v-else>will be pushed</span>
  </p>
  <p id="choosepushedindicator" v-if="pushed !== null && moving === null">
    <svg viewBox="0 0 1 1">
      <triangle :x="x" :y="y" :r="rOuter" :up="u" :style='style'></triangle>
      <triangle :x="x" :y="y" :r="rInner" :up="u" :style='styleInner'></triangle>
    </svg>
    <strong>{{faction}}</strong> to choose which piece to push
  </p>
  <div id="crushedindicator" v-if="crushed.length">
    <h2>crushed pieces:</h2>
    <svg viewBox="0 0 8 1">
      <piece v-for="(piece, index) in crushed" :loc="{x:0.5+index*1.02,y:0.5}" :r="0.35" :piece="piece.piece" :faction="piece.faction" :starting="0" state="selectable"></piece>
    </svg>
  </div>
</div>
</template>

<script>
import Triangle from './Triangle'
import colours from './Colours'
import Piece from './Piece'

var validator = function (value) {
  return value === 'red' || value === 'green'
}

export default {
  data: function () {
    return {
      x: 0.5,
      y: 0.41,
      rOuter: 0.58,
      rInner: 0.3,
      u: -1
    }
  },
  computed: {
    style: function () {
      return {
        fill: this.faction === 'red' ? colours.outer.red : colours.outer.green
      }
    },
    styleInner: function () {
      return {
        fill: this.faction === 'red' ? colours.inner.red : colours.inner.green
      }
    },
    stylePushed: function () {
      return {
        fill: this.pushed === 'red' ? colours.outer.red : colours.outer.green
      }
    },
    stylePushedInner: function () {
      return {
        fill: this.pushed === 'red' ? colours.inner.red : colours.inner.green
      }
    }
  },
  props: {
    faction: {
      validator: validator
    },
    pushed: {
      validator: function (value) {
        return validator(value) || value === null
      }
    },
    moving: null,
    crushed: null
  },
  components: {
    Triangle,
    Piece
  }
}
</script>

<style>
#indicator {
  font-family: "Linux Biolinum", sans-serif;
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
