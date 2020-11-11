// Doesn't really work? Getting null object errors (maybe because vignette is deprecated)

quality = 'low' // try 'high' if you have a nice gfx card
size = .025 / 0.125
count = 18
box = Torus82(Vec2(size * 3))
  .material('normal')
mrrr = Mirror(box)
  .translate(size, size, size)
  .scale(0.5)
mirrors = [mrrr]

for (let i = 0; i < count; i++)
{
  const s = size + size * i
  mrrr = Mirror(mrrr)
    .translate(s, s / 2, s / 3)
  mirrors.push(mrrr)
}

march(mrrr)
  // .fog(.25, Vec3(0.5, 0.1, 0.2))
  // .vignette(.05)
  .render(4, true)
  .camera(0, 0, 35)

t = 50.5
onframe = () =>
{
  t += .0125 / 12
  mirrors.forEach((v, i) =>
  {
    if (i !== 0)
      v.rotate(t * 2, cos(i * t), i / 2, pow(sin(i * 0.125 * t), i))
  })
}