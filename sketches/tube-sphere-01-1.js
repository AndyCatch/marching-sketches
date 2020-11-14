mat = 'normal'
rpt = Repeat(
    HexPrism(.15),
    Vec3(0.25)
  )
  .material(mat)

int = Intersection(
  rpt,
  Sphere(1.7)
  .material(mat)
)
diffShape = Box()
  .scale(.95)
  .translate(1.5, 0, 1.5)
  .material('noise') /*.gui()*/
diff = StairsDifference(int, diffShape)

march(diff)
  .background(Vec3(0.007, 0.020, 0.085)) // blue–black
  .light(Light(Vec3(0), Vec3(2)))
  .render(3, true)

onframe = (t) =>
{
  diff.rotate(t * 20, t * -10, t * 5)
  diff.translate(sin(t * 0.75), 0, cos(t * -0.70))
  int.rotate(t * 4, 1, -1, 1)
  diffShape.translate(sin(t * .095), null, null)
  // rpt.scale(sin(t * .95))
}