<template>
  <svg viewBox="0 0 1 1">
    <triangle :x="x" :y="y" :r="rOuter" :up="u" :style='style'></triangle>
    <triangle :x="x" :y="y" :r="rInner" :up="u" :style='styleInner'></triangle>
  </svg>
</template>

<script>
import Triangle from './Triangle'
import colours from './Colours'

export default {
  data () {
    return {
      x: 0.5,
      rOuter: 0.58,
      rInner: 0.3
    }
  },
  computed: {
    style () { return { fill: colours.outer[this.faction] } },
    styleInner () { return { fill: colours.inner[this.faction] } },
    y () { return 0.5 + 0.09 * this.u }
  },
  props: {
    faction: {
      validator: (value) => { return ['red', 'green'].includes(value) }
    },
    u: {
      type: Number,
      default: () => { return -1 }
    }
  },
  components: {
    Triangle
  }
}
</script>