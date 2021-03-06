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
  rpt, 3, 0.125
)

march(thing)
  .background(Vec3(0.087, 0.137, 0.560)) // blue?
  // .fog(0.15, Vec3(0, 1, 0.5))
  .render("high")

onframe = (t) =>
{
  thing.rotate(t * 10, 0, 1, 0)
  rpt.amount = Vec3(sin(atan(t * 0.125)))
  rpt.rotate(t * 20, 1, 0, 1)
  m.move(sin(t), null, 0)
  // m.rotate(t * 20, 0, 1, 1)
}