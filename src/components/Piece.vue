<template>
<g :class='elClass' >
  <circle class='outline' :cx='x' :cy='y' :r='r*1.3' />
  <circle class='core' :cx='x' :cy='y' :r='r' :style='strokeStyle'/>
  <triangle :v-if='thaum' :x='x' :y='y' :r='r*.85' :up='1' :style='strokeStyle'></triangle>
</g>
</template>

<script>
import Triangle from './Triangle'

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
    x: Number,
    y: Number,
    r: Number
  },
  computed: {
    elClass: function () {
      return `piece ${this.piece} ${this.faction}`
    },
    strokeStyle: function () {
      return {
        'stroke-width': this.r * 0.3
      }
    },
    thaum: function () {
      return this.piece === 'thaum'
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

}
</style>