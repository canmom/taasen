<template>
<div class="indicator">
  <p>
    <svg width="50" height="50" viewBox="0 0 1 1"> 
      <triangle :x="0.5" :y="0.41" :r="0.58" :up="-1" :style='style'></triangle>
      <triangle :x="0.5" :y="0.4" :r="0.3" :up="-1" :style='styleInner'></triangle>
    </svg>
    <strong>{{faction}}</strong> to move
  </p>
</div>
</template>

<script>
import Triangle from './Triangle'

var validator = function (value) {
  return value === 'red' || value === 'green'
}

export default {
  computed: {
    style: function () {
      return {
        fill: this.faction === 'red' ? '#FF4452' : '#64BC0D'
      }
    },
    styleInner: function () {
      return {
        fill: this.faction === 'red' ? '#820A13' : '#306000'
      }
    }
  },
  props: {
    faction: {
      validator: validator
    },
    pushed: {
      validator: validator
    }
  },
  components: {
    Triangle
  }
}
</script>

<style>
.indicator {
  font-family: "Linux Biolinum", sans-serif;
  font-size: 25px;
  width: max-content;
  position: absolute;
  left: 53%;
  top: 40px;
}
.indicator p {
  margin: 0;
}
.indicator svg {
  display: inline-block;
  margin-bottom: -18px;
  margin-right: 5px;
}
.indicator text {

}
</style>