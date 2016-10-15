<template>
<g :class='elClass' >
  <circle class='outline' :cx='x' :cy='y' :r='coreRadius+strokeWidth' />
  <line v-if='isSciane' :x1='x-scianeArmLength-strokeWidth/2' :x2='x+scianeArmLength+strokeWidth/2' :y1='y' :y2='y' :style='outlineStrokeStyle'/>
  <line v-if='isSciane' :y1='y-scianeArmLength-strokeWidth/2' :y2='y+scianeArmLength+strokeWidth/2' :x1='x' :x2='x' :style='outlineStrokeStyle'/>
  <line v-if='isSciane' :x1='x-scianeArmLength' :x2='x+scianeArmLength' :y1='y' :y2='y' :style='strokeStyle'/>
  <line v-if='isSciane' :y1='y-scianeArmLength' :y2='y+scianeArmLength' :x1='x' :x2='x' :style='strokeStyle'/>
  <circle class='core' :cx='x' :cy='y' :r='coreRadius' :style='strokeStyle'/>
  <triangle v-if='isThaum' :x='x' :y='y' :r='r*.85' :up='1' :style='strokeStyle'></triangle>
</g>
</template>

<script>
import Triangle from './Triangle'
import {tiles} from './Tiles'
import trianglePoints from './TrianglePoints'

export default {
  props: {
    piece: {
      validator: function (value) {
        return new Set(['thaum', 'sciane', 'paupil']).has(value)
      }
    },
    faction: {
      validator: function (value) {
        return new Set(['red', 'green', 'blue']).has(value)
      }
    },
    loc: {
      validator: function (value) {
        return typeof value === 'string' && value.length === 2
      }
    },
    r: Number,
    starting: Boolean
  },
  computed: {
    // offset if it's on the starting tile
    offset: function () {
      if (this.starting) {
        var points = trianglePoints(0, 0, this.r * 2, 1)
        var directions = {thaum: 0, sciane: 1, paupil: 2}
        return points[directions[this.piece]]
      } else {
        return {x: 0, y: 0}
      }
    },
    x: function () {
      return tiles[this.loc].x + this.offset.x
    },
    y: function () {
      return tiles[this.loc].y + this.offset.y
    },
    elClass: function () {
      return `piece ${this.piece} ${this.faction}`
    },
    strokeWidth: function () {
      return this.r * 0.3
    },
    strokeStyle: function () {
      return {
        'stroke-width': this.strokeWidth
      }
    },
    outlineStrokeStyle: function () {
      return {
        stroke: 'black',
        'stroke-width': this.strokeWidth * 2
      }
    },
    coreRadius: function () {
      return {thaum: 1, sciane: 0.6, paupil: 0.8}[this.piece] * this.r
    },
    scianeArmLength: function () {
      return this.r * 1.1
    },
    isThaum: function () {
      return this.piece === 'thaum'
    },
    isSciane: function () {
      return this.piece === 'sciane'
    }
  },
  components: {
    Triangle
  }
}
</script>

<style>
.outline {
  fill: black;
  stroke: none;
}

.red {
  fill:#820A13;
  stroke:#FF4452;
}

.blue {
  fill:#00757C;
  stroke:#23F1FF;
}

.green {
  fill: #306000;
  stroke: #64BC0D;
}
</style>