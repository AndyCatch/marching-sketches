// From the examples in the Marching ref
m = Mirror(
    Mirror(
      Mirror(TriPrism(5)
        .material('noise')
        .scale(0.5)
        .translate(0.5, 0.125, 0.5))
      .rotate(45, 1, 0.5, 0.25)
      .translate(0.5, 0.5, 0.5)
    )
    // .rotate(90, 0.25, 0.5, 1)
    .translate(0.25, 0.25, 0.25)
  )
  .scale(0.75)
  .rotate(270, 1, 0, 0)
// .gui()

march(m)
  .background(Vec3(0.087, 0.137, 0.560)) // blue?
  .post(Focus(.15, .001))
  .render("high")
  .camera(0, 0, 6)

onframe = (t) =>
{
  m.move(
    Math.sin(t),
    null,
    Math.sin(t)
  )
  m.rotate(t * 20, 1, 1, 1)
}