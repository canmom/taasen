<template>
  <div id="app">
    <header>
      <h1>Taasen</h1>
      <p>the game of Tryslmaistan chess</p>
    </header>
    <board></board>
    <footer>
      <p><a href='http://unicornjelly.com/taasen1.html'>original rules</a> by <a href='http://jenniverse.com/'>Jennifer Diane Reitz</a></p>
      <p><a href='https://vuejs.org/'>Vue.js</a> implementation by <a href='https://github.com/canmom'>canmom</a></p>
      <p>fonts by <a href='http://www.linuxlibertine.org'>Linux Libertine</a></p>
    </footer>
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

footer {
  position: absolute;
  bottom: 15px;
  right: 20px;
}

footer p {
  color:  white;
  font-family: "Linux Biolinum", sans-serif;
  font-size: 20px;
  margin: 0;
  text-align:  right;
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
}
</style>
