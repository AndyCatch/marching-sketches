// Doesn't really work? Getting null object errors (maybe because vignette is deprecated)

quality = 'low' // try 'high' if you have a nice gfx card
size = .025 / 0.125
count = 18
box = Box(size)
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
  // .fog(.85, Vec3(0))
  // .vignette(.05)
  .render(3, true)
  .camera(0, 0, 29)

t = 92.5
onframe = () =>
{
  t += .0125 / 12
  mirrors.forEach((v, i) =>
  {
    if (i !== 0)
      v.rotate(t * 2, cos(i * t), i / 2, sin(i / 3 * t))
  })
}