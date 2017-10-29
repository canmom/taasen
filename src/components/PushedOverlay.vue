<template>
<g>
  <triangle class='pushedOverlay' :x='x' :y='y' :up='up' :r='r'></triangle>
</g>
</template>

<script>
import Triangle from './Triangle'

export default {
  props: {
    x: Number,
    y: Number,
    up: {
      validator (value) {
        return value === 1 || value === -1
      }
    },
    r: Number
  },
  components: {
    Triangle
  }
}
</script>

<style>
.pushedOverlay {
  fill: rgba(255,0,0,0.5);
}
</style>