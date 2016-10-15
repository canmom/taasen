export const tileRadius = 1 / Math.sqrt(3)
const bX = 0.5           // x baseline
const bY = 3.3           // y baseline
const sX = 1             // x step
const sY = -tileRadius * 1.5 // y step

export const tiles = {
  a1: {x: bX, y: bY, u: 1, t: 'void'},
  a3: {x: bX + sX, y: bY, u: 1, t: 'desert2'},
  a5: {x: bX + 2 * sX, y: bY, u: 1, t: 'desert2'},
  a7: {x: bX + 3 * sX, y: bY, u: 1, t: 'void'},
  a2: {x: bX + 0.5 * sX, y: bY + sY / 3, u: -1, t: 'desert1'},
  a4: {x: bX + 1.5 * sX, y: bY + sY / 3, u: -1, t: 'grass'},
  a6: {x: bX + 2.5 * sX, y: bY + sY / 3, u: -1, t: 'desert1'},
  b2: {x: bX + 0.5 * sX, y: bY + sY, u: 1, t: 'desert2'},
  b4: {x: bX + 1.5 * sX, y: bY + sY, u: 1, t: 'sea'},
  b6: {x: bX + 2.5 * sX, y: bY + sY, u: 1, t: 'desert2'},
  b3: {x: bX + sX, y: bY + 4 * sY / 3, u: -1, t: 'grass'},
  b5: {x: bX + 2 * sX, y: bY + 4 * sY / 3, u: -1, t: 'grass'},
  c3: {x: bX + sX, y: bY + 2 * sY, u: 1, t: 'desert2'},
  c4: {x: bX + 2 * sX, y: bY + 2 * sY, u: 1, t: 'desert2'},
  c5: {x: bX + 1.5 * sX, y: bY + 7 * sY / 3, u: -1, t: 'desert1'},
  d4: {x: bX + 1.5 * sX, y: bY + 3 * sY, u: 1, t: 'void'}
}
