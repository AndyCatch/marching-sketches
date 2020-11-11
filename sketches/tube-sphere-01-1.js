mat = 'normal'
rpt = Repeat(
    HexPrism(.25),
    Vec3(0.25)
  )
  .material(mat)

int = Intersection(
  rpt,
  Sphere(1.7)
  .material(mat)
)
diffShape = Sphere().scale(1.5).translate(1.5, 0, 1.5)
  .material('noise').gui()

diff = StairsDifference(int, diffShape)

march(diff)
  // .light(Light(Vec3(0), Vec3(2)))
  .render('med')

onframe = (t) =>
{
  diff.rotate(t * 20, t * -10, t * 5)
  // diff.translate(tan(t*0.25), 0, 0)
  int.rotate(t * 4, 1, -1, 1)
  diffShape.translate(sin(t * .095),null,null)
  rpt.scale(sin(t * .95))
}
