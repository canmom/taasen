<template>
  <polygon :class='elementClass' :points='points'/>
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
    r: Number,
    t: {
      validator: function (value) {
        return new Set(['void', 'desert1', 'desert2', 'grass', 'sea']).has(value)
      }
    }
  },
  computed: {
    points: function () {
      return `${this.x},${this.y - this.up * this.r} ${this.x + this.r * Math.sqrt(3) / 2},${this.y + this.up * 0.5 * this.r} ${this.x - this.r * Math.sqrt(3) / 2},${this.y + this.up * 0.5 * this.r}`
    },
    elementClass: function () {
      return `tile ${this.t}`
    }
  }
}
</script>

<style>
  .void {
    fill: #5F5F5F;
  }

  .desert1 {
    fill: #FAD69D;
  }

  .desert2 {
    fill: #FFFCBF;
  }

  .grass {
    fill: #A4FF6A;
  }

  .sea {
    fill: #6388FF;
  }
</style>