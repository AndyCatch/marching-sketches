//  From @khoparzi's examples
//

march(
    tw = Twist(ju = Julia())
    .material('glue')
  )
  .render('fractal.low')
  .camera(0, 0, 3)

onframe = t =>
{
  ju.fold = sin(t * 0.125)
  tw.amount = Vec3(sin(t))
  ju.rotate(t * 30, 1, 1, 0)
}