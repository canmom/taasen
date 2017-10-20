# taasen

A browser implementation of Jennifer Diane Reitz's board game [Taasen](http://unicornjelly.com/taasen1.html).

![Screenshot of a game of Taasen in progress. The green Thaum has just moved to push the red Sciane, and the Red player is choosing where to move it to.](/screenshot.png)

The game can be played [here](https://canmom.github.io/taasen).

## Game rules

Taasen is a chess-like board game played on a triangular board, created to appear in the webcomic *Unicorn Jelly*.

Play alternates between Red and Green players. Each player controls three pieces, called the Thaum, Sciane and Paupil. In addition to the Red and Green sides, there is a Blue side that can be controlled by either player on their turn.

![Image of the icons of the three playing pieces, labelled, with arrows showing which type pushes which.](/pieces.png)

On their turn, players can move either one of their pieces or one of the blue pieces to an adjacent empty square. Pieces that can be moved are indicated by a black border. Pieces start sharing the corner tiles, but cannot move to share a tile with another piece.

The central blue tile is special: it cannot be moved into, but connects the adjacent pieces as if they are adjacent to each other. In other words, pieces may move directly between the three tiles connected to the central tile.

Each type of piece can *push* a different-coloured piece of one type, in a rock-paper-scissors like cycle. The rule is:

- the Thaum pushes the Sciane
- the Sciane pushes the Paupil
- the Paupil pushes the Thaum

To push a piece, a piece must move adjacent to it. The opposing player must then move the pushed piece away. If they cannot move that piece, it is 'crushed' and removed from the board. Pushing a piece does not cause it to push other pieces.

In some cases, a piece may move to push two pieces at once. In this case, the attacking player must choose which of the pieces to push.

A piece that has been pushed on the previous turn can't be moved to the location it was pushed from. (**Note:** due to a misunderstanding of the rules, this rule has not been implemented correctly! In the current version, a pushed piece cannot be moved at all on the following turn.)

If a blue piece is moved, it cannot be moved on the following turn.

The game ends when one player has lost all of their pieces, or cannot make any legal move. (**Note:** Win conditions have not been implemented. Refresh the page to restart the game.)

## Todo

- correct implementation of 'no moving back' rule
- implement victory conditions
- add tutorial messages to the game

Further projects might include allowing people to play Taasen over the internet rather than require both players to be in the same room, and creating simple AI to play against.

## Build setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

This is built using the vue.js webpack template. For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
