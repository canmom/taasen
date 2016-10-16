<template>
<g v-on:click="$emit('move')">
  <triangle class='destination' :x='x' :y='y' :up='up' :r='r'></triangle>
</g>
</template>

<script>
import Triangle from './Triangle'

export default {
  props: {
    x: Number,
    y: Number,
    up: {
      validator: function (value) {
        return value === 1 || value === -1
      }
    },
    r: Number
  },
  components: {
    Triangle
  },
  methods: {
    click: function () {
      this.$emit('move')
    }
  }
}
</script>

<style>
.destination {
  fill: rgba(255,255,0,0.5);
  stroke: black;
  stroke-width: 0.02;
  stroke-linejoin: round;
}
</style>