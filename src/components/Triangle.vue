<template>
  <polygon :points='points'/>
</template>

<script>
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
      return `${this.x},${this.y - this.up * this.r} ${this.x + this.r * Math.sqrt(3) / 2},${this.y + this.up * 0.5 * this.r} ${this.x - this.r * Math.sqrt(3) / 2},${this.y + this.up * 0.5 * this.r}`
    }
  }
}

</script>