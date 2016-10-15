export default function points (x, y, r, up) {
  return [
    {x: x, y: y - up * r},
    {x: x + r * Math.sqrt(3) / 2, y: y + up * 0.5 * r},
    {x: x - r * Math.sqrt(3) / 2, y: y + up * 0.5 * r}
  ]
}
