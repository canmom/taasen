<template>
  <div id="app">
    <header>
      <h1>Taasen</h1>
      <p>the game of Tryslmaistan chess</p>
    </header>
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
body {
  background: linear-gradient( to bottom, #96F6F6, #117985);
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0;
}

header {
  position: absolute;
  margin-left: 40px;
  margin-top: 20px;
}

header h1 {
  font-family: "Linux Libertine Display",serif;
  font-weight: normal;
  font-size: 80px;
  margin:0;
}

header p {
  margin-top:-5px;
  margin-left:60px;
  font-family: "Linux Biolinum", sans-serif;
  font-size: 25px;
  font-style: italic;
}

#app {
  width: 100%;
}
</style>
