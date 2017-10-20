<template>
  <polygon :points='points'/>
</template>

<script>
import pointsFunction from './TrianglePoints'

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
  computed: {
    points: function () {
      var p = pointsFunction(this.x, this.y, this.r, this.up)

      return `${p[0].x},${p[0].y} ${p[1].x},${p[1].y} ${p[2].x},${p[2].y}`
    }
  }
}
</script>
