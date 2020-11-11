// From the examples in the Marching reference / Gists

julia = Julia(5)
  .material('normal')
  .scale(0.75)
  .translate(0.5, 0.125, 0.5)
tw = Twist(julia)

m = Mirror(
    Mirror(
      Mirror(tw)
      .rotate(45, 1, 0.5, 0.25)
      .translate(0.5, 0.5, 0.5)
    )
    .translate(0.25, 0.25, 0.25)
  )
  .scale(1.01)
  .rotate(270, 1, 0, 0)
// .gui()

march(m)
  .background(Vec3(0.007, 0.020, 0.085)) // blue–black
  // .post(Focus(.015, .0001))
  .render("high")
  .camera(0, 0, 8)

onframe = (t) =>
{
  julia.fold = Math.sin(t * 0.5)
  tw.amount = Vec3(sin(t * 0.5))
  m.translate(
    Math.tan(t),
    null,
    null
  )
  m.rotate(t * 20, 1, 1, 0)
}