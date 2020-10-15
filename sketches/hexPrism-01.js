//  Credit: @charlieroberts
//  Mod: AndyCatch

quality = 'low'
size = .01 / 4
m = HexPrism(Vec2(size, size / 16))
  .material('green')
mirrors = []
count = 19

for (let i = 1; i < count; i++)
{
  m = Mirror(m)
  const t = (size * i) + (size * (i / count)) * i
  mirrors.push(m)
}

march(m)
  .background(Vec3(0, .1, 0))
  .fog(.125, Vec3(0, .1, 0))
  .render('fractal.' + quality)
  .camera(0, 0, 1.75, .25)

time = 0
onframe = () =>
{
  mirrors.forEach((v, i) =>
  {
    const t = (size * i) + (size * (i / count)) * i
    const phase = (.25 + sin(time) * .35) * t
    if (i > 0)
    {
      v.scale(1 + count / 100)
      v.translate(max(.0035, pow(phase, i * i)), max(.0035, pow(phase, i * i)), phase)
      v.rotate(90 + sin(Math.PI * time) * 135, pow(t, pow(i, i)), pow(t, cos(t % .125 * time)), tan(t, t / i))
    }
  })
  time += .001
}

Marching.useProxies = true