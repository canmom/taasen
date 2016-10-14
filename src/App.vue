<template>
  <div id="app">
    <board></board>
  </div>
</template>

<script>
import Board from './components/Board'

export default {
  components: {
    Board
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
