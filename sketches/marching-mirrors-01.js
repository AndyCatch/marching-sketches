// https://charlieroberts.github.io/marching/playground/
// copy and paste, select all, and hit ctrl+enter
// tweak size/shape/cameraz. change quality to 'high' if
// you have a nice graphics card, or 'low' if needed. Making
// your browser window smaller can also improve performance.

// config
size = 0.0125
count = 19
quality = "med"
cameraz = 6
mirrors = []
m = TriPrism(2)
// m = Torus82(Vec2(size, size / 8))
//   .material('white')
// m = Box(size) // decrease size, increase count for this
// m = Julia(3) // move camera back for this
// m = Mandelbulb() // move camera back for this

// reflect on all three axes "count" times, and
// translate on x and z axes. outermost reflection
// is always stored the variable m

for (let i = 1; i < count; i++)
{
  m = Mirror(m);
  const t = size * i + size * (i / count) * i
  if (i < count - 1) m.translate(t, 0, t)
  mirrors.push(m)
}

// render reflections over a plane
march(RoundUnion(m, Plane(Vec3(0, 0, 1)), 0.125)
    .material("normal"))
  .fog(0.15, Vec3(0.5, 0.5, 0.5))
  .render(quality, true)
  .camera(0, 0, cameraz)

// rotate each reflection (on cpu)≥
// rotate the sum of reflections, stored in
// the variable m, on the y axis
onframe = (t) =>
{
  mirrors.forEach((v, i) =>
  {
    // angle (in degrees) then axes
    v.rotate(sin(((Math.PI / 8) * t) / 2) * 85, i, i / 2, i / 3)
  })
  m.translate(
    Math.sin(t),
    null,
    Math.cos(t) * 0.00125
  )
  m.rotate(t * 5, 0, 1, 1)
};