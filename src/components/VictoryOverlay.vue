<template>
<div id="victory">
  <faction-triangle :faction="winner" :u="1"></faction-triangle>
  <h2>Congratulations!</h2>
  <p><strong>{{winner}}</strong> has put the right pieces in the right places.</p>
  <button>Play again?</button>
</div>
</template>

<script>
import FactionTriangle from './FactionTriangle'

export default {
  components: {
    FactionTriangle
  },
  props: {
    winner: String
  }
}
</script>

<style>
#victory {
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-color: rgba(0,0,0,0.8);
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

#victory svg {
  width: 5em;
}
</style>