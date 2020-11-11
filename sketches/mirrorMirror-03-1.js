// From the examples in the Marching reference / Gists
m = Mirror(
    Mirror(
      Mirror(TriPrism(5)
        .material("normal")
        .scale(0.5)
        .translate(0.5, 0.25, 0.5))
      .rotate(45, 1, 0.5, 0.25)
      .translate(0.5, 0.5, 0.5)
    )
    .rotate(90, 0.25, 0.5, 1)
    .translate(0.25, 0.25, 0.25)
  )
  .scale(0.75)
  .rotate(270, 1, 0, 0)

rpt = Twist(m, Vec3(1, 1, 0))
  .scale(0.75)
thing = PolarRepeat(
  rpt, 2, 0.125
)

diff = StairsDifference(thing, TriPrism(2))

march(diff)
  .background(Vec3(0.007, 0.020, 0.085)) // blue–black
  // .fog(0.15, Vec3(0, 1, 0.5))
  .render("high")

onframe = (t) =>
{
  thing.rotate(t * 10, 0, 1, 0)
  rpt.amount = Vec3(tan(t * 0.125))
  rpt.rotate(t * 20, 1, 0, 1)
  // m.rotate(t * 20, 0, 1, 1)
}