// use('gif')

stair = StairsUnion(
    Sphere(0.75),
    Repeat(
      Sphere(1.01), 7
    ),
    3.1
  )
  .material('normal')
box = Box(1.5)
// .material('normal')
bend = Twist(stair, Vec2(1.01, 2))
  .scale(1.5)
onion = Onion(bend, 0.5)
rpt = PolarRepeat(onion, 5, 10)
  .scale(.5)
diff = Difference(rpt, box)

march(
    diff
  )
  // .post(Focus(.15, .001))
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