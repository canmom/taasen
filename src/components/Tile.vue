<template>
  <polygon class="tile" :points="points"/>
</template>

<script>
export default {
  props: ['x', 'y', 'up', 'r'],
  computed: {
    points: function () {
      return `${this.x},${this.y - this.up * this.r} ${this.x + this.r * Math.sqrt(3) / 2},${this.y + this.up * 0.5 * this.r} ${this.x - this.r * Math.sqrt(3) / 2},${this.y + this.up * 0.5 * this.r}`
    }
  }
}
</script>

<style>
  .tile {
    fill:black;
  }
</style>
