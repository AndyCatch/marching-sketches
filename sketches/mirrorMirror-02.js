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

rpt = Repeat(m, Vec3(1, 1, 0))
  .scale(0.75)

march(rpt)
  .background(Vec3(0.087, 0.137, 0.560)) // blue?
  .post(Focus(.15, .001))
  .render("high")

onframe = (t) =>
{
  rpt.rotate(t * 20, 1, 0, 1)
  m.move(Math.sin(t), null, 0)
  m.rotate(t * 20, 0, 1, 1)
}