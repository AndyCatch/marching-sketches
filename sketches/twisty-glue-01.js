//  From @khoparzi's examples
//

march((tw = Twist((ju = Julia()))
    .material("normal")))
  // .post(Focus(.15, .001))
  .render("fractal.high")
  .camera(0, 0, 3)

onframe = (t) =>
{
  ju.fold = sin(t * 0.125)
  tw.amount = Vec3(tan(t * 0.125))
  ju.rotate(t * 30, 0, 1, -1)
}