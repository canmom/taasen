export const tileRadius = 1 / Math.sqrt(3)
const bX = 0.5           // x baseline
const bY = 3.2           // y baseline
const sX = 1             // x step
const sY = -tileRadius * 1.5 // y step

export const tiles = {
  a1: {
    x: bX,
    y: bY,
    u: 1,
    t: 'void',
    a: ['a2']
  },
  a3: {
    x: bX + sX,
    y: bY,
    u: 1,
    t: 'desert2',
    a: ['a2', 'a4']
  },
  a5: {
    x: bX + 2 * sX,
    y: bY,
    u: 1,
    t: 'desert2',
    a: ['a4', 'a6']
  },
  a7: {
    x: bX + 3 * sX,
    y: bY,
    u: 1,
    t: 'void',
    a: ['a6']
  },
  a2: {
    x: bX + 0.5 * sX,
    y: bY + sY / 3,
    u: -1,
    t: 'desert1',
    a: ['a1', 'b2', 'a3']
  },
  a4: {
    x: bX + 1.5 * sX,
    y: bY + sY / 3,
    u: -1,
    t: 'grass',
    a: ['a3', 'a5', 'b3', 'b5'],
    p: ['a3', 'a5']
  },
  a6: {
    x: bX + 2.5 * sX,
    y: bY + sY / 3,
    u: -1,
    t: 'desert1',
    a: ['a5', 'b6', 'a7']
  },
  b2: {x: bX + 0.5 * sX,
    y: bY + sY,
    u: 1,
    t: 'desert2',
    a: ['a2', 'b3']
  },
  b4: {x: bX + 1.5 * sX,
    y: bY + sY,
    u: 1,
    t: 'sea',
    a: []
  },
  b6: {x: bX + 2.5 * sX,
    y: bY + sY,
    u: 1,
    t: 'desert2',
    a: ['b5', 'a6']
  },
  b3: {x: bX + sX,
    y: bY + 4 * sY / 3,
    u: -1,
    t: 'grass',
    a: ['b2', 'c3', 'a4', 'b5'],
    p: ['b2', 'c3']
  },
  b5: {x: bX + 2 * sX,
    y: bY + 4 * sY / 3,
    u: -1,
    t: 'grass',
    a: ['c5', 'b6', 'b3', 'a4'],
    p: ['c5', 'b6']
  },
  c3: {x: bX + sX,
    y: bY + 2 * sY,
    u: 1,
    t: 'desert2',
    a: ['b3', 'c4']
  },
  c5: {x: bX + 2 * sX,
    y: bY + 2 * sY,
    u: 1,
    t: 'desert2',
    a: ['c4', 'b5']
  },
  c4: {x: bX + 1.5 * sX,
    y: bY + 7 * sY / 3,
    u: -1,
    t: 'desert1',
    a: ['c3', 'c5', 'd4']
  },
  d4: {x: bX + 1.5 * sX,
    y: bY + 3 * sY,
    u: 1,
    t: 'void',
    a: ['c4']
  }
}
