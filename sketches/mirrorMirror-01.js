// From the examples in the Marching reference / Gists
m = Mirror(
    Mirror(
      Mirror(TriPrism(1.01)
        .material('noise')
        .scale(0.5)
        .translate(0.5, 0.25, 0.5))
      .rotate(45, 1, 0.5, 0.25)
      .translate(0.5, 0.5, 0.5)
    )
    .rotate(45, 0.25, 0.5, 1)
    .translate(0.25, 0.25, 0.25)
  )
  .scale(0.5)


rpt = Repeat(
  m,
  Vec3(0.25, 0, .25)
)

march(m)
  .fog(0.15, Vec3(0, 1, 0.5))
  .render("high")

onframe = (t) =>
{
  // rpt.rotate(t * 20, 1, 0, 1)
  m.move(
    Math.sin(t),
    null,
    Math.sin(t)
  )
  m.rotate(t * 20, sin(t), 1, 1)
}