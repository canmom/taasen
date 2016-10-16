<template>
<div class="indicator">
  <p>
    <svg width="50" height="50" viewBox="0 0 1 1"> 
      <rect class="indicator-box" x="0.1" y="0.1" width="0.8" height="0.8" rx="0.3" ry="0.3" :style='style'/>
    </svg>
    <strong>{{faction}}</strong> to move
  </p>
</div>
</template>

<script>
export default {
  computed: {
    style: function () {
      return {
        fill: this.faction === 'red' ? '#FF4452' : '#64BC0D'
      }
    }
  },
  props: {
    faction: {
      validator: function (value) {
        return value === 'red' || value === 'green'
      }
    }
  }
}
</script>

<style>
.indicator {
  font-family: "Linux Biolinum", sans-serif;
  font-size: 30px;
  width: max-content;
  position: absolute;
  right: 80px;
  top: 20px;
}
.indicator p {
  margin: 0;
}
.indicator svg {
  display: inline-block;
  margin-bottom: -18px;
  margin-right: 5px;
}
.indicator-box {
  stroke: black;
  stroke-width: 0.1;
}
.indicator text {

}
</style>