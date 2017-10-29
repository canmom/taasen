<template>  
  <triangle :class='elClass' :x='x' :y='y' :up='up' :r='r'></triangle>
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
    r: Number,
    t: {
      validator (value) {
        return new Set(['void', 'desert1', 'desert2', 'grass', 'sea']).has(value)
      }
    }
  },
  computed: {
    elClass () {
      return `tile ${this.t}`
    }
  },
  components: {
    Triangle
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