<template>
<g :class='elClass' v-on:click="$emit('select')">
  <circle :style='outlineStyle' :cx='x' :cy='y' :r='coreRadius+strokeWidth' />
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
import {getTile} from './Tiles'
import trianglePoints from './TrianglePoints'
import states from './States'

export default {
  props: {
    piece: {
      validator (value) {
        return new Set(['thaum', 'sciane', 'paupil']).has(value)
      }
    },
    faction: {
      validator (value) {
        return new Set(['red', 'green', 'blue']).has(value)
      }
    },
    loc: {
      validator (value) {
        return (typeof value === 'string' && value.length === 2) || (typeof value === 'object')
      }
    },
    r: Number,
    starting: Boolean,
    state: {
      validator (value) {
        return Object.keys(states).includes(value)
      }
    }
  },
  computed: {
    // offset if it's on the starting tile
    offset () {
      if (this.starting) {
        const points = trianglePoints(0, 0, this.r * 2, 1)
        const directions = {thaum: 0, sciane: 1, paupil: 2}
        return points[directions[this.piece]]
      } else {
        return {x: 0, y: 0}
      }
    },
    x () {
      if (typeof this.loc === 'string') {
        return getTile(this.loc).x() + this.offset.x
      } else {
        return this.loc.x()
      }
    },
    y () {
      if (typeof this.loc === 'string') {
        return getTile(this.loc).y() + this.offset.y
      } else {
        return this.loc.y()
      }
    },
    elClass () {
      return `piece ${this.piece} ${this.faction}`
    },
    strokeWidth () {
      return this.r * 0.3
    },
    strokeStyle () {
      return {
        'stroke-width': this.strokeWidth
      }
    },
    outlineStyle () {
      return {
        stroke: 'none',
        fill: states[this.state]
      }
    },
    outlineStrokeStyle () {
      return {
        stroke: states[this.state],
        'stroke-width': this.strokeWidth * 2
      }
    },
    coreRadius () {
      return {thaum: 1, sciane: 0.6, paupil: 0.8}[this.piece] * this.r
    },
    scianeArmLength () {
      return this.r * 1.1
    },
    isThaum () {
      return this.piece === 'thaum'
    },
    isSciane () {
      return this.piece === 'sciane'
    }
  },
  components: {
    Triangle
  }
}
</script>

<style>
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