<template>
<div id="indicator">
  <p>
    <svg width="50" height="50" viewBox="0 0 1 1"> 
      <triangle :x="x" :y="y" :r="rOuter" :up="u" :style='style'></triangle>
      <triangle :x="x" :y="y" :r="rInner" :up="u" :style='styleInner'></triangle>
    </svg>
    <strong>{{faction}}</strong> <span v-if="pushed === null">to move</span><span v-else>just moved</span>
  </p>
  <p id="pushedindicator" v-if="pushed !== null">
    <svg width="50" height="50" viewBox="0 0 1 1">
      <triangle :x="x" :y="y" :r="rOuter" :up="u" :style='stylePushed'></triangle>
      <triangle :x="x" :y="y" :r="rInner" :up="u" :style='stylePushedInner'></triangle>
    </svg>
    <strong>{{pushed}}</strong> has been pushed
  </p>
  <p id="choosepushedindicator" v-if="pushed !== null && moving === null">
    <svg width="50" height="50" viewBox="0 0 1 1"> 
      <triangle :x="x" :y="y" :r="rOuter" :up="u" :style='style'></triangle>
      <triangle :x="x" :y="y" :r="rInner" :up="u" :style='styleInner'></triangle>
    </svg>
    <strong>{{faction}}</strong> to choose which piece to push
  </p>
</div>
</template>

<script>
import Triangle from './Triangle'
import colours from './Colours'

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
    moving: null
  },
  components: {
    Triangle
  }
}
</script>

<style>
#indicator {
  font-family: "Linux Biolinum", sans-serif;
  font-size: 25px;
  width: max-content;
  position: absolute;
  left: 53%;
  top: 40px;
}
#indicator p {
  margin: 0;
}
#indicator svg {
  display: inline-block;
  margin-bottom: -18px;
  margin-right: 5px;
}
p#pushedindicator {
  margin-top:5px;
  margin-left: 25px;
}
p#choosepushedindicator {
  margin-top: 5px;
  margin-left: 50px;
}
</style>