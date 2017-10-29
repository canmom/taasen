<template>
  <div id="app">
    <header>
      <h1>Taasen</h1>
      <p>the game of Tryslmaistan chess</p>
    </header>
    <board
      v-on:victory="onVictory" ref="board"></board>
    <footer>
      <p><a href="https://github.com/canmom/taasen">source</a> &mdash; based on <a href='http://unicornjelly.com/taasen1.html'>rules</a> by <a href='http://jenniverse.com/'>Jennifer Diane Reitz</a></p>
    </footer>
    <victory-overlay :winner="winner" v-if="victory" v-on:reset="onReset"></victory-overlay>
  </div>
</template>

<script>
import Board from './components/Board'
import VictoryOverlay from './components/VictoryOverlay'

export default {
  data: () => {
    return {
      victory: false,
      winner: null
    }
  },
  components: {
    Board,
    VictoryOverlay
  },
  methods: {
    onVictory (victoryState) {
      this.showVictoryOverlay(victoryState.winner)
    },
    showVictoryOverlay (winner) {
      this.victory = true
      this.winner = winner
    },
    onReset () {
      this.$refs.board.resetBoard()
      this.victory = false
      this.winner = null
    }
  }
}
</script>

<style lang="scss">
@import 'assets/fonts.css';

body {
  background: linear-gradient( to bottom, #96F6F6, #117985);
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0;
  font-size: 25px;
}
@media (max-width: 999px) and (min-width: 500px), (max-height: 599px) and (min-height: 400px) {
  body {
    font-size: 20px;
  }
}
@media (max-width: 499px), (max-height: 399px) {
  body {
    font-size: 15px;
  }
}

header {
  position: absolute;
  left: 40px;
  top: 20px;
}

p {
  font-family: "Linux Biolinum", sans-serif;
}

h1, h2, h3 {
  font-family: "Linux Libertine Display",serif;
  margin:0;
}

header h1 {
  font-weight: normal;
  font-size: 320%;
}

header p {
  margin-top:-5px;
  margin-left:60px;
  font-style: italic;
}

footer {
  position: absolute;
  bottom: 15px;
  right: 20px;
}

footer p {
  color:  white;
  font-size: 80%;
  margin: 0;
  text-align: right;
}

footer a {
  text-decoration: none;
  color: #bff;
  font-weight: bold;
}

footer a:hover {
  color: #8dd;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
