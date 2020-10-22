// use('gif')

stair = StairsUnion(
    Sphere(1.5),
    Repeat(
      Sphere(2), 7
    ),
    5
  )
  .material('normal')
box = Box(1)
bend = Bend(stair, Vec2(2, 3))
  .scale(1.5)
onion = Onion(bend, 0.5)
half = Halve(bend, Halve.LEFT)
rpt = PolarRepeat(onion, 3.0, 1)
  .scale(0.5)

march(
    rpt
  )
  .post(Brightness(-0.3), Focus(.15, .001))
  .background(Vec3(0, 0, .001))
  // .gif(600, 600, 20)
  .render('high')

onframe = (t) =>
{
  const phase = (.25 + sin(t) * 0.75) * t
  bend.rotate(t * 10 % tan(phase), 1, 1, 0)
  stair.rotate(t * 10, 1, 0.5, 1)
  rpt.translate(0, sin(t) * 0.0125, 0)
}